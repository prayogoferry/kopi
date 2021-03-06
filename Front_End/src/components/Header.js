import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    // NavLink
    } from 'reactstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { onUserLogout } from '../actions';
import Cookies from 'universal-cookie';
import { MDBBtn } from "mdbreact";
import {Badge} from '@material-ui/core'
// import {logo1} from '../photo/logo1'

const cookies = new Cookies();

class HeaderReact extends Component {

    state = { 
        listCart: [] }

    constructor(props) {
        super(props);

        // this.toggle = this.toggle.bind(this);
        // this.state = {
        //     isOpen: false
        // };
    }

    // toggle() {
    //     this.setState({
    //         isOpen: !this.state.isOpen
    //     });
    // }

    onLogoutSelect = () => {
        if(window.confirm('Are you sure want to Logout?')) {
            if(this.props.onUserLogout()) {
            }
            cookies.remove('usernameCookie', 'emailCookie', 'roleCookie');
            window.location = '/';
        }
    }

    render() {
        if(this.props.username === "") {

            return (
                <div style={{ margin: '0 0 90px 0' }}>
                    <Navbar color="dark" light expand="md" fixed="top" className="shadow">
                    <NavbarBrand href="/" style={{ fontSize: "16px", lineHeight: 'auto' }}>
                        <h2 style={{lineHeight: '40px', color:'white'}}>JELAJAHi KOPI</h2>
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar style={{ fontSize: "14px", fontWeight: "bold" }}>
                            <NavItem>
                                <Link to="/login">
                                    <button type="button" className="btn btn-outline-light border-radius:20px">Login</button>
                                </Link>
                            </NavItem>
                        </Nav>
                    </Collapse>
                    </Navbar>
                </div>
            )

        } else if (this.props.username !== '' && this.props.role === 'MEMBER') {
            return (
                
                <div style={{ margin: '0 0 90px 0' }}>
                    <Navbar color="dark" light expand="md" fixed="top" className="shadow">
                    <NavbarBrand href="/" style={{ fontSize: "16px" }}>
                    <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQmNieWhh-5gF_nxx4JutOVYWYpITFJuTMtYAgVnmZDLW2h9KGU" height="50px" width='30%' alt="First slide"/>
                        <h2 style={{lineHeight: '40px', color:'white'}}>Sugeng Rawuh, {this.props.username}</h2>
                    </NavbarBrand>
                    
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar style={{ fontSize: "20px", fontWeight: "bold" }}>
                            <NavItem style={{fontSize: '16px', lineHeight: '20px'}}>
                                <button type="button" className="btn btn-outline-light" onClick={this.onLogoutSelect}>LogOut</button>
                            </NavItem>
                        </Nav>
                    </Collapse>
                    </Navbar>
                    <div style={{height: '40px', marginRight: '-15px', marginLeft: '-15px', marginTop: '60px', backgroundColor: '#212529', fontSize: '16px', lineHeight: '2em' }} className="text-center fixed-top font-weight-normal">
                        <div style={{marginTop: '3px'}}>
                            
                            <Badge badgeContent={this.props.cart} color="secondary" style={{marginBottom:'30px'}}/>
                            <span><a href="/cart" style={{marginRight: '40px' ,color:'white'}}><i className="fa fa-shopping-cart"></i>  Cart &nbsp;</a></span>
            
                            <span><a href="/wishlist" style={{marginRight: '40px', color:'white'}}><i className="fa fa-heart"></i> Wishlist &nbsp;</a></span>
                            <span><a href="/history" style={{marginRight: '0px', color:'white'}}><i className="fa fa-history"></i>  History Trx &nbsp;</a></span>
                            <span><a href="/confirmorder" style={{marginLeft: '40px', color:'white'}}><i className="fa fa-shopping-basket"></i>  Confirm Payment &nbsp;</a></span>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div style={{ margin: '0 0 90px 0' }}>
                {/* <Navbar color="black" style={{ fontSize: "16px" }}>
                    <h2 style={{lineHeight: '40px'}}>Sugeng Rawuh, {this.props.username}</h2>
                    <Navbar/>
                </NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar style={{ fontSize: "14px", fontWeight: "bold" }}>
                        <NavItem style={{fontSize: '14px', lineHeight: '14px'}}>
                            <button type="button" className="btn btn-outline-primary" onClick={this.onLogoutSelect} >Keluar</button>
                        </NavItem>
                    </Nav>
                </Collapse>
                </Navbar> */}

                    <Navbar color="dark" light expand="md" fixed="top" className="shadow">
                    <NavbarBrand href="/" style={{ fontSize: "16px" }}>
                    {/* <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQmNieWhh-5gF_nxx4JutOVYWYpITFJuTMtYAgVnmZDLW2h9KGU" height="50px" width='10%' alt="First slide"/> */}
                        <h2 style={{lineHeight: '40px', color:'white'}}>Sugeng Rawuh, {this.props.username}</h2>
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar style={{ fontSize: "20px", fontWeight: "bold" }}>
                            <NavItem style={{fontSize: '16px', lineHeight: '20px'}}>
                                <button type="button" className="btn btn-outline-light" onClick={this.onLogoutSelect}>LogOut</button>
                            </NavItem>
                        </Nav>
                    </Collapse>
                    </Navbar>

                <div style={{height: '40px', marginRight: '-15px', marginLeft: '-15px', marginTop: '60px', backgroundColor: 'silver', fontSize: '16px', lineHeight: '2em' }} className="text-center fixed-top font-weight-normal">
                        <div style={{marginTop: '3px'}}>
                            <span><a href="/cart" style={{marginRight: '40px' ,color:'black'}}><i className=" "></i>  Manage Produk &nbsp;</a></span>
                            <span><a href="/wishlist" style={{marginRight: '40px', color:'black'}}><i className=" "></i> Manage Category &nbsp;</a></span>
                            <span><a href="/history" style={{marginRight: '0px', color:'black'}}><i className=" "></i>  Manage User &nbsp;</a></span>
                            <span><a href="/confirmorder" style={{marginLeft: '40px', color:'black'}}><i className=" "></i> Payment &nbsp;</a></span>
                        </div>
                    </div>

            </div>
            )
        }
        
    }
}

const mapStateToProps = (state) => {
    return {
        username: state.auth.username,
        role: state.auth.role,
        cart : state.cart.cartpoint
    }
}

export default connect(mapStateToProps, { onUserLogout })(HeaderReact);