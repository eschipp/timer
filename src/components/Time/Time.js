import React from 'react';
import './Time.css';

const Time = () => {
	return (
		<div className="clockContainer">
			<div className="timerButtons">
				

				<div className="label">Start Time: </div>
				<div id="startTimeDisplay"> 00:00:00 </div>
				
				<div className="label"> End time: </div>
				<div id="stopTimeDisplay">00:00:00</div>
				
				<button id = "startStop">
						{/*// onClick = "startStop()"*/}
					Click to Start
				</button>
				<button id = "reset">
						{/*// onClick = "reset()"*/}
					Click to Reset
				</button>
			</div>
			
		</div>

	)
}

export default Time;