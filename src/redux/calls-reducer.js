import {callsAPI} from "../Api/api";

const SET_CALLS_LIST = 'SET_CALLS_LIST';

const initialState = {
    calls: [

    ],
}

const callsReducer = (state = initialState, action) => {
    switch (action.type){
        case 'SET_CALLS_LIST':{
            return {...state, calls: action.callsList}
        }
        default:
            return state;
    }
}


export const setCallsList = (callsList) => ({type: SET_CALLS_LIST, callsList});
//fromDate,toDate
export const getCallsList = () => async (dispatch) => {

    const response = await callsAPI.getCalls('2021-11-28','2021-11-28');
    dispatch(setCallsList(response ));
}

export default callsReducer