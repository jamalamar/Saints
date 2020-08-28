import React, { Component } from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import {Link} from 'react-router-dom'
import { 
        MDBNavbar, 
        MDBNavbarBrand, 
        MDBNavbarNav, 
        MDBNavItem, 
        MDBNavLink, 
        MDBNavbarToggler, 
        MDBCollapse, 
        MDBDropdown,
        MDBDropdownToggle, 
        MDBDropdownMenu, 
        MDBDropdownItem, 
        MDBIcon,
        MDBBtn
      } from "mdbreact";


class Navbar extends Component {
state = {
  isOpen: false,
};


toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen })
}

render() {
  return (
      <MDBNavbar color="black" dark scrolling transparent={ this.state.isOpen ? false : true} expand="xl" fixed="top">
        <MDBNavbarBrand className="waves-effect waves-light">
          <MDBNavLink to="/"><img src='Assets/Saints_T_White.png' fluid/></MDBNavLink>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse1" isOpen={this.state.isOpen} navbar>
         
          <MDBNavbarNav right>   
            <MDBNavItem>
              {this.state.isOpen ? 
              <MDBNavLink to="/BuyNow" onClick={this.toggleCollapse}><strong className="m-3 flex-center cyan-text">Buy Now</strong></MDBNavLink>
              :
              <MDBNavLink to="/BuyNow" ><strong className="m-3">Buy Now</strong></MDBNavLink>}
            </MDBNavItem>
            <MDBNavItem>
              {this.state.isOpen ? 
              <MDBNavLink to="/Flavors" onClick={this.toggleCollapse}><strong className="m-3 flex-center cyan-text">Flavors</strong></MDBNavLink>
              :
              <MDBNavLink to="/Flavors" ><strong className="m-3">Flavors</strong></MDBNavLink>}
            </MDBNavItem>
            <MDBNavItem>
            { this.state.isOpen ?
              <MDBNavLink to="/Greatness" onClick={this.toggleCollapse}><strong className="m-3 flex-center cyan-text">Why is it so Great?</strong></MDBNavLink>
              :
              <MDBNavLink to="/Greatness" ><strong className="m-3">Why is it so Great?</strong></MDBNavLink>}
            </MDBNavItem>
            <MDBNavItem>
              {this.state.isOpen ?
              <MDBNavLink to="/FAQs" onClick={this.toggleCollapse}><strong className="m-3 flex-center cyan-text">FAQs</strong></MDBNavLink>
              :
              <MDBNavLink to="/FAQs" ><strong className="m-3">FAQs</strong></MDBNavLink>}
            </MDBNavItem>
            <MDBNavItem>
            {this.state.isOpen ?
              <MDBNavLink to="/Contact" onClick={this.toggleCollapse}><strong className="m-3 flex-center cyan-text">Contact</strong></MDBNavLink>
              :
              <MDBNavLink to="/Contact" ><strong className="m-3">Contact</strong></MDBNavLink>}
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav right>
            <MDBNavItem>
              <a href="https://instagram.com/saintseltzer/" target="__blank">
                <MDBNavLink disabled className="waves-effect waves-light" to='#'>
                  <MDBIcon fab icon="instagram" size="2x"/>
                </MDBNavLink>
              </a>
            </MDBNavItem>
            <MDBNavItem>
              <a href="https://fb.me/SaintsHardSeltzer" target="__blank">
                <MDBNavLink disabled className="waves-effect waves-dark" to="#">
                  <MDBIcon fab icon="facebook" size="2x"/>
                </MDBNavLink>
              </a>
            </MDBNavItem>

            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle caret color="black" className="p-2 white-text">
                  <strong className="font-weight-bold">ENGLISH</strong>
                </MDBDropdownToggle>
                <MDBDropdownMenu className="black p-0 m-0">
                  <MDBDropdownItem href="https://saintseltzer.com/es" className="white-text font-weight-bold flex-center">ESPAÑOL</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>

          </MDBNavbarNav>
        
        </MDBCollapse>
      </MDBNavbar>
    );
  }
}

export default Navbar;