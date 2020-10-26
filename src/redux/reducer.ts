import {combineReducers} from 'redux';
import {autenticacionReducer} from '../modulos/Autenticacion/reducer';
import {listaReducer} from '../modulos/Lista/reducer';

export default combineReducers({
	autenticacion: autenticacionReducer,
	lista: listaReducer
});
