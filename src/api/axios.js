import axios from 'axios'

export const API_URL = 'http://127.0.0.1:3333/api/v1'

export const API_IMAGE = 'http://127.0.0.1:3333/uploads'

export function removeExtension(filename){
var lastDotPosition = filename.lastIndexOf(".");
if (lastDotPosition === -1) return filename;
else return filename.substr(0, lastDotPosition);
}

export const instance = axios.create({
baseURL: API_URL
});

const APIS = {
login : async (data)  => {
return await instance.post('/login' , data)
},
register : async (data)  => {
return await instance.post('/register' , data)
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
editUserAPI : async (id , data)  => {
return await instance.put(`/user/${id}` , data , {
headers : {
'Authorization' : `Bearer ${localStorage.getItem("token")}`
}
})
},
addCategory : async (data)  => {
return await instance.post('/category' , data , {
headers : {
'Authorization' : `Bearer ${localStorage.getItem("token")}`
}
})
},
categoriesAPI : async ()  => {
return await instance.get(`/category` , {
headers : {
'Authorization' : `Bearer ${localStorage.getItem("token")}`
}
})
},
deleteCategory : async (id)  => {
return await instance.delete(`/category/${id}` , {
headers : {
'Authorization' : `Bearer ${localStorage.getItem("token")}`
}
})
},
categoryAPI : async (id)  => {
return await instance.get(`/category/${id}` , {
headers : {
'Authorization' : `Bearer ${localStorage.getItem("token")}`
}
})
},
editCategoryAPI : async (id , data)  => {
return await instance.put(`/category/${id}` , data , {
headers : {
'Authorization' : `Bearer ${localStorage.getItem("token")}`
}
})
},
}

export default APIS