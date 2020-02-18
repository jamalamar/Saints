import React from 'react'
import {  MDBContainer, MDBRow, MDBCol, MDBIcon, MDBBtn, MDBInput } from "mdbreact";


function Contact(){

const style = {
	background: {
	  background: 'url(Assets/Contact_Background.jpg)',
	  backgroundPosition: 'center',
	  backgroundRepeat: 'no-repeat',
	  backgroundSize: 'cover',
	}
}

	return(
		<div style={style.background}>
		<MDBContainer className='py-5' >
		      <h2 className="h1-responsive font-weight-bold text-center my-5">
		        Contáctanos
		      </h2>

		      <MDBRow >
		        <MDBCol md="9" className="md-0 mb-5">

		          <form name="SaintsContactForm" method="post" >

		          {/*Value set to the same of the Form on Index.html*/}
				    <input type="hidden" name="form-name" value="SaintsContactForm" />

		            <MDBRow>
		              <MDBCol md="6">
		                <div className="md-form mb-5">
		                  <MDBInput 
		                  type="text" 
		                  id="contact-name" 
		                  label="Nombre" 
		                  name="Nombre"
		                  required
		                  />
		                </div>
		              </MDBCol>
		              <MDBCol md="6">
		                <div className="md-form mb-0">
		                  <MDBInput
		                    type="text"
		                    id="contact-email"
		                    label="Correo Electrónico"
		                    name="E-Mail"
		                    required
		                  />
		                </div>
		              </MDBCol>
		            </MDBRow>
		            <MDBRow>
		              <MDBCol md="6">
		                <div className="md-form mb-0">
		                  <MDBInput 
		                  type="text" 
		                  id="contact-subject" 
		                  label="Asunto" 
		                  name="Asunto"
		                  />
		                </div>
		              </MDBCol>
		              <MDBCol md="6">
		                <div className="md-form mb-0">
		                  <MDBInput 
		                  type="text" 
		                  id="contact-phone" 
		                  label="Teléfono" 
		                  name="Telefono"
		                  />
		                </div>
		              </MDBCol>
		            </MDBRow>
		            <MDBRow>
		              <MDBCol md="12">
		                <div className="md-form mb-0">
		                  <MDBInput
		                    type="textarea"
		                    id="contact-message"
		                    label="Escriba su mensaje"
		                    name="Mensaje"
		                  />
		                </div>
		              </MDBCol>
		            </MDBRow>
		          </form>
		          <div className="text-center text-md-left">
		            <MDBBtn color="primary" size="md" type="submit">
		              Enviar
		            </MDBBtn>
		          </div>
		        </MDBCol>
		        <MDBCol md="3" className="text-center">
		          <ul className="list-unstyled mb-0">
		            <li>
		              <a href="https://www.google.com/maps/place/12+de+Julio+de+1859+1056,+Leyes+de+Reforma+3ra+Secc,+Iztapalapa,+Ciudad+de+M%C3%A9xico,+CDMX,+Mexico/@19.3775581,-99.0773816,17z/data=!3m1!4b1!4m5!3m4!1s0x85d1fdb7605bbf09:0x59e86bad339be1f3!8m2!3d19.3775581!4d-99.0751929" target="__blank" style={{color: '#000'}}>
			            <MDBIcon icon="map-marker-alt" size="2x" className="blue-text mt-4" />
			            <p>CDMX, Calle 12 de Julio de 1859 #1056, México</p>
		              </a>
		            </li>
		            <li>
			          <a href="tel:+5215128016338" style={{color: '#000'}}>
			            <MDBIcon icon="phone" size="2x" className="blue-text mt-4" />
			            <p>+52 1 (512) 801 6338</p>
			          </a>
		            </li>
		            <li>
		              <a href="mailto:saintshardseltzer@gmail.com" style={{color: '#000'}}>
			            <MDBIcon icon="envelope" size="2x" className="blue-text mt-4" />
		              	<p>saintshardseltzer@gmail.com</p>
		              </a>
		            </li>
		          </ul>
		        </MDBCol>
		      </MDBRow>
	    </MDBContainer>
	    </div>
	)
}

export default Contact;