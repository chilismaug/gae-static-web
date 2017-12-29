//Create a dummy namespaceURI
var com;
if(!com) {
    com = {};
}
if(!com.flametreepublishing) {
    com.flametreepublishing = {};
}

//Create a superfine funkified constructor
com.flametreepublishing.QuizQuestion = function(aQuestionNum,
                                                aQuestionText,
                                                aAnswers,
                                                aCorrectAnswerIndex) {
    this.questionNum = aQuestionNum;
    this.questionText = aQuestionText;
    this.answers = aAnswers;
    this.correctAnswerIndex = aCorrectAnswerIndex;
}

com.flametreepublishing.QuizQuestion.prototype.checkUserAnswer = function( answerIndex) {
    var theResult;
    if (answerIndex == this.correctAnswerIndex) {
          theResult = true;
    } else {
          theResult = false;
    }
    return (theResult);
}

com.flametreepublishing.QuizQuestion.prototype.renderQuestion = function(){
  var questionDiv = document.createElement("div");
  questionDiv.id = "q" + this.questionNum;
  var questionHeading = document.createElement("h2");
  questionHeading.innerHTML= "QUESTION " + this.questionNum ;
  questionDiv.appendChild(questionHeading);
  var questionTextPara = document.createElement("p");
  questionTextPara.innerHTML= this.questionText;
  questionDiv.appendChild(questionTextPara);
  for (var i = 0; i < this.answers.length; i++) {
    var answerPara = document.createElement("p");
    answerPara.innerHTML= this.answers[i];
    answerPara.id = "a" + i
    answerPara.addEventListener("click", com.flametreepublishing.simpleQuiz.clickHandler, false);
    questionDiv.appendChild(answerPara);

  }
  document.body.appendChild(questionDiv);
}
