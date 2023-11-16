import { createContext } from "react";
import { useImage, useListImage } from "../states/store.state";
import { getImageIdApi, getImagesByType, getImagesSearchApi } from "../api/images.api";

export const ImageContext = createContext();

export const ImageContextProvider = ({children}) =>{

    const { setList, setLoading } = useListImage();
    const { setImage, setLoadingImage } = useImage();

    const loadSearch = async(type, search)=>{
        setList([]);
        setLoading(true);
        const resp = await getImagesSearchApi(type, search);
        setList(resp);
        setLoading(false);
    }
    
    const loadHome = async(type)=>{
        setList([]);
        setLoading(true);
        const resp = await getImagesByType(type);
        setList(resp);
        setLoading(false);
    }

    const loadImageId = async(id)=>{
        setImage(null)
        setLoadingImage(true);
        const resp = await getImageIdApi(id);
        setImage(resp)
        setLoadingImage(false);
    }

    const context = {loadSearch, loadHome, loadImageId};
    
    return (
        <ImageContext.Provider value={context}>
            {children}
        </ImageContext.Provider>
    );
}