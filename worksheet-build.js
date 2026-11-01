// Builds the printable worksheet (HTML) from the same data as the app. Used by build.js.
// Also: node worksheet-build.js --json student|teacher  prints the worksheet model as JSON
// (tools/make-worksheet-files.py uses that to make the PDF and Word files).
const TITLE = 'Walking on Ancient Ground: Detective Hunt Log Book questions';
const SURE_LABEL = 'How sure am I? Circle one: 1 = not sure at all, 5 = very sure';
// Questions where a student is asked to judge or trust something, so a confidence scale is useful.
const SURE = [
  'Which parts of the Resistor’s story match the records? Which do not?',
  'If a person in a story is not named in the records you have found, does that mean he did not exist?',
  'Why did the Curtis family leave England? Which records support the book’s reasons?',
  'Pick one clash from the Board. Which side do you trust more, and why?',
  'Pick one case. Which source is closer to the event, and does that make it more reliable?',
  'In which case could the record itself be wrong? What would you check to find out?'
];
const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

function model(T, mode) {
  const sec = [];
  T.questions.forEach(g => sec.push({ h: g.h, items: g.q.map(q => ({ q, sure: SURE.includes(q), lines: 4 })) }));
  sec.push({ h: 'Spot the Discrepancy: questions for the whole class',
    note: 'Cases: ' + T.spot.cases.map((c, i) => (i + 1) + '. ' + c.title).join('  ·  '),
    items: T.spot.prompts.map(q => ({ q, sure: SURE.includes(q), lines: 3 })) });
  const wr = T.writing;
  const m = {
    mode, title: TITLE, intro: T.classIntro, sureLabel: SURE_LABEL, sections: sec,
    writing: { title: wr.title, time: wr.time, steps: wr.steps, starters: wr.starters,
      fields: wr.fields.map(f => ({ label: f[1], lines: f[2] ? 5 : 2 })) },
    footer: 'Walking on Ancient Ground by Robin McKean · Companion app: robmac10.github.io/first-steps-cold-case'
  };
  if (mode === 'teacher') {
    const reason = k => (T.spot.reasons.find(r => r[0] === k) || [k, k])[1];
    m.teacher = {
      notes: T.teacherNotes,
      spot: T.spot.teacher,
      cases: T.spot.cases.map(c => ({ title: c.title, lean: (c.lean || []).map(reason), reveal: c.reveal, open: c.open })),
      resistor: T.findingReveal,
      checks: T.openChecks
    };
  }
  return m;
}

function lines(n) { return '<div class="lines" aria-hidden="true">' + '<div class="ln"></div>'.repeat(n) + '</div>'; }
function scale(label) {
  return '<div class="sure"><span>' + esc(label) + '</span>' + [1, 2, 3, 4, 5].map(n => '<b>' + n + '</b>').join('') + '</div>';
}
function render(m, opts) {
  const teacher = m.mode === 'teacher';
  let n = 0;
  let h = '<!doctype html>\n<html lang="en-AU"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">\n' +
    '<title>' + esc(m.title) + (teacher ? ' (teacher copy)' : '') + '</title>\n' +
    (teacher ? '<meta name="robots" content="noindex">\n' : '') +
    '<link rel="stylesheet" href="worksheet.css"></head><body>\n' +
    '<div class="bar noprint"><a href="./">&larr; Back to the app</a>' +
    '<button type="button" id="pr">Print worksheet</button>' +
    opts.downloads.map(d => '<a class="dl" href="' + d[1] + '" download>' + esc(d[0]) + '</a>').join('') + '</div>\n' +
    '<main class="page" id="main">\n' +
    (teacher ? '<p class="tag">Teacher copy. It has answers and notes. Do not hand this out.</p>\n' : '') +
    '<h1>' + esc(m.title) + '</h1>\n' +
    '<div class="who"><span>Name: <i></i></span><span>Class: <i></i></span><span>Date: <i></i></span></div>\n' +
    '<p class="intro">' + esc(m.intro) + '</p>\n';
  m.sections.forEach(s => {
    const head = '<h2>' + esc(s.h) + '</h2>' + (s.note ? '<p class="note">' + esc(s.note) + '</p>' : '');
    h += '<section><ol class="qs">';
    s.items.forEach((it, i) => { n++; h += '<li>' + (i === 0 ? head : '') + '<p class="q"><span class="n">' + n + '.</span> ' + esc(it.q) + '</p>' + '<div class="ans">' + lines(it.lines) + (it.sure ? scale(m.sureLabel) : '') + '</div></li>'; });
    h += '</ol></section>\n';
  });
  const w = m.writing;
  h += '<section class="wr"><h2>' + esc(w.title) + '</h2><p class="note">' + esc(w.time) + '</p><ol>' + w.steps.map(s => '<li>' + esc(s) + '</li>').join('') + '</ol>' +
    '<p><strong>Sentence starters:</strong> ' + w.starters.map(esc).join(' &nbsp;·&nbsp; ') + '</p>' +
    w.fields.map(f => '<div class="field"><p class="q">' + esc(f.label) + '</p>' + lines(f.lines) + '</div>').join('') + '</section>\n';
  if (teacher) {
    const t = m.teacher;
    h += '<section class="teach"><h2>Teacher notes</h2><ul>' + t.notes.map(x => '<li>' + esc(x) + '</li>').join('') + '</ul>' +
      '<h2>How historians compare sources</h2><ul>' + t.spot.map(x => '<li>' + esc(x) + '</li>').join('') + '</ul>' +
      '<h2>Spot the Discrepancy: what the evidence points to</h2>' +
      t.cases.map(c => '<div class="case"><h3>' + esc(c.title) + '</h3><p><strong>Most likely reasons:</strong> ' + esc(c.lean.join('; ')) + '</p>' + c.reveal.map(x => '<p>' + esc(x) + '</p>').join('') + '<p><strong>Still open:</strong> ' + esc(c.open) + '</p></div>').join('') +
      '<h2>The Resistor: what the records show</h2>' + t.resistor.map(x => '<p>' + esc(x) + '</p>').join('') +
      '<h2>Still being checked with the author</h2><ul>' + t.checks.map(x => '<li>' + esc(x) + '</li>').join('') + '</ul></section>\n';
  }
  h += '<p class="foot">' + esc(m.footer) + '</p>\n</main>\n<script src="ws-print.js"></script></body></html>\n';
  return h;
}
module.exports = { model, render, TITLE };
if (require.main === module && process.argv[2] === '--json') {
  const b = require('./build.js');
  console.log(JSON.stringify(model(b.dataFor(process.argv[3]), process.argv[3])));
}
