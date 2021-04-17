import axios from 'axios'

export const API_URL = 'http://127.0.0.1:3333/api/v1'

export const API_IMAGE = 'http://127.0.0.1:3333/uploads'

export const instance = axios.create({
    baseURL: API_URL
  });

const APIS = {
    login : async (userData)  => {
         return await instance.post('/login' , userData)
    },
    register : async (userData)  => {
      return await instance.post('/register' , userData)
 },
    homePageAds : async (requestType , number)  => {
      return await instance.get(`/${requestType}/${number}` , {
        headers : {
          'Authorization' : `Bearer ${localStorage.getItem("token")}`
        }
      })
 },
 usersAPI : async ()  => {
  return await instance.get(`/user` , {
    headers : {
      'Authorization' : `Bearer ${localStorage.getItem("token")}`
    }
  })
},
userAPI : async (id)  => {
  return await instance.get(`/user/${id}` , {
    headers : {
      'Authorization' : `Bearer ${localStorage.getItem("token")}`
    }
  })
},
deleteUser : async (id)  => {
  return await instance.delete(`/user/${id}` , {
    headers : {
      'Authorization' : `Bearer ${localStorage.getItem("token")}`
    }
  })
},
editUserAPI : async (id , userData)  => {
  return await instance.put(`/user/${id}` , userData , {
    headers : {
      'Authorization' : `Bearer ${localStorage.getItem("token")}`
    }
  })
}
}

export default APIS