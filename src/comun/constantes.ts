import {AxiosRequestConfig} from 'axios';
import qs from 'qs';

export const API_BASE_URL = 'https://api.joonik.com';

export const apiConfig: AxiosRequestConfig = {
	timeout: 15000,
	baseURL: API_BASE_URL,
	headers: {
		common: {
			"Cache-Control": "no-cache, no-store, must-revalidate",
			Pragma: "no-cache",
			"Content-Type": "application/json",
			Accept: "application/json",
			Authorization: ''
		}
	},
	paramsSerializer: (params) => qs.stringify(params, {indices: false})
}
