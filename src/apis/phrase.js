import axiosService from './axiosService';
import { API_ENDPOINT } from '../constants';

const url = 'api/phrases';

export const getAllPhraseApi = () => {
	return axiosService.get(`${API_ENDPOINT}${url}`);
};

const url_out_storage = 'api/phrases/storage/out';
export const getAllPhraseOutStorageApi = (data) => {
	return axiosService.post(`${API_ENDPOINT}${url_out_storage}`, data);
};

const url_add_to_storage = 'api/phrases/storage/add';
export const addPhraseToStorageApi = (data) => {
	return axiosService.post(`${API_ENDPOINT}${url_add_to_storage}`, data);
};

const url_storage = 'api/phrases/storage';
export const getAllPhraseInStorageApi = (data) => {
	return axiosService.post(`${API_ENDPOINT}${url_storage}`, data);
};

const url_remove_from_storage = 'api/phrases/storage/remove';
export const removePhraseFromStorageApi = (data) => {
	return axiosService.post(`${API_ENDPOINT}${url_remove_from_storage}`, data);
};

const url_learn = 'api/phrases/learn';
export const getPhraseToLearnApi = (data) => {
	return axiosService.post(`${API_ENDPOINT}${url_learn}`, data);
};
