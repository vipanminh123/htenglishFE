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
// --------------------------------------------------------
export const fetchWordOutStorage = token => {
    return {
        type: Types.FETCH_WORD_OUT_STORAGE,
        payload: {
            token
        }
    }
};

export const fetchWordOutStorageSuccess = data => {
    return {
        type: Types.FETCH_WORD_OUT_STORAGE_SUCCESS,
        payload: {
            data
        }
    }
}

export const fetchWordOutStorageFailed = error => {
    return {
        type: Types.FETCH_WORD_OUT_STORAGE_FAILED,
        payload: {
            error
        }
    }
}
// -------------------------------------------------------------------
export const addWordToStorage = ({token, id}) => {
    return {
        type: Types.ADD_WORD_TO_STORAGE,
        payload: {
            token,
            id
        }
    }
};

export const addWordToStorageSuccess = data => {
    return {
        type: Types.ADD_WORD_TO_STORAGE_SUCCESS,
        payload: {
            data
        }
    }
}

export const addWordToStorageFailed = error => {
    return {
        type: Types.ADD_WORD_TO_STORAGE_FAILED,
        payload: {
            error
        }
    }
}
// --------------------------------------------------------
export const fetchWordInStorage = token => {
    return {
        type: Types.FETCH_WORD_IN_STORAGE,
        payload: {
            token
        }
    }
};

export const fetchWordInStorageSuccess = data => {
    return {
        type: Types.FETCH_WORD_IN_STORAGE_SUCCESS,
        payload: {
            data
        }
    }
}

export const fetchWordInStorageFailed = error => {
    return {
        type: Types.FETCH_WORD_IN_STORAGE_FAILED,
        payload: {
            error
        }
    }
}
// -------------------------------------------------------------------
export const removeWordFromStorage = ({token, id}) => {
    return {
        type: Types.REMOVE_WORD_FROM_STORAGE,
        payload: {
            token,
            id
        }
    }
};

export const removeWordFromStorageSuccess = data => {
    return {
        type: Types.REMOVE_WORD_FROM_STORAGE_SUCCESS,
        payload: {
            data
        }
    }
}

export const removeWordFromStorageFailed = error => {
    return {
        type: Types.REMOVE_WORD_FROM_STORAGE_FAILED,
        payload: {
            error
        }
    }
}
// --------------------------------------------------------
export const fetchWordToLearn = token => {
    return {
        type: Types.FETCH_WORD_TO_LEARN,
        payload: {
            token
        }
    }
};

export const fetchWordToLearnSuccess = data => {
    return {
        type: Types.FETCH_WORD_TO_LEARN_SUCCESS,
        payload: {
            data
        }
    }
}

export const fetchWordToLearnFailed = error => {
    return {
        type: Types.FETCH_WORD_TO_LEARN_FAILED,
        payload: {
            error
        }
    }
}