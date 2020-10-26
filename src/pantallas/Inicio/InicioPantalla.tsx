import React, {FunctionComponent, useEffect} from 'react';
import ListaContenedor from '../../contenedores/Lista';
import {IListaEstado} from '../../modulos/Lista/tipos';

interface Props extends IListaEstado {
	obtenerDatos: () => void;
	nombre: string;
}

export const InicioPantalla: FunctionComponent<Props> = (props) => {

	const {datos, obtenerDatos, nombre} = props;

	useEffect(() => {
		if (datos.length === 0) {
			obtenerDatos();
		}
	}, [])

	return (
		<ListaContenedor nombre={nombre} datos={datos}/>
	)

}
