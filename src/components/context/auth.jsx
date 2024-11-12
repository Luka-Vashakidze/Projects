import { createContext, useEffect, useState } from "react";

const AuthContext=createContext(null);

const AuthProvider=({children})=>{

    const [globalUsername, setGlobalUsername]=useState("")
    const [auth, setAuth]=useState(false)
    
    useEffect(()=>{
        const checkUser=localStorage.getItem("username")
        const auth=localStorage.getItem("auth")     
        if(checkUser && auth){
                setGlobalUsername(JSON.parse(checkUser))
                setAuth(JSON.parse(auth))
            }  
    }, []);

    useEffect(()=>{
        localStorage.setItem("username", JSON.stringify(globalUsername));
        localStorage.setItem('auth', JSON.stringify(auth))
    }, [globalUsername, auth]);

    const Login=(parameter)=>{
        console.log(parameter)
        setGlobalUsername(parameter)
        setAuth(true)
    }
    const Logout=()=>{
        setGlobalUsername("parameter")
        setAuth(false)
    }


    return(
        <AuthContext.Provider value={{globalUsername, auth, setAuth, Login, Logout, }}>
            {children}
        </AuthContext.Provider>
    )
}


export { AuthContext, AuthProvider,};