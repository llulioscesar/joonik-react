import {IListaEstado} from './tipos';
import {IAccion} from '../../comun/tipos';
import {Reducer} from 'redux';
import {SET_LISTA} from './constantes';

const initEstado: IListaEstado = {
	datos: [],
}

export const listaReducer: Reducer<IListaEstado, IAccion> = (estado: IListaEstado = initEstado, accion: IAccion): IListaEstado => {
	const {type, payload} = accion;
	switch (type) {
		case SET_LISTA:
			return Object.assign({}, estado, {datos: payload});
		default:
			return estado;
	}
}
