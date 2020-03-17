import * as Types from '../../constants/actionTypes';

export const fetchPhrases = () => {
    return {
        type: Types.FETCH_PHRASE
    }
};

export const fetchPhrasesSuccess = data => {
    return {
        type: Types.FETCH_PHRASE_SUCCESS,
        payload: {
            data
        }
    }
}

export const fetchPhrasesFailed = data => {
    return {
        type: Types.FETCH_PHRASE_FAILED,
        payload: {
            data
        }
    }
}

export const fetchPhraseOutStorage = ({token, filter}) => {
    return {
        type: Types.FETCH_PHRASE_OUT_STORAGE,
        payload: {
            token,
            filter
        }
    }
};

export const fetchPhraseOutStorageSuccess = data => {
    return {
        type: Types.FETCH_PHRASE_OUT_STORAGE_SUCCESS,
        payload: {
            data
        }
    }
}

export const fetchPhraseOutStorageFailed = error => {
    return {
        type: Types.FETCH_PHRASE_OUT_STORAGE_FAILED,
        payload: {
            error
        }
    }
}