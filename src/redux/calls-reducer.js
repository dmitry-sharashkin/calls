import {callsAPI} from "../Api/api";

const SET_CALLS_LIST = 'SET_CALLS_LIST';
const SET_RECORD = 'SET_RECORD';

const initialState = {
    calls: [],
    record: null,
}

const callsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_CALLS_LIST': {
            return {...state, calls: action.callsList}
        }
        case 'SET_RECORD': {
            return {...state, record: action.record}
        }
        default:
            return state;
    }
}


export const setCallsList = (callsList) => ({type: SET_CALLS_LIST, callsList});
export const setRecord = (record) => ({type: SET_RECORD, record});

export const getCallsList = (fromDate, toDate) => async (dispatch) => {
    const response = await callsAPI.getCalls(fromDate, toDate);
    dispatch(setCallsList(response));
}
window.AudioContext = window.AudioContext || window.webkitAudioContext;
let context = new AudioContext();

function playSound(buffer) {
    let source = context.createBufferSource(); // creates a sound source
    source.buffer = buffer;                    // tell the source which sound to play
    source.connect(context.destination);       // connect the source to the context's destination (the speakers)
    source.start(0);

}

export const getRecord = (a, b) => async (dispatch) => {
    const response = await callsAPI.getRecord(a, b);
    console.log(response)
    dispatch(setRecord(response));
}

export default callsReducer