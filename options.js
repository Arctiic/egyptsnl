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
      { item : "This is a question.", answer : "This is the answer.", chance : 100 }
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
