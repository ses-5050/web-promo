import axios from 'axios';
const SOCIALMEDIA_API_BASE_URL="/api/socialengage";
class socialmediaServices{
    getFacebookPageLike(user,service){
        return axios.get(SOCIALMEDIA_API_BASE_URL+'/'+user+'/'+service);
    }
    addFacebookLike(fblike){
        return axios.post(SOCIALMEDIA_API_BASE_URL,fblike);
    }
    getServiceById(socialmediaId){
        return axios.get(SOCIALMEDIA_API_BASE_URL+'/'+socialmediaId);
    }
    updateService(socialmedia,socialmediaId){
        return axios.put(SOCIALMEDIA_API_BASE_URL+'/'+socialmediaId,socialmedia);
    }
    
}
export default new socialmediaServices()