var clock;
var timer = 45;
var correct = 0;
var wrong = 0;
var unanswered = 0;
var userAnswers = [];
var answers = [];

window.onload = function() {
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
    function checkAnswer() {
      var answer = $("input[value='correct']");
      var userAnswer = $("input:checked");
      if (answer === userAnswer) {
        correct++;
      }
      else if(answer !== userAnswer){
        wrong++;
      }
      else if(userAnswer === null) {
        unanswered++;
      }
      }

    clock = setInterval(countdown, 1000);

$("button[name='submitButton']").click(function() {
  submitClick();
})
console.log(correct);
console.log(wrong);
console.log(userAnswers);
}
