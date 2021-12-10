import {callsAPI} from "../Api/api";

const SET_CALLS_LIST = 'SET_CALLS_LIST';
const SET_CALLS_LIST_LENGTH = 'SET_CALLS_LIST_LENGTH';

const initialState = {
    calls: [],
    callsListLength: null,
}

const callsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_CALLS_LIST': {
            return {...state, calls: action.callsList}
        }
        case 'SET_CALLS_LIST_LENGTH': {
            return {...state, callsListLength: action.length}
        }
        default:
            return state;
    }
}


export const setCallsList = (callsList) => ({type: SET_CALLS_LIST, callsList});
export const setCallsListLength = (length) => ({type: SET_CALLS_LIST_LENGTH, length});

export const getCallsList = (fromDate, toDate) => async (dispatch) => {
    const response = await callsAPI.getCalls(fromDate, toDate);
    dispatch(setCallsList(response));
}

export default callsReducer