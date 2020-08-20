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
		<section className="black">
	    <MDBView
	          src={''}
	          fixed
	    >
	    <MDBMask className='' />
       {/*<h2 className="h1-responsive font-weight-bold text-center my-5">
        Cotactanos
      </h2>
     <p className="text-center w-responsive mx-auto pb-5">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
        error amet numquam iure provident voluptate esse quasi, veritatis
        totam voluptas nostrum quisquam eum porro a pariatur veniam.
      </p>*/}
      <MDBRow className="w-responsive mx-auto pt-5 m-5">
        <MDBCol lg="5" className="lg-0 mb-4 mt-5">
          <MDBCard>
            <MDBCardBody>
              <div className="form-header bg-dark text-center p-3" style={{'marginTop': '-3rem'}}>
                <h3 className="mt-2 text-white">
                  <MDBIcon icon="fa fa-envelope" /> Escríbenos:
                </h3>
              </div>

              <form name="SaintsContactForm" method="post" >
              {/*Value set to the same of the Form on Index.html*/}
				    <input type="hidden" name="form-name" value="SaintsContactForm" />
              
              <div className="md-form">
                {/*
                <MDBInput
                  icon="tag"
                  label="Asunto"
                  name="Asunto"
                  iconClass="grey-text"
                  type="text"
                  id="form-subject"
                  required
                >
            	*/}
            	
            	<MDBIcon className="grey-text" size="2x" icon='question' style={{'width':'10%'}}/>
	            <select name="Asunto" className="browser-default custom-select" style={{'width':'90%'}} required>
		          <option>ASUNTO</option>
		          <option value="Comentarios sobre el Producto/Sabor">Comentarios sobre el Producto/Sabor</option>
		          <option value="Solicitud de Patrocinio">Solicitud de Patrocinio</option>
		          <option value="Solicitud de Asociación">Solicitud de Asociación</option>
		          <option value="No puedo encontrar el producto">No puedo encontrar el producto</option>
		          <option value="Otro">Otro</option>
		        </select>
		        

              </div>
              <div className="md-form">
                <MDBInput
                  icon="user"
                  label="Nombre"
                  name="Nombre"
                  iconClass="grey-text"
                  type="text"
                  id="form-name"
                  required
                />
              </div>
              <div className="md-form">
                <MDBInput
                  icon="envelope"
                  label="E-Mail"
                  name="E-Mail"
                  iconClass="grey-text"
                  type="email"
                  id="form-email"
                  required
                />
              </div>
              <div className="md-form">
                <MDBInput
                  icon="pencil-alt"
                  label="Mensaje"
                  name="Mensaje"
                  iconClass="grey-text"
                  type="textarea"
                  id="form-text"
                  required
                />
              </div>
              <div className="text-center">
                <MDBBtn color="grey" type="submit">Enviar</MDBBtn>
              </div>
            </form>

            </MDBCardBody>
          </MDBCard>
        </MDBCol>
       
         {/********************************************MAP**********************************************/}

        {/*
        <MDBCol lg="7 mt-5">
          <div
            id="map-container"
            className="rounded z-depth-1-half map-container"
            style={{ height: "400px" }}
          >
            <iframe
              src="https://maps.google.com/maps?q=la%20europea%20oxxo%20&t=&z=11&ie=UTF8&iwloc=&output=embed"
              title="Saints Hard Seltzer"
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
            />
          </div>
          <br />
          <MDBRow className="text-center text-white">
            <MDBCol md="4">
              <MDBBtn tag="a" floating color="grey" className="accent-1">
                <MDBIcon icon="map-marker-alt" />
              </MDBBtn>
              <p>OXXO</p>
              <p className="mb-md-0">La Europea</p>
            </MDBCol>
            <MDBCol md="4">
              <MDBBtn tag="a" floating color="grey" className="accent-1">
                <MDBIcon icon="phone" />
              </MDBBtn>
              <p></p>
              <p></p>
            </MDBCol>
            <MDBCol md="4">
              <MDBBtn tag="a" floating color="grey" className="accent-1">
                <MDBIcon icon="envelope" />
              </MDBBtn>
              <p>saintshardseltzer@gmail.com </p>
              <p className="mb-md-0">saintshardseltzer@gmail.com </p>
            </MDBCol>
          </MDBRow>
        </MDBCol>
	  */}
      </MDBRow>
      </MDBView>
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