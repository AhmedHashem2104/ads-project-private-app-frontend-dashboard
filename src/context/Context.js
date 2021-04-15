import React , { createContext , useState , useEffect } from 'react'
// import API from '../api/axios'
export const ContextProvider = createContext()

function Context({children}) {
    
    const [authenticated , setAuthenticated] = useState(false)

    const [loading , setLoading] = useState(false)

    const [username , setUsername] = useState('')

    const checkAuthority = () => {
        if(localStorage.getItem("token")){
            setUsername(localStorage.getItem("username"))
            setAuthenticated(true)
         }
         else{
            setUsername('')
             setAuthenticated(false)
         }
        setLoading(true)
    }

    useEffect(() => {
        checkAuthority()
    } , [])

    return (
        loading ?
        <ContextProvider.Provider value={{ authenticated , setAuthenticated , username }}>
            {children}
        </ContextProvider.Provider>
        :
        <></>
    )
}

export default Context
