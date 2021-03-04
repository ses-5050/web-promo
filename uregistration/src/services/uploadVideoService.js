import axios from 'axios';
// import http from "../http-common";
const UPLOAD_BASE_URL = "/api/uploadvideo";
const UPLOADTOYOUTUBE_BASE_URL = "/api/ytvideo";
class uploadVideoService {
    upload(userId,category,name,duration,hashtag,thumbnail,video, onUploadProgress) {
        let formData = new FormData();

        formData.append("category", category);
        formData.append("vname", name);
        formData.append("duration", duration);
        formData.append("hashtag", hashtag);
        formData.append("thumbnail", thumbnail);
        formData.append("video", video);
        formData.append("psource", "Video Upload");

        return axios.post(UPLOAD_BASE_URL+'/'+userId, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
            onUploadProgress,
        });
    }

    getAllVideos(userId){
        return axios.get(UPLOAD_BASE_URL);
    }

    uploadVideo(order){
        return axios.get(UPLOADTOYOUTUBE_BASE_URL+'/'+order);
    }

    deleteVideo(order){
        return axios.delete(UPLOADTOYOUTUBE_BASE_URL+'/'+order);
    }

}
export default new uploadVideoService()