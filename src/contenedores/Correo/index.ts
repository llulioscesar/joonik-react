import {CorreoContenedor} from './CorreoContenedor';
import {Dispatch} from 'redux';
import {ISetCorreoAutenticacionAccion} from '../../modulos/Autenticacion/tipos';
import {setCorreoAccion} from '../../modulos/Autenticacion/acciones';
import {SET_CORREO_AUTENTICACION} from '../../modulos/Autenticacion/constantes';
import {connect} from 'react-redux';

const dispathToProps = (dispatch: Dispatch) => {
	return {
		accion: (payload: string): ISetCorreoAutenticacionAccion => dispatch(setCorreoAccion(SET_CORREO_AUTENTICACION, payload))
	}
}

export default connect(null, dispathToProps)(CorreoContenedor);
