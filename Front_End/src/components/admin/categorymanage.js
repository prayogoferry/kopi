import React, { Component } from 'react';
import axios from 'axios';
import { Row, Col } from 'reactstrap';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Pagination from 'react-js-pagination';

class categorymanage extends Component {

    state = {   
                listCategory: [], 
                selectedIdEdit: 0, 
                searchListCategory: [], 
                activePage: 1,
                itemPerPage: 5
            }

    handlePageChange(pageNumber) {
        console.log(`active page is ${pageNumber}`);
        this.setState({activePage: pageNumber});
    }

    componentDidMount() {
        this.showCategory();
    }

    showCategory = () => {
    // axios.get(API_URL_1 + '/users')
        axios.get('http://localhost:2002/categories/getcategories')
            .then((res) => {
                console.log(res);
                this.setState({ 
                    listCategory: res.data, 
                    searchListCategory: res.data, 
                    selectedIdEdit: 0 
                });
            }).catch((err) => {
                console.log(err);
            })
    }

    onBtnAddClick = () => {
            const jenis = this.refs.addcategory.value;
        if(jenis) {
            axios.post('http://localhost:2002/categories/addcategories', {
                jenis
            }).then((res) => {
                console.log(res);
                this.showCategory();
            }).catch((err) => {
                console.log(err);
            })
        } else alert('isi dulu .')

    }

    onBtnSaveClick = (id) => {
        const jenis = this.refs.namaupdate.value;

        axios.put('http://localhost:2002/categories/editcategories' + id, {
            jenis
        }).then((res) => {
            console.log(res);
            this.showCategory();
        }).catch((err) => {
            console.log(err);
        })
    }

    onBtnDeleteClick = (id) => {
        if(window.confirm('yakin mau hapus?')) {
            axios.delete('http://localhost:2002/categories/deletecategories' + id)
                .then((res) => {
                    console.log(res);
                    this.showCategory();
                })
                .catch((err) => {
                    console.log(err);
                })
        }
    }

    onKeyUpSearch = () => {
        var jenis = this.refs.jeniscari.value;
        var arrSearch = this.state.listCategory.filter((item) => {
            return item.jenis.toLowerCase().includes(jenis.toLowerCase())   
        })
        this.setState({ searchListCategory: arrSearch })

    }

    adminAddAction = () => {
        if(this.props.myRole === 'SUPERADMIN') {
            return(
                <tfoot>
                    <tr>
                        {/* <td></td> */}
                        <td><input type="name" size="20" placeholder="Nama kategori" ref="addcategory" style={{ fontSize: "13px" }} 
                            className="form-control" /></td>
                        <td>
                        </td>
                        <td>
                            <center>
                                <button className="btn btn-success" title="add new user" style={{ fontSize: "12px" }} onClick={() => this.onBtnAddClick()}><i className="fa fa-plus-circle" style={{fontSize: '14px'}}></i> Add category</button>
                            </center>
                        </td>
                    </tr>
                </tfoot>
            )
        }
    }
  
    renderListCategory = () => {
        var indexOfLastTodo = this.state.activePage * this.state.itemPerPage;
        var indexOfFirstTodo = indexOfLastTodo - this.state.itemPerPage;
        var renderedProjects = this.state.searchListCategory.slice(indexOfFirstTodo, indexOfLastTodo);
        var listJSXCategory = renderedProjects.map((val) => {

        if(val.id === this.state.selectedIdEdit) {
            return (
                // editStart
                <tr>
                    {/* <td className="text-center" style={{ fontSize: '14px', }}>{item.id}</td> */}
                    {/* <td style={{ fontSize: '1px', }}><input type="text" defaultValue={val.username} size="4" style={{ fontSize: "12px" }}
                    ref="usernameupdate" className="form-control" /></td> */}
                    <td style={{ fontSize: '14px', }}><input type="nama" defaultValue={val.jenis} size="4" style={{ fontSize: "12px" }}
                    ref="namaupdate" className="form-control" /></td>
                    {/* <td style={{ fontSize: '14px', }}><input type="number" size="2" defaultValue={item.phone} style={{ fontSize: "12px" }} 
                        ref="phoneupdate" className="form-control" /></td> */}
                    <td className="text-center" style={{ fontSize: '14px', }}>
                        <center>
                        <button className="btn btn-success" title="save" style={{borderRadius: '30px', height: '30px', width: '30px'}}
                            onClick={() => this.onBtnSaveClick(val.id)}>
                            <i className="fa fa-save" style={{fontSize: '14px'}}></i>
                        </button>
                        &nbsp;
                        <button className="btn btn-dark" title="cancel" style={{borderRadius: '30px', height: '30px', width: '30px'}}
                            onClick={() => this.setState( { selectedIdEdit:0 } )}>
                            <i className="fa fa-times" style={{fontSize: '14px'}}></i>
                        </button>
                        </center>
                    </td>
                </tr>
            )
        }

        if(this.props.myRole === "SUPERADMIN") {
            return (
                <tr>
                    {/* <td className="text-center" style={{ fontSize: '14px', }}>{item.id}</td> */}
                    <td style={{ fontSize: '14px', }}>{val.id}</td>
                    <td style={{ fontSize: '14px', }}>{val.jenis}</td>
                    <td>
                        <center>
                        <button className="btn btn-info" title="edit" style={{borderRadius: '30px', height: '30px', width: '30px'}}
                            onClick={ () => this.setState({ selectedIdEdit: val.id }) }>
                            <i className="fa fa-edit" style={{fontSize: '14px'}}></i>
                        </button>
                        &nbsp;
                        <button className="btn btn-danger" title="delete" style={{borderRadius: '30px', height: '30px', width: '30px'}}
                            onClick={ () => this.onBtnDeleteClick(
                                val.id) }>
                            <i className="fa fa-trash" style={{fontSize: '14px'}}></i>
                        </button>
                        </center>
                    </td>
                </tr>
            )
        } 

        return true;

        })
        
        return listJSXCategory;
    }
        
    render() {
        
        if(this.props.username !== "" && (this.props.myRole === "SUPERADMIN")) {
            
            return(
                <div>
                    <form id="searchForm">
                    <Row  className="col-lg-12 pb-5" align="center">
                       
                        <Col lg="6">
                            <input type="text" className="form-control" style={{ fontSize: "12px" }} 
                            placeholder="Jelajahi"
                            ref="username" onKeyUp={() => {this.onKeyUpSearch()}} />
                        </Col>
                    </Row>
                    </form>
                    <br/>
                    <div className="table-responsive col-lg-12">
                        <table className="table table-striped table-hover shadow-lg">
                            <thead className="thead-dark">
                                <tr>
                                    {/* <th scope="col" className="font-weight-bold text-center" style={{ fontSize: '14px', }}>ID</th> */}
                                    <th scope="col" className="font-weight-bold text-uppercase" style={{ fontSize: '14px', }}>ID</th>
                                    <th scope="col" className="font-weight-bold text-uppercase" style={{ fontSize: '14px', }}>Nama category</th>
                                </tr>
                            </thead>
                            <tbody>
                                    {this.renderListCategory()}
                            </tbody>
                                    {this.adminAddAction()}
                        </table>
                        <div className="mx-auto">
                            <Pagination
                                activePage={this.state.activePage}
                                itemsCountPerPage={this.state.itemPerPage}
                                totalItemsCount={this.state.searchListCategory.length}
                                pageRangeDisplayed={5}
                                onChange={this.handlePageChange.bind(this)}
                            />
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <Redirect to="/login" />
            )
        }
    }

}

const mapStateToProps = (state) => {
    return { username: state.auth.username, myRole: state.auth.role }
}

export default connect(mapStateToProps)(categorymanage);