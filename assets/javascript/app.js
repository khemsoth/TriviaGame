var clock;
var timer = 45;

window.onload = function() {
  $("button[name='start']").click(countdown);
}
  function countdown() {
    timer--;
    $("#timer").text("Time Remaining: 00:" + timer);
    if(timer === 0) {
      stopTimer();
    }
  }
  function stopTimer() {
    clearInterval(clock);
    $("#timer").text("Time Remaining: 00:00");
  }

  function submitClick() {
      stopTimer();
      $("#timer").text("Time Remaining: 00:00");
    }
    clock = setInterval(countdown, 1000);

$("button[name='submitButton']").click(function() {
  submitClick();
})
