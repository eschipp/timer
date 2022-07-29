import React from 'react';
import clockIcon from './clockIcon.png';

const Logo = () => {
	return (
		<div style={{ display: "flex", justifyContent: "center" }}>
			<img src ={clockIcon} alt="timer icon"/>
		</div>
	)
}

export default Logo;