import React , { useContext , useState } from 'react'
import { ContextProvider } from '../context/Context'
import API from '../api/axios'
import { Link , useHistory } from 'react-router-dom'

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
        <section className="position-relative pb-0">
        <div className="gen-login-page-background" style={{ backgroundImage : `url('/images/background/background.jpg')` }}></div>
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="text-center">
                        <form name="pms_login" id="pms_login" method="post" onSubmit={(e) => loginAPI(e)}>
                            <h4>Sign In</h4>
                            <p className="login-username">
                                <label htmlFor="user_login">Email Address</label>
                                <input type="email" name="email" id="user_login" className="input" value={email} onChange={(e) => setEmail(e.target.value)}  />
                            </p>
                            <p className="login-password">
                                <label htmlFor="user_pass">Password</label>
                                <input type="password" name="password" id="user_pass" className="input" value={password} onChange={(e) => setPassword(e.target.value)} />
                            </p>
                            <p className="login-submit">
                                <input type="submit" name="wp-submit" id="wp-submit" className="button button-primary"
                                    value="Log In" />
                            </p>
                           <Link
                                to="/register">Register</Link> | <Link to="recover-password.html">Lost your
                                password?</Link>
                                { error.message ? <div className="alert alert-danger" style={{ marginTop : 7 }}>{error.message}</div> : <></>}
                        </form>
                        
                    </div>
                </div>
            </div>
        </div>
    </section>
                      :
                      window.location.href = "/"
    )
}

export default Login