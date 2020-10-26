import React, {FC, useState, ChangeEvent, useEffect} from 'react';

import './estilo.css'

interface Props{
	email: string;
	accion: (correo: string) => void;
}

export const CorreoContenedor: FC<Props> = (props: Props) => {

	const {accion, email} = props;

	useEffect(() => {
		setCorreo(email);
	}, [email]);

	const [correo, setCorreo] = useState('');

	const capturarCorreo = (e: ChangeEvent<HTMLInputElement>) => setCorreo(e.target.value);

	const onClick = () => {
		accion(correo);
	}

	return (
		<div className="flex flex-center full-alto full-ancho">
			<div className="correo-contenedor flex flex-center full-ancho">

				<label id="control" className="full-ancho"
					   style={{marginTop: '14px'}}>
					EMAIL
					<input type="email"
						   className="input full-ancho"
						   value={correo}
						   onChange={capturarCorreo}/>
				</label>

				<button className="btn"
						onClick={onClick}>
					NEXT
				</button>
			</div>
		</div>
	)

}
