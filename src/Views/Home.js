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
          <MDBMask className='gradient'>
            <video
              className='video-intro'
              poster='https://i.imgur.com/NV9PCLr.mp4'
              muted
              loop
              autoPlay
            >
              <source
                src='https://i.imgur.com/NV9PCLr.mp4'
                type='video/mp4'
              />
            </video>
          </MDBMask>{' '}
          
          {/******************************CAROUSEL********************************/}


          <MDBCarousel
            activeItem={1}
            length={3}
            showControls={true}
            showIndicators={true}
          >
            <MDBCarouselInner>
              <MDBCarouselItem itemId="1">
                <MDBView>
                  <MDBContainer className="py-5">
                    <MDBCol className="text-white text-center py-5" style={style.jumbotron}>
                      <MDBCol className="py-5" md="6" style={style.logoHeader}>
                      <img 
                        className="img-fluid"
                        src='/Assets/Saints_WHITE.png' 
                        alt="First slide"
                      />
                    </MDBCol>
                      <Link to='/AboutUs'><MDBBtn outline color="white" className="">Descubre Más</MDBBtn></Link>
                    </MDBCol>
                  </MDBContainer>
                </MDBView>
              </MDBCarouselItem>

              <MDBCarouselItem itemId="2">
                <MDBView>
                  <MDBContainer className="p-5">
                    <MDBCol className="text-white text-center py-5" >
                      <MDBCol className="py-5" md="6" style={style.logoHeader}>
                      <img 
                        className="img-fluid"
                        src='/Assets/latas.png' 
                        alt="Second slide"
                      />
                    </MDBCol>
                      <Link to='/AboutUs'><MDBBtn outline color="white" className="">Nuestros Sabores</MDBBtn></Link>
                    </MDBCol>
                  </MDBContainer>
                </MDBView>
              </MDBCarouselItem>

              <MDBCarouselItem itemId="3">
                <MDBView>
                  <MDBContainer className="p-5">
                    <MDBCol className="text-white text-center py-5" >
                      <MDBCol className="py-5" md="6" style={style.logoHeader}>
                      <img 
                        className="img-fluid"
                        src='/Assets/VarPack.png' 
                        alt="Third slide"
                      />
                    </MDBCol>
                      <Link to='/AboutUs'><MDBBtn outline color="white" className="">Comprar</MDBBtn></Link>
                    </MDBCol>
                  </MDBContainer>
                </MDBView>
              </MDBCarouselItem>
            </MDBCarouselInner>
          </MDBCarousel>
   
        </MDBView>
        </div>


            {/******************************WHY IS IT SO GREAT?********************************/}

            
          <MDBContainer className="px-5">
          <section className="">
              <h2 className="h1-responsive font-weight-bold text-center my-5">
                ¿Por qué es Increíble?
              </h2>

              <MDBRow>
                <MDBCol md="4">
                  <MDBRow className="mb-3 pt-5">
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
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Reprehenderit maiores nam, aperiam minima assumenda deleniti
                        hic.
                      </p>
                    </MDBCol>
                  </MDBRow>
                  <MDBRow className="mb-3">
                    <MDBCol size="2">
                      <MDBIcon fab icon="envira" size="2x" className="cyan-text" />
                    </MDBCol>
                    <MDBCol size="10">
                      <h5 className="font-weight-bold mb-3">100% NATURALES</h5>
                      <p className="grey-text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Reprehenderit maiores nam, aperiam minima assumenda deleniti
                        hic.
                      </p>
                    </MDBCol>
                  </MDBRow>
                  <MDBRow className="mb-3">
                    <MDBCol size="2">
                      <MDBIcon icon="glass-martini" size="2x" className="cyan-text" />
                    </MDBCol>
                    <MDBCol size="10">
                      <h5 className="font-weight-bold mb-3">4.5% ALCOHOL</h5>
                      <p className="grey-text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Reprehenderit maiores nam, aperiam minima assumenda deleniti
                        hic.
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
                  <MDBRow className="mb-3 pt-5">
                    <MDBCol size="2">
                      <MDBIcon icon="heart" size="2x" className="cyan-text" />
                    </MDBCol>
                    <MDBCol size="10">
                      <h5 className="font-weight-bold mb-3">0g CARBS</h5>
                      <p className="grey-text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Reprehenderit maiores nam, aperiam minima assumenda deleniti
                        hic.
                      </p>
                    </MDBCol>
                  </MDBRow>
                  <MDBRow className="mb-3">
                    <MDBCol size="2">
                      <MDBIcon fab icon="pagelines" size="2x" className="cyan-text" />
                    </MDBCol>
                    <MDBCol size="10">
                      <h5 className="font-weight-bold mb-3">SIN GLUTEN</h5>
                      <p className="grey-text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Reprehenderit maiores nam, aperiam minima assumenda deleniti
                        hic.
                      </p>
                    </MDBCol>
                  </MDBRow>
                  <MDBRow className="mb-3">
                    <MDBCol size="2">
                      <MDBIcon icon="info-circle" size="2x" className="cyan-text" />
                    </MDBCol>
                    <MDBCol size="10">
                      <h5 className="font-weight-bold mb-3">SIN AZÚCAR AÑADIDA</h5>
                      <p className="grey-text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Reprehenderit maiores nam, aperiam minima assumenda deleniti
                        hic.
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



        	<MDBContainer className="mt-5">
			  <MDBRow>

			    <MDBCol lg="3" md="6" sm="6" className="p-1">
				    <img src='Assets/Pex1.jpg' className="w-100 img-fluid z-depth-1-half"/>
			    </MDBCol>
			    
			    <MDBCol lg="3" md="6" sm="6" className="p-1">
				    <img src='Assets/Pex2.jpg' className="w-100 img-fluid z-depth-1-half"/>
			    </MDBCol>
			    
			    <MDBCol lg="3" md="6" sm="6" className="p-1">
				    <img src='Assets/Pex3.jpg' className="w-100 img-fluid z-depth-1-half"/>
			    </MDBCol>
			    
			    <MDBCol lg="3" md="6" sm="6" className="p-1">
				    <img src='Assets/Pex4.jpg' className="w-100 img-fluid z-depth-1-half"/>
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

        <MDBContainer className="py-5 mt-5">


        	{/*
        	<MDBTypography tag="h1" variant="display-1" className="text-center pb-5 mb-5">
	        	Cualquier Ocasión
        	</MDBTypography>
	        */}

            
          {/********************************************FLAVORS*******************************************/}


            <MDBRow className="flex-center">
              <MDBCol lg="5">
                <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
                  <img
                    className="img-fluid"
                    src="Assets/13.png"
                    alt=""
                  />
                  <a href="#!">
                    <MDBMask overlay="white-slight" />
                  </a>
                </MDBView>
              </MDBCol>
              <MDBCol lg="7">
                <h2 className="h1-responsive font-weight-bold">
		             <img src='Assets/SaintsTitleB.png' style={{width: '25%'}}/>
	            </h2>
                <h1 className="yellow-text font-weight-bold mb-3 p-0 h1-responsive">
                  <strong> MANGO</strong>
                </h1>
                <p>
                  Nam libero tempore, cum soluta nobis est eligendi optio cumque
                  nihil impedit quo minus id quod maxime placeat facere possimus,
                  omnis voluptas assumenda est, omnis dolor repellendus et aut
                  officiis debitis.
                </p>
                <p>
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui 
                  blanditiis praesentium voluptatum deleniti atque corrupti quos 
                  dolores et quas molestias excepturi sint occaecati cupiditate 
                  non provident.
                </p>
                <MDBBtn color="yellow" size="md" className="waves-light ">
                  Read more
                </MDBBtn>
              </MDBCol>
            </MDBRow>

            <hr className="my-5" />
            
            <MDBRow className="flex-center">
              <MDBCol lg="7">
                <h2 className="h1-responsive font-weight-bold">
		             <img src='Assets/SaintsTitleB.png' style={{width: '25%'}}/>
	            </h2>
                <h1 className="orange-text font-weight-bold mb-3 p-0 h1-responsive">
                  <strong> MANDARINA</strong>
                </h1>
                <p>
                  Nam libero tempore, cum soluta nobis est eligendi optio cumque
                  nihil impedit quo minus id quod maxime placeat facere possimus,
                  omnis voluptas assumenda est, omnis dolor repellendus et aut
                  officiis debitis.
                </p>
                <p>
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui 
                  blanditiis praesentium voluptatum deleniti atque corrupti quos 
                  dolores et quas molestias excepturi sint occaecati cupiditate 
                  non provident.
                </p>
                <MDBBtn
                  color="orange"
                  size="md"
                  className="mb-lg-0 mb-4 waves-light"
                >
                  Read more
                </MDBBtn>
              </MDBCol>
              <MDBCol lg="5">
                <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
                  <img
                    className="img-fluid"
                    src="Assets/14.png"
                    alt=""
                  />
                  <a href="#!">
                    <MDBMask overlay="white-slight" />
                  </a>
                </MDBView>
              </MDBCol>
            </MDBRow>

            <hr className="my-5" />
            
            <MDBRow className="flex-center">
              <MDBCol lg="5">
                <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
                  <img
                    className="img-fluid"
                    src="Assets/15.png"
                    alt=""
                  />
                  <a href="#!">
                    <MDBMask overlay="white-slight" />
                  </a>
                </MDBView>
              </MDBCol>
              <MDBCol lg="7">
                <h2 className="h1-responsive font-weight-bold">
		             <img src='Assets/SaintsTitleB.png' style={{width: '25%'}}/>
	            </h2>
                <h1 className="cyan-text font-weight-bold mb-3 p-0 h1-responsive">
                  <strong> NATURAL</strong>
                </h1>
                <p>
                  Nam libero tempore, cum soluta nobis est eligendi optio cumque
                  nihil impedit quo minus id quod maxime placeat facere possimus,
                  omnis voluptas assumenda est, omnis dolor repellendus et aut
                  officiis debitis.
                </p>
                <p>
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui 
                  blanditiis praesentium voluptatum deleniti atque corrupti quos 
                  dolores et quas molestias excepturi sint occaecati cupiditate 
                  non provident.
                </p>
                <MDBBtn color="cyan" size="md" className="waves-light ">
                  Read more
                </MDBBtn>
              </MDBCol>
            </MDBRow>

        </MDBContainer>
      </div>
    );
  }
}

export default Home;