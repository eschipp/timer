// define vars to hold time/date values
let startTime = 0;
let endTime = 0;
let today = new Date();

// define var to hold stopwatch status
let status = "stopped";





function startStop(){
	let date = new  Date();
	if(status === "stopped") {
		//set start time
		document.getElementById("startStop").innerHTML = "Stop"
		let startTimeObject = document.getElementById("startTimeDisplay").innerHTML = date.toLocaleString([], {
			hour12: false,
			hour: '2-digit',
			minute: '2-digit',
			second: '2-digit',
		});
		let startTime = startTimeObject["hour", "minute", "second"];
		status = "started"

	} else {
		//set end time
		document.getElementById("startStop").innerHTML = "Start"
		let endTimeObject = document.getElementById("stopTimeDisplay").innerHTML = date.toLocaleString([], {
			hour12: false,
			hour: '2-digit',
			minute: '2-digit',
			second: '2-digit',
		});
		let endTime = endTimeObject["hour", "minute", "second"];
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
