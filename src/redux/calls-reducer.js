import {callsAPI} from "../Api/api";

const SET_CALLS_LIST = 'SET_CALLS_LIST';
const SET_FILTERED_CALLS_LIST = 'SET_FILTERED_CALLS_LIST';

const initialState = {
    calls: [

    ],
}

const callsReducer = (state = initialState, action) => {
    switch (action.type){
        case 'SET_CALLS_LIST':{
            return {...state, calls: action.callsList}
        }
        case 'SET_FILTERED_CALLS_LIST':{
            return {...state, calls: action.filteredCallsList}
        }
        default:
            return state;
    }
}


export const setCallsList = (callsList) => ({type: SET_CALLS_LIST, callsList});
export const setFilteredCallsList = (filteredCallsList) => ({type: SET_FILTERED_CALLS_LIST, filteredCallsList});
//fromDate,toDate
export const getCallsList = (fromDate,toDate) => async (dispatch) => {

    const response = await callsAPI.getCalls(fromDate,toDate);
    dispatch(setCallsList(response ));
}

export default callsReducer