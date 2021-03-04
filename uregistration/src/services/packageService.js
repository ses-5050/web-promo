import axios from 'axios';
const PACKAGEMINMAX_API_BASE_URL="/api/ordersettings";
class PackageService{
    getPackageMinMax(social,service){
        return axios.get(PACKAGEMINMAX_API_BASE_URL+'/minmax/'+social+'/'+service);
    }
    createPackageMinMax(settngs){
        return axios.post(PACKAGEMINMAX_API_BASE_URL,settngs);
      
    }

    saveInsPackage(settngs){
        return axios.post(PACKAGEMINMAX_API_BASE_URL,settngs);
    }

    getPackageData(social,service){
        return axios.get(PACKAGEMINMAX_API_BASE_URL+'/'+social+'/'+service);
    }
}
export default new PackageService()