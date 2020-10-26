import {AxiosRequestConfig, AxiosResponse} from 'axios';
import {Api} from '../../comun/Api';
import {ItemListaResult} from './tipos';

export class ListaApi extends Api {

	public constructor(config: AxiosRequestConfig) {
		super(config);
		this.ObtenerLista = this.ObtenerLista.bind(this);
	}

	public ObtenerLista(token: string): Promise<ItemListaResult[]> {
		return this
			.get<ItemListaResult[]>(`/posts`, {
				headers: {
					Authorization: `Bearer ${token}`
				}
			})
			.then((result: AxiosResponse<ItemListaResult[]>) => this.success(result));
	}

}
