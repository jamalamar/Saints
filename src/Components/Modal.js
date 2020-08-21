import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBMask } from 'mdbreact';

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
          ¿Eres mayor de 18 años?
        </MDBModalBody>
        <MDBModalFooter className="black flex-center font-weight-lighter">
          
            { this.state.age ? "" : <p className="black m-0 red-text font-weight-normal">
            Lo sentimos. Nos tomamos muy en serio nuestra 
            responsabilidad de limitar el acceso al sitio 
            web a los adultos en edad legal para beber. 
            Para obtener más información, visite <a src="https://www.responsibility.org/en-espanol/" target="__blank" className="white-text"> Responsibility.Org.</a>
            </p> }
          
          <MDBBtn className="aqua-gradient" onClick={this.toggle}>SI</MDBBtn>
          <MDBBtn color="red" onClick={this.toggleWarning}>NO</MDBBtn>
            
            <p className="white-text">
            Debes tener 18 años o más para participar. 
            Por favor beber responsablemente. 
            © 2020 SAINTS HARD SELTZER
            </p>

        </MDBModalFooter>
      </MDBModal>

    </MDBContainer>
    );
  }
}

export default ModalPage;