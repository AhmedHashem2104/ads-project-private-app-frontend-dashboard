import React, { useContext } from 'react'
import DataTableCategories from '../components/DataTableCategories'
import { ContextProvider } from '../context/Context'
const Categories = () => {
    const { authenticated } = useContext(ContextProvider)
    return (
        authenticated ?
        <div className="content-wrapper">
        <DataTableCategories />
        </div>
        :
        window.location.href = "/login"
    )
}

export default Categories
