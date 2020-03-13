import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

class HomeCard extends Component {
    render() {
        return(
            <div>
            <div className="row" >
                
                <div className="col col-md-6 " style={{height: '400px'}}>
                    <Fade left>
                    <img src='https://images.unsplash.com/photo-1524350876685-274059332603?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80' width='100%' height='100%'/>
                    </Fade>
                    
                </div>
                <div className="col col-md-6 bg-light border">
                    
                    <Fade>


                    </Fade>

                    <h1 className="text-center text-uppercase bold" style={{paddingTop: '100px'}}>KOPI </h1>
                    <h5 className="text-center" style={{fontSize: '18px', fontFamily: 'calibri', paddingLeft: '30px', paddingRight: '30px', paddingTop: '10px'}}>nananananananananananananananananananananananananananananananananan</h5>
                    <center style={{paddingTop: '10px'}}>
                    <a href="/productsgridview">
                    <button type="button" className="btn btn-dark btn-lg" style={{width: '150px', paddingTop: '10px'}}>JELAJAHi</button>
                    </a>
                    </center>
                </div>
            </div>

            <div className="row mt-5" >
                <div className="col col-md-6 bg-light border">
                    <h1 className="text-center text-uppercase bold" style={{paddingTop: '100px'}}> ALAT </h1>
                    <h5 className="text-center" style={{fontSize: '18px', fontFamily: 'calibri', paddingLeft: '30px', paddingRight: '30px', paddingTop: '10px'}}>nananananananananananananananananananananananananananananananananan</h5>
                    <center style={{paddingTop: '10px'}}>
                    <a href="/productsgridview">
                    <button type="button" className="btn btn-dark btn-lg" style={{width: '150px', paddingTop: '10px'}}>JELAJAHi</button>
                    </a>
                    </center>
                </div>
                <div className="col col-md-6 " style={{height: '400px'}}>
                    <img src='https://i.pinimg.com/originals/38/d9/a4/38d9a4cbdaa4252cfe5ac7d59a0e6044.jpg' width='100%' height='100%'/>
                </div>
            </div>

            
            <div className="row mt-5" style={{marginBottom: '100px'}}>
                <div className="col col-md-6" style={{height: '400px'}}>
                <img src='https://previews.123rf.com/images/fxquadro/fxquadro1902/fxquadro190202028/117723258-close-up-photo-of-a-coffee-machine-making-a-cup-of-coffee-in-the-restaurant-of-a-coffee-shop.jpg' width='100%' height='100%'/>    
                </div>
                <div className="col col-md-6 bg-light border">
                    <h1 className="text-center text-uppercase bold" style={{paddingTop: '100px'}}>AKSESORIS</h1>
                    <h5 className="text-center" style={{fontSize: '18px', fontFamily: 'calibri', paddingLeft: '30px', paddingRight: '30px', paddingTop: '10px'}}>It’s all new, all screen and all powerful. Completely redesigned and packed with our most advanced technology, it will make you rethink what iPad is capable of. The new all-screen design means iPad Pro is a magical piece of glass that does everything you need, any way you hold it.</h5>
                    <center style={{paddingTop: '10px'}}>
                    <a href="/productsgridview">
                    <button type="button" className="btn btn-dark btn-lg" style={{width: '150px', paddingTop: '10px'}}>JELAJAHI</button>
                    </a>
                    </center>
                </div>
            </div>

            <div className="row mt-5">
                <div className="col col-md-6 bg-light border">
                    <h1 className="text-center text-uppercase bold" style={{paddingTop: '100px'}}>TOOLS</h1>
                    <h5 className="text-center" style={{fontSize: '18px', fontFamily: 'calibri', paddingLeft: '30px', paddingRight: '30px', paddingTop: '10px'}}>All new! for a better you.
                    Introducing Apple Watch Series 4. Fundamentally redesigned and re-engineered to help you stay even more active, healthy and connected. The new all-screen design means iPad Pro is a magical piece of glass that does everything you need, any way you hold it.</h5>
                    <center style={{paddingTop: '10px'}}>
                    <a href="/productsgridview">
                    <button type="button" className="btn btn-dark btn-lg" style={{width: '150px', paddingTop: '10px'}}>JELAJAHI</button>
                    </a>
                    </center>
                </div>
                <div className="col col-md-6" style={{height: '400px'}}>
                <img src='https://i.pinimg.com/originals/38/d9/a4/38d9a4cbdaa4252cfe5ac7d59a0e6044.jpg' width='100%' height='100%'/>
                </div>
            </div>  


            </div>
        )
    }
}

export default HomeCard;