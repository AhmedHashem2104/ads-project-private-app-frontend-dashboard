import React , { useContext } from 'react'
import { ContextProvider } from '../context/Context'
// import API from '../api/axios'
import { Link } from 'react-router-dom'

function Header() {

    const { authenticated } = useContext(ContextProvider)
    
    return (
      <div>
        {
        !authenticated ?
      <div></div>
      :
      <></>
        }
      </div>
    )
}

export default Header
