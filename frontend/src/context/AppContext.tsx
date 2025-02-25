import React from "react";
import { useQuery } from "@tanstack/react-query";
import * as UserApi from "../api/authAPI";

type AppContext = {
    isLoggedIn: boolean,
}

const AppContext = React.createContext<AppContext | undefined>(undefined)

export const AppContextProvider = ({children}:{children: React.ReactNode}) => {
    const { isError } = useQuery({
        queryKey: ["validateToken"], // Query key can be an array or string
        queryFn: UserApi.validateToken, // The function to fetch data
        retry: false, // No retries on failure
    });

    return (
        <AppContext.Provider
            value={{
                isLoggedIn: !isError,
            }}
        >
            {children}
        </AppContext.Provider>
    );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useAppContext = () => {
    const context = React.useContext(AppContext);

    if (!context) {
        throw new Error("useAppContext must be used within a AppContextProvider");
    }

    return context as AppContext;
};
