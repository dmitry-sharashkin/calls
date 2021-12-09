import axios from "axios";

const instance = axios.create({
    baseURL: 'https://api.skilla.ru/mango'
})
instance.defaults.headers.common['Authorization'] = `Bearer qwerty123`


export const callsAPI = {
    getCalls(fromDate = '2021-12-09', toDate = '2021-12-09') {
        return instance.post(`/getList?date_start=${fromDate}&date_end=${toDate}`).then(res => res.data)
    }

}
// https://api.skilla.ru/mango/getRecord
//         ? record=<id записи>
//         & partnership_id=<id партнера>
//responseType: 'json',

// instance.post(`/getList?2021-11-28&2021-11-28`).then(res => res.data)
// console.log(res)


// 'Access-Control-Allow-Origin': "*",
// 'Access-Control-Allow-Methods': "POST, GET, OPTIONS, DELETE, PUT",
// 'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization'