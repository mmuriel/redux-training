/* Module Dependencies */
import React from 'react';
import AppHeader from './AppHeader.js';
import AppContent from './AppContent.js';
 

class App extends React.Component{


	componentWillMount() {

		this.state = {
			programas: [
				{
					nombre: "Titulo programa #1",
					hora: "8:30",
					desc: "Esta es la descripción del programa número 1 que debería se mucho más larga que las otras descripciones de programas que se quieran agregar a esta app.",
				},
				{
					nombre: "Titulo programa #2",
					hora: "9:15",
					desc: "Esta es la descripción del programa número 2, no tan larga como la primera, pero distinta",
				},
				{
					nombre: "Titulo programa #3",
					hora: "10:00",
					desc: "Esta es la descripción del programa número 3, la mas corta",
				},
				{
					nombre: "Titulo programa #4",
					hora: "10:30",
					desc: "Esta es la descripción del programa número 4, es simplemente distinta de las demas",
				},
				{
					nombre: "Titulo programa #5",
					hora: "11:00",
					desc: "Esta es la descripción del programa número 5, se modifica ligeramente para diferenciarla",
				},
				{
					nombre: "Titulo programa #6",
					hora: "11:50",
					desc: "Esta es la descripción del programa número 6, la sexta es realmente diferente",
				},
				{
					nombre: "Titulo programa #7",
					hora: "12:30",
					desc: "Esta es la descripción del programa número 7, no se si será más corta que la que debe ser más corta",
				},
				{
					nombre: "Titulo programa #8",
					hora: "13:00",
					desc: "Esta es la descripción del programa número 8, lo que salio mal en la vida real no tiene por que salir bien en un libro.",
				},
				{
					nombre: "Titulo programa #9",
					hora: "14:00",
					desc: "La gran suerte de la humanidad es que existe una correlación significativa entre la inteligencia y la moralidad, incluida la buena voluntad con los semejantes... En consecuencia nuestros superiores en capacidad son en promedio nuestros benefactores y a menudo es mas seguro confiar nuestros intereses a ellos que a nosotros mismos.",
				},
			],
			qtyProgramas: 7,
		}

		console.log(this.state);
			
	}


	render(){


		return	<div className="AppMain">
				<AppHeader qtyProgramas={this.state.qtyProgramas} />
				<AppContent programas={this.state.programas} qtyProgramas={this.state.qtyProgramas} />
			</div>;

	}

}

export default App;