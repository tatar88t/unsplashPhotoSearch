
import * as axios from "axios";

const instance = axios.create({
    baseURL: "https://api.unsplash.com"
    }
)

export const unSplashAPI = {
    searchReq(query, ACCESS_KEY){
        return instance.get(`/search/photos?page=1&query=${query}&client_id=${ACCESS_KEY}`)
    }

}

