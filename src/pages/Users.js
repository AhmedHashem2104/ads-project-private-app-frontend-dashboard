import React, { useContext } from 'react'
import DataTableUsers from '../components/DataTableUsers'
import { ContextProvider } from '../context/Context'
const Users = () => {
    const { authenticated } = useContext(ContextProvider)
    return (
        authenticated ?
        <div className="content-wrapper">
        <DataTableUsers />
        </div>
        :
        window.location.href = "/login"
    )
}

export default Users
