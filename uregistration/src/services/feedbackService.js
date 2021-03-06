import axios from 'axios';
const FEEDBACK_API_BASE_URL="/api/userfeedback";
class feedbackService{
    SaveFeedback(userId,details){
        return axios.post(FEEDBACK_API_BASE_URL+'/'+userId,details);
    }

    getFeedbacks(){
        return axios.get(FEEDBACK_API_BASE_URL+'/all');
    }

    SendFeedbackResponse(details){
        return axios.post(FEEDBACK_API_BASE_URL+'/send',details);
    }
    
    
}
export default new feedbackService()