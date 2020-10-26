import React, {Fragment} from 'react';
import {AutenticacionPantalla} from './pantallas';
import InicioPantalla from './pantallas/Inicio';
import {connect} from 'react-redux';
import {IRootEstado} from './comun/tipos';

interface Props {
	sesion: boolean;
}

function App(props: Props) {

	const {sesion = false} = props;

	return (
		<Fragment>
			{!sesion ? (<AutenticacionPantalla/>) : (<InicioPantalla/>)}
		</Fragment>

	);
}

const mapState = (estado: IRootEstado) => {
	const {autenticacion} = estado;
	const {name} = autenticacion;
	return {
		sesion: name !== ''
	}
}

export default connect(mapState)(App);
