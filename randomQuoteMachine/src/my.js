let colors = [
	"blueviolet",
	"brown",
	"cadetblue",
	"cornflowerblue",
	"darkcyan",
	"dimgrey",
	//"dodgerblue", too close to twitter blue
	"forestgreen",
	"indigo",
	"royalblue",
	"seagreen",
	"steelblue",
	"tomato"
];
let i = Math.random() * colors.length>>0;;
function genColor(){
	if (i>=colors.length){i=0;}
	return colors[i++];
}

function addQuote(quote){
	quote["color"] = genColor();
	quote["link"] = "https://bit.ly/2lwfOfF";

	let container = document.querySelector('main');
	container.innerHTML += tmpl("quote_tmpl",quote);

	twttr.widgets.load(document.querySelector(".full-screen:last-child>.wrapper"));
}

function randomQuote(){
	$.getJSON("https://talaikis.com/api/quotes/random/", addQuote);
}

$(document).ready(function(){
	let EOP = document.querySelector("#pageEnd");
	randomQuote();

	$('#fab').on('click',function(){
		randomQuote();
		setTimeout(function(){
			zenscroll.intoView(EOP,800);
		},500);
	});
});
