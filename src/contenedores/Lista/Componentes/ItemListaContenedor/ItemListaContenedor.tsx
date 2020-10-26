import React, {FC} from 'react';

import './estilo.css'

interface Props {
	titulo?: string;
	contenido?: string;
	imagen?: string;
	abrir?: boolean;
}

export const ItemListaContenedor: FC<Props> = (props) => {

	const {
		titulo = 'Title',
		imagen = '/img/image.png',
		abrir = false,
		contenido = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
					 incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. quis nostrud exercitation ullamco 
					 laboris nisi ut aliquip ex ea commodo consequat.`
	} = props;

	console.log(abrir)

	return (
		<div className="item-lista">
			<div className="flex">
				<img className="img" src={imagen}/>
				<div style={{maxWidth: '200px', width: '100%'}}>
					<p className="titulo">{titulo}</p>
					<p className={abrir ? 'cuerpo' : 'cuerpo cerrar'}>{contenido}</p>
				</div>
			</div>

		</div>
	)

}
