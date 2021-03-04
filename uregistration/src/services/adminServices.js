import axios from 'axios';
const LOGIN_API_BASE_URL="/api/alogin";
class adminServices{
    // getUsers(){
    //     return axios.get(USER_API_BASE_URL);
    // }

    // createUser(user){
    //     return axios.post(USER_API_BASE_URL,user);
    // }
    
    // updateUser(user,userId){
    //     return axios.put(USER_API_BASE_URL+'/'+userId,user);
    // }

    logIn(user){
        return axios.post(LOGIN_API_BASE_URL,user);
    }
    
}
export default new adminServices()