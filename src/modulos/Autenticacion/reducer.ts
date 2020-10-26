import {Reducer} from 'redux';
import {IAutenticacionEstado} from './tipos';
import {IAccion} from '../../comun/tipos';
import {
	SET_CORREO_AUTENTICACION,
	SET_NOMBRE_AUTENTICACION,
	SET_TOKEN_AUTENTICACION,
	SET_TOKENTEMP_AUTENTICACION
} from './constantes';

const initEstado: IAutenticacionEstado = {
	email: '',
	tempToken: '',
	token: '',
	name: ''
}

function reestablecer(estado: IAutenticacionEstado, init: IAutenticacionEstado) {
	return Object.assign({}, estado, init);
}

export const autenticacionReducer: Reducer<IAutenticacionEstado, IAccion> = (estado: IAutenticacionEstado = initEstado, accion: IAccion): IAutenticacionEstado => {
	const {payload, type} = accion;

	switch (type) {
		case SET_CORREO_AUTENTICACION:
			return Object.assign({}, estado, {email: payload});
		case SET_TOKEN_AUTENTICACION:
			return Object.assign({}, estado, {
				tempToken: '',
				token: payload
			})
		case SET_NOMBRE_AUTENTICACION:
			return Object.assign({}, estado, {
				name: payload
			});
		case SET_TOKENTEMP_AUTENTICACION:
			return Object.assign({}, estado, {
				tempToken: payload,
				token: payload,
				name: ''
			})
		default:
			return estado;
	}
}
