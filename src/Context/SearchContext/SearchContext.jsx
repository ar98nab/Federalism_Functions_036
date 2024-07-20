import { useState } from "react";
import { createContext } from "react";

export const searchContext=createContext()


export const SearchContextProvider=({children})=>{
    const [search,setSearch]=useState("")

    return (
        <searchContext.Provider  value={{search,setSearch}}>
            {children}
        </searchContext.Provider>
    )

}