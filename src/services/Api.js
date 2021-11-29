import axios from "axios";

export default function createAxiosInstance() {

    const instance = axios.create({
        baseURL: 'http://127.0.0.1:8000/api/',
        //timeout: 1000,
        headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }
      });
    
    return instance;
      
}


// let webApiUrl = 'example.com/getStuff';
// let tokenStr = 'xxyyzz';
// axios.get(webApiUrl, { headers: {"Authorization" : `Bearer ${tokenStr}`} });