import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import APIS from '../api/axios'
import { ContextProvider } from '../context/Context'
const AddCountry = () => {
    const { authenticated } = useContext(ContextProvider)
    const [name , setName] = useState('')
    const [iso , setIso] = useState('')
    const [code , setCode] = useState('')
    const [error , setError] = useState('')
    const [success , setSuccess] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('name' , name)
        formData.append('iso' , iso)
        formData.append('code' , code)
        APIS.addCountry(formData).then((res) => {
          setError('')
          setSuccess(`Country added successfully`)
          setName('')
          setIso('')
          setCode('')
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
                    <h1>Add Country</h1>
                </div>
                <div className="col-sm-6">
                    <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                    <li className="breadcrumb-item active">Add Country</li>
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
                <h3 className="card-title">Add Country</h3>
              </div>
              <form metho="post" onSubmit={(e) => handleSubmit(e)}>
                <div className="card-body">
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)} />
                  </div>
                  <div className="form-group">
                    <label>Iso</label>
                    <input type="text" className="form-control" placeholder="Enter iso" value={iso} onChange={(e) => setIso(e.target.value)} />
                  </div>
                  <div className="form-group">
                    <label>Code</label>
                    <input type="text" className="form-control" placeholder="Enter code" value={code} onChange={(e) => setCode(e.target.value)} />
                  </div>
                  <div className="form-group">
                    {error ? <div className="alert alert-danger">{error}</div> : <></>}
                  </div>
                  <div className="form-group">
                    {success ? <div className="alert alert-success">{success}</div> : <></>}
                  </div>
                </div>
                <div className="card-footer">
                  <button type="submit" className="btn btn-primary">Add Country</button>
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

export default AddCountry
