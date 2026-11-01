#!/usr/bin/env python3
"""Makes the worksheet PDF and Word files from the same data as the app.
Run from the repo root after `node build.js`:  python3 tools/make-worksheet-files.py
Needs: node, python-docx, weasyprint.
Writes: walking-worksheet-student.pdf/.docx (site root), teacher/walking-worksheet-teacher.pdf (and .docx)."""
import json, subprocess, sys, os
from docx import Document
from docx.shared import Pt, Mm, RGBColor
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.oxml.ns import qn
from docx.oxml import OxmlElement
from weasyprint import HTML

root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
def model(mode):
    return json.loads(subprocess.check_output(['node', 'worksheet-build.js', '--json', mode], cwd=root))

def bottom_border(p, sz=6):
    pPr = p._p.get_or_add_pPr(); b = OxmlElement('w:pBdr')
    for tag in ('w:between', 'w:bottom'):  # 'between' keeps every line visible when lines are stacked
        e = OxmlElement(tag)
        for k, v in (('w:val', 'single'), ('w:sz', str(sz)), ('w:space', '1'), ('w:color', '777777')): e.set(qn(k), v)
        b.append(e)
    pPr.append(b)

def make_docx(m, path):
    d = Document()
    sec = d.sections[0]; sec.page_width, sec.page_height = Mm(210), Mm(297)
    for a in ('left_margin', 'right_margin', 'top_margin', 'bottom_margin'): setattr(sec, a, Mm(15))
    st = d.styles['Normal']; st.font.name = 'Georgia'; st.font.size = Pt(11)
    st.element.rPr.rFonts.set(qn('w:eastAsia'), 'Georgia')
    for name in ('Heading 1', 'Heading 2', 'Heading 3'):
        hs = d.styles[name]; hs.font.name = 'Georgia'; hs.font.color.rgb = RGBColor(0x23, 0x1a, 0x10)
        hs.element.rPr.rFonts.set(qn('w:asciiTheme'), 'minorHAnsi') if False else None
        rf = hs.element.rPr.rFonts
        for a in ('w:asciiTheme', 'w:hAnsiTheme', 'w:eastAsiaTheme', 'w:cstheme'):
            if rf.get(qn(a)) is not None: del rf.attrib[qn(a)]
        rf.set(qn('w:ascii'), 'Georgia'); rf.set(qn('w:hAnsi'), 'Georgia')
    d.styles['Heading 1'].font.size = Pt(18); d.styles['Heading 2'].font.size = Pt(14); d.styles['Heading 3'].font.size = Pt(12)
    teacher = m['mode'] == 'teacher'
    if teacher:
        p = d.add_paragraph(); r = p.add_run('Teacher copy. It has answers and notes. Do not hand this out.'); r.bold = True
    h = d.add_heading(m['title'], level=1)
    p = d.add_paragraph(); p.add_run('Name: ______________________________   Class: ____________   Date: ____________')
    d.add_paragraph(m['intro'])
    def lines(n):
        for _ in range(n):
            q = d.add_paragraph(); q.paragraph_format.space_after = Pt(0); q.paragraph_format.line_spacing = Pt(24); bottom_border(q)
    def sure():
        p = d.add_paragraph(); r = p.add_run(m['sureLabel'] + '     '); r.font.size = Pt(9.5)
        r2 = p.add_run('  '.join('( %d )' % i for i in range(1, 6))); r2.bold = True
    n = 0
    for s in m['sections']:
        d.add_heading(s['h'], level=2)
        if s.get('note'): d.add_paragraph(s['note']).runs[0].font.size = Pt(10)
        for it in s['items']:
            n += 1
            p = d.add_paragraph(); p.paragraph_format.keep_with_next = True; p.paragraph_format.space_before = Pt(6)
            r = p.add_run('%d. %s' % (n, it['q'])); r.bold = True
            lines(it['lines'])
            if it['sure']: sure()
    w = m['writing']
    d.add_heading(w['title'], level=2); d.add_paragraph(w['time']).runs[0].font.size = Pt(10)
    for i, x in enumerate(w['steps'], 1): d.add_paragraph('%d. %s' % (i, x))
    p = d.add_paragraph(); p.add_run('Sentence starters: ').bold = True; p.add_run('  ·  '.join(w['starters']))
    for f in w['fields']:
        p = d.add_paragraph(); p.paragraph_format.keep_with_next = True; p.add_run(f['label']).bold = True
        lines(f['lines'])
    if teacher:
        t = m['teacher']; d.add_page_break()
        d.add_heading('Teacher notes', level=2)
        for x in t['notes']: d.add_paragraph(x, style='List Bullet')
        d.add_heading('How historians compare sources', level=2)
        for x in t['spot']: d.add_paragraph(x, style='List Bullet')
        d.add_heading('Spot the Discrepancy: what the evidence points to', level=2)
        for c in t['cases']:
            d.add_heading(c['title'], level=3)
            p = d.add_paragraph(); p.add_run('Most likely reasons: ').bold = True; p.add_run('; '.join(c['lean']))
            for x in c['reveal']: d.add_paragraph(x)
            p = d.add_paragraph(); p.add_run('Still open: ').bold = True; p.add_run(c['open'])
        d.add_heading('The Resistor: what the records show', level=2)
        for x in t['resistor']: d.add_paragraph(x)
        d.add_heading('Still being checked with the author', level=2)
        for x in t['checks']: d.add_paragraph(x, style='List Bullet')
    p = d.add_paragraph(m['footer']); p.runs[0].font.size = Pt(9)
    d.save(path)

jobs = [('student', '', 'walking-worksheet-student'), ('teacher', 'teacher', 'walking-worksheet-teacher')]
for mode, sub, base in jobs:
    out = os.path.join(root, sub)
    html = os.path.join(out, 'worksheet.html')
    HTML(html).write_pdf(os.path.join(out, base + '.pdf'))
    make_docx(model(mode), os.path.join(out, base + '.docx'))
    print('wrote', os.path.join(sub, base + '.pdf'), 'and .docx')
