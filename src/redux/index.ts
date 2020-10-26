import createSagaMiddleware from 'redux-saga'
import {applyMiddleware, compose, createStore, Store, StoreCreator} from 'redux';
import reducer from './reducer';
import sagas from './sagas';
import {IRootEstado} from '../comun/tipos';

const enhancers: any[] = [];

if (process.env.NODE_ENV === 'development') {
	const devToolsExtension = (window as any).__REDUX_DEVTOOLS_EXTENSION__
	if (typeof devToolsExtension === 'function') {
		enhancers.push(devToolsExtension())
	}
}

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];
const composedEnhancers = compose(
	applyMiddleware(...middleware),
	...enhancers
)

const {run} = sagaMiddleware;

let store = createStore(
	reducer,
	composedEnhancers
);

run(sagas);

export default store;
export const tienda = store.getState()
