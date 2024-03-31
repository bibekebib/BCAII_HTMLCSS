var CountDown = new Date("April 3, 2024 00:00:00").getTime();

console.log("Time in milisecond", CountDown);
function TImer() {
  var DateMNow = new Date().getTime();

  console.log("Time in  milisecond, Present", DateMNow);

  var distance = CountDown - DateMNow;

  console.log("Time in milisecond, Distance", distance);

  var Days = Math.floor(distance / (1000 * 60 * 60 * 24));
  console.log("Time in Days", Days);

  var Hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  console.log("Time in Hours", Hours);

  var Minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  console.log("Time in Minutes", Minutes);

  var Seconds = Math.floor((distance % (1000 * 60)) / 1000);
  console.log("Time in Seconds", Seconds);

  document.getElementById("timer").innerHTML =
    Days + "d " + Hours + "h " + Minutes + "m " + Seconds + "s ";

  if (distance < 0) {
    clearInterval(TImer);
    document.getElementById("timer").innerHTML = "Coutdown is Over";
  }
}

setInterval(TImer, 1000);
