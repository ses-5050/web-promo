import axios from 'axios';
const EARNING_API_BASE_URL="/api/points";
const USEREARNING_API_BASE_URL="/api/earnings";
class earningService{
    getTotalEarning(userId){
        return axios.get(EARNING_API_BASE_URL+'/'+userId+'/all');
    }

    getSocialEarning(userId){
        return axios.get(EARNING_API_BASE_URL+'/'+userId+'/social');
    }

    getVideoEarning(userId){
        return axios.get(EARNING_API_BASE_URL+'/'+userId+'/video');
    }

    getOtherEarning(userId){
        return axios.get(EARNING_API_BASE_URL+'/'+userId+'/other');
    }

    getPercent(userId){
        return axios.get(EARNING_API_BASE_URL+'/'+userId+'/limit');
    }

    getToday(userId){
        return axios.get(USEREARNING_API_BASE_URL+'/'+userId+'/today');
    }

    getYesterdayEarning(userId){
        return axios.get(USEREARNING_API_BASE_URL+'/'+userId+'/yesterday');
    }

    getWeekEarning(userId){
        return axios.get(USEREARNING_API_BASE_URL+'/'+userId+'/7day');
    }

    getMonthEarning(userId){
        return axios.get(USEREARNING_API_BASE_URL+'/'+userId+'/month');
    }

    getBalance(userId){
        return axios.get(USEREARNING_API_BASE_URL+'/'+userId+'/total');
    }
    
    
}
export default new earningService()