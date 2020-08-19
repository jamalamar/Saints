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
  MDBCarouselItem
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
      <div>
      
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
                      <MDBCol className="py-5" md="8" style={style.logoHeader}>
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
                      <MDBCol className="py-5" md="8" style={style.logoHeader}>
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
                      <h5 className="font-weight-bold mb-3">ORGÁNICO</h5>
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

                <MDBCol md="4" className="text-name">
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



          {/******************************FLAVORS********************************/}

            <hr className="mt-5 w-75" />

        <MDBContainer className="py-5">
            <h2 className="h1-responsive font-weight-bold text-center my-5 pb-5">
             ¿Qué es <img src='Assets/SaintsTitleB.png' style={{width: '25%'}}/>?
            </h2>

            
            <MDBRow>
              <MDBCol lg="5">
                <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
                  <img
                    className="img-fluid"
                    src="https://mdbootstrap.com/img/Photos/Others/images/19.jpg"
                    alt=""
                  />
                  <a href="#!">
                    <MDBMask overlay="white-slight" />
                  </a>
                </MDBView>
              </MDBCol>
              <MDBCol lg="7">
                <a href="#!" className="orange-text">
                  <h6 className="font-weight-bold mb-3">
                    <MDBIcon icon="sun" className="pr-2" />
                    DÍA
                  </h6>
                </a>
                <h3 className="font-weight-bold mb-3 p-0">
                  <strong>Title</strong>
                </h3>
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
                <MDBBtn color="orange" size="md" className="waves-light ">
                  Read more
                </MDBBtn>
              </MDBCol>
            </MDBRow>

            <hr className="my-5" />
            
            <MDBRow>
              <MDBCol lg="7">
                <a href="#!" className="indigo-text">
                  <h6 className="font-weight-bold mb-3">
                    <MDBIcon icon="moon" className="pr-2" />
                    NOCHE
                  </h6>
                </a>
                <h3 className="font-weight-bold mb-3 p-0">
                  <strong>Title</strong>
                </h3>
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
                  color="indigo"
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
                    src="https://mdbootstrap.com/img/Photos/Others/images/84.jpg"
                    alt=""
                  />
                  <a href="#!">
                    <MDBMask overlay="white-slight" />
                  </a>
                </MDBView>
              </MDBCol>
            </MDBRow>

            <hr className="my-5" />
            
            <MDBRow>
              <MDBCol lg="5">
                <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
                  <img
                    className="img-fluid"
                    src="https://mdbootstrap.com/img/Photos/Others/images/86.jpg"
                    alt=""
                  />
                  <a href="#!">
                    <MDBMask overlay="white-slight" />
                  </a>
                </MDBView>
              </MDBCol>
              <MDBCol lg="7">
                <a href="#!" className="pink-text">
                  <h6 className="font-weight-bold mb-3">
                    <MDBIcon icon="suitcase" className="pr-2" />
                    LIFESTYLE
                  </h6>
                </a>
                <h3 className="font-weight-bold mb-3 p-0">
                  <strong>Title</strong>
                </h3>
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
                <MDBBtn color="pink" size="md" className="waves-light ">
                  Read more
                </MDBBtn>
              </MDBCol>
            </MDBRow>

            <hr className="my-5" />
            
            <MDBRow>
              <MDBCol lg="7">
                <a href="#!" className="blue-text">
                  <h6 className="font-weight-bold mb-3">
                    <MDBIcon icon="mountain" className="pr-2" />
                    HIKE
                  </h6>
                </a>
                <h3 className="font-weight-bold mb-3 p-0">
                  <strong>Title</strong>
                </h3>
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
                  color="blue"
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
                    src="https://mdbootstrap.com/img/Photos/Others/img (28).jpg"
                    alt=""
                  />
                  <a href="#!">
                    <MDBMask overlay="white-slight" />
                  </a>
                </MDBView>
              </MDBCol>
            </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}

export default Home;