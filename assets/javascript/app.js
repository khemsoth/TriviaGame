var clock;
var timer = 45;
var correct = 0;
var wrong = 0;
var unanswered = 0;
var questions = [{
    question: "Leslie Knope is from Pawnee.",
    choices: ["True", "False"],
    correct: "True"
  },
  { question: "What political party does Ron Swanson affiliate with?",
    choices: ["Democrat", "Republican", "Libertarian", "Other"],
    correct: "Libertarian"
  },
  { question: "What game does Ben create while he is unemployed?",
    choices: ["Cones of Dunshire", "Media Blitz", "Ya Heard", "Candy World"],
    correct: "Cones of Dunshire"
  },
  { question:"Ron's saxophone playing alter-ego was named ________.",
    choices: ["Ron Swan", "Duke Silver", "Angelsnack", "Crazy Ira"],
    correct: "Duke Silver"
  },
  { question: "Which of the following was NOT the name of Andy's band?",
    choices: ["Mouse Rat", "Everything Rhymes With Orange", "Scarecrow Boat", "Fleetwood Mac Sex Pants"],
    correct: "Fleetwood Mac Sex Pants"
  },
  { question: "What does Ron Swanson dress up as every year for Halloween?",
    choices: ["Nothing", "Bacon", "Pirate", "Sherlock Holmes"],
    correct: "Pirate"
  },
  { question: "What is revealed during Leslie's MRI?",
    choices: ["She has a brain tumor", 'She has a "big oven"', "She is perfectly healthy"],
    correct: 'She had a "big oven"'
  }
]

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
      if($("input:checked") === $("input").value("correct")) {
        correct++;
      }
}
    function displayQuestions() {
      for(var i = 0; i < questions.length; i++) {
      $("#question" + i).text(questions[i].question);
    }
  }

    function displayAnswers() {
      for(var i = 0; i < questions.length; i++) {
        $("#q" + i).text(questions[0].choices[i]);
      }
    }


    clock = setInterval(countdown, 1000);
    displayQuestions();
    displayAnswers();

$("button[name='submitButton']").click(function() {
  submitClick();
})
}
