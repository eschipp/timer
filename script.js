// define vars to hold time/date values
let startTime = 0;
let endTime = 0;
let todayDate = new Date();
let recordedTime = 0;

// define var to hold stopwatch status
let status = "stopped";
let startTimeSeconds = 0;
let endTimeSeconds = 0;





function startStop(){
	let date = new  Date();
	if(status === "stopped") {
		//set start time
		document.getElementById("startStop").innerHTML = "Stop";
		document.getElementById("startTimeDisplay").innerHTML = date.toLocaleString([], {
			hour12: false,
			hour: '2-digit',
			minute: '2-digit',
			second: '2-digit',
		});
		startTimeSeconds = date.getTime();
		console.log(startTimeSeconds)
		status = "started";

	} else {
		//set end time
		document.getElementById("startStop").innerHTML = "Start";
		document.getElementById("stopTimeDisplay").innerHTML = date.toLocaleString([], {
			hour12: false,
			hour: '2-digit',
			minute: '2-digit',
			second: '2-digit',
		});
		endTimeSeconds = date.getTime();
		console.log(endTimeSeconds)
		status = "stopped";
		startTime = document.getElementById("startTimeDisplay").innerHTML;
		endTime = document.getElementById("stopTimeDisplay").innerHTML;
	}
	
}



function reset() {
	console.log("start time within reset function: ", startTime)
	console.log("end time within reset function: ", endTime)
	let recordedTime = ((endTimeSeconds - startTimeSeconds)/60000).toFixed(2);
	
	if(recordedTime === 0) {
		
		document.getElementById("tableTime").innerHTML = "0 minutes"
	} else {		
		console.log ("Recorded Time: ", recordedTime);
		document.getElementById("tableTime").innerHTML = recordedTime + " minutes";
	}

	document.getElementById("tableDate").innerHTML = todayDate.toDateString();
	document.getElementById("startTimeDisplay").innerHTML = "00:00:00";
	document.getElementById("stopTimeDisplay").innerHTML = "00:00:00";

	startTime = 0;
	endTime = 0;
	status = "stopped";

}
