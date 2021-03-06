import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBMask, MDBCollapseHeader } from 'mdbreact';

class ModalPage extends Component {
state = {
  modal: true,
  age: true
}

toggle = () => {
  this.setState({
    modal: !this.state.modal
  });
}

toggleWarning = () => {
  this.setState({
    age: false
  });
}

render() {
  return (
    <MDBContainer>
      
      {/* <MDBBtn onClick={this.toggle}>Modal</MDBBtn> */}
      
      <MDBModal isOpen={this.state.modal} className='text-center' centered>
      <MDBMask overlay="white-slight"/>
        <MDBModalHeader className="black h3">
          <img src="Assets/Saints_WHITE.png" className="w-75" />
        </MDBModalHeader>
        <MDBModalBody className="white black-text h3">
          Are you over 21?
        </MDBModalBody>
        <MDBModalFooter className="black flex-center font-weight-lighter">
          
            { this.state.age ? "" : <p className="black m-0 red-text font-weight-normal">
            We are sorry. We take our
            responsibility to limit the access to the
            website to adults of legal drinking age.
            For more information visit <a href="https://www.responsibility.org" target="__blank" className="white-text"> Responsibility.Org.</a>
            </p> }
          
          <MDBBtn className="aqua-gradient" onClick={this.toggle}>YES</MDBBtn>
          <MDBBtn color="red" onClick={this.toggleWarning}>NO</MDBBtn>
            
            <p className="white-text">
            You must be 21 years or older to participate.
            Please drink responsibly.
            © 2020 SAINTS HARD SELTZER
            </p>

        </MDBModalFooter>
      </MDBModal>

    </MDBContainer>
    );
  }
}

export default ModalPage;