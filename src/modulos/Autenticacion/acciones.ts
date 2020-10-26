import {ISetCorreoAutenticacionAccion} from './tipos';
import {AnyAction} from 'redux';
import {SET_TOKEN_AUTENTICACION} from './constantes';

export const setCorreoAccion = (type:string, payload: string): ISetCorreoAutenticacionAccion => ({type, payload});

export const setContraseñaAccion = (type:string, payload: string): ISetCorreoAutenticacionAccion => ({type, payload});

export const atrasAccion = (): AnyAction => ({type: SET_TOKEN_AUTENTICACION, payload: ''});
