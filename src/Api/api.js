import axios from "axios";

const instance = axios.create({
    baseURL: 'https://api.skilla.ru/mango'
})
instance.defaults.headers.common['Authorization'] = `Bearer qwerty123`


export const callsAPI = {
    getCalls(){
        return  instance.post(`/getList?date_start=2021-11-28&date_end=2021-11-30&in_out=1`).then(res => res.data)
        console.log('s')
    },

}
// instance.post(`/getList?2021-11-28&2021-11-28`).then(res => res.data)
// console.log(res)