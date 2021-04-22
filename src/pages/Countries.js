import React, { useContext } from 'react'
import DataTableCountries from '../components/DataTableCountries'
import { ContextProvider } from '../context/Context'
const Countries = () => {
    const { authenticated } = useContext(ContextProvider)
    return (
        authenticated ?
        <div className="content-wrapper">
        <DataTableCountries />
        </div>
        :
        window.location.href = "/login"
    )
}

export default Countries
