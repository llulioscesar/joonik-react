import {Action} from 'redux';

export interface IAutenticacionEstado {
	email: string;
	tempToken: string;
	token: string;
	name: string;
}

export interface ISetCorreoAutenticacionAccion extends Action {
	payload: string;
}

export interface ICorreo {
	email: string;
}

export interface ICorreoResult{
	result: string;
}

export interface IContraseña {
	password: string;
}

export interface IContraseñaResult {
	name: string;
	token: string;
}
