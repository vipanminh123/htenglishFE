import axiosService from './axiosService';
import { API_ENDPOINT } from '../constants';

const url = 'api/words';

export const getAllWordApi = () => {
	return axiosService.get(`${API_ENDPOINT}${url}`);
};

const url_out_storage = 'api/words/storage/out';
export const getAllWordOutStorageApi = (data) => {
	return axiosService.post(`${API_ENDPOINT}${url_out_storage}`, data);
};

const url_add_to_storage = 'api/words/storage/add';
export const addWordToStorageApi = (data) => {
	return axiosService.post(`${API_ENDPOINT}${url_add_to_storage}`, data);
};

const url_storage = 'api/words/storage';
export const getAllWordInStorageApi = (data) => {
	return axiosService.post(`${API_ENDPOINT}${url_storage}`, data);
};

const url_remove_from_storage = 'api/words/storage/remove';
export const removeWordFromStorageApi = (data) => {
	return axiosService.post(`${API_ENDPOINT}${url_remove_from_storage}`, data);
};

const url_learn = 'api/words/learn';
export const getWordToLearnApi = (data) => {
	return axiosService.post(`${API_ENDPOINT}${url_learn}`, data);
};
