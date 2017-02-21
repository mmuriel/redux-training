/* Module Dependencies */
import React from 'react';
import AppControlQty from './AppControlQty.js';


class AppHeader extends React.Component{


	render(){


		return <header className="AppHeader">
				<h1>Programación</h1>
				<AppControlQty qtyProgramas={this.props.qtyProgramas} handleClickLess={this.props.handleClickLess} handleClickAdd={this.props.handleClickAdd} />
			</header>;

	}

}

export default AppHeader;