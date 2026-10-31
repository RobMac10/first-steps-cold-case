window.FS = window.FS || {};
window.FS.spot = {
 title: 'Spot the Discrepancy',
 intro: [
  'A detective does not only collect clues. A detective also notices when two accounts do not agree, and then works out why.',
  'This activity has four places where the book and the records do not fit, or where two records do not fit. For each one, read both sides, choose the reason you think is most likely, and write why. {{T:Then lock in your answer to see what the evidence shows.}}{{S:Then lock in your answer. It is saved on this device and you can print it.}}'
 ],
 how: [
  'Read both sides of the case. Each side names its source.',
  'Pick the reason you think is most likely.',
  'Write one or two sentences that use the quotes to back up your reason.',
  '{{T:Lock in your answer. The app then shows what the evidence points to, and what is still open.}}{{S:Lock in your answer. It is saved on this device and you can print it.}}'
 ],
 note: 'There may be more than one good reason, and some cases cannot be settled. If the evidence is not enough, “I cannot tell yet” is a proper finding. Use only what is on the page.',
 reasons: [
  ['story', 'The author added a witness so readers could see it happen'],
  ['slip', 'The writer made a slip or remembered it wrongly'],
  ['copy', 'Someone copied or counted wrongly'],
  ['sources', 'Good sources disagree with each other'],
  ['wrong', 'The record could be wrong']
 ],
 teacher: [
  'Spot the Discrepancy shows students how historians compare sources. A historian puts two accounts side by side, asks who wrote each one and when, and asks whether the writer could have known. Then the historian says which reason best fits the evidence, and says plainly when the evidence cannot settle it.',
  'There is no answer key. Each case ends with what the evidence points to and what is still open. When you mark, look for a reason that is backed by something in the quotes, not for a match with the app’s reading.',
  'The book is historical fiction, and the story is allowed to differ from the record. A difference is not a mistake by itself. The activity asks students to tell a story choice from a slip or a counting error.',
  'The four cases are marked as still being checked with the author. The app has not changed the book.'
 ],
 prompts: [
  'Pick one case. Which source is closer to the event, and does that make it more reliable?',
  'In which case is the difference most likely a choice by the writer, and what in the evidence tells you?',
  'In which case could the record itself be wrong? What would you check to find out?',
  'Choose a case that stays open. What source would you look for next?'
 ],
 cases: [
  {id: 'march', gate: 2, title: 'The march with no fight',
   ask: 'In the book, Freeman marches with Captain Tench and a spear is thrown. What does Tench’s own account say?',
   a: {kind: 'book', who: 'First Steps on Ancient Ground, Thomas Freeman, p. 27',
    t: ['“You march with Captain Tench, hoping to capture the Resistor and earn some favour.”', '“Then a spear slices through the air, grazing a marine’s arm. Tench shouts the order to fire.”'],
    src: ['flip']},
   b: {kind: 'real', who: 'Watkin Tench, march of 14 and 15 December 1790',
    t: ['His party was himself, a captain, two lieutenants, two surgeons, three sergeants, three corporals and forty private soldiers. No clerk is named.', 'On the first day they walked until four o’clock “without seeing a native”. On the second day they saw five men on a beach, who ran off. No fight is recorded.'],
    src: ['tench']},
   clues: ['Who wrote each account? Was the writer on the march?', 'Does Tench’s list of the party include a clerk?', 'What does the book say about the dialogue and thoughts in the story?'],
   lean: ['story'],
   reveal: [
    'The book is historical fiction. Its front pages say some dialogue and personal thoughts have been imagined. Straight after the spear, the story gives the reader a choice of what to do, so the fight is part of how the pick-a-path story works. The app marks this scene “From the story”.',
    'Tench led the march and wrote about it. His account has no fight, no spear thrown and no clerk. The app has found no other account that records a fight on this march.',
    'The evidence points to a story choice. Nothing found suggests that Tench made an error, but the app has read only his printed account, so it cannot say that nothing else happened that was not written down.'
   ],
   open: 'The app has not looked for other accounts of the march, such as journals of other men in the party.',
   status: 'made', src: ['tench']},
  {id: 'december', gate: 2, title: 'When was “last December”?',
   ask: 'Freeman’s chapter gives three time clues. Do they all fit the records at once?',
   a: {kind: 'book', who: 'First Steps on Ancient Ground, Thomas Freeman, p. 26',
    t: ['“Earlier this year, the Sirius was wrecked near Norfolk Island.”', '“Last December, the Resistor speared Governor Phillip’s gamekeeper.”', '“Tomorrow, you must march with Captain Watkin Tench and some marines…”'],
    src: ['flip']},
   b: {kind: 'real', who: 'Records of 1790',
    t: ['The Sirius was wrecked at Norfolk Island on 19 March 1790.', 'The shooting party went out on 9 December 1790 and the gamekeeper was speared in the night. The National Museum gives 10 December.', 'Tench’s first march set out on 14 December 1790, five days after the shooting party.'],
    src: ['sirius', 'tench', 'nmaPem']},
   clues: ['Work out the year of the chapter if “tomorrow” is the march of 14 December 1790. Which of the other two clues fit that year?', 'Now try the year 1791. Which clues fit?', 'The book’s plates on pages 19 and 20 are dated December 1790. What does that suggest?'],
   lean: ['slip', 'story'],
   reveal: [
    'If the march is “tomorrow” and the march was on 14 December 1790, then “earlier this year” fits the March wreck. But the spearing was only days before the march, in the same month, so “last December” does not fit.',
    'If the chapter is set in 1791, “last December” would fit December 1790. But then “earlier this year” does not fit a wreck in March 1790, and the march of 14 December 1790 would not be “tomorrow”. No single year makes all three clues fit the records.',
    'This could be a slip in the wording, or the story may have moved events closer together or further apart on purpose. The app’s Board notes that the story joins events from several different years into one time.'
   ],
   open: 'Only the author can say which it is. The app cannot tell a slip from a choice here.',
   status: 'check', src: ['sirius', 'tench', 'nmaPem']},
  {id: 'andromache', gate: 3, title: 'How many days on the Andromache?',
   ask: 'The book says 113 days. Does the shipping list agree with the book, and with its own dates?',
   a: {kind: 'book', who: 'First Steps on Ancient Ground, Thomas Curtis, p. 44',
    t: ['“You, your wife Mary Ann Pragnell, and your teenage son Robert boarded the barque Andromache and sailed for 113 days…”'],
    src: ['flip']},
   b: {kind: 'real', who: 'Shipping list (transcription of the Victorian shipping lists)',
    t: ['The Andromache “sailed 28-2-1840 from London for a 113 day passage” and “arrived Melbourne 24-6-1840”.', '{{T:Counting the days from 28 February to 24 June 1840 gives 117. The year 1840 had 29 days in February, and that is included.}}'],
    src: ['andro']},
   clues: ['Does the book’s number match the list’s number?', 'Count from 28 February to 24 June 1840. Do you get 113?', 'The list says the ship collected passengers at Plymouth. Does it say what day she left Plymouth?'],
   lean: ['copy', 'wrong'],
   reveal: [
    'In this case the book and the list agree. Both say 113 days. The mismatch is inside the list, between its “113 day passage” and its own two dates, which are 117 days apart.',
    'This looks like a counting or copying error, either in the list or in the source it came from. But the app cannot rule out that the 113 days were counted from a different starting day. The list says the ship collected passengers at Plymouth and does not give the day she left there. Counting back 113 days from 24 June gives 3 March 1840, four days after 28 February.',
    'The evidence does not show which explanation is right. It does show that the book has copied a number that does not match the dates beside it.'
   ],
   open: 'The page is a transcription. The original shipping records have not been checked, so the app cannot say where the difference began.',
   status: 'check', src: ['andro']},
  {id: 'sirius', gate: 2, title: 'When was the Sirius wrecked?',
   ask: 'Two sources give different dates for the wreck. The book gives no date. Which clues help you decide?',
   a: {kind: 'real', who: 'Watkin Tench, A Complete Account (printed text)',
    t: ['“…we learned, that the ‘Sirius’ had been wrecked on Norfolk Island, on the 19th of February.”', 'Earlier in the same book: the Sirius carried Major Ross and the convicts to Norfolk Island and “sailed on the 6th of March”.', 'Tench wrote that he had never been to Norfolk Island and knew it only from what others told him.'],
    src: ['tench']},
   b: {kind: 'real', who: 'HMS Sirius (1786), citing the journals of John Hunter and William Bradley',
    t: ['“On 19 March 1790, Sirius was wrecked on a reef at Norfolk Island while landing stores.”'],
    src: ['sirius']},
   book: 'The book (Freeman, p. 26) says only “Earlier this year, the Sirius was wrecked near Norfolk Island.” {{T: It gives no date, so it fits either one.}}',
   clues: ['Which account was written by someone who was on the island? Which was written by someone who heard the news in Sydney?', 'Tench says the Sirius sailed on 6 March. Could she be wrecked on 19 February?', 'The app has used a printed text of Tench. Could the printed text differ from what he wrote?'],
   lean: ['slip', 'copy', 'sources'],
   reveal: [
    'The two sources differ by a month. Tench’s date is 19 February and the Sirius page gives 19 March 1790.',
    'There is a clue inside Tench’s own book. He says the Sirius sailed on 6 March, so a wreck on 19 February would be before she left. He also says he knew Norfolk Island only from what others told him, and that he learned of the wreck at Sydney.',
    'These clues point to an error in Tench’s date. It could be his slip, a mistake in an edition, or a mistake in the text the app used. The app cannot tell which.'
   ],
   open: 'The app has not checked an original printing of Tench or the journals of Hunter and Bradley, and has not found a source that explains how historians settle this date. So the sources differ, and 19 March is the date used in this app.',
   status: 'check', src: ['tench', 'sirius']}
 ]
};
