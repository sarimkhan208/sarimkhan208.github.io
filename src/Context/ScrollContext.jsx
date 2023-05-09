import { createContext, useState } from "react";

export const ScrollContext = createContext()



export  const  ScrollContextProvider = ({children})=>{
    const [scrollRef,setScrollRef] = useState(null)
    return (<ScrollContext.Provider value={{scrollRef,setScrollRef}} >
            {children}
        </ScrollContext.Provider>)
}