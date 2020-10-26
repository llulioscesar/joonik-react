import {Api} from '../../comun/Api';
import {AxiosRequestConfig, AxiosResponse} from 'axios';
import {IContraseña, IContraseñaResult, ICorreo, ICorreoResult} from './tipos';
import {apiConfig} from '../../comun/constantes';

export class AutenticacionApi extends Api {

	public constructor(config: AxiosRequestConfig) {
		super(config);
		this.validarCorreo = this.validarCorreo.bind(this);
		this.validarContraseña = this.validarContraseña.bind(this);
	}

	public validarCorreo(datos: ICorreo): Promise<ICorreoResult> {
		return this
			.post<ICorreoResult, ICorreo, AxiosResponse<ICorreoResult>>(`/login/email`, datos)
			.then((result: AxiosResponse<ICorreoResult>) => this.success(result));
	}

	public validarContraseña(datos: IContraseña, token: string): Promise<IContraseñaResult> {
		return this
			.post<IContraseñaResult, IContraseña, AxiosResponse<IContraseñaResult>>('/login/password', datos, {
				headers: {
					Authorization: `Bearer ${token}`

				}
			})
			.then((result: AxiosResponse<IContraseñaResult>) => this.success(result));
	}

}

const api = new AutenticacionApi(apiConfig);

export default api;
