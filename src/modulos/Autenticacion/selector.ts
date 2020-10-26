import {createSelector} from "reselect";
import {IRootEstado} from '../../comun/tipos';

const estado = (estado: IRootEstado) => estado.autenticacion;

export const getToken = createSelector(estado, autenticacion => autenticacion.token);
