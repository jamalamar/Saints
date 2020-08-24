import React from "react";
import {  MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBIcon, MDBView, MDBBtn, MDBContainer } from "mdbreact";

const Sabores = () => {
  return (
  	<div className="bg-dark">
    
    <MDBView>
      <MDBCol className="p-0">
       <div style={style.bg} className="flex-center">
      {/*<img 
          src="Assets/Saints_WHITE.png" 
          className="img-fluid w-25 pt-5" 
          alt="Saints Hard Seltzer" />*/}
       </div>
      </MDBCol>
      <MDBMask/>
    </MDBView>

    <MDBCard className="">
      <MDBCardBody>        
        <h1 className="text-center pt-5"><strong>NUESTROS SABORES</strong></h1>
        
        <MDBContainer className="py-5 mt-5">


          {/*
          <MDBTypography tag="h1" variant="display-1" className="text-center pb-5 mb-5">
            Cualquier Ocasión
          </MDBTypography>
          */}

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
                
              </MDBCol>
            </MDBRow>

            <hr className="my-5" />
            
            <MDBRow className="flex-center">
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
                
              </MDBCol>
            </MDBRow>

            <hr className="my-5" />

            <MDBRow className="flex-center">
              <MDBCol lg="5">
                <MDBView className="rounded z-depth-2 mb-lg-0 mb-4">
                  <img
                    className="img-fluid"
                    src="Assets/Saints_BLACK.png"
                    alt=""
                  />
                  <a href="#!">
                    <MDBMask overlay="yellow-slight" />
                  </a>
                </MDBView>
              </MDBCol>
              <MDBCol lg="7">
                <h2 className="h1-responsive font-weight-bold">
                 <img src='Assets/SaintsTitleB.png' style={{width: '25%'}}/>
              </h2>
                <h1 className="yellow-text font-weight-bold mb-3 p-0 h1-responsive">
                  <strong> PIÑA</strong>
                </h1>
                <p className="h2 grey-text">
                  Próximamente
                </p>
                
              </MDBCol>
            </MDBRow>

            <hr className="my-5" />
            
            <MDBRow className="flex-center">
              <MDBCol lg="5">
                <MDBView className="rounded z-depth-2 mb-lg-0 mb-4">
                  <img
                    className="img-fluid"
                    src="Assets/Saints_BLACK.png"
                    alt=""
                  />
                  <a href="#!">
                    <MDBMask overlay="green-slight" />
                  </a>
                </MDBView>
              </MDBCol>
              <MDBCol lg="7">
                <h2 className="h1-responsive font-weight-bold">
                 <img src='Assets/SaintsTitleB.png' style={{width: '25%'}}/>
              </h2>
                <h1 className="green-text font-weight-bold mb-3 p-0 h1-responsive">
                  <strong> LIMÓN</strong>
                </h1>
                <p className="h2 grey-text">
                  Próximamente
                </p>
                
              </MDBCol>
            </MDBRow>

            <hr className="my-5" />
            
            <MDBRow className="flex-center">
              <MDBCol lg="5">
                <MDBView className="rounded z-depth-2 mb-lg-0 mb-4">
                  <img
                    className="img-fluid"
                    src="Assets/Saints_BLACK.png"
                    alt=""
                  />
                  <a href="#!">
                    <MDBMask overlay="red-slight" />
                  </a>
                </MDBView>
              </MDBCol>
              <MDBCol lg="7">
                <h2 className="h1-responsive font-weight-bold">
                 <img src='Assets/SaintsTitleB.png' style={{width: '25%'}}/>
              </h2>
                <h1 className="red-text font-weight-bold mb-3 p-0 h1-responsive">
                  <strong> FRUTOS ROJOS</strong>
                </h1>
                <p className="h2 grey-text">
                  Próximamente
                </p>
                
              </MDBCol>
            </MDBRow>

        </MDBContainer>

      </MDBCardBody>
    </MDBCard>
    </div>
  );
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

export default Sabores;