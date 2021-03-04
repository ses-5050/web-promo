import axios from 'axios';
const EARNING_API_BASE_URL="/api/earnings";
class earningService{
    getSocialEarning(social){
        return axios.get(EARNING_API_BASE_URL+'/'+social);
    }

    getUserSocialEarning(social){
        return axios.get(EARNING_API_BASE_URL+'/user/'+social);
    }
    
}
export default new earningService()