/* Module Dependencies */
import React from 'react';
import AppControlQty from './AppControlQty.js';


class AppHeader extends React.Component{


	render(){


		return <header className="AppHeader">
				<h1>Programación</h1>
				<AppControlQty store={this.props.store} qtyProgramas={this.props.qtyProgramas} />
			</header>;

	}

}

export default AppHeader;