var Start = new Date();

function stopTime(){
  var Stop = new Date();
  timeSpent = (Stop.getTime() - Start.getTime())/600;
  alert("You have been on the page for: " + timeSpent + " Seconds");
}
