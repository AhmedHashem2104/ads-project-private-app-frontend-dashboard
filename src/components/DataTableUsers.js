import React , { useState , useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import DataTable from 'react-data-table-component';
import API from '../api/axios'
const ExpandableComponent = ({ data }) => <div style={{ display : 'flex' , alignItems : 'center' , justifyContent : 'center' }}> <img style={{ width : 200 , height : 200 , marginTop : 10 , marginBottom : 10 , borderRadius : '50%' }} src="/ab.jpg" /> </div>;
const DataTableUsers = () => {
    const [users , setUsers] = useState([])
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
    name: 'Username',
    selector: 'username',
    sortable: true,
  },
  {
    name: 'Email',
    selector: 'email',
    sortable: true,
  },
  {
    name: 'Show',
    cell: (row) => <i style={{ fontSize : 22 , color : 'blue' , cursor : 'pointer' }}
    className="fas fa-eye"
    onClick={() => history.push(`/user/${row.id}`)}
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
    onClick={() => history.push(`/user/edit/${row.id}`)}
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
    onClick={() => deleteUSer(row.id)}
    >
 </i>,
    ignoreRowClick: true,
    allowOverflow: true,
    button: true,
  },
];
    useEffect(() => {
        const usersAPI = () => {
          API.usersAPI().then(res => {
            setUsers(res.data)
            setLoading(true)
          }).catch(err => console.log(err.response.data))
        }
        usersAPI()
    } , [])
    const deleteUSer = (id) => {
      API.deleteUser(id).then(res => {
        setUsers(users.filter(user => user.id !== id))
      }).catch(err => {})
    }
    return (
      loading ?
      <div>
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <Link to="/user/add"><button className="btn btn-primary" style={{ fontSize : 22 }}>Add User</button></Link>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                  <li className="breadcrumb-item active">Users</li>
                </ol>
              </div>
            </div>
          </div>
        </section>
    
        <section className="content">
          <div className="container-fluid">
          <DataTable
        title="Users Data"
        columns={columns}
        data={users}
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

export default DataTableUsers
