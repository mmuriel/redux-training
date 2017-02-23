/* Modules dependencies */
'use strict';

import {createStore} from 'redux';
import ActionsGenerator from '../actions/actions.js';
import Reducers from '../reducers/Reducers.js';


let reducers = new Reducers();
console.log(reducers.reduce);
let store = createStore(reducers.reduce,{});

console.table(store);
//throw new Error("Finalizando en store/store.js linea: 13");
export default store;