import React, { useContext, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useHistory, useParams } from 'react-router';
import APIS, { API_IMAGE , removeExtension } from '../api/axios';
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

export default function ShowCategory() {
    const { authenticated } = useContext(ContextProvider)
    const [category , setCategory] = useState({})
    const [loading , setLoading] = useState(false)
    const [image , setImage] = useState('')
    const [icon , setIcon] = useState('')
  const classes = useStyles();
  let params = useParams()
  let history = useHistory()
  useEffect(() => {
    const categoryAPI = () => {
        APIS.categoryAPI(params.id).then((res) => {
            setCategory(res.data)
            setImage(removeExtension(res.data.image))
            setIcon(removeExtension(res.data.icon))
            setLoading(true)
        }).catch(err => {
            history.push('/categories')
        })
    }
    categoryAPI()
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
            Name : {category.name}
          </Typography>
          <hr />
          <Typography gutterBottom variant="h5" component="h2">
            Description : {category.description}
          </Typography>
          <hr />
          <Typography gutterBottom variant="h5" component="h2">
            Image : <img src={`${API_IMAGE}/${image}.webp`} style={{ width : 300 }} alt="catim" />
          </Typography>
          <hr />
          <Typography gutterBottom variant="h5" component="h2">
          Icon : <img src={`${API_IMAGE}/${icon}.webp`} style={{ width : 300 }} alt="catic" />
          </Typography>
          <hr />
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="large" color="primary" variant="contained" onClick={() => history.push(`/category/add`)}>
          Add New Category
        </Button>
        <Button size="large" color="secondary" variant="contained" onClick={() => history.goBack()}>
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
