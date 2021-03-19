import axios from 'axios'

export const API_URL = 'http://127.0.0.1:3333/api'

export const instance = axios.create({
    baseURL: API_URL
  });

const APIS = {
    login : async (userData)  => {
         return await instance.post('/login' , userData)
    },
}

export default APIS