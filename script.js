// define vars to hold time values
let seconds = 0;
let minutes = 0;
let hours = 0;

// define vars to hold display values
let displaySeconds= 0;
let displayMinutes = 0;
let displayHours = 0;

// define var to hold setInterval() function
let interval = null;

// define var to hold stopwatch status
let status = "stopped";

// stopwatch function (logic to determine when to increment next value etc.)
function timer() {
	
	seconds++;

	// logic to determine when to increment next value
	if(seconds / 60 === 1){
		seconds = 0;
		minutes++;

		if(minutes / 60 === 1){
			minutes = 0;
			hours++;
		}



	}
	// if sec/min/hours are onle one digit, add a leading 0 to value
	if(seconds < 10){
		displaySeconds = "0" + seconds.toString();
	} else {
		displaySeconds = seconds;
	}

	if(minutes < 10){
		displayMinutes = "0" + minutes.toString();
	} else {
		displayMinutes = minutes;
	}

	if(hours < 10){
		displayHours = "0" + hours.toString();
	} else {
		displayHours = hours;
	}



	// display updated time values to user
	document.getElementById("display").innerHTML = displayHours + ":" + displayMinutes + ":" + displaySeconds;

}



function startStop(){

	if(status === "stopped") {
		//start stopwatch
		interval = window.setInterval(timer, 1000);
		document.getElementById("startStopIcon").src = "icons/pause.png"
		status = "started"
	} else {
		window.clearInterval(interval);
		document.getElementById("startStopIcon").src = "icons/play.png"
		status = "stopped";
	}
}

function reset() {
	window.clearInterval(interval);
	seconds = 0;
	minutes = 0;
	hours = 0;
	document.getElementById("display").innerHTML = "00:00:00";
	document.getElementById("startStopIcon").src = "icons/play.png";
	status = "stopped";

}
