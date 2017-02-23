/* Module dependencies */

class Reducers{


	reduce(state,action){

		//console.log("Linea 8 - Reducer.js");
		//console.log(state);

		switch (action.type){

			case 'START_APP':

				return action.payload;
				break;

			case 'ADD_PRG':

				if (typeof state.programas == 'undefined' || state.programas == null){
					state.programas = [];
				}
				state.programas.push(action.payload);
				return state;

				break;

			case 'ADD_PRGS':

				if (typeof state.programas == 'undefined' || state.programas == null){
					state.programas = [];
				}
				state.programas = action.payload;
				return state;

				break;


			case 'SHOW_MORE_PRGS':

				if (typeof state.qtyProgramas == 'undefined' || state.qtyProgramas == null){
					state.qtyProgramas = 0;
				}

				state.qtyProgramas = state.qtyProgramas + 1;
				return state;
				break;

			case 'SHOW_LESS_PRGS':
	
				if (typeof state.qtyProgramas == 'undefined' || state.qtyProgramas == null){
					state.qtyProgramas = 0;
				}

				state.qtyProgramas = state.qtyProgramas - 1;
				return state;				
				break;


			case 'SET_QTY_PRGS':

				if (typeof state.qtyProgramas == 'undefined' || state.qtyProgramas == null){
					state.qtyProgramas = 0;
				}

				state.qtyProgramas = action.payload;
				return state;
				break;

			default:
				return state;

		}


	}


}


module.exports = exports = Reducers;