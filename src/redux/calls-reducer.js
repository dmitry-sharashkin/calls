import {callsAPI} from "../Api/api";

const SET_CALLS_LIST = 'SET_CALLS_LIST';

const initialState = {
    calls: [
        {
            contact_company: "",
            contact_name: "",
            date: "2021-11-28 07:41:21",
            date_notime: "2021-11-28",
            from_extension: "",
            from_number: "781**71**",
            id: "4211016",
            in_out: "1",
            line_number: "sip**se**",
            partnership_id: "136",
            person_avatar: "https://lk.skilla.ru/img/noavatar.jpg",
            person_id: "650",
            person_name: "Артур",
            person_surname: "К.",
            record: "",
            status: "Не дозвонился",
            time: "0",
            to_extension: "101",
            to_number: "sip**te**"
        },
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