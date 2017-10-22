var secretNumber;
var guessCount;
var gussedData = [];
var from = "0";
var to = "100";
var maxGuessCount;
var myVar = setInterval(myTimer ,1000);
function myTimer() {
    var d = new Date();
    document.getElementById("demo").innerHTML = d.toLocaleTimeString();
}

var x = document.getElementById("myAudio"); 
function playAudio() { 

    x.play(); 
} 





function reset() {
	document.form1.userGuess.value = "";
	document.form1.hint.value = "Please enter the number in the below box & click on Guess.";
	document.form1.chance.value = "";
	document.form1.guesses.value = "";
	document.form1.userGuess.focus();
	gussedData = [];
	maxGuessCount=10;
	guessCount = gussedData.length;
	document.form1.guesses.value = "You attempted " + guessCount + " guesses";
	document.form1.chance.value = "You have only " + maxGuessCount + " chance's left";
	secretNumber = 0 + Math.floor(Math.random() *99);
 	
}

function guess() {
	var guessedNumber = parseInt(document.form1.userGuess.value,10);
	
	maxGuessCount--;
	var guessMessage = "";
	gussedData.push(guessedNumber);
		
		guessCount = gussedData.length;
		for (var i = 0; i < guessCount; i++) {
			guessMessage += gussedData[i] + " ";
		}
		document.form1.guesses.value="Number Guesses- " + guessMessage;
	
	if(guessedNumber >= 0 && guessedNumber <= 100) {
		
			if(guessedNumber == secretNumber) {
				 var attmpt = "";
					if(guessCount === 1){attmpt=" attempt ";} else {attmpt=" attempts ";}
					document.form1.hint.value = "";
					document.form1.guesses.value = "";
					window.alert("Party buddy...You made it !!!\n you have taken " + guessCount + attmpt + "to guess this number.");
					location.reload();
			}
			else{
				if(guessedNumber > secretNumber) {
					document.form1.hint.value = " Required Number is less than " + guessedNumber + ".";
						} 
				else{
				document.form1.hint.value = "Required Number is greater than " + guessedNumber + ".";
				} 
				if(maxGuessCount==0){
					window.alert(" I'm sorry you have lost the game due to too many attempts.\n Result was " + secretNumber + ".");
					reset();
				}
				
			}
			
			document.form1.chance.value = "You have only" + maxGuessCount + " chance's left";
	
			
	} else { 
		window.alert(" Please enter a correct number as the number you have entered is not in the specified range. ");
	}
	document.form1.userGuess.value = "";
	document.form1.userGuess.focus();
}
