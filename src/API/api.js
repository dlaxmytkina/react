import axios from "axios"


let instance = axios.create({
    withCredentials:true,
    baseURL : 'https://social-network.samuraijs.com/api/1.0/',
    headers: {'API-KEY':'2e1ce755-62d5-4f95-b502-99ddcd3e3d28'}
});

 export const getUsers = (currentPage, pageSize) => {

    return (
    
      instance.get(
        `users?page=${currentPage}&count=${pageSize}`
      ).then(response => response.data))
      
}
