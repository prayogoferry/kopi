import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel";

class Carousels extends Component {
    render(){
        return (
            <Carousel autoPlay showThumbs={false} infiniteLoop={true} centerMode={false} axis="horizontal" >
                
                <div>
                    <h1 style={{color: 'white'}}></h1>
                    <img src="https://cdn.pixabay.com/photo/2017/08/30/18/27/coffee-2698122_960_720.jpg"
                        alt="kopi" width='auto' height='auto'
                        className="img-fluid" />     
                </div>

                <div>
                    <h1 style={{color: 'white'}}></h1>
                    <img src="https://www.cold-drip-coffee.com/wp-content/uploads/sites/16/2018/11/cold-drip-kaffee-zubeh%C3%B6r-1-900x430.jpg"
                        alt="" width={'auto'} height={'auto'} className="img-responsive" />
                </div>
                
                <div>
                    <h1 style={{color: 'white'}}></h1>
                    <img src="https://cdn.pixabay.com/photo/2020/02/01/15/28/coffe-shop-4810584_960_720.jpg"
                        alt="" width={'auto'} height={'100%'} className="img-responsive" />
                    
                </div>
            </Carousel>
        );
    }
}

export default Carousels;
