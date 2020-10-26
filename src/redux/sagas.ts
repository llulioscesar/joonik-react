import {all, fork} from 'redux-saga/effects';
import autenticacion from '../modulos/Autenticacion/sagas';
import lista from '../modulos/Lista/sagas';

export default function* rootSaga() {
	yield all([
		fork(autenticacion),
		fork(lista),
	])
}
