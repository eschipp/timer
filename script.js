// define vars to hold time/date values
let startTime = 0;
let endTime = 0;
let now = new Date();
let recordedTime = 0;

// define var to hold stopwatch status
let status = "stopped";





function startStop(){
	let date = new  Date();
	if(status === "stopped") {
		//set start time
		document.getElementById("startStop").innerHTML = "Stop";
		let startTimeObject = document.getElementById("startTimeDisplay").innerHTML = date.toLocaleString([], {
			hour12: false,
			hour: '2-digit',
			minute: '2-digit',
			second: '2-digit',
		});
		let startTime = new Date().getTime();
		console.log("this is the start time: ", startTime);
		status = "started";

	} else {
		//set end time
		document.getElementById("startStop").innerHTML = "Start";
		let endTimeObject = document.getElementById("stopTimeDisplay").innerHTML = date.toLocaleString([], {
			hour12: false,
			hour: '2-digit',
			minute: '2-digit',
			second: '2-digit',
		});
		let endTime = new Date().getTime();
		console.log("this is the end time: ", endTime);
		let recordedTime = ((endTime - startTime)/60000).toFixed(2);
		console.log (recordedTime);
		status = "stopped";
		
	}
	
}



function reset() {
	console.log("start time within reset function: ", startTime)
	console.log("end time within reset function: ", endTime)
	
	
	if(recordedTime === 0) {
		
		document.getElementById("tableTime").innerHTML = "0 minutes"
	} else {
		
		document.getElementById("tableTime").innerHTML = recordedTime + " minutes";
	}
	document.getElementById("tableDate").innerHTML = now.toDateString();
	;

	startTime = 0;
	endTime = 0;
	status = "stopped";

}
