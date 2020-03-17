import * as Types from '../../constants/actionTypes';

export const fetchWords = () => {
    return {
        type: Types.FETCH_WORD
    }
};

export const fetchWordsSuccess = data => {
    return {
        type: Types.FETCH_WORD_SUCCESS,
        payload: {
            data
        }
    }
}

export const fetchWordsFailed = data => {
    return {
        type: Types.FETCH_WORD_FAILED,
        payload: {
            data
        }
    }
}