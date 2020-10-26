import {AnyAction} from 'redux';
import {GET_LISTA} from './constantes';

export const getItemsAccion = (): AnyAction => ({type: GET_LISTA});
