import axios from 'axios';
const USER_API_BASE_URL="/api/users";
const GOOGLEUSER_API_BASE_URL="/api/users/google";
const FACEBOOKUSER_API_BASE_URL="/api/gusers";
const LOGIN_API_BASE_URL="/api/login";
const USERREF_API_BASE_URL="/api/userref";
const PROFILE_API_BASE_URL="/api/profile";
class userServices{
    getUsers(){
        return axios.get(USER_API_BASE_URL);
    }
    createUser(user){
        return axios.post(USER_API_BASE_URL,user);
    }
    createRefUser(user){
        return axios.post(USERREF_API_BASE_URL,user);
    }

    uploadProfile(userId,thumbnail){
        let formData = new FormData();

        formData.append("primage", thumbnail);

        return axios.post(USER_API_BASE_URL+'/uploadprimage/'+userId, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            }
        });
    }

    getUserById(userId){
        return axios.get(USER_API_BASE_URL+'/'+userId);
    }

    sendVerificationEmail(userId){
        return axios.get(USER_API_BASE_URL+'/'+userId+'/verifyemail');
    }

    VerifyEmail(ref){
        return axios.post(USER_API_BASE_URL+'/'+ref+'/verifyemail');
    }

    updateUser(user,userId){
        return axios.put(USER_API_BASE_URL+'/'+userId,user);
    }

    logIn(user){
        return axios.post(LOGIN_API_BASE_URL,user);
      
    }

    googleLogIn(user){
        return axios.post(GOOGLEUSER_API_BASE_URL,user);
      
    }

    facebookLogIn(user){
        return axios.post(FACEBOOKUSER_API_BASE_URL,user);
      
    }

    getProfileCompletion(userId){
        return axios.get(PROFILE_API_BASE_URL+'/'+userId);
    }

    getEarnedPoints(userId){
        return axios.get(PROFILE_API_BASE_URL+'/detail/'+userId);
    }
    
}
export default new userServices()