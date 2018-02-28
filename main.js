let chStyles = __OPTIONS.cards.chances;
let quStyles = __OPTIONS.cards.questions;
let mvStyles = __OPTIONS.cards.moves;

let card = false;

let chance;
let question;
let move;

let rng = new RNG();

// Card Draw
draw = (n) => {
  if (n == 0) return eval(chStyles[rng.rng(0, chStyles.length - 1)].replace('{', '${rng(').replace('}', ')}'));
  if (n == 1) return eval(quStyles[rng.rng(0, quStyles.length - 1)].replace('{', '${rng(').replace('}', ')}'));
  if (n == 2) return eval(mvStyles[rng.rng(0, mvStyles.length - 1)].replace('{', '${rng(').replace('}', ')}')); 
}

chanceGen = () => {
  if (card) return;
  card = true;

  chance.card.animate({
    top: "100%"
  }, 1000, () => {
    chance.card.css("top", "Calc(50% - (275px / 2))");
    chance.action.html(draw(0));
    chance.reveal.animate({
      top: "30%"
    }, 1500, () => {
      chance.reveal.click(crClick);
    });
  });
}

chClick = () => {
	chance.reveal.animate({
		top: "100%"
	});
	card = false;
}

questionGen = () => {
  if (card) return;
  card = true;

  question.card.animate({
    top: "100%"
  }, 1000, () => {
    question.card.css("top", "Calc(50% - (275px / 2))");
    question.action.html(draw(1));
    question.reveal.animate({
      top: "30%"
    }, 1500, () => {
      question.reveal.click(crClick);
    });
  });
}

quClick = () => {
	question.reveal.animate({
		top: "100%"
	});
	card = false;
}

moveGen = () => {
  if (card) return;
  card = true;

  move.card.animate({
    top: "100%"
  }, 1000, () => {
    move.card.css("top", "Calc(50% - (275px / 2))");
    move.action.html(draw(2));
    move.reveal.animate({
      top: "30%"
    }, 1500, () => {
      move.reveal.click(mvClick);
      });
    });
}

mvClick = () => {
	move.reveal.animate({
		top: "100%"
	});
	card = false;
}



$(document).ready(() => {

	chance = {
	  card: $('#chance'),
	  reveal: $('#ch-reveal'),
	  action: $('#ch-action')
	};

	move = {
	  card: $('#move'),
	  reveal: $('#mv-reveal'),
	  action: $('#mv-action')
	};
	
	question = {
		card: $('#question'),
		reveal: $('#qu-reveal'),
		action: $('#qu-action')
	}
	
	// Set click options
	chance.card.click(chanceGen);
	move.card.click(moveGen);
});

$(document).keydown((e) => {
		switch (e.keyCode) {
			case 13:
			case 27:
			case 32:
				chClick();
				mvClick();
				quClick();
				break;
			case 67:
				chanceGen();
				break;
			case 77:
				moveGen();
				break;
			case 81:
				questionGen();
				break;
		}
});
