import { toast } from 'react-toastify';

export const toastError = error => {
    let message = null;
    if (typeof error === 'object' && error.message) {
        message = error.message;
    }
	if (message !== null && message !== 'undefined' && message !== '') {
		toast.error(message);
	}
};

export const toastSuccess = message => {
    if (message !== null && message !== 'undefined' && message !== '') {
		toast.success(message);
	}
};
