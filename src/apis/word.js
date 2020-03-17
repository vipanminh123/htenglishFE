import axiosService from './axiosService';
import { API_ENDPOINT } from '../constants';

const url = 'api/words';

export const getAllWordApi = () => {
	return axiosService.get(`${API_ENDPOINT}${url}`);
};
