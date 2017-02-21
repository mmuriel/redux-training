/* Module Dependencies */
import React from 'react';


class AppControlQty extends React.Component{
	

	render(){


		return <div>
			Mostrar <span>{this.props.qtyProgramas}</span> 
			<p>
			<button onClick={this.props.handleClickAdd}>+</button><button onClick={this.props.handleClickLess}>-</button>
			</p>
		</div>;

	}

}

export default AppControlQty;