const __OPTIONS = {
  cards : 
    chances : [
      { item : "`Move {1, 8} squares forward`", chance : 30 },
      { item : "`Move {1, 6} squares backward`", chance : 30 },
      { item : "`Move {1, 8} squares forward then {1, 8} squares backward`", chance : 15 },
      { item : "`Move {1, 8} squares backward then {1, 8} squares forward`", chance : 15 },
      { item : "`Don't move.`", chance : 10 }
    ],
    
    questions : [
      { item : "`This is a question`", chance : 100 }
    ],

    moves : [
      { item : "`Go to square {1, 36} of the current board`", chance : 15 },
      { item : "`Go back {1, 4} squares`", chance : 30 },
      { item : "`Go to square one. Sorry!`", chance : 5 },
      { item : "`Move forward {1, 8} squares`", chance : 35 },
      { item : "`Choose any player to go to square {1, 36} of either their board or your board`", chance : 15 }
    ]
  }
}
