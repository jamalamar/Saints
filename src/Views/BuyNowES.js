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
        Encuéntranos en cualquiera de estas Sucursales
      </h2>
      <p className="grey-text text-center w-responsive mx-auto mb-5">
        Haz clic y ve a tu sucursal mas cercana.
      </p>
      <MDBRow>
        <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
          <div collection className="">
            <a href="https://www.ubereats.com" target="__blank" className="view zoom">
              <img
                src="Assets/Uber_eats.png"
                className="img-fluid"
                alt=""
              />
            </a>
          </div>
        </MDBCol>
        <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
          <div collection className="">
            <a href="https://www.rappi.com.mx" target="__blank" className="view zoom">
              <div>
              <img
                src="Assets/Rappi.png"
                className="img-fluid"
                alt=""
              />
              </div>
            </a>
          </div>
        </MDBCol>
        <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
          <div collection className="">
            <a href="https://www.amazon.com" target="__blank" className="view zoom">
              <img
                src="Assets/Amazon.png"
                className="img-fluid"
                alt=""
              />
            </a>
          </div>
        </MDBCol>
        <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
          <div collection className="">
            <a href="https://www.mercadolibre.com" target="__blank" className="view zoom">
              <img
                src="Assets/Mercado_libre.png"
                className="img-fluid"
                alt=""
              />
            </a>
          </div>
        </MDBCol>
      </MDBRow>

      <MDBRow>
        <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
          <div collection className="">
            <a href="http://elliquorstore.com" target="__blank" className="view zoom">
              <img
                src="Assets/Liquor_store.png"
                className="img-fluid"
                alt=""
              />
            </a>
          </div>
        </MDBCol>
        <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
          <div collection className="">
            <a href="https://vineira.com" target="__blank" className="view zoom">
              <div>
              <img
                src="Assets/Vineira.png"
                className="img-fluid"
                alt=""
              />
              </div>
            </a>
          </div>
        </MDBCol>
        <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
          <div collection className="">
            <a href="https://yema.mx" target="__blank" className="view zoom">
              <img
                src="Assets/Yema.png"
                className="img-fluid"
                alt=""
              />
            </a>
          </div>
        </MDBCol>
        <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
          <div collection className="">
            <a href="https://www.5liquorstore.com" target="__blank" className="view zoom">
              <img
                src="Assets/Cinco_liquor.png"
                className="img-fluid"
                alt=""
              />
            </a>
          </div>
        </MDBCol>
      </MDBRow>

      <MDBRow>
        <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
          <div collection className="">
            <a href="https://www.google.com/maps/search/chedraui/" target="__blank" className="view zoom">
              <img
                src="Assets/Chedraui.png"
                className="img-fluid"
                alt=""
              />
            </a>
          </div>
        </MDBCol>
        <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
          <div collection className="">
            <a href="https://www.google.com/maps/search/chedraui+selecto/" target="__blank" className="view zoom">
              <div>
              <img
                src="Assets/Selecto.png"
                className="img-fluid"
                alt=""
              />
              </div>
            </a>
          </div>
        </MDBCol>
        <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
          <div collection className="">
            <a href="https://www.google.com/maps/search/city+market/" target="__blank" className="view zoom">
              <img
                src="Assets/CityMarket.png"
                className="img-fluid"
                alt=""
              />
            </a>
          </div>
        </MDBCol>
        <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
          <div collection className="">
            <a href="https://www.didi-food.com/es-MX" target="__blank" className="view zoom">
              <img
                src="Assets/Didi.png"
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