import * as Types from '../../constants/actionTypes';

export const fetchLessons = () => {
    return {
        type: Types.FETCH_LESSON
    }
};

export const fetchLessonsSuccess = data => {
    return {
        type: Types.FETCH_LESSON_SUCCESS,
        payload: {
            data
        }
    }
}

export const fetchLessonsFailed = data => {
    return {
        type: Types.FETCH_LESSON_FAILED,
        payload: {
            data
        }
    }
}

export const fetchLessonDetail = (alias) => {
    return {
        type: Types.FETCH_LESSON_DETAIL,
        payload: {
            alias
        }
    }
};

export const fetchLessonDetailSuccess = lesson => {
    return {
        type: Types.FETCH_LESSON_DETAIL_SUCCESS,
        payload: {
            lesson
        }
    }
}

export const fetchLessonDetailFailed = error => {
    return {
        type: Types.FETCH_LESSON_DETAIL_FAILED,
        payload: {
            error
        }
    }
}