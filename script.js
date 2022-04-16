const timer = document.getElementById('timer');

let hr = 0;
let min = 0;
let sec = 0;
let stoptime = true;

function startTimer() {
	if (stoptime === true) {
		stoptime = false;
		timerCycle();
	}
}

function stopTimer() {
	if (stoptime == false) {
		stoptime = true;
	}
}

