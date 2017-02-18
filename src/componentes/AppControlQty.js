/* Module Dependencies */
import React from 'react';


class AppControlQty extends React.Component{

	handleClickLess(){

		let tmpQtyPrg = this.props.qtyProgramas - 1;
		this.setState({

			qtyProgramas: tmpQtyPrg

		});

	}


	handleClickAdd(){

		let tmpQtyPrg = this.props.qtyProgramas + 1;
		this.setState({

			qtyProgramas: tmpQtyPrg

		});

	}

	render(){


		return <div>
			Mostrar <span>{this.props.qtyProgramas}</span> 
			<p>
			<button onClick={this.handleClickAdd}>+</button><button onClick={this.handleClickLess}>-</button>
			</p>
		</div>;

	}

}

export default AppControlQty;