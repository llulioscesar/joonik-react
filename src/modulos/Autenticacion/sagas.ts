import {takeEvery, call, put, select} from 'redux-saga/effects';
import {
	SET_CONTRASEÑA_AUTENTICACION,
	SET_CORREO_AUTENTICACION, SET_NOMBRE_AUTENTICACION, SET_TOKEN_AUTENTICACION,
	SET_TOKENTEMP_AUTENTICACION
} from './constantes';
import {IContraseñaResult, ICorreoResult, ISetCorreoAutenticacionAccion} from './tipos';
import Api from './Api';
import {IRootEstado} from '../../comun/tipos';

function* validarCorreo({payload}: ISetCorreoAutenticacionAccion) {
	try {
		const resp: ICorreoResult = yield call(Api.validarCorreo, {email: payload});
		yield put({type: SET_TOKENTEMP_AUTENTICACION, payload: resp.result});
	} catch (e) {
		console.error(e);
		alert(e.message);
	}
}

function* validarContraseña({payload}: ISetCorreoAutenticacionAccion) {
	try {
		const token = yield select((estado: IRootEstado) => estado.autenticacion.token);
		const resp: IContraseñaResult = yield call(Api.validarContraseña, {password: payload}, token);
		yield put({type: SET_TOKEN_AUTENTICACION, payload: resp.token});
		yield put({type: SET_NOMBRE_AUTENTICACION, payload: resp.name});
	} catch (e) {
		console.error(e);
		alert(e.message);
	}
}

export default function* () {
	yield takeEvery(SET_CORREO_AUTENTICACION, validarCorreo);
	yield takeEvery(SET_CONTRASEÑA_AUTENTICACION, validarContraseña);
}
