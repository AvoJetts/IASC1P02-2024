new fullpage('#fullpage', {
  //options here
  autoScrolling:true,
  scrollHorizontally: true,
  sectionsColor : ['#fe5f46', '#0998ec', '#fc6c7c', '#fec304'],
  navigation: true,
  slidesNavigation: true,
  anchors:['firstPage', 'secondPage', 'thirdPage', 'finalPage'],
  navigationTooltips: ['first', 'second']
});
// playing audio
var audio = new Audio('CharliesHere.mp3');
audio.volume = 0.1
audio.play();
