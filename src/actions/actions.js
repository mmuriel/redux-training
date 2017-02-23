/* Modules Dependencies */

class ActionsGenerator{

	startApp(initDataApp){

		return {type: 'START_APP',
		payload: initDataApp
		}

	}

	addProgram(name,hour,desc){

		return { type: 'ADD_PRG',
			
			payload: {
				nombre: name,
					hora: hour,
					desc: desc,
			}
		}

	}

	addProgramas (programas){

		return { type: 'ADD_PRGS',
			payload: programas,
		}

	}

	delProgram (id){

		return{ type: 'DEL_PROGRAMA',
			payload:{
				id: id
			}
		}

	}


	setHowManyProgramas(qty){

		return { type: 'SET_QTY_PRGS',
		payload: qty

		}

	}

	showMorePrograms(){

		return {
			type: 'SHOW_MORE_PRGS'
		}

	}

	showLessPrograms(){

		return {
			type: 'SHOW_LESS_PRGS'
		}

	}

}

module.exports = exports = ActionsGenerator;