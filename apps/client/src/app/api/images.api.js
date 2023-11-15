import axios from 'axios';

export const getImagesByType = async(type)=>{
    try {
        const resp = await axios({
            method: 'get',
            url: import.meta.env.VITE_URL_API,
            params: {
                key: import.meta.env.VITE_KEY,
                image_type: type
            }
        });     
        return resp.data.hits
    } catch (error) {
        return []
    }
}

export const getImagesSearchApi = async(type, search)=>{
    try {
        const resp = await axios({
            method: 'get',
            url: import.meta.env.VITE_URL_API,
            params: {
                key: import.meta.env.VITE_KEY,
                image_type: type,
                q: search
            }
        });     
        return resp.data.hits
    } catch (error) {
        return []
    }
}

export const getImageIdApi = async(id)=>{
    try {
        const resp = await axios({
            method: 'get',
            url: import.meta.env.VITE_URL_API,
            params: {
                key: import.meta.env.VITE_KEY,                
                id
            }
        });     
        return resp.data.hits
    } catch (error) {
        return []
    }
}