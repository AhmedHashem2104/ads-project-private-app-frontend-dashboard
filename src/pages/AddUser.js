import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import APIS from '../api/axios'
import { ContextProvider } from '../context/Context'
const AddUser = () => {
    const { authenticated } = useContext(ContextProvider)
    const [username , setUsername] = useState('')
    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')
    const [passwordConfirmation , setPasswordConfirmation] = useState('')
    const [error , setError] = useState('')
    const [success , setSuccess] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('username' , username)
        formData.append('email' , email)
        formData.append('password' , password)
        formData.append('password_confirmation' , passwordConfirmation)
        APIS.register(formData).then((res) => {
          setError('')
          setSuccess(`User added successfully`)
          setUsername('')
          setEmail('')
          setPassword('')
          setPasswordConfirmation('')
        }).catch(err => {
            setSuccess('')
            setError(err.response.data.errors[0].message || err.response.data)
        })
    }
    return (
        authenticated ?
        <div className="content-wrapper">
            <section className="content-header">
            <div className="container-fluid">
                <div className="row mb-2">
                <div className="col-sm-6">
                    <h1>Add User</h1>
                </div>
                <div className="col-sm-6">
                    <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                    <li className="breadcrumb-item active">Add User</li>
                    </ol>
                </div>
                </div>
            </div>
            </section>


            <section className="content">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="card card-primary">
              <div className="card-header">
                <h3 className="card-title">Add User</h3>
              </div>
              <form metho="post" onSubmit={(e) => handleSubmit(e)}>
                <div className="card-body">
                <div className="form-group">
                    <label>Username</label>
                    <input type="text" className="form-control" placeholder="Enter username" value={username} onChange={(e) => setUsername(e.target.value)} />
                  </div>
                  <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
                  </div>
                  <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                  </div>
                  <div className="form-group">
                    <label>Password Confirmation</label>
                    <input type="password" className="form-control" placeholder="Password confirmation" value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} />
                  </div>
                  <div className="form-group">
                    {error ? <div className="alert alert-danger">{error}</div> : <></>}
                  </div>
                  <div className="form-group">
                    {success ? <div className="alert alert-success">{success}</div> : <></>}
                  </div>
                </div>
                <div className="card-footer">
                  <button type="submit" className="btn btn-primary">Add User</button>
                </div>
              </form>
            </div>
            </div>
          <div className="col-md-6">

          </div>
        </div>
      </div>
    </section>
        </div>
        :
        Window.location.href = "/login"
    )
}

export default AddUser
