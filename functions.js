function test(a,b,c){
  x = (b*c)/a;
}



function init (lengthOfPeriodInSeconds) {
    totalTime = lengthOfPeriodInSeconds*10;
    return totalTime
}


function addAction (timeInSeconds, team) {

  var perc = (100*timeInSeconds)/totalTime;

  if (team == "HOME") {
    var mark = document.createElement("div");
    mark.setAttribute('class', 'mark');
    mark.style.left=`${perc}%`;
    document.getElementById('home').appendChild(mark);

  }else if (team == "AWAY") {
    var mark = document.createElement("div");
    mark.setAttribute('class', 'mark');
    mark.style.left=`${perc}%`;
    document.getElementById('away').appendChild(mark);
  }

  return console.log("A "+ team + " mark was created in the second " + timeInSeconds + " of "+ totalTime);


}
