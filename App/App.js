import React from 'react';
import Toolbar from './components/Toolbar';

class App extends React.Component {
    render() {
        return (
			<div>
				<div className = "header">
					<div className = "header--logo">
						Spot
					</div>
				</div>
				<Toolbar />
			</div>);
    }
}

export default App