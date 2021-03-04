import axios from 'axios';
const ORDER_API_BASE_URL="/api/getoprice";
class orderService{
    getprices(social,service,count,user){
        return axios.get(ORDER_API_BASE_URL+'/'+social+'?service='+service+'&count='+count+'&user='+user);
    }

    getMinMax(){
        return axios.get(ORDER_API_BASE_URL);
    }
    
    saveorder(order){
        return axios.post(ORDER_API_BASE_URL,order);
    }

    getOrderData(){
        return axios.get(ORDER_API_BASE_URL+'/allorders');
    }

    confirmOrder(oid){
        return axios.get(ORDER_API_BASE_URL+'/confirm/'+oid);
    }

    stopOrder(oid){
        return axios.get(ORDER_API_BASE_URL+'/stop/'+oid);
    }

    endOrder(oid){
        return axios.get(ORDER_API_BASE_URL+'/end/'+oid);
    }

    createPackageMinMax(settngs){
        return axios.post(ORDER_API_BASE_URL,settngs);
    }

    saveInsPackage(settngs){
        return axios.post(ORDER_API_BASE_URL,settngs);
    }

    getPackageData(social,service){
        return axios.get(ORDER_API_BASE_URL+'/'+social+'/'+service);
    }
    
}
export default new orderService()