import { createContext } from "react";
import { useListImage } from "../states/store.state";
import { getImagesByType, getImagesSearchApi } from "../api/images.api";

export const ImageContext = createContext();

export const ImageContextProvider = ({children}) =>{

    const { setList, setLoading } = useListImage();

    const loadSearch = async(type, search)=>{
        setLoading(true);
        setList([]);
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

    const context = {loadSearch, loadHome};
    
    return (
        <ImageContext.Provider value={context}>
            {children}
        </ImageContext.Provider>
    );
}