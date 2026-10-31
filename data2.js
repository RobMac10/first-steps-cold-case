window.FS = window.FS || {};
Object.assign(window.FS, {
trustOptions: ['The book’s own story text', 'A writer at the time, such as Tench', 'A government order or record', 'A later historian or museum', 'I cannot tell yet'],
who: {b: 'In the book', r: 'In the record'},
boardIntro: 'Each question sets statements from the book beside statements from public records. Pair two that do not fit together, say whom you trust, and write what you think the difference means. Then lock in your finding to see what the sources say. Some statements fit well. Some need a check. You decide.',
topics: [
 {id: 'when', gate: 2, title: 'When was the gamekeeper speared?', ask: 'Freeman’s chapter gives three time clues. Which statements do not fit together?',
  cards: [
   ['w1', 'b', 'Thomas Freeman, p. 26', '“Earlier this year, the Sirius was wrecked near Norfolk Island.”'],
   ['w2', 'b', 'Thomas Freeman, p. 26', '“Last December, the Resistor speared Governor Phillip’s gamekeeper.”'],
   ['w3', 'b', 'Thomas Freeman, p. 26', '“Tomorrow, you must march with Captain Watkin Tench and some marines…”'],
   ['w4', 'b', 'The book’s plates, pp. 19 and 20', 'Two plates about the shooting party are dated “December 1790”.'],
   ['w5', 'r', 'Sirius sources', 'The Sirius was wrecked at Norfolk Island on 19 March 1790.'],
   ['w6', 'r', 'Tench, A Complete Account', 'The shooting party went out on 9 December 1790 and the gamekeeper was speared in the night.'],
   ['w7', 'r', 'Tench, A Complete Account', 'Tench’s first march set out on 14 December 1790, five days after the shooting party.']
  ],
  pair: ['w2', 'w3'],
  reveal: [
   'The records agree with each other. The Sirius was wrecked in March 1790. The gamekeeper was speared on the night of 9 to 10 December 1790. Tench marched on 14 December 1790.',
   'In Freeman’s chapter, “earlier this year” for the wreck and “tomorrow” for the march both fit December 1790. “Last December” does not, because the record puts the spearing only days before the march, in the same month and year.',
   'The book’s own plates for the shooting party are dated December 1790, so the plates and the chapter do not agree either.'
  ],
  check: 'This is on the list of items to check with the author. The app has not changed the book.', src: ['sirius', 'tench', 'nmaPem']},
 {id: 'march', gate: 2, title: 'What happened on the march with Tench?', ask: 'Compare Freeman’s march with Tench’s own account.',
  cards: [
   ['m1', 'b', 'Thomas Freeman, p. 27', '“You march with Captain Tench, hoping to capture the Resistor and earn some favour.”'],
   ['m2', 'b', 'Thomas Freeman, p. 27', '“…as you trudge through the scrub with fifty men.”'],
   ['m3', 'b', 'Thomas Freeman, p. 27', '“Then a spear slices through the air, grazing a marine’s arm. Tench shouts the order to fire.”'],
   ['m4', 'r', 'Tench, 14 December 1790', 'His party was himself, a captain, two lieutenants, two surgeons, three sergeants, three corporals and forty private soldiers. No clerk is named.'],
   ['m5', 'r', 'Tench, December 1790', 'The order was to bring in six men from near the head of Botany Bay or, if that could not be done, to put six to death. The party carried hatchets and bags for the heads.'],
   ['m6', 'r', 'Tench, 14 and 15 December 1790', 'On the first day they saw no one. On the second they saw five men on a beach, who ran off. No fight is recorded.'],
   ['m7', 'r', 'Tench, December 1790', 'Tench asked Governor Phillip to change the plan from killing ten men to capturing six, and Phillip agreed.']
  ],
  pair: ['m3', 'm6'],
  reveal: [
   'The size of the party, about fifty, matches the book, and Tench was in command.',
   'The records do not match the fight. Tench wrote that his party saw no one on the first day, and that five men on the second day ran away. He does not record a spear, a wounded marine or an order to fire. The book’s clerk is also not in Tench’s list of the party.',
   'The records also show what the march was for. It was ordered to capture or kill six men and to bring back their heads. The book says the march is to capture the Resistor.',
   'Tench says he argued for the capture plan. Phillip’s first order to kill ten men is known because Tench wrote about it.'
  ],
  check: null, src: ['tench']},
 {id: 'prospect', gate: 1, title: 'Where and when were the Prospect raids?', ask: 'The book has the Resistor already leading raids when Freeman’s chapter starts. Check the dates.',
  cards: [
   ['p1', 'b', 'The Resistor, p. 6', '“You are getting ready to attack the cornfields at Prospect.”'],
   ['p2', 'b', 'Thomas Freeman, p. 26', '“He leads raids, burns crops, and spears cattle.”'],
   ['p3', 'b', 'The Resistor, p. 6', '“Years ago, you speared the Governor’s gamekeeper to avenge shootings and kidnappings.”'],
   ['p4', 'b', 'The Resistor, p. 7', '“In the bright light of the fire, you see Thomas Freeman watching from a rise with his musket lowered.”'],
   ['p5', 'r', 'National Museum of Australia', 'The raids led by a Bidjigal man began in 1792. The first was at Prospect in May 1792.'],
   ['p6', 'r', 'Australian Dictionary of Biography', 'Raids were made for food, “particularly corn”, or as payback for atrocities. Collins suggested most followed the settlers’ “own misconduct”, including kidnapping of Aboriginal children.']
  ],
  pair: ['p2', 'p5'],
  reveal: [
   'The records put the first raid at Prospect in May 1792, a year and a half after Tench’s marches in December 1790. Freeman’s chapter, which fits December 1790, already says the Resistor “leads raids, burns crops, and spears cattle”.',
   'The records and the book agree on the reasons: food, especially corn, and payback for harm, including the kidnapping of children. The ADB quotes David Collins on this, and Collins lived in the colony.',
   'No record shows a store clerk at a Prospect raid. The meeting across the flames is in the story only.'
  ],
  check: 'The three characters live in different years, and the book joins them. That is the book’s plan, but the order of events differs from the records.', src: ['nmaPem', 'adbPem']},
 {id: 'shot', gate: 1, title: 'Could he be shot?', ask: 'Who said he could not be shot, and when?',
  cards: [
   ['s1', 'b', 'Thomas Freeman, p. 26', '“The soldiers say he cannot be shot.”'],
   ['s2', 'b', 'The Resistor, p. 6', '“Surviving many wounds showed this legendary spirit to others.”'],
   ['s3', 'r', 'Australian Dictionary of Biography', 'After his escapes in 1797, the Darug believed that firearms could not kill him.'],
   ['s4', 'r', 'ADB and Dictionary of Sydney', 'In March 1797 he was wounded by seven pieces of buckshot, was taken to hospital and escaped with an iron on his leg.']
  ],
  pair: ['s1', 's3'],
  reveal: [
   'In the story, the soldiers say it in about December 1790. In the records, the belief is the Darug people’s and it follows the escapes of 1797, six years later.',
   'The records show he could be wounded. The belief that bullets could not harm him came from surviving. It does not say he could not be shot.',
   'Later records on this question are held back until you lock in your finding on the “My finding” page. Teachers can open them under “Teacher answers (spoilers)” on this page.',
   'The wounds the book mentions are not dated. Some records, such as 1797, are known. Whether the book means those is not stated.'
  ],
  check: null, src: ['adbPem', 'dosPem']},
 {id: 'store', gate: 2, title: 'What was in the store?', ask: 'Freeman hands out flour and pork. What do the records say about them?',
  cards: [
   ['t1', 'b', 'Thomas Freeman, p. 26', '“Now you hand out rations of mouldy, weevil-filled flour and a few thin slices of salt pork…”'],
   ['t2', 'b', 'The book’s plate, p. 38', '“Ration schedule, 12 April 1790. Facsimile-style reconstruction from Tench, Complete Account… Not an original commissary leaf.”'],
   ['t3', 'r', 'Tench, A Complete Account', 'From 12 April 1790 the weekly ration was 2½ lb of flour, 2 lb of pork and 2 lb of rice (or a quart of peas).'],
   ['t4', 'r', 'Tench, A Complete Account', 'Our flour “was the remnant of what was brought from the Cape, by the Sirius, and was good.”'],
   ['t5', 'r', 'Tench, A Complete Account', 'A small extra issue of flour and pork went to the gamekeepers, who hunted for the colony.']
  ],
  pair: ['t1', 't4'],
  reveal: [
   'The ration figures in the book’s plate come from Tench and are correct as far as the app can check. Rice was part of the ration. The book’s chapter mentions flour and pork but not rice.',
   'Tench wrote that the Cape flour was good. The book says the flour was mouldy and weevil-filled. This app has found only Tench on the quality of the flour in April 1790. Later months, other diaries and the commissary’s books have not been checked.',
   'The record that gamekeepers had an extra issue links the store to the gamekeeper in the story.'
  ],
  check: 'The flour could have gone bad later in 1790. This is an open question.', src: ['tench', 'rations']},
 {id: 'terra', gate: 1, title: 'Was the land “terra nullius” in 1788?', ask: 'Check what the words mean and when they came into use.',
  cards: [
   ['n1', 'b', 'The Resistor, p. 6', '“They claimed the land using the doctrine of terra nullius, pretending no one had cared for it before.”'],
   ['n2', 'b', 'Thomas Freeman, p. 26', '“For thousands of years, they have fished the rivers, hunted in the forests, and cared for the land. The British acted as if no one lived here.”'],
   ['n3', 'r', 'Australian Museum', 'Terra nullius “is today used as a catch-all phrase to explain how Australia was founded”.'],
   ['n4', 'r', 'Australian Museum', 'Governor Bourke’s proclamation of 1835 put the legal principle of terra nullius into Australian law, 47 years after the First Fleet.'],
   ['n5', 'r', 'National Museum of Australia', 'Governor Phillip was instructed to treat the “Indians” well, to “conciliate their affections” and keep friendly relations.'],
   ['n6', 'r', 'Australian Museum', 'The High Court’s Mabo (No. 2) decision of 3 June 1992 overturned terra nullius.']
  ],
  pair: ['n1', 'n4'],
  reveal: [
   'The Australian Museum says the legal principle was put into law in 1835, not 1788, and that the words are today used as a catch-all for how Australia was founded.',
   'The book’s idea, that the British acted as if no one had cared for the land, is how many people describe 1788 today. This app has not found Phillip using those words.',
   'Phillip’s written instructions told him to treat the people well. In December 1790 he also ordered the march described in the question about Tench. Both are in the records.'
  ],
  check: 'The words “terra nullius” are used in the book’s account of 1788. Whether to keep them is a decision for the author.', src: ['terra', 'nmaPem', 'mabo']},
 {id: 'andover', gate: 3, title: 'What did Curtis know about Andover?', ask: 'Check when the Andover stories became public.',
  cards: [
   ['d1', 'b', 'Thomas Curtis, p. 44', '“Villagers talked with dread about Andover — the cold red-brick building where families were separated and men, like you, were forced to crush rotting bones…”'],
   ['d2', 'b', 'Thomas Curtis, p. 44', '“The New Poor Law of 1834 had ended outdoor relief for men in your situation.”'],
   ['d3', 'b', 'Thomas Curtis, p. 44', 'He sails on the Andromache and arrives in Sydney in August 1840.'],
   ['d4', 'r', 'UK Parliament', 'The 1834 Poor Law Amendment Act ended outdoor relief for the able-bodied.'],
   ['d5', 'r', 'Hansard, 1 August 1845', 'A member of Parliament raised the practice of paupers crushing bones in the Andover workhouse and gnawing the marrow.'],
   ['d6', 'r', 'Hansard, 5 March 1846', 'A guardian and magistrate examined ten paupers. All but two said they ate marrow and gristle from the bones.'],
   ['d7', 'r', 'English Project Captain Swing', 'In November 1830 a crowd destroyed a factory at Upper Clatford, near Andover.']
  ],
  pair: ['d1', 'd5'],
  reveal: [
   'The 1834 Poor Law and the 1830 riots match the book’s account of why men like Curtis were afraid of the workhouse.',
   'The records for the bone crushing are from 1845 and 1846, after Curtis sails in 1840. This app has found no earlier source. Villagers could have talked about it earlier, but no record shows it.',
   'The book’s “rotting bones” matches the 1846 evidence, which says some bones had lain in the yard for two or three months. “Red-brick” and “families separated” have not been checked.'
  ],
  check: 'The first public report found is 1845, so talk before 1840 would need another source.', src: ['poor', 'hansard45', 'hansard46', 'swing']},
 {id: 'ship', gate: 3, title: 'Who landed with Curtis?', ask: 'Compare the book’s family with the shipping list.',
  cards: [
   ['h1', 'b', 'Thomas Curtis, p. 44', '“You, your wife Mary Ann Pragnell, and your teenage son Robert boarded the barque Andromache and sailed for 113 days…”'],
   ['h2', 'b', 'Thomas Curtis, p. 44', '“After a brief stop at Port Phillip, the ship finally turned north and sailed into Sydney Harbour in August 1840.”'],
   ['h3', 'r', 'Shipping lists (transcription)', 'The Andromache sailed from London on 28 February 1840 and reached Port Phillip on 24 June 1840, a “113 day passage”.'],
   ['h4', 'r', 'Shipping lists (transcription)', 'Eleven passengers left Port Phillip on 29 July and arrived in Sydney on 2 August 1840.'],
   ['h5', 'r', 'Shipping lists (transcription)', '“Curtis family of 4: Thomas 37 with Mary Ann 29, Robert 16 and Margaret 18.”']
  ],
  pair: ['h1', 'h5'],
  reveal: [
   'The ship, the stop at Port Phillip, the length of the passage and the arrival in August 1840 all match the book.',
   'The list has four Curtises, and the book has three. The book does not mention Margaret. The page gives no maiden names, so Pragnell cannot be checked.',
   'Mary Ann is listed as 29 and Robert as 16. That is only 13 years apart, so the listing may join different people. The dates 28 February to 24 June are also 117 days, not 113. The page does not explain the difference.',
   'This page is a transcription. The original entitlement certificates, which list age and parents, have not been checked.'
  ],
  check: 'Check the certificates in the State archives before saying this family is the book’s family.', src: ['andro', 'bounty']},
 {id: 'river', gate: 3, title: 'Which people lived by the Cooks River?', ask: 'The book names a Gadigal man. What do the records say about the people of this river?',
  cards: [
   ['r1', 'b', 'Thomas Curtis, p. 44', '“You settled near the Cooks River, south of Sydney, on land that once belonged to the Gadigal people.”'],
   ['r2', 'b', 'Thomas Curtis, p. 45', '“A Gadigal man… He wants to be known as Warra.”'],
   ['r3', 'r', 'Dictionary of Sydney', 'The upper valley seems to have been Wanngal land. The lower reaches were Cadigal or Gameygal land, or both.'],
   ['r4', 'r', 'Dictionary of Sydney', 'It is “difficult to be certain” which clan a person belonged to or what language they spoke.'],
   ['r5', 'r', 'National Museum of Australia', 'Bidjigal Country “stretched from Botany Bay south of the Cooks River and west along the Georges River”.'],
   ['r6', 'r', 'Dictionary of Sydney', 'Aboriginal people kept fishing the river through the 1830s and into the 1860s.']
  ],
  pair: ['r1', 'r3'],
  reveal: [
   'The records do not contradict the book, but they are less certain. The source says the upper river was Wanngal land and the lower river was Cadigal or Gameygal land, and that exact clan lands are hard to know.',
   'Aboriginal people were fishing this river in the 1830s and later, so a man fishing and guiding near the river fits the records.',
   'The Bidjigal Country in the records lies south of the river, so it is also close.'
  ],
  check: 'For the author to check with Gadigal and Wangal sources: which clan names to use, and whether “Ngurra” is the right word in the Resistor’s and Freeman’s chapters.', src: ['cooks', 'nmaPem']}
]
});
