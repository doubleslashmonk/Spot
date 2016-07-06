import React from 'react';
import Toolbar from './components/Toolbar';
import Office from './components/Office';

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
				<Office />
			</div>);
    }
}

export default App