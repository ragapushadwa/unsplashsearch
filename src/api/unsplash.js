import axios from 'axios'

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization:'Client-ID Yqv5lxb-Mup1dDHO9I9BQhCmOeTUnZe9kjgzE2CTabk'
    }
})
    
