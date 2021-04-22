import React , { useState , useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import DataTable from 'react-data-table-component';
import API from '../api/axios'
const DataTableCountries = () => {
    const [countries , setCountries] = useState([])
    const [loading , setLoading] = useState(false)
    let history = useHistory()
    const customStyles = {
      rows: {
        style: {
         fontSize : 17
        }
      },
      headCells: {
        style: {
          fontSize: 20,
        },
      },
      cells: {
        style: {
          fontSize : 17
        },
      },
    };
const columns = [
  {
    name: 'ID',
    selector: 'id',
    sortable: true,
  },
  {
    name: 'Name',
    selector: 'name',
    sortable: true,
  },
  {
    name: 'ISO',
    selector: 'iso',
    sortable: true,
  },
  {
    name: 'Code',
    selector: 'code',
    sortable: true,
  },
  {
    name: 'Edit',
    cell: (row) => <i style={{ fontSize : 22 , color : 'green' , cursor : 'pointer' }}
    className="fas fa-edit"
    onClick={() => history.push(`/country/edit/${row.id}`)}
    >
 </i>,
    ignoreRowClick: true,
    allowOverflow: true,
    button: true,
  },
  {
    name: 'Remove',
    cell: (row) => <i style={{ fontSize : 22 , color : 'red' , cursor : 'pointer' }}
    className="fas fa-trash"
    onClick={() => deleteCountry(row.id)}
    >
 </i>,
    ignoreRowClick: true,
    allowOverflow: true,
    button: true,
  },
];
    useEffect(() => {
        const countriesAPI = () => {
          API.countriesAPI().then(res => {
            setCountries(res.data)
            setLoading(true)
          }).catch(err => console.log(err.response.data))
        }
        countriesAPI()
    } , [])
    const deleteCountry = (id) => {
      API.deleteCountry(id).then(res => {
        setCountries(countries.filter(country => country.id !== id))
      }).catch(err => {})
    }
    return (
      loading ?
      <div>
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <Link to="/country/add"><button className="btn btn-primary" style={{ fontSize : 22 }}>Add Country</button></Link>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                  <li className="breadcrumb-item active">Countries</li>
                </ol>
              </div>
            </div>
          </div>
        </section>
    
        <section className="content">
          <div className="container-fluid">
          <DataTable
        title="countries Data"
        columns={columns}
        data={countries}
        pagination={true}
        customStyles={customStyles}
      />
          </div>
        </section>
      </div>
      :
      <></>
    )
}

export default DataTableCountries
