import React from 'react';

const 
	Dialog = ({
		name = '',
		designation = '',
		img ='',
		project = '',
		team = ''
	}) => {
		return (
			<div className = "dialog">
				<div className = "dialog--header clearfix">
					<div className = "dialog--header--dp">
						<img src = {img} />
					</div>
					<div className = "dialog--header--data">
						<div className = "dialog--header--name">
							{name}
						</div>
						<div className = "dialog--header--desig">
							{designation || '--'}
						</div>
					</div>
				</div>
				<div className = "dialog--body">
					<div className = "dialog--body--data">
						<div className = "dialog--body--field">
							Team
						</div>
						<div className = "dialog--body--value">
							{team || '--'}
						</div>
					</div>
					<div className = "dialog--body--data">
						<div className = "dialog--body--field">
							Current Project
						</div>
						<div className = "dialog--body--value">
							{project || '--'}
						</div>
					</div>
				</div>
			</div>
		)
	}

export default Dialog;