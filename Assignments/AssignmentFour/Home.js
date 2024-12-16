// using fullpage.js library structure
new fullpage('#fullpage', {
	autoScrolling:true,
	navigation:true,
});

// function for music button
var audio = new Audio('CharliesHere.mp3');
function Music(){
  audio.volume = 0.1;
  audio.play();
}

// functions for buttons linking to other pages
function PizzaButton(){
	window.location.href="PizzaMenu.html"
}
function DrinkButton(){
	window.location.href="DrinkMenu.html"
}
