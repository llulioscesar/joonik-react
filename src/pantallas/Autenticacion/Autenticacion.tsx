import React, {FunctionComponent, Fragment} from 'react';
import {CorreoContenedor, ContraseñaContenedor} from '../../contenedores'
import {IAutenticacionEstado} from '../../modulos/Autenticacion/tipos';

export const AutenticacionPantalla: FunctionComponent<IAutenticacionEstado> = (props) => {

	const {email, tempToken, token} = props;

	return (
		<Fragment>
			{
				tempToken === '' ? <CorreoContenedor email={email}/> : <ContraseñaContenedor email={email}/>
			}
		</Fragment>
	)

}
