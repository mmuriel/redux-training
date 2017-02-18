/* Module Dependencies */
import React from 'react';
import Programa from './Programa.js';



class AppContent extends React.Component{




	render(){

		/*
		let prgs = this.props.programas.map((programa,index) => {

			console.log(`Index número: ${index}`);
			if (index < this.props.qtyProgramas)
				return <Programa titulo={programa.nombre} desc={programa.desc} hora={programa.hora} />
			else
				return 'undefined';

		});
		*/

		let prgs = [];
		for (let i = 0 ; i < this.props.programas.length ; i++){

			let programa = this.props.programas[i];
			if (i < this.props.qtyProgramas){

				//let tmpPrg = ((programa) => {return <Programa titulo={programa.nombre} desc={programa.desc} hora={programa.hora} />})(programa);
				let tmpPrg = <Programa titulo={programa.nombre} desc={programa.desc} hora={programa.hora} />;	
				console.log(tmpPrg);
				prgs.push(tmpPrg);
			}

		}

		return <section className="AppContent">
				{prgs}
			</section>;

	}

}

export default AppContent;