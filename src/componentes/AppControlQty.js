/* Module Dependencies */
import React from 'react';


class AppControlQty extends React.Component{
	
	constructor(props) {
		super(props);
		
		this.handleClickMore = this.handleClickMore.bind(this);
		this.handleClickLess = this.handleClickLess.bind(this);
	}

	handleClickMore(){

		this.props.store.dispatch({type:'SHOW_MORE_PRGS'});

	}

	handleClickLess(){

		this.props.store.dispatch({type:'SHOW_LESS_PRGS'});

	}

	render(){


		return <div>
			Mostrar <span>{this.props.qtyProgramas}</span> 
			<p>
			<button onClick={this.handleClickMore}>+</button><button onClick={this.handleClickLess}>-</button>
			</p>
		</div>;

	}

}

export default AppControlQty;