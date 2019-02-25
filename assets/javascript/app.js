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
    function displayChoices1() {
      for(var i = 0; i < 25; i++) {
        $("#q" + i).text(questions[0].choices[i]);
      }
    }
    function displayChoices2() {
      for(var j = 0; j < questions.length; j++) {
        $("#q" + i).text(questions[1].choices[j]);
      }
    }
    function displayChoices3() {
      for(var k = 0; k < questions.length; k++) {
        $("#q" + i).text(questions[2].choices[k]);
      }
    }
    function displayChoices4() {
      for(var l = 0; l < questions.length; l++) {
        $("#q" + i).text(questions[3].choices[l]);
      }
    }
    function displayChoices5() {
      for(var m = 0; m < questions.length; m++) {
        $("#q" + i).text(questions[4].choices[m]);
      }
    }
    function displayChoices6() {
      for(var o = 0; o < questions.length; o++) {
        $("#q" + i).text(questions[5].choices[o]);
      }
    }
    function displayChoices7() {
      for(var p = 0; p < questions.length; p++) {
        $("#q" + i).text(questions[6].choices[p]);
      }
    }
  }
}


    clock = setInterval(countdown, 1000);
    displayQuestions();
    displayAnswers();

$("button[name='submitButton']").click(function() {
  submitClick();
})
}
