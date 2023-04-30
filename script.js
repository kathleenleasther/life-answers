function answer() {
  var question = document.getElementById("question").value;
  var answers = ["Yes", "No", "Maybe", "Let it go", "Better to wait", "It is uncertain", "Of course", "It is certain", "Move on"];
  var randomAnswer = answers[Math.floor(Math.random() * answers.length)];

  //document.getElementById("answer").innerHTML = randomAnswer;
  
  if (question == "") {
    document.getElementById("answer").innerHTML = "Please ask a question.";
  } else {
    document.getElementById("answer").innerHTML = randomAnswer;
  }
}
