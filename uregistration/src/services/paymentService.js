import axios from 'axios';
const FEEDBACK_API_BASE_URL="/api/payments";
class paymentService{
   
    generatePayment(){
        var config = {
            responseType: 'blob'
          };
        return axios.get(FEEDBACK_API_BASE_URL+'/topay',config);
    }

    getPending(){
        return axios.get(FEEDBACK_API_BASE_URL+'/pending');
    }
}
export default new paymentService()