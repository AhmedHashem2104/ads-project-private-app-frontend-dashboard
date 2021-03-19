import React , { createContext , useState , useEffect } from 'react'
// import API from '../api/axios'
export const ContextProvider = createContext()

function Context({children}) {
    
    const [authenticated , setAuthenticated] = useState(false)

    const [loading , setLoading] = useState(false)

    const checkAuthority = () => {
        localStorage.getItem("token") ? setAuthenticated(true) : setAuthenticated(false)
        setLoading(true)
    }

    useEffect(() => {
        checkAuthority()
    } , [])

    return (
        loading ?
        <ContextProvider.Provider value={{ authenticated , setAuthenticated }}>
            {children}
        </ContextProvider.Provider>
        :
        <></>
    )
}

export default Context
