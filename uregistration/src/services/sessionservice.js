
import SessionKeystore from 'session-keystore'
class sessionServices{
    static store =null;
    
    static getsessionstore(){
        if(this.store==null){
            this.store=new SessionKeystore();
            return this.store;
        }else{
            return this.store;
        }
    }
}
export default new sessionServices()