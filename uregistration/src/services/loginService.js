import axios from 'axios';
const USER_API_BASE_URL="/api/users";
class userServices{
    getUsers(){
        return axios.get(USER_API_BASE_URL);
    }
    createUser(user){
        return axios.post(USER_API_BASE_URL,user);
      
    }
    getUserById(userId){
        return axios.get(USER_API_BASE_URL+'/'+userId);
    }
    updateUser(user,userId){
        return axios.put(USER_API_BASE_URL+'/'+userId,user);
    }
    
}
export default new userServices()