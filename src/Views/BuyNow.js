import React from 'react'
import { 
  MDBContainer, 
  MDBRow, 
  MDBCol, 
  MDBCard, 
  MDBCardImage, 
  MDBCardBody, 
  MDBCardTitle, 
  MDBCardText, 
  MDBCardFooter, 
  MDBIcon, 
  MDBTooltip,  
  MDBBadge, 
  MDBCarousel, 
  MDBCarouselInner, 
  MDBCarouselItem, 
  MDBBtn,
  MDBView,
  MDBMask 
} from "mdbreact";


function BuyNow(){
	return(
		<div className="">
      <MDBView>
        <MDBCol className="p-0">
         <div style={style.bg} className="flex-center">
         </div>
        </MDBCol>
        <MDBMask/>
      </MDBView>

      <section className="text-center my-5">
      <h2 className="h1-responsive font-weight-bold text-center my-5">
        Encuentranos en cualquiera de estas sucursales
      </h2>
      <p className="grey-text text-center w-responsive mx-auto mb-5">
        Haz click y ve a tu sucursal mas cercana.
      </p>
      <MDBRow>
        <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
          <div collection className="">
            <a href="https://www.laeuropea.com.mx/tiendas" target="__blank" className="view zoom">
              <img
                src="Assets/europea.jpg"
                className="img-fluid"
                alt=""
              />
            </a>
          </div>
        </MDBCol>
        <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
          <div collection className="">
            <a href="https://www.7-eleven.com.mx/buscador-tiendas/#/stores" target="__blank" className="view zoom">
              <div>
              <img
                src="Assets/7eleven.png"
                className="img-fluid"
                alt=""
              />
              </div>
            </a>
          </div>
        </MDBCol>
        <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
          <div collection className="">
            <a href="https://www.oxxo.cl/ubicaciones" target="__blank" className="view zoom">
              <img
                src="Assets/oxxo.png"
                className="img-fluid"
                alt=""
              />
            </a>
          </div>
        </MDBCol>
        <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
          <div collection className="">
            <a href="https://www.superama.com.mx/informacion/directorio-de-tiendas" target="__blank" className="view zoom">
              <img
                src="Assets/superama.png"
                className="img-fluid"
                alt=""
              />
            </a>
          </div>
        </MDBCol>
      </MDBRow>
    </section>


    </div>
	)
}

  const style = {
    bg: {
      backgroundImage: `url('Assets/pex6.jpg')`,
      height: '30vh',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',

    }
  }

export default BuyNow;