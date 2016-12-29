'use strict';

import React from 'react';

class ProgressBar extends React.Component {

	render() {

		return (
			<div className="progress-bar-holder">
				<div className="progress-bar" style={{width: '60%'}}>
				</div>
			</div>
		)

	}

}

export default ProgressBar;