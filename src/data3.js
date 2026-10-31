window.FS = window.FS || {};
Object.assign(window.FS, {
cluesIntro: 'These are the five damaged records from the Detective Hunt Log Book (printed pages 56 to 61). Names, dates and places have been removed. For each one, tick the clues you can see, note what is missing, and score how far you trust it. Your answers stay on this device.',
items: [
 {id: 'A', title: 'Item A: newspaper or report', type: 'A colonial newspaper or official report (printed page 57)',
  text: ['THE COLONIAL OBSERVER', 'Sydney, [DATE REDACTED] — Price 3d.', 'OUTRAGE ON THE FRONTIER. — Accounts have reached us of continued resistance by the native inhabitants in the district of [REDACTED]. A party of settlers moving stock was attacked near [REDACTED]. One man was wounded and several cattle driven off. The leader of the resistance is said to be a man known to the settlers as [REDACTED], who has for some time organised raids and warned others against the advance of settlement.', 'Military and settler parties have been sent out. Some reports claim the resistance is weakening; others state that the native groups remain determined to defend their Country. The names of those involved on both sides are not fully known. Further particulars are anxiously awaited.'],
  clues: [
   ['a1', 'present', 'Settlers moving stock were attacked. One man was wounded and several cattle were driven off.'],
   ['a2', 'present', 'The leader is said to have organised raids and warned others against settlement.'],
   ['a3', 'present', 'Military and settler parties were sent out.'],
   ['a4', 'missing', 'The date, the district, the place and the leader’s name are all removed.'],
   ['a5', 'missing', 'The article says the names of those involved “on both sides” are not fully known.']
  ],
  bias: 'Written for settlers, who paid 3d. The headline says “outrage”. It calls the people “native inhabitants” and does not ask them anything.',
  check: 'Raids on stock and maize are recorded in the 1790s. David Collins, who lived in the colony, wrote about them, and the Australian Dictionary of Biography quotes him. The fragment does not say which raid or year it describes.', src: ['adbPem', 'nmaPem']},
 {id: 'B', title: 'Item B: settler letter', type: 'A letter from a settler or immigrant (printed page 58)',
  text: ['…we have at last taken up land after the long voyage and the months in the depot. The country is strange to us and the work is hard. There is talk among the older hands of trouble with the Blacks who will not leave their places. Some say they have a leader who moves from camp to camp and warns the people not to give way. I do not know the truth of it. We keep watch at night. I write so that you may know we are yet alive and hope for better seasons…', '[Signature partially illegible]   [Date partially lost]'],
  clues: [
   ['b1', 'present', 'The writer has taken up land after a long voyage and months in a depot.'],
   ['b2', 'present', 'There is “talk” of a leader who moves from camp to camp and warns people not to give way.'],
   ['b3', 'present', 'The writer says, “I do not know the truth of it.”'],
   ['b4', 'missing', 'The author, the date and the place are missing.'],
   ['b5', 'contradiction', 'The writer reports talk from “the older hands”. It is hearsay, not what the writer saw.']
  ],
  bias: 'The word “Blacks” is the writer’s. The letter is private and written to family, which can make it more honest and also more nervous. It is second-hand talk.',
  check: 'Immigrant depots and assisted passages are recorded. The Andromache list on the Curtis file is one example, but this letter has no name to match it to.', src: ['andro', 'bounty']},
 {id: 'C', title: 'Item C: military or police report', type: 'An official extract about “resistance” or “dispersal” (printed page 59)',
  text: ['EXTRACT FROM OFFICIAL REPORT', 'Date: [illegible]   District: [REDACTED]', 'A party under [REDACTED] proceeded to the place where the natives were said to be gathered.', 'Resistance was offered. Several of the natives were killed or wounded; the remainder dispersed into the bush.', 'The leader known as [REDACTED] was not among those taken. He is reported to have escaped and to be still at large.', 'Settlers in the district request further protection. Stock continues to be driven off in small numbers.', '— End of recoverable extract —'],
  clues: [
   ['c1', 'present', 'A party went to a place where “the natives were said to be gathered”.'],
   ['c2', 'present', '“Several of the natives were killed or wounded; the remainder dispersed.”'],
   ['c3', 'present', 'The leader escaped and is “still at large”.'],
   ['c4', 'missing', 'The date, the district, the party’s leader and the number killed are missing.'],
   ['c5', 'contradiction', '“Resistance was offered” and “dispersed” describe an attack as a defence. The report does not say who fired first.']
  ],
  bias: 'It is an official report by the party that did the shooting. “Dispersed” is a plain-sounding word for people who were killed or driven off. The settlers’ request for protection is recorded, and nothing is recorded from the people who were attacked.',
  check: 'Similar events are recorded. In March 1797 at Parramatta settlers and soldiers fired on a group, and at least five First Nations men were killed. The fragment does not name that event or any other.', src: ['nmaPem', 'dosPem']},
 {id: 'D', title: 'Item D: immigration note', type: 'A note about why people left Britain and what they found (printed page 60)',
  text: ['Many of those now arriving under the assisted schemes left behind the workhouse, low wages and the enclosure of common land. They were told of good land and opportunity in the colony. On arrival some found the reality harder than the promises. The land was already occupied. Conflict over grass, water and living places was common. The stories of resistance by the native people were known even in the immigrant depots, though few of the new arrivals understood the full meaning of what they heard.'],
  clues: [
   ['d1', 'present', 'People left the workhouse, low wages and the enclosure of common land.'],
   ['d2', 'present', 'They were promised good land. On arrival it “was already occupied”.'],
   ['d3', 'present', 'Conflict over grass, water and living places was common.'],
   ['d4', 'present', 'Stories of resistance were known even in the immigrant depots.'],
   ['d5', 'missing', 'There is no author, date or place, and no figures.']
  ],
  bias: 'It looks like the view of a later writer or an official. It speaks for new arrivals (“few … understood”) and says nothing about the land’s First Nations people except as “native people”.',
  check: 'The 1834 Poor Law and the Hampshire riots of 1830 are recorded and match the first lines. This app has found no record of a single note like this one.', src: ['poor', 'swing']},
 {id: 'E', title: 'Item E: later oral account', type: 'A later-recorded recollection from a First Nations perspective (printed page 61)',
  text: ['The old people used to tell of the time when the strangers kept coming onto Country and the people stood against them. There was a leader who moved between the camps and told the people not to give up their places. Some of the strangers were afraid; others came with guns. Many of our people were killed. The story of that resistance is still known. The places where it happened are still remembered.', '[Later-recorded oral testimony. Exact speaker and precise location details incomplete in the surviving notes.]'],
  clues: [
   ['e1', 'present', 'A leader moved between the camps and told people not to give up their places.'],
   ['e2', 'present', 'Some strangers were afraid. Others came with guns. Many people were killed.'],
   ['e3', 'present', 'The story is “still known” and the places are “still remembered”.'],
   ['e4', 'missing', 'The speaker, the place and the date of recording are not known.'],
   ['e5', 'contradiction', 'It was written down many years after the events. The book says to treat it with care about transmission, memory and framing.']
  ],
  bias: 'It is the only item from a First Nations perspective, and it is the only one with no name, date or place. The book notes that many oral histories stay within community control. Use only material that has been shared publicly.',
  check: 'This app does not add other oral accounts. The book suggests the Frontier Conflict database, the State Library of Queensland’s First Nations collections and AIATSIS collections, and says to check access conditions and protocols first.', src: []}
 ],
hunt: [
 ['Tench, A Complete Account of the Settlement at Port Jackson', 'Published 1793. Written by a marine officer who was in the colony. Primary source.', 'tench'],
 ['Hansard, House of Commons, 1 August 1845 and 5 March 1846', 'Official record of debates and evidence. Primary source.', 'hansard45'],
 ['Hansard, 5 March 1846: The Andover Union', 'Evidence by a guardian and magistrate. Primary source.', 'hansard46'],
 ['Shipping lists and the Sydney Gazette of 4 August 1840', 'A transcription of lists and a newspaper. The original newspaper is a primary source. The transcription is not.', 'andro'],
 ['National Museum of Australia: Defining Moments page on a Bidjigal leader of the 1790s', 'A museum page based on historians. Quotes Governor King’s orders. Secondary source.', 'nmaPem'],
 ['Australian Dictionary of Biography: article on a Bidjigal leader of the 1790s', 'A reference article that quotes David Collins. Secondary source.', 'adbPem'],
 ['Dictionary of Sydney: entries on a Bidjigal leader of the 1790s and on the Cooks River', 'Reference entries. Secondary source.', 'dosPem'],
 ['Museums of History NSW: Entitlement certificates', 'A guide to the records of bounty ships from 1832 to 1842. Use it to find the original certificate.', 'bounty']
],
huntNote: 'The book asks you to find at least three independent primary sources that are not in the Log Book, and to put at least one of a different type. The first two rows are primary sources. Check each against the fragments, score it for reliability, and say why. Good places to search are Trove (newspapers), State Library catalogues, the National Archives, early colonial reports, immigration records and publicly shared First Nations oral history material. Check access conditions before you use it.',
readNext: [
 'From the book’s own reading list: Watkin Tench (1789 and 1793), David Collins (An Account of the English Colony in New South Wales), Arthur Phillip (1789); James L. Kohen, Aboriginal Environmental Impacts (UNSW Press, 1995); Eric Willmot’s 1987 novel about a Bidjigal leader (the Dictionary of Sydney calls it a work of fiction); and a National Museum of Australia page on the same man. The titles are in the book’s reading list and are not repeated here, so they do not give away the case.',
 'The book says readers and teachers should seek out works by Indigenous historians and authors. This app does not replace them.'
],
questions: [
 {h: 'Before you read: sources', q: [
   'Who wrote each of the five fragments, and who did they write it for?',
   'Which fragments were written at the time? Which were written later?',
   'What does “redacted” mean? Who might remove a name from a record?'
 ]},
 {h: 'The Resistor', q: [
   'The book says the Resistor is “archetypal”. What is an archetype, and why might a writer use one instead of a named person?',
   'Which parts of the Resistor’s story match the records? Which do not?',
   'The records call him a “murderer” and an “enemy”. Whose words are those? What other words could describe him?'
 ]},
 {h: 'Thomas Freeman', q: [
   'Freeman’s choices lead to different ends. Which choice would you make, and why?',
   'Tench wrote that he asked Phillip to change an order. What does that tell you about Tench? What does it not tell you?',
   'If a person in a story is not named in the records you have found, does that mean he did not exist?'
 ]},
 {h: 'Thomas Curtis', q: [
   'Why did the Curtis family leave England? Which records support the book’s reasons?',
   'The book gives Warra no words. What can a story tell us about a person who has no words, and what can it not tell us?',
   'What would you want to ask Warra? Who is the right person to answer?'
 ]},
 {h: 'Comparing records', q: [
   'Pick one clash from the Board. Which side do you trust more, and why?',
   'Why is it important to keep what a story says apart from what the records say?',
   'Whose voices are missing from the records you have seen? How could you find out more safely?'
 ]}
],
teacherNotes: [
 'There is no single answer key for the discussion questions. The book does not give one answer, and neither does this app. The plot endings, the Resistor’s identity and what the records show are behind the “Show answers” toggles, which are closed until you open them.',
 'Spot the Discrepancy shows students how historians compare sources. See the teacher note on that page and in Class mode.',
 'The book asks teachers to supplement the story with Indigenous voices and scholarship. Please follow your school’s protocols, and consider inviting a local Aboriginal education worker or Elder.',
 'The story and the records include killing and the removal of children. Preview the Resistor, Freeman and Board pages before class, and offer students the choice to stop.',
 'Nothing students type leaves their device. Printing is the way to share work.'
],
classIntro: 'These questions go with the book’s Detective Hunt Log Book. They ask students to check sources, notice silences and say how sure they are.',
writing: {title: 'Writing task: a source check', time: 'About 20 minutes. Aim for 150 to 250 words in total.',
 steps: ['Choose one clash from the Board.', 'Name the source in the book, and the record you compared it with.', 'Say what the two agree on and what they do not.', 'Say what is still missing, and who could fill the gap.'],
 starters: ['The book says…', 'The record says…', 'They agree that…', 'They do not agree that…', 'I trust ___ more because…', 'I would want to know…'],
 fields: [['claim', 'The book says…', false], ['record', 'The record says…', false], ['agree', 'Where they agree and where they do not', true], ['missing', 'What is still missing', true]]},
credits: [
 ['Thomas Freeman file', 'The melancholy loss of HMS Sirius off Norfolk Island, March 19th 1790. Watercolour by George Raper. National Library of Australia, nla.pic-an21511971, via Wikimedia Commons. Public domain.']
],
openChecks: [
 'Freeman’s chapter says the gamekeeper was speared “last December” but also says the march with Tench is “tomorrow”. The records put both in December 1790, and the book’s plates are dated December 1790.',
 'The Sirius was wrecked on 19 March 1790 in the Sirius sources. The Project Gutenberg text of Tench gives “19th of February”. The original should be checked.',
 'The book says the flour was mouldy and weevil-filled. Tench wrote that the Cape flour was good. Other sources have not been checked.',
 'No clerk is listed in Tench’s party. The march, the spear and the order to fire are written for the story.',
 'The records put the first raid at Prospect in May 1792. Freeman’s chapter already says the Resistor leads raids and burns crops.',
 'The records say the Darug believed he could not be shot after his escapes in the 1790s. The book says the soldiers believed it in 1790.',
 'The records say terra nullius became law in 1835. The book uses the words for 1788.',
 'Curtis’s ship, the stop at Port Phillip and August 1840 match a shipping list. The list also has a Margaret aged 18, and ages that may be wrong. The certificates have not been opened.',
 'The first record of the Andover bone crushing found is from 1845. The book has villagers talking about it before 1840.',
 'The RBA puts the severe drought in 1838 to 1840. The book’s chapter has the river shrinking by 1842.',
 'For the author and Gadigal and Wangal sources: the clan names for the Cooks River and the word “Ngurra”.',
 'Whether to name the Bidjigal leader in this app. The book does not. The app names him only after a reader locks in a finding, and in the closed teacher box. Tench’s own account, the book’s reading list and the National Museum page name him. The book’s other companion app avoids names of Aboriginal people who have died, so this is the author’s choice.',
 'The book’s plates are labelled facsimile reconstructions. This app does not reuse them.',
 'The app uses the book’s printed page numbers (the flipbook’s page counter runs differently).'
]
});
Object.assign(window.FS, {
findingIntro: 'This is the page the Log Book asks for: your solved case. Write it from the evidence, and use only what is in the book and the records. Nobody checks it, and it stays on this device.',
statusOptions: [
 'One person: the records support one named leader behind the Resistor',
 'A mix: the story joins several people and events',
 'Not decided: the evidence does not settle it',
 'Something else (explain below)'
],
sureOptions: ['Very sure', 'Fairly sure', 'Not very sure', 'Not sure at all'],
findingReveal: [
 'The book does not say who the Resistor is. It says the figure is inspired by a documented Bidjigal leader of the 1790s, and that it does not claim to speak for clans or living cultural traditions.',
 'What the records support: a Bidjigal man from the Botany Bay area was named by Colbee and others to Tench in December 1790 as the man who speared the Governor’s gamekeeper. Tench spelled his name “Pimelwi”. The National Museum, the Australian Dictionary of Biography and the Dictionary of Sydney name him Pemulwuy. Raids at Prospect and Toongabbie, wounds and an escape in 1797, and a death in 1802 are recorded. The book’s Resistor shares the gamekeeper, the Prospect raids, the wounds and the belief that he cannot be shot.',
 'Later records: the Darug believed firearms could not kill him after 1797. On 1 May 1801 Governor King ordered that Aboriginal people near Parramatta, the Georges River and Prospect could be shot on sight. In November 1801 Pemulwuy was outlawed and rewards were offered. He was shot dead on or just before 2 June 1802, and the National Museum says it is not certain who shot him. A later dispatch from London said that cruelty toward First Nations people would be punished.',
 'What does not match: the order of events (the story joins 1790, 1792 and 1797 into one time), the soldiers’ belief in 1790, Freeman on the march and at Prospect, the fight on the march, and the details of the night raid. Those are the story’s.',
 'What the records cannot tell us: why the gamekeeper was speared in the words of the people involved, what the Bidjigal people said about the raids, and what Warra thought. Almost every record was written by the colony’s officers, who were fighting him. Item E is the only fragment from another point of view, and its speaker and place are not known.',
 'So the case stays open. A careful finding says what the sources show, what the story adds, and what is missing. If your finding does that, it fits the book’s own rule: do not invent facts that cannot be supported by primary evidence.'
],
about: 'This is a companion app for Walking on Ancient Ground by Robin McKean, Perth, Western Australia. It is for readers 12 and older. Read the book first. Open it here:'
});

/* Teacher-only answers. Removed from the student version by build.js. */
(function(){
var F={};
F[1]=[
 {h:'The Resistor: how the nine paths end (from the book)',p:[
  'Lead the Raid, then Signal Your Warriors to Retreat: “Successful Strike”. The fields burn and the people will have food.',
  'Lead the Raid, then Approach Freeman Alone: “Tentative Connection”. The Resistor and Freeman look at each other and he feels a glimmer of understanding.',
  'Lead the Raid, then Order a Warrior to Strike Him: “Escalated Conflict”. A spear is thrown at Freeman, who hides behind a tree.',
  'Scout the Farm, then Attack Guards: “Heroic Rescue”. The guards fall, one warrior is killed by a stray musket ball, and the children are brought home.',
  'Scout the Farm, then Wait and Burn the Fields: “Planned Strike”. He burns only part of the crop and his name begins to spread.',
  'Scout the Farm, then Retreat and Plan a Bigger Raid: “Tactics and Patience”. He returns weeks later with more warriors and the Prospect farm burns.',
  'Send a Warrior to Parley, then Launch the Raid: “Fiery Retribution”. The fields burn and he wonders if the violence will ever end.',
  'Send a Warrior to Parley, then Pull Back: “Wise Withdrawal”. He raids in small ways and his people endure.',
  'Send a Warrior to Parley, then Send an Elder: “Betrayed Trust”. A musket is fired, the elder falls, and there is nothing left but war.'
 ]},
 {h:'The Resistor: scenes written for the story',p:[
  'The children held in a hut and their rescue, and the elder shot at a parley while wearing a possum-skin cloak, have no record behind them in this app’s sources.'
 ]},
 {h:'Who the Resistor is in the records',p:[
  'The book does not name him. The records this app used name the man as Pemulwuy, a Bidjigal man from the Botany Bay area. Tench spelled the name “Pimelwi” when he wrote that Colbee and others named the man who speared the gamekeeper McEntire in December 1790. The National Museum of Australia, the Australian Dictionary of Biography and the Dictionary of Sydney use the name Pemulwuy.',
  'The records from 1798 onwards: the Darug believed firearms could not kill him after his escapes. On 1 May 1801 Governor King ordered that Aboriginal people near Parramatta, the Georges River and Prospect could be shot on sight. In November 1801 he was outlawed and rewards were offered. He was shot dead on or just before 2 June 1802. The National Museum says it is not certain who shot him, and that a later dispatch from London said cruelty toward First Nations people would be punished.'
 ],src:['tench','nmaPem','adbPem','dosPem']}
];
F[2]=[
 {h:'Thomas Freeman: how the eight paths end (from the book)',p:[
  'March, then Fire into the Trees: “Survival with Regret”. He fires high on purpose. Tench says “Well done, lad!” and he gets extra rations.',
  'March, then Charge Forward: “Hollow Victory”. A spear cuts his side, the Resistor slips away, he is made an overseer and his wound festers.',
  'March, then Drop Your Musket and Call for a Truce: “Act of Resistance”. Tench’s men call him “Traitor”, put him in irons and lock him in his hut.',
  'Lag Behind, then Follow the Warrior’s Gesture: “Unexpected Mercy”. A warrior leads him out of the bush and he avoids the hunting patrols afterwards.',
  'Lag Behind, then Raise the Musket: “Fearful Escape”. Tench calls him “Deserter” and puts irons on his wrists.',
  'Slip Away, then Stay and Keep Talking: “A Small Bridge”. He talks to a Bidjigal woman gathering yams about the land and about Bennelong.',
  'Slip Away, then Hide in the Bushes: “Lost Chance”. He returns to the settlement and says nothing.',
  'Slip Away, then Run Back to the Colony: “Safe but Unchanged”.'
 ]},
 {h:'Thomas Freeman: records about a person in one path',p:[
  'Bennelong and Colebee were seized at Manly Cove on 25 November 1789 on Governor Phillip’s order. Bennelong stayed a captive until he escaped in May 1790.',
  'The cave, the warrior who points to a path and the woman gathering yams are written for the story. No record in this app’s sources shows them.'
 ],src:['bennelong']}
];
F[3]=[
 {h:'Thomas Curtis: how the four paths end (from the book)',p:[
  'Ask Warra to Help You Understand the Land: “Beginning to See”. Warra shows him the trees, the water and the plants, and Robert learns names in the Gadigal language.',
  'Thank Him Awkwardly and Let Him Go: “Missed Opportunity”. Curtis keeps farming the English way and the land keeps resisting him. The book says the Romsey posters never mentioned that the land already had its own people.',
  'Gesture That You Would Like to Fish with Him: “Shared Waters”. Warra shows him how to stand in the shallows of the Cooks River and they share the catch.',
  'Find a Simple Way to Thank Him: “Small Thanks, Lasting Change”. Curtis offers damper and a tin cup of tea, Warra accepts, and Curtis starts to notice the land differently.'
 ]}
];
F[4]=[
 {h:'Warra: what he does on each path (from the book)',p:[
  'If Curtis asks for help: Warra studies him, nods, and shows which trees flower at which time, how the ground near the river keeps water in drought, and which plants are safe to eat or use as medicine.',
  'If Curtis thanks him awkwardly: Warra turns and disappears into the bush.',
  'If Curtis mimes fishing: Warra walks to a bend in the river, shows how to stand still in the shallows, points out where the fish hide and shares the catch.',
  'If Curtis offers damper and tea: Warra accepts them “without ceremony”, gives “a single nod” and walks back into the bush.'
 ]}
];
var shot=[{h:'Could he be shot? The records that are held back',p:[
  'After his escapes in 1797 the Darug believed that firearms could not kill him. On 1 May 1801 Governor King ordered that Aboriginal people near Parramatta, the Georges River and Prospect could be shot on sight. In November 1801 he was outlawed and rewards were offered for his capture or death.',
  'He was shot dead on or just before 2 June 1802. The National Museum says it is not certain who shot him.'
 ],src:['adbPem','nmaPem']}];
window.FS.teacher={files:F,topics:{shot:shot},all:[].concat(F[1],F[2],F[3],F[4]),teacherOnlySrc:['bennelong']};
})();
