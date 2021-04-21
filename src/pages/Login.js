import React , { useContext , useState } from 'react'
import { ContextProvider } from '../context/Context'
import API from '../api/axios'
import { useHistory } from 'react-router-dom'

function Login() {
    
    const {authenticated , setAuthenticated} = useContext(ContextProvider)

    const [email , setEmail] = useState('')

    const [password , setPassword] = useState('')

    const [error , setError] = useState({})

    let history = useHistory()

    const loginAPI = (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('email' , email)
        formData.append('password' , password)
        API.login(formData).then((res) => {
          setError({})
            localStorage.setItem("username" , res.data.user.username)
            localStorage.setItem("token" , res.data.token.token)
            setAuthenticated(true)
            history.push('/')
        }).catch(err => {
            setError(err.response.data.errors[0] || err.response.data)
        })
    }
    return (
        !authenticated ?
        <div className="hold-transition login-page">
        <div className="login-box">
  <div className="card card-outline card-primary">
    <div className="card-header text-center">
      <a href="../../index2.html" className="h1"><b>Ads</b>Center</a>
    </div>
    <div className="card-body">
      {/* <p className="login-box-msg">Sign in to start your session</p> */}

      <form onSubmit={(e) => loginAPI(e)} method="post">
        <div className="input-group mb-3">
          <input type="email" className="form-control" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-envelope"></span>
            </div>
          </div>
        </div>
        <div className="input-group mb-3">
          <input type="password" className="form-control" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-lock"></span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-8">
          </div>
          <div className="col-4">
            <button type="submit" className="btn btn-primary btn-block">Sign In</button>
          </div>
          <div className="col-12" style={{ marginTop : 5 }}>
            {error.message ? <h6 className="alert alert-danger">{error.message}</h6> : <></>}
          </div>
        </div>
      </form>

      <p className="mb-1">
        <a href="forgot-password.html">I forgot my password</a>
      </p>
    </div>
  </div>
</div>
</div>
                      :
                      window.location.href = "/"
    )
}

export default Login