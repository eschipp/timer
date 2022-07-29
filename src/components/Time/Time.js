import React from 'react';
import './Time.css';

const Time = () => {
	return (
		<div className="clockContainer">
			<div className="timerButtons">
				<button id = "startStop" 
						// onClick = "startStop()"
				>
					Start
				</button>
				<div id="startTimeDisplay">00:00:00 </div>
				
				<div id="stopTimeDisplay">00:00:00</div>
				<button id = "reset" 
						// onClick = "reset()"
				>
					Reset
				</button>
			</div>
			
		</div>

	)
}

export default Time;