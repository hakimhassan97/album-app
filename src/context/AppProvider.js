import React,{ createContext,useContext, useState, useEffect } from "react";
import { getAlbum } from "../utils";


export const AppContext = createContext(null);

function AppProvider(props){

    const [albums, setAlbums] = useState([])

    useEffect(async()=>{
        let allAlbum = await getAlbum()
        setAlbums(allAlbum)
    }, [])

    return (
        <AppContext.Provider 
        value= {{
            user:{username: 'hakim'},
            albums
        }}
        >
            {props.children}
        </AppContext.Provider>
    )
}

export default AppProvider


