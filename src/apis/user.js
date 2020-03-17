import axiosService from './axiosService';
import { API_ENDPOINT } from '../constants';

const url_res = 'api/auth/register';

export const registerUserApi = data => {
	return axiosService.post(`${API_ENDPOINT}${url_res}`, data);
};

const url_login = 'api/auth/login';
export const loginApi = data => {
	return axiosService.post(`${API_ENDPOINT}${url_login}`, data);
};

const url_get_user = 'api/user-info';
export const getUserInfoApi = (params) => {
	return axiosService.get(`${API_ENDPOINT}${url_get_user}?token=${params}`);
};

const url_update_profile = 'api/profile/update';
export const updateProfileApi = data => {
	return axiosService.post(`${API_ENDPOINT}${url_update_profile}`, data);
};
