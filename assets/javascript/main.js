// $(document).ready(function() {
// create variables
var startTimer = 30;
var screen = $("#main");



// create questions array
var questions = [{
    question: "Which chart-topping songstress lent her voice in 2011's The Smurfs movie?",
    choices: ["Taylor Swift", "Katy Perry", "Selena Gomez", "Demi Lovato"],
    correctAnswer: "Katy Perry",
    image:"assets/images/katyperry.gif"
  }, {
    question: "Which actress played Katniss Everdeen in the Hunger Games?",
    choices: ["Chloe Moretz", "Emma Stone", "Jennifer Lawrence", "Jennifer Lopez"],
    correctAnswer: "Jennifer Lawrence",
    image:"assets/images/jlaw.gif"
  }, {
    question: "In which film did the Ewoks first appear?",
    choices: ["Empire Strikes Back", "Star Wars", "The Force Awakens", "Return of the Jedi"],
    correctAnswer: "Return of the Jedi",
    image:"assets/images/ewoks.gif"
  }, {
    question: "Who played the fictional anti-hero Deadpool?",
    choices: ["Ryan Gosling", "Ryan Seacrest", "Ryan Phillipe", "Ryan Reynolds"],
    correctAnswer: "Ryan Reynolds",
    image:"assets/images/deadpool.gif"
  }, {
    question: "What was the name of the monkey in the Disney movie Aladdin?",
    choices: ["Abu", "Jafar", "Jasmine", "Lago"],
    correctAnswer: "Abu",
    image:"assets/images/abu.gif"
  }, {
    question: "What character is the movie First Blodd centered around",
    choices: ["Rocky Balboa", "John Rambo", "John Spartan", "Judge Dredd"],
    correctAnswer: "John Rambo",
    image:"assets/images/rambo.gif"
  }, {
    question: "Who played a foul-mouth Detroit cop that goes to California to investigate his friends murder?",
    choices: ["Samuel L Jackson", "Dwwayne Johnson", "Eddie Murphy", "Will Smith"],
    correctAnswer: "Eddie Murphy",
    image:"assets/images/eddie.gif"
  }, {
    question: "Which actress was pregnant while filming Wonder Woman?",
    choices: ["Gal Gadot", "Robin Wright", "Connie Nielson", "Patty Jenkins"],
    correctAnswer: "Gal Gadot",
    image:"assets/images/gal.gif"
  }, {
    question: "Which 90s movie soundtrack is the best selling soundtrack of all-time?",
    choices: ["Space Jam", "Titanic", "The Bodyguard", "Pretty Woman"],
    correctAnswer: "The Bodyguard",
    image:"assets/images/bodyguard.gif"
  }, {
    question: "Who played inspector Lee's partner in the movie Rush Hour?",
    choices: ["Jackie Chan", "Chris Rock", "Chris Tucker", "Kevin Hart"],
    correctAnswer: "Chris Tucker",
    image:"assets/images/christucker.gif"
  },];

    // click events
  // resets the game
  $(document).on("click", "#start-over", function(e) {
    game.reset();
  });

    // clicks the answer
  $(document).on("click", ".answer-button", function(e) {
    game.clicked(e);
  });
  


  var game = {
    questions:questions,
    currentQuestion:0,
    counter:startTimer,
    correct:0,
    incorrect:0,
    countdown: function(){
      game.counter--;
      $("#counter-number").html(game.counter);
  
      if (game.counter === 0){
          game.timeUp();
      }
    },
    // loads the question
    loadQuestion: function(){
      timer = setInterval(game.countdown, 1000);
      screen.html("<h2>" + questions[this.currentQuestion].question + "</h2>");
      
      for (var i = 0; i<questions[this.currentQuestion].choices.length; i++){
        screen.append("<button class='answer-button' id='button'" + "data-name=" + questions[this.currentQuestion].choices[i] + ">" + questions[this.currentQuestion].choices[i] + "</button>");
      }
    },
    nextQuestion: function(){
      game.currentQuestion++;
      game.counter = startTimer;
      $("#counter-number").html(game.counter);
      game.loadQuestion();
     
    },
    timeUp: function (){
      clearInterval(timer);
      $("#counter-number").html(game.counter);
      screen.html("<h2>You ran out of Time!</h2>");
      screen.append("<h3>The Correct Answer was: " + questions[this.currentQuestion].correctAnswer);
      screen.append("<img src=" + questions[this.currentQuestion].image + " />");

      if (game.currentQuestion === questions.length - 1){
        setTimeout(game.results, 3 * 1000);
      } else {
        setTimeout(game.nextQuestion, 3 * 1000);
      }
    },
    results: function() {
      clearInterval(timer);
  
      screen.html("<h2>Completed, here is your score!</h2>");
      $("#counter-number").html(game.counter);
      screen.append("<h3>Correct Answers: " + game.correct + "</h3>");
      screen.append("<h3>Incorrect Answers: " + game.incorrect + "</h3>");
      screen.append("<h3>Unanswered: " + (questions.length - (game.incorrect + game.correct)) + "</h3>");
      screen.append("<br><button id='start-over'>Start Over?</button>");
    },
    clicked: function(e) {
      clearInterval(timer);
  
      if ($(e.target).data("name") === questions[this.currentQuestion].correctAnswer){
        this.answeredCorrectly();
      } else {
        this.answeredIncorrectly();
      }
    },
    answeredIncorrectly: function() {
      game.incorrect++;
      clearInterval(timer);
      screen.html("<h2>Wrong Answer!</h2>");
      screen.append("<h3>The Correct Answer is: " + questions[game.currentQuestion].correctAnswer + "</h3>");
      screen.append('<img src="' + questions[game.currentQuestion].image + '" />');
  
      if (game.currentQuestion === questions.length - 1){
        setTimeout(game.results, 3 * 1000);
      } else {
        setTimeout(game.nextQuestion, 3 * 1000);
      }
    },answeredCorrectly: function(){
      clearInterval(timer);
      game.correct++;
      screen.html("<h2>Correct!</h2>");
      screen.append('<img src="' + questions[game.currentQuestion].image + '" />');
  
      if (game.currentQuestion === questions.length){
        setTimeout(game.results, 3 * 1000);
      } else {
        setTimeout(game.nextQuestion, 3 * 1000);
      }
    },
    reset: function(){
      this.currentQuestion = 0;
      this.counter = startTimer;
      this.correct = 0;
      this.incorrect = 0;
      this.loadQuestion();
    }
  };
    // starts the game
    $(document).on("click", "#start", function(e) {
      // $(".container").prepend(game.loadQuestion);
      game.loadQuestion();
      });


