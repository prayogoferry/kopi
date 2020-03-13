import React, { Component } from "react";
import Slider from "react-slick";
import {Carousel} from 'react-bootstrap'

class Caraousellain extends Component {
    state = {  }
    render() {
        <div>
            <Carousel>
                    
                    <Carousel.Item>
                        <img className="d-block w-100" src="https://cdn.pixabay.com/photo/2017/08/30/18/27/coffee-2698122_960_720.jpg" height="400px" alt="First slide"/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src="https://cdn.pixabay.com/photo/2017/07/26/02/54/coffee-2540277_960_720.jpg" height="400px" alt="First slide"/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src="https://cdn.pixabay.com/photo/2020/02/01/15/28/coffe-shop-4810584_960_720.jpg" height="400px" alt="First slide"/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src="https://www.cold-drip-coffee.com/wp-content/uploads/sites/16/2018/11/cold-drip-kaffee-zubeh%C3%B6r-1-900x430.jpg" height="400px" alt="First slide"/>
                    </Carousel.Item>
                </Carousel>


        </div>
    }
}
 
export default Caraousellain;