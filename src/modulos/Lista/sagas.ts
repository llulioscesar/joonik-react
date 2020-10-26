import {put, call, select, takeEvery} from 'redux-saga/effects'
import {ListaApi} from './Api';
import {apiConfig} from '../../comun/constantes';
import {IRootEstado} from '../../comun/tipos';
import {GET_LISTA, SET_LISTA} from './constantes';
import {ItemListaResult} from './tipos';

const api = new ListaApi(apiConfig);


function* obtenerElementos() {
	try {
		const token = yield select((estado: IRootEstado) => estado.autenticacion.token);
		const resp: ItemListaResult[] = yield call(api.ObtenerLista, token);
		if (resp.length) {
			resp[0].abrir = true;
		}
		yield put({type: SET_LISTA, payload: resp});
	} catch (e) {
		console.error(e);
		alert(e.message);
	}
}

export default function* () {
	yield takeEvery(GET_LISTA, obtenerElementos);
}
