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
	return(
		<section className="contact-section pt-5 black">
		<form name="SaintsContactForm" method="post" >
              {/*Value set to the same of the Form on Index.html*/}
	    <input type="hidden" name="form-name" value="SaintsContactForm" />
              
		      <MDBCard className="pt-5 mt-5 px-5" >
		        <MDBRow>
		          <MDBCol lg="8">
		            <MDBCardBody className="form">
		              <h3 className="mt-4">
			            <select name="Asunto" className="browser-default custom-select" required>
				          <option value="">ASUNTO</option>
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
			                  label="E-Mail"
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
		                    <MDBBtn type="submit" rounded className="aqua-gradient">
		                      Enviar <MDBIcon icon="paper-plane" />
		                    </MDBBtn>
		                  </div>
		                </MDBCol>
		              </MDBRow>
		            </MDBCardBody>
		          </MDBCol>
		          <MDBCol lg="4">
		            <MDBCardBody className="contact text-center h-100">
		              <h3 className="my-4 pb-2">Contact information</h3>
		              <ul className="text-lg-left list-unstyled ml-4">
		                <li>
		                  <p>
		                    <MDBIcon icon="map-marker-alt" className="pr-2" />
		                    New York, 94126 USA
		                  </p>
		                </li>
		                <li>
		                  <p>
		                    <MDBIcon icon="phone" className="pr-2" />+ 01 234 567 89
		                  </p>
		                </li>
		                <li>
		                  <p>
		                    <MDBIcon icon="envelope" className="pr-2" />
		                    contact@example.com
		                  </p>
		                </li>
		              </ul>
		              <hr className="hr-light my-4" />
		              <ul className="list-inline text-center list-unstyled">
		                <li className="list-inline-item">
		                  <a href="https://fb.me/SaintsHardSeltzer" target="__blank" className="p-2 fa-lg w-ic blue-text">
		                    <MDBIcon fab icon="facebook" />
		                  </a>
		                </li>
		                <li className="list-inline-item">
		                  <a href="https://instagram.com/saintseltzer/" target="__blank" className="p-2 fa-lg w-ic pink-text">
		                    <MDBIcon fab icon="instagram" />
		                  </a>
		                </li>
		              </ul>
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