import React , { useContext , useState } from 'react'
import { ContextProvider } from '../context/Context'
import API from '../api/axios'
import { Link , useHistory } from 'react-router-dom'
import backgroundPhoto from '../images/background.jpg'
import { InputAdornment, makeStyles, TextField } from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

function Login() {
    
    const {authenticated , setAuthenticated} = useContext(ContextProvider)

    const [email , setEmail] = useState('')

    const [password , setPassword] = useState('')

    const [error , setError] = useState({})

    let history = useHistory()

    const classes = useStyles();

    const loginAPI = (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('email' , email)
        formData.append('password' , password)
        API.login(formData).then((res) => {
          setError({})
            localStorage.setItem("token" , res.data.token.Token)
            setAuthenticated(true)
            history.push('/')
        }).catch(err => {
            setError(err.response.data[0] || err.response.data)
        })
    }
    return (
        !authenticated ?
        <div style={{ width : '100%' , height : '100vh' , display : 'flex' , justifyContent : 'center' , alignItems: 'center' , backgroundImage : `url(${backgroundPhoto})` , backgroundRepeat : 'no-repeat' , backgroundSize : '100% 100%' }}>
      <form onSubmit={loginAPI} style={{ backgroundColor : 'white' , padding : 20 , borderRadius : 10 , width : '25%' }}>
        <p className="h5 text-center mb-4" style={{ color : 'black' , fontSize : 25 }}>Sign in</p>
        <div className="white-text">
        <TextField
        className={classes.margin}
        id="input-with-icon-textfield"
        label="TextField"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
      />
      <TextField
        className={classes.margin}
        id="input-with-icon-textfield"
        label="TextField"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
      />
        </div>
        {error.message ? <div style={{ width : '100%' , backgroundColor : 'red' , color : 'white' , margin : 5 , padding : 10 , borderRadius : 5 , fontWeight : 'bolder' }}>{error.message}</div> : ''}
       
      </form>
</div>
                      :
                      window.location.href = "/"
    )
}

export default Login