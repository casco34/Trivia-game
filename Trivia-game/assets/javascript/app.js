$(document).ready(function() {
	var index = 0;
	var countdownTimer = {
		time : 20,
		reset: function() {
			this.time = 20;
			$(".timer").html("<h3>" + this.time + " seconds remaining</h3>");
		},
		start: function() {
			counter = setInterval(countdownTimer.count, 1000);	
		},
		stop: function() {
			clearInterval(counter);
		},
		count: function() {
				countdownTimer.time--;
				
				
			if (countdownTimer.time >= 0) {
				$(".timer").html("<h3>" + countdownTimer.time + " seconds remaining</h3>");
			}
			else {
				index++;
				answerWrong();
				countdownTimer.reset();
				if (index < questionArray.length) {
					loadQuestion(index);
				} else {
					$(".answerchoice").hide();
					showScore();
				}
			}
		}
	};

var correct = 0;
var wrong = 0;
var q1 = {
	question : "How often is the world cup tournament?",
	possibleAnswers : [	"Once every year",
					   	        "Every 2 years",
					   	        "Every 3 years",
				       	      "Every 4 years"],
	flags : [false, false, false, true],
	answer : "Every 4 years",
};

var q2 = {
	question: "How many countries compete in the World Cup tournament?",
	possibleAnswers: [	"64 teams",
					  	        "32 teams",
					  	        "24 teams",
					  	        "16 teams"],
	flags : [false, true, false, false],
	answer :  "32 teams",
};

var q3 = {
	question : "The first World Cup was played in what year?",
	possibleAnswers : [ "1930",
				 	            "1950",
				              "1970",
				              "1990"],
	flags : [true, false, false, false],
	answer : "1930"
};

var q4 = {
	question : "How old was the oldest player to ever play in a World Cup?",
	possibleAnswers : [	"45",
						          "50",
						          "37",
						          "42"],
	flags : [true, false, false, false],
	answer : "45"
};

var q5 = {
	question :"Which country has the most World Cup wins?",
	possibleAnswers : [	"Uruguay",
						          "Brazil",
						          "Spain",
						          "Germany"],
	flags : [false, true, false, false],
	answer : "Brazil"
};

var q6 = {
	question : "Which country won the first World Cup?",
	possibleAnswers : [	"Argentina",
						          "Brazil",
						          "Uruguay",
						          "Mexico"],
	flags : [false, false, true, false],
	answer : "Uruguay"
};

var q7 = {
	question : "Which Country has the fastest goal ever scored in the World Cup?",
	possibleAnswers : [	"Germany",
						          "Turkey",
						          "Czechoslovakia",
						          "USA"],
	flags : [false, true, false, false],
	answer : "Turkey"
};

var q8 = {
	question : "Which player has scored the most goals in a World Cup?",
	possibleAnswers : [ "Miroslav Klose (Germany)",
						          "Ronaldo (Brazil)",
						          "Gerd Muller (Germany)",
						          "Pele (Brazil)"],
	flags : [true, false, false, false],
	answer :"Miroslav Klose (Germany)"
};

var q9 = {
	question : "Which country has had the most Red Cards in the World Cup (EVER)?",
	possibleAnswers : [	"Germany",
						          "Brazil",
						          "Uruguay",
						          "Spain"],
	flags : [false, true, false, false],
	answer : "Brazil"
};

var q10 = {
	question : "Who won the 2014 World Cup final?",
	possibleAnswers : [	"Brazil",
						          "Germany",
						          "Argentina",
						          "Russia"],
	flags : [false, true, false, false],
	answer : "Germany"
}

var questionArray = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];

function loadQuestion(questionSelection) {
	countdownTimer.reset();
  $(".question").html("<h3>" + questionArray[questionSelection].question + "</h3>");
  $("#buttonA").text(questionArray[questionSelection].possibleAnswers[0]).show();
  $("#buttonB").text(questionArray[questionSelection].possibleAnswers[1]).show();
  $("#buttonC").text(questionArray[questionSelection].possibleAnswers[2]).show();
  $("#buttonD").text(questionArray[questionSelection].possibleAnswers[3]).show();

}



function setup() {
	index = 0;
	$(".question").append('<button id="startButton">Start</button>');
	$("#startButton").on("click", function() {
		$(this).hide();
		countdownTimer.start();
	 	loadQuestion(index);
	});
}		

function getAnswer() {


	$(".answerchoice").on("click", function() {
	  
		index++;
		
		$(".question").text('');
		$("#buttonA").text('');
		$("#buttonB").text('');
		$("#buttonC").text('');
		$("#buttonD").text('');
		loadQuestion();
	})
}

function answerCorrect() {
	correct++;
	alert("Correct!");
	
}

function answerWrong() {
	wrong++;
	alert("Incorrect!");
	
}

function showScore() {
	$(".question").empty();
	$(".question").append("<h2><p>" + correct + " correct</p></h2>");
	$(".question").append("<h2><p>" + wrong + " incorrect</p></h2>");
	countdownTimer.stop();
	$(".timer").empty();

}

setup();
$(".answerchoice").on("click", function() {
 
 if(this.id === "buttonA") {
 	var answerChosen = "A";
 } else if(this.id === "buttonB") {
 	answerChosen = "B";
 } else if (this.id === "buttonC") {
 	answerChosen = "C";
 } else if (this.id === "buttonD") {
 	answerChosen = "D";
 } 
 if ((answerChosen === "A") && (questionArray[index].flags[0] === true)) {
 	answerCorrect();
 } else if (answerChosen === "A") {
 	answerWrong();
 }
 if ((answerChosen === "B") && (questionArray[index].flags[1] === true)) {
 	answerCorrect();
 } else if (answerChosen === "B") {
 	answerWrong();
 }
if ((answerChosen === "C") && (questionArray[index].flags[2] === true)) {
 	answerCorrect();
 } else if (answerChosen === "C") {
 	answerWrong();
 }
if ((answerChosen === "D") && (questionArray[index].flags[3] === true)) {
 	answerCorrect();
 } else if (answerChosen === "D") {
 	answerWrong();
 }

 $(".question").text('');
 $("#buttonA").text('');
 $("#buttonB").text('');
 $("#buttonC").text('');
 $("#buttonD").text('');
 index++;
 if (index < questionArray.length) {
 	loadQuestion(index);
 } else {
 	$(".answerchoice").hide();
 	showScore();
 }
});



});