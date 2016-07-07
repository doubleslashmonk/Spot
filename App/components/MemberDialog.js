import React from 'react';

const 
	Dialog = ({
		name = '',
		designation = '',
		project = '',
		team = ''
	}) => {
		return (
			<div className = "dialog">
				<div className = "dialog--header">
					<div className = "dialog--header--dp">
						<img src = "http://pets.petsmart.com/services/_images/grooming/dog/m_t/dog-aromatherapy.jpg" />
					</div>
					<div className = "dialog--header--data">
						<div className = "dialog--header--name">
							{name}
						</div>
						<div className = "dialog--header--desig">
							{designation}
						</div>
					</div>
				</div>
				<div className = "dialog--body">
					<div className = "dialog--body--data">
						<div className = "dialog--body--field">
							Team
						</div>
						<div className = "dialog--body--value">
							{team}
						</div>
					</div>
					<div className = "dialog--body--data">
						<div className = "dialog--body--field">
							Current Project
						</div>
						<div className = "dialog--body--value">
							{project}
						</div>
					</div>
				</div>
			</div>
		)
	}

export default Dialog;