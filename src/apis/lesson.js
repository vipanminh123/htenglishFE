import axiosService from './axiosService';
import { API_ENDPOINT } from '../constants';

const url = 'api/lessons';

export const getAllLessonApi = () => {
	return axiosService.get(`${API_ENDPOINT}${url}`);
};

export const getLessonDetailApi = (alias) => {
	return axiosService.get(`${API_ENDPOINT}${url}/${alias}`);
};
