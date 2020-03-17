import axiosService from './axiosService';
import { API_ENDPOINT } from '../constants';

const url = 'api/phrases';

export const getAllPhraseApi = () => {
	return axiosService.get(`${API_ENDPOINT}${url}`);
};

const url_out_storage = 'api/phrases/outstorage';
export const getAllPhraseOutStorageApi = (data) => {
	return axiosService.post(`${API_ENDPOINT}${url_out_storage}`, data);
};
