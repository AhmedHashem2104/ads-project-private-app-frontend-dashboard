import React , { useState , useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import API from '../api/axios'
const DataTable = () => {
    const [users , setUsers] = useState([])
    let history = useHistory()
    useEffect(() => {
        const usersAPI = () => {
          API.usersAPI().then(res => setUsers(res.data)).catch(err => console.log(err.response.data))
        }
        usersAPI()
    } , [])
    const deleteUSer = (id) => {
      API.deleteUser(id).then(res => {
        setUsers(users.filter(user => user.id !== id))
      }).catch(err => {})
    }
    return (
        <div className="content-wrapper">
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Users DataTables</h1>
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
            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-header">
                    <h3 className="card-title">Users Data</h3>
                  </div>
                  <div className="card-body">
                    <table id="example2" className="table table-bordered table-hover">
                      <thead>
                      <tr>
                        <th>Username</th>
                        <th>Nickname</th>
                        <th>Email</th>
                        <th>Created At</th>
                        <th>Show</th>
                        <th>Edit</th>
                        <th>Delete</th>
                      </tr>
                      </thead>
                      <tbody>
                      {
                        users.map((value , key) => {
                          let date = new Date(value.created_at)
                          date = date.getDate()+
                          "/"+(date.getMonth()+1)+
                          "/"+date.getFullYear()+
                          " "+date.getHours()+
                          ":"+date.getMinutes()+
                          ":"+date.getSeconds()
                        return <tr key={key}>
                          <td>{value.username}</td>
                          <td>{value.nickname}</td>
                          <td>{value.email}</td>
                          <td>{date}</td>
                          <td style={{ textAlign : 'center' }}>
                            <i style={{ fontSize : 22 , color : 'blue' , cursor : 'pointer' }}
                               className="fas fa-eye"
                               onClick={() => history.push(`/user/${value.id}`)}
                               >
                            </i>
                            </td>
                          <td style={{ textAlign : 'center' }}>
                            <i style={{ fontSize : 22 , color : 'green' , cursor : 'pointer' }}
                               className="fas fa-edit"
                               onClick={() => history.push(`/user/edit/${value.id}`)}
                               >
                            </i>
                            </td>
                          <td style={{ textAlign : 'center' }}>
                            <i style={{ fontSize : 22 , color : 'red' , cursor : 'pointer' }}
                               className="fas fa-trash"
                               onClick={() => deleteUSer(value.id)}
                               >
                            </i>
                            </td>
                        </tr>
                        })
                      }
                      </tbody>
                      <tfoot>
                      <tr>
                        <th>Username</th>
                        <th>Nickname</th>
                        <th>Email</th>
                        <th>Created At</th>
                        <th>Show</th>
                        <th>Edit</th>
                        <th>Delete</th>
                      </tr>
                      </tfoot>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
}

export default DataTable
