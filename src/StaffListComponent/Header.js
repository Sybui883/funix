import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem } from "reactstrap";
import { NavLink } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);

        this.state={
            isNavOpen: false
        };
    }

    toggleNav = () => {
        this.setState({ 
            isNavOpen: !this.state.isNavOpen
        })
    }

    render() {
        return (
          <React.Fragment>
            <Navbar dark expand="sm" className='bg-primary'>
              <div className="container">
                <div className='row' onClick={this.toggleNav} />
                <NavbarBrand className='col-4' href="/">
                  <img
                    src="assets/images/logo.png"
                    width="50"
                    alt="logo"
                  />
                </NavbarBrand>
                <Collapse isOpen={this.state.isNavOpen} navbar>
                  <Nav navbar className='col-8'>
                    <NavItem>
                      <NavLink className="nav-link" to="/staffs">
                        <span className="fa fa-users fa-lg" /> Nhân Viên
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink className="nav-link" to="/departments">
                        <span className="fa fa-address-card fa-lg" /> Phòng Ban
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink className="nav-link" to="/payroll">
                        <span className="fa fa-money-bill fa-lg" />  Bảng Lương
                      </NavLink>
                    </NavItem>
                  </Nav>
                </Collapse>
              </div>
            </Navbar>
          </React.Fragment>
        );
    }
}

export default Header;