import {AutenticacionPantalla} from './Autenticacion';
import {IRootEstado} from '../../comun/tipos';
import {connect} from 'react-redux';

const stateToProps = (estado: IRootEstado) => {
	const {autenticacion} = estado;
	return Object.assign({}, autenticacion);
}

export default connect(stateToProps)(AutenticacionPantalla);
