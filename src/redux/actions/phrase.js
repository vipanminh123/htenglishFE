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
// --------------------------------------------------------
export const fetchPhraseOutStorage = token => {
    return {
        type: Types.FETCH_PHRASE_OUT_STORAGE,
        payload: {
            token
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
// --------------------------------------------------------
export const fetchPhraseInStorage = token => {
    return {
        type: Types.FETCH_PHRASE_IN_STORAGE,
        payload: {
            token
        }
    }
};

export const fetchPhraseInStorageSuccess = data => {
    return {
        type: Types.FETCH_PHRASE_IN_STORAGE_SUCCESS,
        payload: {
            data
        }
    }
}

export const fetchPhraseInStorageFailed = error => {
    return {
        type: Types.FETCH_PHRASE_IN_STORAGE_FAILED,
        payload: {
            error
        }
    }
}
// -------------------------------------------------------------------
export const addPhraseToStorage = ({token, id}) => {
    return {
        type: Types.ADD_PHRASE_TO_STORAGE,
        payload: {
            token,
            id
        }
    }
};

export const addPhraseToStorageSuccess = data => {
    return {
        type: Types.ADD_PHRASE_TO_STORAGE_SUCCESS,
        payload: {
            data
        }
    }
}

export const addPhraseToStorageFailed = error => {
    return {
        type: Types.ADD_PHRASE_TO_STORAGE_FAILED,
        payload: {
            error
        }
    }
}
// -------------------------------------------------------------------
export const removePhraseFromStorage = ({token, id}) => {
    return {
        type: Types.REMOVE_PHRASE_FROM_STORAGE,
        payload: {
            token,
            id
        }
    }
};

export const removePhraseFromStorageSuccess = data => {
    return {
        type: Types.REMOVE_PHRASE_FROM_STORAGE_SUCCESS,
        payload: {
            data
        }
    }
}

export const removePhraseFromStorageFailed = error => {
    return {
        type: Types.REMOVE_PHRASE_FROM_STORAGE_FAILED,
        payload: {
            error
        }
    }
}
// --------------------------------------------------------
export const fetchPhraseToLearn = token => {
    return {
        type: Types.FETCH_PHRASE_TO_LEARN,
        payload: {
            token
        }
    }
};

export const fetchPhraseToLearnSuccess = data => {
    return {
        type: Types.FETCH_PHRASE_TO_LEARN_SUCCESS,
        payload: {
            data
        }
    }
}

export const fetchPhraseToLearnFailed = error => {
    return {
        type: Types.FETCH_PHRASE_TO_LEARN_FAILED,
        payload: {
            error
        }
    }
}