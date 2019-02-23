
$(document).ready(function() {
function startTimer() {
    var timer = setTimeout(timer, 4000);
    console.log("4 seconds");
}

$("#startButton").click(function() {
    startTimer();
    $("#timer").innerHTML(timer);
})})