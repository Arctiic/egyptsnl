{
	String.prototype.replaceAll = function(search, replacement) {
		var target = this;
		return target.replace(new RegExp(search, 'g'), replacement);
	};
}

let cs = __OPTIONS.cards.chances;
let qs = __OPTIONS.cards.questions;
let ms = __OPTIONS.cards.moves;

let card = false;

let chance;
let question;
let move;

let rng;

// Card Draw
draw = (n) => {
	let a;
	
	if (n == 0) a = cs;
	if (n == 1) a = qs;
	if (n == 2) a = ms;
	
	let options = [];
  	for (let i = 0; i < a.length; i++)
		options.push([a[i], a[i].chance]);
	
	let r = rng.percent(options);
	r = r.replaceAll('{', '${rng.rng(');
	r = r.replaceAll('}', ')}');
	
	r = `\`${r}\``;

	return eval(r);
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
      chance.reveal.click(chClick);
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
    let q = draw(1);
    question.action.html(q.ret);
    question.reveal.animate({
      top: "30%"
    }, 1500, () => {
      question.reveal.click(() => quClick());
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
	question.card.click(questionGen);
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

load = () => {
	rng = new RNG();
}
