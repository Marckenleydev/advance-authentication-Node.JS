import React from "react";
import { useQuery } from "react-query";
import * as UserApi from "../api/authAPI";


type AppContext = {
    isLoggedIn: boolean,
}

const AppContext = React.createContext<AppContext | undefined>(undefined)

export const AppContextProvider = ({children}:{children: React.ReactNode})=>{
    const {isError} = useQuery("validateToken", UserApi.validateToken,{
        retry:false
    })
    return(
        <AppContext.Provider
         value={{
            isLoggedIn:!isError,
         }}>
           
            {children}
        </AppContext.Provider>
    )

}

// eslint-disable-next-line react-refresh/only-export-components
export const useAppContext = ()=>{
    const context = React.useContext(AppContext)
    
    return context as AppContext
}