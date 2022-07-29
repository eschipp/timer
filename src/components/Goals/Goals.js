import React from 'react';
import './Goals.css';

const Goals = () => {
	return (
		<div className="goals">
			<div className="circle">
				<h1 className="goalTitle"> X/X Daily Streak! </h1>
			</div>
			<div className="circle">
				<h1 className="goalTitle"> X Total Hours </h1>
			</div>
			<div className="circle">
				<h1 className="goalTitle"> X/X Weekly Goal Streak! </h1>
			</div>
		</div>
	)
}

export default Goals;