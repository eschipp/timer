// define vars to hold time/date values
let startTime = 0;
let endTime = 0;
let today = new Date();

// define var to hold stopwatch status
let status = "stopped";





function startStop(){

	if(status === "stopped") {
		//set start time
		document.getElementById("startStop").innerHTML = "Stop"
		startTime = document.getElementById("startTimeDisplay").innerHTML = new Date().getTime();
		status = "started"

	} else {
		//set end time
		document.getElementById("startStop").innerHTML = "Start"
		endTime = document.getElementById("stopTimeDisplay").innerHTML = new Date().getTime();
		status = "stopped";
	}
}



function reset() {
	let recordedTime = ((endTime - startTime)/60000).toFixed(2);
	function returnRecordedTime() {
		return recordedTime;
	}
	if(recordedTime === 0) {
		
		document.getElementById("tableTime").innerHTML = "0 minutes"
	} else {
		
		document.getElementById("tableTime").innerHTML = recordedTime + " minutes";
	}
	document.getElementById("tableDate").innerHTML = today.toDateString();
	;

	startTime = 0;
	endTime = 0;
	status = "stopped";
}
