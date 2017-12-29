//Create a dummy namespaceURI
var com;
if(!com) {
    com = {};
}
if(!com.flametreepublishing) {
    com.flametreepublishing = {};
}

//Create a superfine porkupine constructor
com.flametreepublishing.SimpleQuiz = function(){
    this.questions = [];
    this.loadQuestions();
}

com.flametreepublishing.SimpleQuiz.prototype.loadQuestions = function() {

//QUESTION 1
this.questions.push(
    new com.flametreepublishing.QuizQuestion(
	1,  "Approximately how far away from the Earth is the Sun?",
	["200 miles", "93,000,000 miles", "49,000,000 miles", "150,000 miles"], 1)
);

//QUESTION 2
this.questions.push(
    new com.flametreepublishing.QuizQuestion(
	2,  "How many planets are there in our solar system?",
	["6", "7", "8", "9"], 2)
);

//QUESTION 3
this.questions.push(
    new com.flametreepublishing.QuizQuestion(
	3,  "Which of these is a moon of Jupiter?",
	 ["Ganymede", "Miranda", "Enceladus", "Mars"], 0)
);

//QUESTION 4
this.questions.push(
    new com.flametreepublishing.QuizQuestion(
	4,  "Which of these is a peepl like uzzz?",
	 ["Mike", "Miranda", "Yolanda", "Yr Uncle"], 2)
);

}

com.flametreepublishing.SimpleQuiz.prototype.renderAllQuestions = function() {
			for(var i = 0; i < this.questions.length; i++) {
                this.questions[i].renderQuestion();
            }
        }

com.flametreepublishing.SimpleQuiz.prototype.clickHandler = function(e) {
  var clickedAnswerId = e.target.id;
  var clickedAnswerIndex =  Number(clickedAnswerId.substr(1, 1));
  var clickedQuestionId = e.target.parentNode.id;
  var clickedQuestionNum =  Number(clickedQuestionId.substr(1, 1));
//   var clickedQuestion = com.flametreepublishing.SimpleQuiz.questions[clickedQuestionNum-1];
  var clickedQuestion = com.flametreepublishing.simpleQuiz.questions[clickedQuestionNum -1];
  //book has "simpleQuiz"
  if(clickedQuestion.checkUserAnswer(clickedAnswerIndex)){
    alert("boffo! you are prime.")
  } else {
    alert("...not so very cherry. Try again?")
  }
}
