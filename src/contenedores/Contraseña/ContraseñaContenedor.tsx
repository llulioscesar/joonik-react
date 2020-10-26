import React, {FC, useState, ChangeEvent} from 'react';

import './estilo.css'


interface Props {
	email: string;
	accion: (contraseña: string) => void;
	volverAtras: () => void;
}

export const ContraseñaContenedor: FC<Props> = (props) => {

	const {email, accion, volverAtras} = props;

	const [contraseña, setContraseña] = useState('');

	const capturarContraseña = (e: ChangeEvent<HTMLInputElement>) => setContraseña(e.target.value);

	const onClick = () => {
		accion(contraseña);
	}

	const atras = () => {
		volverAtras();
	}

	return (
		<div className="flex flex-center full-alto full-ancho">

			<button className="btn-atras" onClick={atras}>
				<img src="/img/left-chevron.png" alt=""/>
			</button>

			<div className="correo-contenedor flex flex-center full-ancho">

				<span id="correo">{email}</span>

				<label id="control"
					   className="full-ancho">
					PASSWORD
					<input type="password"
						   className="input full-ancho"
						   onChange={capturarContraseña}/>
				</label>

				<label id="sesion" className="full-ancho">
					<input type="checkbox" id="checkSesion"/>
					<span/>
				</label>

				<button className="btn"
						onClick={onClick}>
					SIGN IN
				</button>
			</div>
		</div>
	)

}
