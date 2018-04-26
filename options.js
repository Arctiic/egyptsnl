const __OPTIONS = {
  cards : {
    moves : [
      { item : "Move {1, 8} squares forward.", chance : 40 },
      { item : "Move {1, 6} squares backward.", chance : 20 },
      { item : "Move {1, 8} squares forward then {1, 8} squares backward.", chance : 10 },
      { item : "Move {1, 8} squares backward then {1, 8} squares forward.", chance : 10 },
      { item : "Don't move.", chance : 20 }
    ],
    
    questions : [
      { item : "Where is Ancient Egypt?", answer : "North Africa, beside the Nile River"., chance : 10 },
      { item : "Who was the last pharaoh of Ancient Egypt?", answer : "Cleopatra VII.", chance : 10 },
      { item : "Where is Ancient Egypt?", answer : "North Africa, beside the Nile River.", chance : 10 },
      { item : "How did the fall of Ancient Egypt happen?", answer : "The Romans took control over Egypt.", chance : 10 },
      { item : "Why were pyramids built?", answer : "They were built as tombs for the pharaohs", chance : 10 },
      { item : "Where is Anvient Egypt?", answer : "North Africa, beside the Nile River", chance : 10 },
      { item : "Who did the Egyptians worship?", answer : "The Egyptians believed in gods.", chance : 10 },
      { item : "What does the word: 'hieroglyphs' mean?", answer : "'Sacred writing'.", chance : 10 },
      { item : "How many pyramids do the Pyramids of Giza consist of?", answer : "Three.", chance : 10 },
      { item : "How many years did King Tut rule for?", answer : "Ten.", chance : 10 },
    ],

    chances : [
      { item : "Go to square {1, 36} of the current board.", chance : 15 },
      { item : "Go back {1, 4} squares.", chance : 30 },
      { item : "Go to square one. Sorry!", chance : 5 },
      { item : "Move forward {1, 8} squares.", chance : 35 },
      { item : "Choose any player to go to square {1, 36} of either their board or your board.", chance : 15 }
    ]
  }
}
