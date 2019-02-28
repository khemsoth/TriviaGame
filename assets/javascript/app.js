var clock;
var timer = 45;
var userCorrect = 0;
var userWrong = 0;
var unanswered = 0;
var userAnswers = [];
var questions = [{
    question: "Leslie Knope is from Pawnee.",
    choices: ["True", "False"],
    correct: 0
  },
  { question: "What political party does Ron Swanson affiliate with?",
    choices: ["Democrat", "Republican", "Libertarian", "Other"],
    correct: 2
  },
  { question: "What game does Ben create while he is unemployed?",
    choices: ["Cones of Dunshire", "Media Blitz", "Ya Heard", "Candy World"],
    correct: 0
  },
  { question:"Ron's saxophone playing alter-ego was named ________.",
    choices: ["Ron Swan", "Duke Silver", "Angelsnack", "Crazy Ira"],
    correct: 1
  },
  { question: "Which of the following was NOT the name of Andy's band?",
    choices: ["Mouse Rat", "Everything Rhymes With Orange", "Scarecrow Boat", "Fleetwood Mac Sex Pants"],
    correct: 3
  },
  { question: "What does Ron Swanson dress up as every year for Halloween?",
    choices: ["Nothing", "Bacon", "Pirate", "Sherlock Holmes"],
    correct: 2
  },
  { question: "What is revealed during Leslie's MRI?",
    choices: ["She has a brain tumor", 'She has a "big oven"', "She is perfectly healthy"],
    correct: 1
  }
]

window.onload = function() {
  $("#game").hide();
  $("#resultsScreen").hide();
  $("#startButton").click(function(event) {
  $("#startButton").remove();
  $("#game").show();

  function countdown() {
    timer--;
    $("#timer").text("Time Remaining: 00:" + timer);
    if(timer === 0) {
      stopTimer();
    }
    if (timer < 10) {
      $("#timer").text("Time Remaining: 00:0" + timer);
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
      userAnswers.push($("input[name='q0']:checked").val());
      userAnswers.push($("input[name='q1']:checked").val());
      userAnswers.push($("input[name='q2']:checked").val());
      userAnswers.push($("input[name='q3']:checked").val());
      userAnswers.push($("input[name='q4']:checked").val());
      userAnswers.push($("input[name='q5']:checked").val());
      userAnswers.push($("input[name='q6']:checked").val());
      for(var i = 0; i < questions.length; i++) {
      if(userAnswers[i] == questions[i].correct) {
        userCorrect++;
        }
      else if(userAnswers[i] != questions[i].correct) {
        userWrong++;
        }
      }
      $("#userCorrect").append(userCorrect);
      $("#userWrong").append(userWrong);
      $("#unanswered").append(unanswered);
  }

    function displayQuestions() {
      for(var i = 0; i < questions.length; i++) {
      $("#question" + i).text(questions[i].question);
    }
  }
function displayAnswers() {
      for(var i = 0; i < 25; i++) {
        $("#q" + i).text(questions[0].choices[i]);
      }
      for(var j = 2; j < 25; j++) {
        $("#q" + j).text(questions[1].choices[j - 2]);
      }
      for(var k = 6; k < 25; k++) {
        $("#q" + k).text(questions[2].choices[k - 6]);
      }
      for(var l = 10; l < 25; l++) {
        $("#q" + l).text(questions[3].choices[l - 10]);
      }
      for(var m = 14; m < 25; m++) {
        $("#q" + m).text(questions[4].choices[m - 14]);
      }
      for(var n = 18; n < 25; n++) {
        $("#q" + n).text(questions[5].choices[n - 18]);
      }
      for(var o = 22; o < 25; o++) {
        $("#q" + o).text(questions[6].choices[o - 22]);
      }
  }
    clock = setInterval(countdown, 1000);
    displayQuestions();
    displayAnswers();

$("button[name='submitButton']").click(function() {
  submitClick();
  checkAnswer();
  $("#game").hide();
  $("#resultsScreen").show();
})
})}
