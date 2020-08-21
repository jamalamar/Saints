import React from 'react'
import { 
	MDBRow, 
	MDBCol, 
	MDBView, 
	MDBMask, 
	MDBCard, 
	MDBCardBody, 
	MDBIcon, 
	MDBBtn, 
	MDBInput
} from "mdbreact";


function Contact(){

	const style = {
			bg: {
			  backgroundImage: `url('Assets/pex5.jpg')`,
			  height: '40vh',
			  backgroundPosition: 'center',
			  backgroundRepeat: 'no-repeat',
			  backgroundSize: 'cover',

			}
		}

	return(
		<section className="contact-section pt-5 black">
		<form name="SaintsContactForm" method="post" >
              {/*Value set to the same of the Form on Index.html*/}
	    <input type="hidden" name="form-name" value="SaintsContactForm" />
              
		      <MDBCard className="pt-5 mt-5 center" >
		      
		        <MDBRow className="flex-center m-0">
		          <MDBCol lg="8">
		          <h1 className="pl-3 cyan-text">
			       CONTÁCTANOS
			      </h1>
		            <MDBCardBody className="form">
		              <h3 className="mt-1">
			            <select name="Asunto" className="browser-default custom-select" required>
				          <option value="">SELECCIONA UNA OPCIÓN</option>
				          <option value="Comentarios sobre el Producto/Sabor">Comentarios sobre el Producto/Sabor</option>
				          <option value="Solicitud de Patrocinio">Solicitud de Patrocinio</option>
				          <option value="Solicitud de Asociación">Solicitud de Asociación</option>
				          <option value="No puedo encontrar el producto">No puedo encontrar el producto</option>
				          <option value="Otro">Otro</option>
				        </select>
		              </h3>
		              <MDBRow>
		                <MDBCol md="6">
		                  <div className="md-form mb-0">
		                    <MDBInput
			                  label="Nombre"
			                  name="Nombre"
			                  iconClass="grey-text"
			                  type="text"
			                  id="form-name"
			                  required
		                    />
		                  </div>
		                </MDBCol>
		                <MDBCol md="6">
		                  <div className="md-form mb-0">
		                    <MDBInput
			                  label="Correo Electrónico"
			                  name="E-Mail"
			                  iconClass="grey-text"
			                  type="email"
			                  id="form-email"
			                  required
		                    />
		                  </div>
		                </MDBCol>
		              </MDBRow>
		              <MDBRow>
		                <MDBCol md="6">
		                  <div className="md-form mb-0">
		                    <MDBInput
		                      label="Fecha de Nacimiento"
			                  name="Fecha de Nacimiento"
			                  iconClass="grey-text"
			                  type="date"
			                  id="form-birth"
			                  required
		                    />
		                  </div>
		                </MDBCol>
		                <MDBCol md="6">
		                  <div className="md-form mb-0">
		                    <MDBInput
		                      label="Código Postal"
			                  name="Código-Postal"
			                  iconClass="grey-text"
			                  type="text"
			                  id="form-zip"
			                  required
		                    />
		                  </div>
		                </MDBCol>
		              </MDBRow>
		              <MDBRow>
		                <MDBCol md="12">
		                  <div className="md-form mb-0">
		                    <MDBInput
			                  label="Mensaje"
			                  name="Mensaje"
			                  iconClass="grey-text"
			                  type="textarea"
			                  id="form-text"
			                  required
		                    />
		                    <MDBBtn type="submit" className="aqua-gradient">
		                      Enviar <MDBIcon icon="paper-plane" />
		                    </MDBBtn>
		                  </div>
		                </MDBCol>
		              </MDBRow>
		            </MDBCardBody>
		          </MDBCol>
		        </MDBRow>
		      </MDBCard>
		      </form>
		    </section>
	)
}

const style = {
	background: {
	  background: 'url(Assets/Contact_Background.jpg)',
	  backgroundPosition: 'center',
	  backgroundRepeat: 'no-repeat',
	  backgroundSize: 'cover',
	}
}

export default Contact;