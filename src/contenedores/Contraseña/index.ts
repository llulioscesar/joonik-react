import {ContraseñaContenedor} from './ContraseñaContenedor';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {atrasAccion, setContraseñaAccion} from '../../modulos/Autenticacion/acciones';
import {SET_CONTRASEÑA_AUTENTICACION} from '../../modulos/Autenticacion/constantes';

const dispatchToProps = (dispatch: Dispatch) => {
	return {
		accion: (payload: string) => dispatch(setContraseñaAccion(SET_CONTRASEÑA_AUTENTICACION, payload)),
		volverAtras: () => dispatch(atrasAccion()),
	}
}

export default connect(null, dispatchToProps)(ContraseñaContenedor);
