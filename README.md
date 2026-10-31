# Cold Case: First Steps on Ancient Ground

A free, static companion app for Robin McKean's book *First Steps on Ancient Ground*
(https://heyzine.com/flip-book/d73a2fe642.html).

It has a case file, four witness files, clues from the book's Detective Hunt Log Book,
a board that compares statements, a finding page, an interactive timeline, and a "Spot the Discrepancy" activity (four places where the book and the records disagree, with a reason picker and a teacher note).

- Plain HTML, CSS and JavaScript. No build step. No tracking. No cookies.
- Answers are saved only in the reader's own browser (`localStorage`, key `first-steps-cold-case-v1`).
- Every item is labelled: Record, In the book, From the story, or Still being checked.
- Pictures are public domain and credited. No AI images.

## Files
- `index.html`, `styles.css`, `app.js`: the app.
- `data1.js`: case file, sources, witness files.
- `data2.js`: timeline events and board questions.
- `data3.js`: Log Book items, clues, class questions, credits, open checks, finding.
- `data4.js`: the Spot the Discrepancy activity.
- `images/`: credited public-domain images.

## Run locally
`python3 -m http.server` in this folder, then open http://localhost:8000/

## Open checks
The "Still being checked" list in the app (About page) shows what Robin still needs to confirm, including cultural checks.
