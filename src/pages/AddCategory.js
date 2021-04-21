import React, { useContext, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import APIS from '../api/axios'
import { ContextProvider } from '../context/Context'
const AddCategory = () => {
    const { authenticated } = useContext(ContextProvider)
    const [name , setName] = useState('')
    const [description , setDescription] = useState('')
    const [image , setImage] = useState({})
    const [icon , setIcon] = useState({})
    const [error , setError] = useState('')
    const [success , setSuccess] = useState('')
    const imageRef = useRef(null)
    const iconRef = useRef(null)
    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('name' , name)
        formData.append('description' , description)
        formData.append('image' , image)
        formData.append('icon' , icon)
        APIS.addCategory(formData).then((res) => {
          setError('')
          setSuccess(`Category added successfully`)
          setName('')
          setDescription('')
          setImage('')
          setIcon('')
          imageRef.current.value = ""
          iconRef.current.value = ""
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
                    <h1>Add Category</h1>
                </div>
                <div className="col-sm-6">
                    <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                    <li className="breadcrumb-item active">Add Category</li>
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
                <h3 className="card-title">Add Category</h3>
              </div>
              <form metho="post" onSubmit={(e) => handleSubmit(e)}>
                <div className="card-body">
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)} />
                  </div>
                  <div className="form-group">
                    <label>Description</label>
                    <textarea className="form-control" placeholder="Enter description" value={description} onChange={(e) => setDescription(e.target.value)} ></textarea>
                  </div>
                  <div className="form-group">
                    <label>Image</label>
                    <input type="file" ref={imageRef} className="form-control" onChange={(e) => setImage(e.target.files[0])} />
                  </div>
                  <div className="form-group">
                    <label>Icon</label>
                    <input type="file" ref={iconRef} className="form-control" onChange={(e) => setIcon(e.target.files[0])} />
                  </div>
                  <div className="form-group">
                    {error ? <div className="alert alert-danger">{error}</div> : <></>}
                  </div>
                  <div className="form-group">
                    {success ? <div className="alert alert-success">{success}</div> : <></>}
                  </div>
                </div>
                <div className="card-footer">
                  <button type="submit" className="btn btn-primary">Add Category</button>
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

export default AddCategory
