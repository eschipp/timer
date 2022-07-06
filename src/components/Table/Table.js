import React from 'react';
import './Table.css';

const Table = () => {
	return (
		<div>
			<table>
				<tr>
					<th>Date:</th>
					<th>Time:</th>
				</tr>
				<tr>
					<td id="tableDate">today's date</td>
					<td id="tableTime">today's time</td>
				</tr>
			</table>
		</div>
	)
}

export default Table;