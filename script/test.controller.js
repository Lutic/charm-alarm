angular.module('app').controller('Test',[ '$http', function ($http) {
  
  var self = this;
    self.currentTest = currentTest,
    self.zones = [],
    self.isCompleted = false,
    self.currentQuestion = 0,
    self.currentZone = "red",
    self.positiveAnswers = 0,
    self.result = '';

  var testUrl = '/data/tests/test.' + self.currentTest + '.json';

  self.resetCurrentQuestion = function () {
    return self.currentQuestion = 0;
  };

  self.currentResult = function () {
    return self.result = self.zones[self.currentZone].result;
  };

  self.isSpecialQuestion = function () {
    if ( !self.isCompleted && self.currentZone === 'additional' &&  self.zones[self.currentZone].questions[self.currentQuestion]["type"] === 'input' ) {
      return true;
    }
  };

  $http.get( testUrl ).success(function (data) {
    self.zones = data;

    self.question = function () {

      if (!self.isCompleted) {
        var question = self.zones[self.currentZone].questions[self.currentQuestion];
        return self.currentZone === 'additional' ? question["question"] : question
      }

    }

    self.testContinue = function (answer) {

      /* Special condition for 4th test */
      if (self.currentTest === 4 && self.currentZone === 'red' && self.currentQuestion === 0 ) {
        answer === 'yes' ? ( answer = 'no' ) : ( answer = 'yes' );
      }

      answer === 'yes' ? ++self.positiveAnswers : null;
      ++self.currentQuestion;

      if ( self.currentQuestion === self.zones[self.currentZone].questions.length ) {

        if (self.currentZone !== 'additional') {

          if ( self.positiveAnswers >= self.zones[self.currentZone].positiveAnswers ) {

            self.currentResult();
            self.currentZone = "additional";
            self.resetCurrentQuestion();

          } else {
            self.positiveAnswers = 0;
            self.currentZone = self.zones[self.currentZone]["nextZone"];
            self.resetCurrentQuestion();

            if (self.currentZone === 'white') {
              self.currentResult();
              self.currentZone = "additional";
            }
          }

        } else {
          self.isCompleted = true;
        }

      }
      
    };
    
  });

  

}]);
