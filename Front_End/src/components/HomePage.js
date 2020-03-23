import React, { Component } from 'react';
import ProductsGridView from './ProductsGridView';
import { connect } from 'react-redux';
import Carousels from './Carousel';
import HomeCard from './HomeCard';
import Dashbord from './admin/Dashbord';
import {Carousel} from 'react-bootstrap'
import Fade from 'react-reveal/Fade';


class HomePage extends Component {
  
  render() {
    if (this.props.myRole === 'SUPERADMIN'){
      return (
        <Dashbord />
      )
    } else if (this.props.myRole === 'MEMBER') {
      return (
        <HomePage/>
      )
    } else {
      
      return (
        <div>
          <div style={{marginTop: '-50px', marginBottom:'25px'}}>
            {/* <Carousels/> */}
            <Carousel>
                    <Carousel.Item>
                        <img  src="https://cdn.pixabay.com/photo/2017/08/30/18/27/coffee-2698122_960_720.jpg" height="auto" alt="First slide"/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img  src="https://cdn.pixabay.com/photo/2017/07/26/02/54/coffee-2540277_960_720.jpg" height="auto" alt="First slide"/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src="https://cdn.pixabay.com/photo/2020/02/01/15/28/coffe-shop-4810584_960_720.jpg" height="auto" alt="First slide"/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src="https://www.cold-drip-coffee.com/wp-content/uploads/sites/16/2018/11/cold-drip-kaffee-zubeh%C3%B6r-1-900x430.jpg" height="75%" alt="First slide"/>
                    </Carousel.Item>
                </Carousel>
          </div>

          <center>
            <div style={{marginBottom:'20px'}}>

              <Fade top>
              <h1>
                JELAJAH! KOPi
              </h1>
              </Fade>
            </div>
          </center>

          <div style={{height:"150px", backgroundColor:'black', marginBottom:'20px'}}>
              {/* <img src='' height="100%" width="100%"/> */}
              <center>
                <Fade right>
                <h2 style={{color:'white', paddingTop:"5px"}}>Cuma segelas kopi yang bercerita kepadaku bahwa yang hitam tak selalu kotor dan yang pahit tak selalu menyedihkan.</h2>
                </Fade>
              
              <Fade left>
              <h2 style={{color:'white', paddingTop:"5px"}}><h2 style={{color:'white'}}>Sometimes those who don’t socialize much aren’t anti-social.
                  They just have zero tolerance for fake people and all the drama they bring.</h2></h2>
              </Fade>
              </center>

          </div>


          <div style={{paddingTop: '10px', backgroundColor:'coffee'}}>
            <HomeCard/>
          </div>
        </div>
        )
    }

      }
  }


const mapStateToProps = (state) => {
  return { username: state.auth.username, myRole: state.auth.role }
}

export default connect(mapStateToProps)(HomePage);