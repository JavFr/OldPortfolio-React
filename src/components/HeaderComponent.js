import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Scrollspy from 'react-scrollspy';

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false
        };
        this.toggleNav = this.toggleNav.bind(this); //Let to manage the method as a variable
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render(){
        return(
            <Navbar dark className="fixed-top py-0 row">
                <NavbarBrand className="col">
                    <div className="navbar-name text-wrap text-justify text-center" >
                        Javier Franco
                    </div>
                </NavbarBrand>
                <Scrollspy className="nav col-8 col-sm-9 justify-content-end" items={ ['section-1', 'section-2', 'section-3'] } 
                    currentClassName="is-current">
                    <li className="nav-item">
                        <a className="nav-link py-3" href="#section-1">
                            <i className="fa fa-user fa-lg d-sm-none"></i>
                            <span className="d-none d-sm-flex">Javier</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link py-3" href="#section-2">
                            <i className="fa fa-tasks fa-lg d-sm-none"></i>
                            <span className="d-none d-sm-flex">Conocimientos</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link py-3" href="#section-3">
                            <i className="fa fa-lightbulb-o fa-lg d-sm-none"></i>
                            <span className="d-none d-sm-flex">Proyectos</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link py-3" href="#section-4">
                            <i className="fa fa-address-book-o fa-lg d-sm-none"></i>
                            <span className="d-none d-sm-flex">Contacto</span>
                        </a>
                    </li>
                </Scrollspy>           
            </Navbar>              
        );
    }
}

export default Header;