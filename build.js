#!/usr/bin/env node
// Builds the student version (site root) and the teacher version (teacher/) from src/.
// Run:  node build.js
// Source of truth: src/data1.js .. src/data4.js, src/app.js, src/index.html, src/styles.css.
// Markers: {{T:text}} = text only in the teacher version; {{S:text}} = text only in the student version.
//   app.js: slash-star T star-slash ... slash-star slash-T star-slash blocks (teacher only), and the same with S (student only).
//   index.html: T comment markers around teacher-only blocks.
const fs = require('fs'), path = require('path');
const root = __dirname, src = path.join(root, 'src');
const WS = require('./worksheet-build.js');
global.window = {};
for (const f of ['data1', 'data2', 'data3', 'data4']) require(path.join(src, f + '.js'));
const FS = JSON.parse(JSON.stringify(window.FS));

function strip(s, mode) {
  const other = mode === 'student' ? 'T' : 'S', mine = mode === 'student' ? 'S' : 'T';
  return s.replace(new RegExp('\\{\\{' + other + ':[\\s\\S]*?\\}\\}', 'g'), '')
          .replace(new RegExp('\\{\\{' + mine + ':([\\s\\S]*?)\\}\\}', 'g'), '$1');
}
function walk(v, mode) {
  if (typeof v === 'string') return strip(v, mode);
  if (Array.isArray(v)) {
    let out = v.map(x => walk(x, mode));
    out = out.filter(x => !(x === '' || (x && typeof x === 'object' && !Array.isArray(x) && 't' in x && x.t === '')));
    if (out.length === 2 && typeof out[0] === 'string' && typeof out[1] === 'string' && out[1].trim() === '') out = [out[0]];
    return out;
  }
  if (v && typeof v === 'object') { const o = {}; for (const k in v) o[k] = walk(v[k], mode); return o; }
  return v;
}
function studentFilter(T) {
  for (const k of ['teacher', 'openChecks', 'findingReveal', 'teacherNotes']) delete T[k];
  delete T.spot.teacher;
  T.spot.cases.forEach(c => { for (const k of ['reveal', 'lean', 'open', 'status', 'src']) delete c[k]; });
  T.topics.forEach(t => { for (const k of ['pair', 'reveal', 'check']) delete t[k]; });
  T.items.forEach(i => { delete i.bias; delete i.check; });
  T.witnesses.forEach(w => { delete w.real; delete w.made; w.notAsked = w.notAsked.map(e => [e[0]]); });
  // keep only sources the student pages link to
  const keep = new Set(['flip', 'tench', 'nmaPem', 'adbPem', 'dosPem']);
  (function collect(v, key) {
    if (Array.isArray(v)) { if (key === 'src') v.forEach(x => keep.add(x)); v.forEach(x => collect(x)); }
    else if (v && typeof v === 'object') for (const k in v) collect(v[k], k);
  })(Object.assign({}, T, { S: null }));
  T.hunt.forEach(h => keep.add(h[2]));
  for (const k of Object.keys(T.S)) if (!keep.has(k)) delete T.S[k];
  return T;
}
function codeMode(s, mode) {
  const other = mode === 'student' ? 'T' : 'S';
  return s.replace(new RegExp('/\\*' + other + '\\*/[\\s\\S]*?/\\*/' + other + '\\*/', 'g'), '')
          .replace(/\/\*\/?[TS]\*\//g, '');
}
function htmlMode(s, mode) {
  const other = mode === 'student' ? 'T' : 'S';
  s = s.replace(new RegExp('<!--' + other + '-->[\\s\\S]*?<!--/' + other + '-->', 'g'), '');
  return s.replace(/<!--\/?[TS]-->/g, '');
}
function dataFor(mode) {
  let T = walk(FS, mode);
  if (mode === 'student') T = studentFilter(T);
  return T;
}
function out(dir, mode) {
  fs.mkdirSync(dir, { recursive: true });
  let T = walk(FS, mode);
  if (mode === 'student') T = studentFilter(T);
  fs.writeFileSync(path.join(dir, 'data.js'), 'window.FS=' + JSON.stringify(T) + ';\n');
  fs.writeFileSync(path.join(dir, 'app.js'), codeMode(fs.readFileSync(path.join(src, 'app.js'), 'utf8'), mode));
  let h = htmlMode(fs.readFileSync(path.join(src, 'index.html'), 'utf8'), mode);
  if (mode === 'teacher') h = h.replace('<meta name="theme-color"', '<meta name="robots" content="noindex">\n<meta name="theme-color"');
  fs.writeFileSync(path.join(dir, 'index.html'), h);
  fs.copyFileSync(path.join(src, 'styles.css'), path.join(dir, 'styles.css'));
  fs.copyFileSync(path.join(src, 'worksheet.css'), path.join(dir, 'worksheet.css'));
  fs.copyFileSync(path.join(src, 'ws-print.js'), path.join(dir, 'ws-print.js'));
  const dl = mode === 'student'
    ? [['Download PDF', 'walking-worksheet-student.pdf'], ['Download Word file', 'walking-worksheet-student.docx']]
    : [['Download teacher PDF', 'walking-worksheet-teacher.pdf'], ['Student PDF', '../walking-worksheet-student.pdf'], ['Student Word file', '../walking-worksheet-student.docx']];
  fs.writeFileSync(path.join(dir, 'worksheet.html'), WS.render(WS.model(T, mode), { downloads: dl }));
  fs.mkdirSync(path.join(dir, 'images'), { recursive: true });
  for (const f of fs.readdirSync(path.join(root, 'images'))) fs.copyFileSync(path.join(root, 'images', f), path.join(dir, 'images', f));
}
if (require.main === module) {
  out(root, 'student');
  out(path.join(root, 'teacher'), 'teacher');
  console.log('built student (/) and teacher (/teacher/)');
}
module.exports = { dataFor };
