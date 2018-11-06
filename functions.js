function init (lengthOfPeriodInSeconds) {
  totalTime = lengthOfPeriodInSeconds*10;
  return totalTime
}
function addMark(perc,mTeaM){
  var mark = document.createElement("div");
  mark.setAttribute('class', 'mark');
  mark.style.left=`${perc}%`;
  document.getElementById(`${mTeaM}`).appendChild(mark);
}
function addAction (timeInSeconds, team) {
var perc = (100*timeInSeconds)/totalTime;
  if (team == "HOME") {
    addMark(perc,'home');
  }else if (team == "AWAY") {
    addMark(perc,'away');
  }
  console.log("A "+ team + " mark was created in the second " + timeInSeconds + " of "+ totalTime);
}
