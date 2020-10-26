import {Action} from 'redux';
import {IAutenticacionEstado} from '../modulos/Autenticacion/tipos';
import {IListaEstado} from '../modulos/Lista/tipos';

export interface IAccion<T = string, P = any> extends Action {
	type: T,
	payload: P
}

export interface IRootEstado {
	autenticacion: IAutenticacionEstado,
	lista: IListaEstado,
}
