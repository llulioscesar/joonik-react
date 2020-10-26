import {InicioPantalla} from './InicioPantalla';
import {IRootEstado} from '../../comun/tipos';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {getItemsAccion} from '../../modulos/Lista/acciones';

const mapState = (estado: IRootEstado) => {
	const {lista, autenticacion} = estado;
	const {name} = autenticacion;
	return Object.assign({}, lista, {nombre: name});
}

const mapDispatch = (dispatch: Dispatch) => {
	return {
		obtenerDatos: () => dispatch(getItemsAccion()),
	}
}

export default connect(mapState, mapDispatch)(InicioPantalla);
