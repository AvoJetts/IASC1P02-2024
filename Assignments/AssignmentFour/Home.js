new fullpage('#fullpage', {
	//options here
	autoScrolling:true,
  continuousVertical:true,
});

// function for music button
var audio = new Audio('CharliesHere.mp3');
function Music(){
  audio.volume = 0.1;
  audio.play();
}
