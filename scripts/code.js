var ai = {
  name: "",
  intelligence: 0,
  popularity: 0,
  stability: 0,
  money: 100,
};

var questions = [
  {
    question: "Is the AI trained on Twitter or Wikipedia?",
    answers: [
      {
        text: "Twitter",
        effect: function () {
          ai.intelligence -= 20;
          ai.stability -= 20;
          ai.money -= 50;
        },
      },
      {
        text: "Wikipedia",
        effect: function () {
          ai.intelligence += 20;
          ai.stability += 20;
          ai.money -= 50;
        },
      },
    ],
  },
  {
    question: "Does the AI have an open or closed beta?",
    answers: [
      {
        text: "Open",
        effect: function () {
          ai.popularity += 50;
          ai.stability += 20;
          ai.money -= 50;
        },
      },
      {
        text: "Closed",
        effect: function () {
          ai.popularity += 10;
          ai.stability += 50;
          ai.money -= 10;
        },
      },
    ],
  },
];

function submitName(form) {
  if (form.aiName.value == "") {
    alert("Name must not be empty");
    return;
  }
  var name = form.aiName.value.trim();
  ai.name = name;
  console.log("Player name is " + ai.name);
  renderQuestions();
}

function askQuestion(question, opt1, opt2) {
  console.log(question);
  console.log(opt1.text);
  console.log(opt2.text);
}

function renderIntro() {
  $("#jsmain").html(
    "\
    <p>Welcome! What would you like to name your AI?</p>\
    <form id='nameForm' onsubmit='return submitName(this)'>\
    <input type='text' name='aiName'/>\
    <input type='submit' value='Submit'/>\
    </form>\
    "
  );
}

function renderQuestions() {
  for (var i = 0; i < questions.length; i++) {
    console.log(questions[i]);
  }
}

$(document).ready(function () {
  console.log("rendering intro");
  renderIntro();
});
