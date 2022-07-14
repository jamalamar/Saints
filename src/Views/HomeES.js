import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {
  MDBCollapse,
  MDBMask,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBBtn,
  MDBView,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCarousel, 
  MDBCarouselInner, 
  MDBCarouselItem,
  MDBTypography, 
  MDBModal, 
  MDBModalBody, 
  MDBModalHeader, 
  MDBModalFooter
} from 'mdbreact';

import '../VideoBackgroundPage.css';


class Home extends Component {
  render() {

    const style = {
            jumbotron: {
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover'
            },
            logoHeader: {
              margin: 'auto'
              }
          }

    return (
      <div className="">
      
      {/******************************BACKGROUND********************************/}
      
      <div id='videobackground'>

        <MDBView>
          <MDBMask className=''>
            <video
              className='video-intro'
              poster='https://i.imgur.com/uFAiPhV.mp4'
              muted
              loop
              autoPlay
            >
              <source
                src='https://i.imgur.com/uFAiPhV.mp4'
                type='video/mp4'
              />
            </video>
          </MDBMask>{' '}
          
          {/***************************CAROUSEL (change lenght to show other items)*****************************/}


          <MDBCarousel
            activeItem={1}
            length={1}
            showControls={true}
            showIndicators={true}
          >
            <MDBCarouselInner>
              <MDBCarouselItem itemId="1">
                <MDBView>
                  <MDBContainer className="py-5">
                    <MDBCol className="text-white text-center pt-5" style={style.jumbotron}>
                      <MDBCol className="py-5" md="6" style={style.logoHeader}>
                      <img 
                        className="img-fluid"
                        src='/Assets/Saints_WHITE.png' 
                        alt="First slide"
                      />
                    </MDBCol>
                      <Link to='/Greatness'><MDBBtn outline color="white" className="">Descubre Más</MDBBtn></Link>
                    </MDBCol>
                  </MDBContainer>
                </MDBView>
              </MDBCarouselItem>

              <MDBCarouselItem itemId="2">
                <MDBView>
                  <MDBContainer className="p-5">
                    <MDBCol className="text-white text-center pt-5" >
                      <MDBCol className="py-5" md="6" style={style.logoHeader}>
                      <img 
                        className="img-fluid"
                        src='/Assets/latas.png' 
                        alt="Second slide"
                      />
                    </MDBCol>
                      <Link to='/Flavors'><MDBBtn outline color="white" className="">Nuestros Sabores</MDBBtn></Link>
                    </MDBCol>
                  </MDBContainer>
                </MDBView>
              </MDBCarouselItem>

              <MDBCarouselItem itemId="3">
                <MDBView>
                  <MDBContainer className="p-5">
                    <MDBCol className="text-white text-center pt-5" >
                      <MDBCol className="py-5 flex-center" md="6" style={style.logoHeader}>
                      <img 
                        className="img-fluid w-75"
                        src='/Assets/VarPack.png' 
                        alt="Third slide"
                      />
                    </MDBCol>
                      <Link to='/BuyNow'><MDBBtn outline color="white" className="">Comprar</MDBBtn></Link>
                    </MDBCol>
                  </MDBContainer>
                </MDBView>
              </MDBCarouselItem>
            </MDBCarouselInner>
          </MDBCarousel>
   
        </MDBView>
        </div>


            {/******************************WHY IS IT SO GREAT?********************************/}

          <h2 className="h1-responsive font-weight-bold text-center my-5">
            ¿Por qué es Increíble?
          </h2>

		  <MDBContainer className="px-5">
          <section className="">
              <MDBRow>
                <MDBCol md="4">
                  <MDBRow className="mb-3 py-5">
                    <MDBCol size="2">
                      <MDBIcon
                        icon="bolt"
                        size="2x"
                        className="cyan-text"
                      />
                    </MDBCol>
                    <MDBCol size="10">
                      <h5 className="font-weight-bold mb-3">90 CALORÍAS</h5>
                      <p className="grey-text">
                        Una elección de estilo de vida fundamental.
                      </p>
                    </MDBCol>
                  </MDBRow>
                  <MDBRow className="mb-3 py-4">
                    <MDBCol size="2">
                      <MDBIcon fab icon="envira" size="2x" className="cyan-text" />
                    </MDBCol>
                    <MDBCol size="10">
                      <h5 className="font-weight-bold mb-3">INGREDIENTES NATURALES</h5>
                      <p className="grey-text">
                        Agua de Seltz con una infusión frutal.
                      </p>
                    </MDBCol>
                  </MDBRow>
                  <MDBRow className="mb-3 py-5">
                    <MDBCol size="2">
                      <MDBIcon icon="glass-martini" size="2x" className="cyan-text" />
                    </MDBCol>
                    <MDBCol size="10">
                      <h5 className="font-weight-bold mb-3">4.5% ALCOHOL</h5>
                      <p className="grey-text">
                        Para disfrutarse en cualquier ocasión.
                      </p>
                    </MDBCol>
                  </MDBRow>
                </MDBCol>

                <MDBCol lg="4" sm="6" className="text-name">
                  <MDBContainer className="pb-5 px-5">
                      <img 
                        className="img-fluid"
                        src='/Assets/NaturalWET.png' 
                        alt="Third slide"
                      />

                  </MDBContainer>
                </MDBCol>
                
                <MDBCol md="4">
                  <MDBRow className="mb-3 py-5">
                    <MDBCol size="2">
                      <MDBIcon icon="heart" size="2x" className="cyan-text" />
                    </MDBCol>
                    <MDBCol size="10">
                      <h5 className="font-weight-bold mb-3">0g CARBS</h5>
                      <p className="grey-text">
                        Por qué sabemos que te importa.
                      </p>
                    </MDBCol>
                  </MDBRow>
                  <MDBRow className="mb-3 py-5">
                    <MDBCol size="2">
                      <MDBIcon fab icon="pagelines" size="2x" className="cyan-text" />
                    </MDBCol>
                    <MDBCol size="10">
                      <h5 className="font-weight-bold mb-3">SIN GLUTEN</h5>
                      <p className="grey-text">
                        Así de ligero es nuestro seltzer.
                      </p>
                    </MDBCol>
                  </MDBRow>
                  <MDBRow className="mb-3 py-5">
                    <MDBCol size="2">
                      <MDBIcon icon="info-circle" size="2x" className="cyan-text" />
                    </MDBCol>
                    <MDBCol size="10">
                      <h5 className="font-weight-bold mb-3">0% AZÚCAR</h5>
                      <p className="grey-text">
                        Endulzado sin calorías.
                      </p>
                    </MDBCol>
                  </MDBRow>
                </MDBCol>
              </MDBRow>
            </section>
            </MDBContainer>


          {/****************************************IMAGE BANNER****************************************/}


          {/*
            <hr className="mt-5 w-100 py-1 black" />
            <div className="font-weight-bold text-center">
             <img src='Assets/SaintsTitleB.png' style={{width: '20%'}}/>
             <img src='Assets/SaintsTitleB.png' style={{width: '20%'}}/>
             <img src='Assets/SaintsTitleB.png' style={{width: '20%'}}/>
             <img src='Assets/SaintsTitleB.png' style={{width: '20%'}}/>
             <img src='Assets/SaintsTitleB.png' style={{width: '20%'}}/>
            </div>
            <hr className="mb-5 w-100 py-1 black" />
        */}



        	<MDBContainer className="mt-5 px-3" fluid>
			  <MDBRow className="">

			    <MDBCol lg='3' md="3" sm="6" className="p-1">
				    <img src='Assets/insta1.png' className="w-100 img-fluid z-depth-1-half"/>
			    </MDBCol>
			    
			    <MDBCol lg='3' md="3" sm="6" className="p-1">
				    <img src='Assets/insta2.png' className="w-100 img-fluid z-depth-1-half"/>
			    </MDBCol>
			    
			    <MDBCol lg='3' md="3" sm="6" className="p-1">
				    <img src='Assets/insta3.png' className="w-100 img-fluid z-depth-1-half"/>
			    </MDBCol>
			    
			    <MDBCol lg='3' md="3" sm="6" className="p-1">
				    <img src='Assets/insta4.png' className="w-100 img-fluid z-depth-1-half"/>
			    </MDBCol>

			  </MDBRow>
			</MDBContainer>

	            {/*
	            <div className="font-weight-bold text-center">
		             <img src='Assets/Pex1.jpg' className="w-25"/>
		             <img src='Assets/Pex2.jpg' className="w-25"/>
		             <img src='Assets/Pex3.jpg' className="w-25"/>
		             <img src='Assets/Pex4.jpg' className="w-25"/>
	            </div>
		        */}


          {/********************************************FLAVORS*******************************************/}
            

        <MDBContainer className="py-5 mt-5">


        	{/*
        	<MDBTypography tag="h1" variant="display-1" className="text-center pb-5 mb-5">
	        	Cualquier Ocasión
        	</MDBTypography>
	        */}

            <MDBRow className="flex-center">
              <MDBCol lg="6" className="flex-center">
                <MDBView className="mb-lg-0 mb-4 w-50" hover waves>
                  <img
                    className="img-fluid"
                    src="Assets/MangoWET.png"
                    alt=""
                  />
                  <Link to='/Flavors'>
                    <MDBMask overlay="white-slight" />
                  </Link>
                </MDBView>
              </MDBCol>
              <MDBCol lg="6" className="">
                <h2 className="h1-responsive font-weight-bold">
		             <img src='Assets/SaintsTitleB.png' style={{width: '25%'}}/>
	            </h2>
                <h1 className="yellow-text font-weight-bold mb-3 p-0 h1-responsive">
                  <strong> MANGO</strong>
                </h1>
                <p className="h4 py-3 font-weight-light">
                  Descubre y disfruta el sabor refrescante y ligero, acentuado con una 
                  distintiva infusión natural de “La Joya Tropical”  en nuestra Agua de Seltz.
                </p>
                <Link to='/Flavors'>
                  <MDBBtn outline color="yellow" size="md" className="waves-light">Ver Más</MDBBtn>
                </Link>
              </MDBCol>
            </MDBRow>

            <hr className="my-5" />
            
            <MDBRow className="flex-center">
              <MDBCol lg="6" className="">
                <h2 className="h1-responsive font-weight-bold">
		             <img src='Assets/SaintsTitleB.png' style={{width: '25%'}}/>
	            </h2>
                <h1 className="orange-text font-weight-bold mb-3 p-0 h1-responsive">
                  <strong> MANDARINA</strong>
                </h1>
                <p className="h4 py-3 font-weight-light">
                	Rescatamos la mejor expresión de cada extracto que al combinarse con 
                	nuestra Agua de Seltz, presenta un distintivo sabor cítrico refrescante y sensación ligera.
                </p>
                <Link to='/Flavors'>
                  <MDBBtn outline color="orange" size="md" className="mb-lg-0 waves-light">Ver Más</MDBBtn>
                </Link>
              </MDBCol>
              <MDBCol lg="6" className="flex-center">
                <MDBView className="mb-lg-0 mb-4 w-50" hover waves>
                  <img
                    className="img-fluid"
                    src="Assets/MandarinaWET.png"
                    alt=""
                  />
                  <Link to='/Flavors'>
                    <MDBMask overlay="white-slight" />
                  </Link>
                </MDBView>
              </MDBCol>
            </MDBRow>

            <hr className="my-5" />
            
            <MDBRow className="flex-center">
              <MDBCol lg="6" className="flex-center">
                <MDBView className="mb-lg-0 mb-4 w-50" hover waves>
                  <img
                    className="img-fluid"
                    src="Assets/NaturalWET.png"
                    alt=""
                  />
                  <Link to='/Flavors'>
                    <MDBMask overlay="white-slight" />
                  </Link>
                </MDBView>
              </MDBCol>
              <MDBCol lg="6" className="">
                <h2 className="h1-responsive font-weight-bold">
		             <img src='Assets/SaintsTitleB.png' style={{width: '25%'}}/>
	            </h2>
                <h1 className="cyan-text font-weight-bold mb-3 p-0 h1-responsive">
                  <strong> NATURAL</strong>
                </h1>
                <p className="h4 py-3 font-weight-light">
                  Sensación viva, refrescante y sabor neutro, definen la naturaleza de nuestra 
                  Agua de Seltz, distinguiéndolo como una bebida ligera única. Ideal para acompañar 
                  cualquier ocasión.
                </p>
				<Link to='/Flavors'>
                  <MDBBtn outline color="cyan" size="md" className="waves-light">Ver Más</MDBBtn>
                </Link>
              </MDBCol>
            </MDBRow>

        </MDBContainer>
      </div>
    );
  }
}

export default Home;