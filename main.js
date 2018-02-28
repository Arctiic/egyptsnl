let chStyles = __OPTIONS.cards.chances;
let mvStyles = __OPTIONS.cards.moves;

let card = false;

let chance; 
let move;

// Card Draw
draw = (chance) => {
  if (chance) {
    return eval(chStyles[rng(0, chStyles.length - 1)].replace('{', '${rng(').replace('}', ')}'));
  }
  return eval(mvStyles[rng(0, mvStyles.length - 1)].replace('{', '${rng(').replace('}', ')}'));
}

// Random Number Generator
rng = (min, max) => {
  return Math.floor((Math.random() * max) + min);
}

chanceGen = () => {
  if (card) return;
  card = true;

  chance.card.animate({
    top: "100%"
  }, 1000, () => {
    chance.card.css("top", "Calc(50% - (275px / 2))");
    chance.action.html(draw(true));
    chance.reveal.animate({
      top: "30%"
    }, 1500, () => {
      chance.reveal.click(crClick);
    });
  });
}

crClick = () => {
	chance.reveal.animate({
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
    move.action.html(draw(false));
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
	
	// Set click options
	chance.card.click(chanceGen);
	move.card.click(moveGen);
});

$(document).keydown((e) => {
		switch (e.keyCode) {
			case 13:
			case 27:
			case 32:
				crClick();
				mvClick();
				break;
			case 67:
				chanceGen();
				break;
			case 77:
				moveGen();
				break;
		}
});
