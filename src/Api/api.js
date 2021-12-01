import axios from "axios";

const instance = axios.create({
    baseURL: 'https://api.skilla.ru/mango'
})
instance.defaults.headers.common['Authorization'] = `Bearer qwerty123`


export const callsAPI = {
    getCalls(fromDate='2021-11-25',toDate='2021-11-28'){
        return  instance.post(`/getList?date_start=${fromDate}&date_end=${toDate}`).then(res => res.data)
    },

}
// instance.post(`/getList?2021-11-28&2021-11-28`).then(res => res.data)
// console.log(res)