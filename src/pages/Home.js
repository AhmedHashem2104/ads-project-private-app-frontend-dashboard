import React , { useContext } from 'react'
import { ContextProvider } from '../context/Context'

const Home = () => {

  const { authenticated } = useContext(ContextProvider)

  return (
    authenticated ?
    <div className="content-wrapper">
    <section className="content" style={{ marginTop : 10 }}>
      <div className="container-fluid">
      <div className="row">
          <div className="col-lg-3 col-6">
            <div className="small-box bg-info">
              <div className="inner">
                <h3>150</h3>

                <p>Users</p>
              </div>
              <div className="icon">
                <i className="ion ion-person"></i>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-6">
            <div className="small-box bg-success">
              <div className="inner">
                <h3>53<sup style={{ fontSize: '20px' }}>%</sup></h3>

                <p>Countries</p>
              </div>
              <div className="icon">
                <i className="ion ion-flag"></i>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-6">
            <div className="small-box bg-warning">
              <div className="inner">
                <h3>44</h3>

                <p>Categories</p>
              </div>
              <div className="icon">
                <i className="ion ion-pie-graph"></i>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-6">
            <div className="small-box bg-danger">
              <div className="inner">
                <h3>65</h3>

                <p>Ads</p>
              </div>
              <div className="icon">
                <i className="ion ion-pie-graph"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
    :
    window.location.href = "/login"
  )
}

export default Home
