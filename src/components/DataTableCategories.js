import React , { useState , useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import DataTable from 'react-data-table-component';
import API, { API_IMAGE } from '../api/axios'
const ExpandableComponent = ({ data }) => <div style={{ display : 'flex' , alignItems : 'center' , justifyContent : 'center' }}> <img alt="cat" style={{ width : 200 , height : 200 , marginTop : 10 , marginBottom : 10 , borderRadius : '50%' }} src={`${API_IMAGE}/${data.image}`} /> </div>;
const DataTableCategories = () => {
    const [categories , setCategories] = useState([])
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
    name: 'Description',
    selector: 'description',
    sortable: true,
  },
  {
    name: 'Show',
    cell: (row) => <i style={{ fontSize : 22 , color : 'blue' , cursor : 'pointer' }}
    className="fas fa-eye"
    onClick={() => history.push(`/category/${row.id}`)}
    >
 </i>,
    ignoreRowClick: true,
    allowOverflow: true,
    button: true,
  },
  {
    name: 'Edit',
    cell: (row) => <i style={{ fontSize : 22 , color : 'green' , cursor : 'pointer' }}
    className="fas fa-edit"
    onClick={() => history.push(`/category/edit/${row.id}`)}
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
    onClick={() => deleteCategory(row.id)}
    >
 </i>,
    ignoreRowClick: true,
    allowOverflow: true,
    button: true,
  },
];
    useEffect(() => {
        const categoriesAPI = () => {
          API.categoriesAPI().then(res => {
            setCategories(res.data)
            setLoading(true)
          }).catch(err => console.log(err.response.data))
        }
        categoriesAPI()
    } , [])
    const deleteCategory = (id) => {
      API.deleteCategory(id).then(res => {
        setCategories(categories.filter(category => category.id !== id))
      }).catch(err => {})
    }
    return (
      loading ?
      <div>
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <Link to="/category/add"><button className="btn btn-primary" style={{ fontSize : 22 }}>Add Category</button></Link>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                  <li className="breadcrumb-item active">Categories</li>
                </ol>
              </div>
            </div>
          </div>
        </section>
    
        <section className="content">
          <div className="container-fluid">
          <DataTable
        title="categories Data"
        columns={columns}
        data={categories}
        pagination={true}
        expandableRows
        expandableRowsComponent={<ExpandableComponent />}
        customStyles={customStyles}
      />
          </div>
        </section>
      </div>
      :
      <></>
    )
}

export default DataTableCategories
