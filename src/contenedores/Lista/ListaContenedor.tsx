import React, {FC, Fragment, useState} from 'react';
import ItemListaContenedor from './Componentes/ItemListaContenedor';
import {ItemListaResult} from '../../modulos/Lista/tipos';

import './estilo.css'

interface Props {
	datos: ItemListaResult[],
	nombre: string
}

export const ListaContenedor: FC<Props> = (props) => {

	const {datos, nombre} = props;

	const [mostrarSalir, setMostrarSalir] = useState(false);

	const click = () => {
		setMostrarSalir(!mostrarSalir);
	}

	return (
		<Fragment>
			<div className="menu">
				<div className="flex flex-vertical">
					<div onClick={click}>
						<span className="nombre">{nombre}</span>
						<img style={{marginLeft: '8px'}} src={mostrarSalir ? '/img/chevron2.png' : '/img/chevron1.png'}/>
					</div>
					{
						mostrarSalir ? (<div className="salir">Logout</div>): null
					}
				</div>
			</div>
			<div className="lista ">
				<div className="flex flex-center flex-vertical" style={{marginBottom: '110px', marginTop: '60px'}}>
					{
						datos.map((item, i) => {
							const {title, content, image, abrir} = item;
							return (
								<ItemListaContenedor key={i}
													 titulo={title}
													 contenido={content}
													 imagen={image}
													 abrir={abrir}/>
							)
						})
					}
				</div>
			</div>
			<div className="btn-mas">
				<div className="flex full-ancho flex-center">
					<button className="btn">ADD NEW</button>
				</div>
			</div>
		</Fragment>


	)

}
