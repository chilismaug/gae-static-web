//Create a dummy namespaceURI
var com;
if(!com) {
    com = {};
}
if(!com.flametreepublishing) {
    com.flametreepublishing = {};
}
com.flametreepublishing.startQuiz = function(){
  com.flametreepublishing.simpleQuiz = new com.flametreepublishing.SimpleQuiz();
  com.flametreepublishing.simpleQuiz.renderAllQuestions();
}
window.addEventListener("load", com.flametreepublishing.startQuiz, false);
