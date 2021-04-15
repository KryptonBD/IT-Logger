import {
    GET_LOGS,
    SET_LOADING,
    LOGS_ERROR,
    ADD_LOG,
    DELETE_LOG,
    UPDATE_LOG,
    SEARCH_LOGS,
    SET_CURRENT,
    CLEAR_CURRENT
} from './types';

// Get logs from server
export const getLogs = () => async dispatch => {
    try {
        setLoading();
        const res = await fetch("/logs");
        const data = await res.json();

        dispatch({
            type: GET_LOGS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: LOGS_ERROR,
            payload: error.response.data
        })

    }

}

//set loading true
export const setLoading = () => {
    return {
        type: SET_LOADING
    }
}