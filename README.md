# Cold Case: First Steps on Ancient Ground

A free, static companion app for Robin McKean's book *First Steps on Ancient Ground*
(https://heyzine.com/flip-book/d73a2fe642.html).

Two versions are built from one source:

- **Student version** (site root, https://robmac10.github.io/first-steps-cold-case/): case file, four witness files, Log Book clues, a board that sets statements from the book beside statements from records, Spot the Discrepancy, a finding page, and a discussion and writing page. It has no answers, no teacher notes and no plot endings in its files. Students' locked-in answers are saved in their own browser and can be printed.
- **Teacher version** (`/teacher/`, https://robmac10.github.io/first-steps-cold-case/teacher/): the same app plus Class mode, teacher notes, and every answer and spoiler behind a closed "Show answers" toggle. It links to the student version. The student version does not link to it. It is not password protected, so treat the address as unlisted, not secret.

- Plain HTML, CSS and JavaScript. No tracking. No cookies.
- Answers are saved only in the reader's own browser (`localStorage`; the two versions use different keys).
- Pictures are public domain and credited. No AI images.

## Source and build
Edit only `src/`, then run `node build.js`. It writes the student files at the site root (`index.html`, `app.js`, `data.js`, `styles.css`) and the teacher files in `teacher/`. Commit the generated files too, because GitHub Pages serves them as they are.

- `src/data1.js` to `src/data4.js`: all text and answers (case file, witnesses, board, clues, Spot the Discrepancy, class questions, teacher answers).
- `src/app.js`, `src/index.html`, `src/styles.css`: the app.
- Markers: `{{T:text}}` is teacher-only text. `{{S:text}}` is student-only text. In `app.js`, blocks between `/*T*/` and `/*/T*/` are teacher-only, and `/*S*/` ... `/*/S*/` are student-only. In `index.html`, `<!--T-->` ... `<!--/T-->` is teacher-only.
- For the student version `build.js` also deletes these data fields: `teacher`, `openChecks`, `findingReveal`, `teacherNotes`, each board topic's `pair`, `reveal` and `check`, each clue item's `bias` and `check`, each witness's `real` and `made` (and the answers to "Not asked"), and each Spot case's `reveal`, `lean`, `open`, `status`.
- `images/`: credited public-domain images. `build.js` copies them into `teacher/images/`.
- `archive/`: material removed from the app, kept so nothing is lost. It is not linked from the app. It contains spoilers. See `archive/README.md`.

## Run locally
`node build.js && python3 -m http.server` in this folder, then open http://localhost:8000/ and http://localhost:8000/teacher/
