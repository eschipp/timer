import React from 'react';
import './Table.css';

const Table = () => {
	return (
		<div>
			<table>
				<tbody>
					<tr>
						<th>Date:</th>
						<th>Time:</th>
					</tr>
					<tr>
						<td id="tableDate">today's date</td>
						<td id="tableTime">today's time</td>
					</tr>
				</tbody>
			</table>
		</div>
	)
}

export default Table;