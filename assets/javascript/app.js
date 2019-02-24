var clock;
var timer = 45;
var correct = 0;
var wrong = 0;
var unanswered = 0;
var questions = [
  question = {
    question: "Who is Leslie Knope's boss?",
    answers: ["Ron Swanson", "Sewage Joe", "Andy Dwyer", "Joan Callamezzo"],
    correct: 0
  },
  question = {
    question: "Leslie Knope is from Pawnee.",
    answers: ["true", "false"],
    correct: 0
  },
  question = {
    question: "What political party does Ron Swanson affiliate with?",
    answers: ["Democrat", "Republican", "Libertarian", "None of the above"],
    correct: 2
  },
  question = {
    question: "What is the name of Tom Haverford's restaurant?",
    answers: ["Entertainment 720", "Tom's Bistro", "JJ's Diner", "Waffle Palace"],
    correct: 1
  },
  question = {
    question: "Who does Ann Perkins have a baby with?",
    answers: ["Howard "The Douche" Tuttlemann", "Mark Brandanawicz", "Tom Haverford", "Chris Traeger"],
    correct: 3
  },
  question = {
    question: "What does Ron Swanson dress up as every year for Halloween?",
    answers: ["Bacon", "Nothing", "Pirate", "Sherlock Holmes"],
    correct: 2
  },
  question = {
    question: "What is revealed during Leslie's MRI?",
    answers: ["She has a brain tumor", 'She has a "big oven"', "She is perfectly healthy",],
    correct: 1
  },
  question = {
    question: "Which of the following was NOT the name of Andy's band?",
    answers: ["Mouse Rat", "Everthing Rhymes With Orange", "Scarecrow Boat", "Fleetwood Mac Sex Pants"],
    correct: 3
  },
  question = {
    question: "Ron's saxophone playing alter ego was named ________.",
    answers: ["Ron Swan", "Duke Silver", "Angelsnack", "Crazy Ira"],
    correct: 1
  },
  question = {
    question: "What game does Ben create while he is unemployed?",
    answers: ["Cones of Dunshire", "Candy World", "Media Blitz", "Ya Heard"],
    correct: 0
  },
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

    }
    clock = setInterval(countdown, 1000);

$("button[name='submitButton']").click(function() {
  submitClick();
})
}
