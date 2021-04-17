import React, { useContext, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useHistory, useParams } from 'react-router';
import APIS from '../api/axios';
import { ContextProvider } from '../context/Context';

const useStyles = makeStyles({
  root: {
    maxWidth: '100%',
    marginLeft: 10,
    marginTop: 5,
    marginRight : 5
  },
  media: {
    height: 140,
  },
});

export default function ShowUser() {
    const { authenticated } = useContext(ContextProvider)
    const [user , setUser] = useState({})
    const [loading , setLoading] = useState(false)
  const classes = useStyles();
  let params = useParams()
  let history = useHistory()
  useEffect(() => {
    const userAPI = () => {
        APIS.userAPI(params.id).then((res) => {
            setUser(res.data)
            setLoading(true)
        }).catch(err => {
            history.push('/users')
        })
    }
    userAPI()
} , [params.id , history])
  return (
      authenticated ?
    loading ?
    <div className="content-wrapper">
    <Card className={classes.root}>
      <CardActionArea>
        {/* <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        /> */}
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Username : {user.username}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            Nickanem : {user.nickname}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            Email : {user.email}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="big" color="primary" variant="contained" onClick={() => history.push(`/user/add`)}>
          Add New User
        </Button>
        <Button size="big" color="secondary" variant="contained" onClick={() => history.goBack()}>
          Back
        </Button>
      </CardActions>
    </Card>
    </div>
    :
    <></>
    :
    window.location.href = "/login"
  );
}
