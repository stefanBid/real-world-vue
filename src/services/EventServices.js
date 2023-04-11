import axios from 'axios'

const apiClient = axios.create({
    baseURL:'https://my-json-server.typicode.com/stefanBid/eventsDB',
    withCredentials:false,
    headers:{
        Accept:'application/json',
        'Content-Type': 'application.json',
    }
})

export default{
    async getEvents(){
        return await apiClient.get('/events')
    },

    async getEventById(id){
        return await apiClient.get(`/events/${id}`)
    }
}