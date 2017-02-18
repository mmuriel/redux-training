/* Module Dependencies */
import React from 'react';



class Programa extends React.Component{




	render(){

		return <div className="Programa">
				<h3>{this.props.nombre}</h3> <span className="ProgramaHora">{this.props.hora}</span>
				<p>
				{this.props.desc}
				</p>
			</div>;

	}

}

export default Programa;