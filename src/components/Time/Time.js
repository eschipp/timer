import React from 'react';
import './Time.css';

const Time = () => {
	return (
		<div class="clockContainer">
			<div class="timerButtons">
				<button id = "startStop" onclick = "startStop()">
					Start
				</button>
				<div id="startTimeDisplay">00:00:00 </div>
				
				<div id="stopTimeDisplay">00:00:00</div>
				<button id = "reset" onclick = "reset()">
					Reset
				</button>
			</div>
			
		</div>

	)
}

export default Time;