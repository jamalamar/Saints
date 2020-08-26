import React from "react";
import {  MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBIcon, MDBView, MDBBtn, MDBContainer, MDBTypography } from "mdbreact";

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
        <p className='grey-text text-center w-responsive mx-auto mb-5'>
        90 calorías, 4.5% alcohol, 0g carbohidratos, 0g de azúcar por lata de 355ml.
        </p>


        <MDBContainer className="pb-5">

        <hr className="mb-5" />

          {/*
          <MDBTypography tag="h1" variant="display-1" className="text-center pb-5 mb-5">
            Cualquier Ocasión
          </MDBTypography>
          */}

            <MDBRow className="flex-center">
              <MDBCol lg="5" className="flex-center">
                <MDBView className="mb-lg-0 mb-4 w-75" hover zoom>
                  <img
                    className="img-fluid"
                    src="Assets/MangoWET.png"
                    alt=""
                  />
                  <a href="#!">
                    <MDBMask overlay="white-slight" />
                  </a>
                </MDBView>
              </MDBCol>
              <MDBCol lg="7">
                 <h2 className="h1-responsive font-weight-bold">
                 <img src='Assets/SaintsTitleB.png' style={{width: '45%'}}/>
              </h2>
                <h1 className="yellow-text font-weight-bold mb-3 p-0 h1-responsive">
                  <MDBTypography tag="h1" variant="display-4">MANGO</MDBTypography>
                </h1>
                <p className="h4 py-3">
                  Elaborado con ingredientes tropicales de la mejor calidad, 
                  Saints® Mango es una bebida premium que logra cautivar los sentidos.
                </p>
                <p className="h5">Disponible en:</p>
                <div className="py-3">
                  <p className="py-1">Pack de Variedad / Caja de 12</p>
                  <p className="py-1">Pack de Mango / Caja de 6</p>
                </div>
                
              </MDBCol>
            </MDBRow>

            <hr className="my-5" />
            
            <MDBRow className="flex-center">
              <MDBCol lg="5" className="flex-center">
                <MDBView className="mb-lg-0 mb-4 w-75" hover zoom>
                  <img
                    className="img-fluid"
                    src="Assets/MandarinaWET.png"
                    alt=""
                  />
                  <a href="#!">
                    <MDBMask overlay="white-slight" />
                  </a>
                </MDBView>
              </MDBCol>
              <MDBCol lg="7">
                <h2 className="h1-responsive font-weight-bold">
                 <img src='Assets/SaintsTitleB.png' style={{width: '45%'}}/>
              </h2>
                <h1 className="orange-text font-weight-bold mb-3 p-0 h1-responsive">
                  <MDBTypography tag="h1" variant="display-4">MANDARINA</MDBTypography>
                </h1>
                <p className="h4 py-3">
                  Elaborado con ingredientes tropicales de la mejor calidad, 
                  Saints® Mango es una bebida premium que logra cautivar los sentidos.
                </p>
                <p className="h5">Disponible en:</p>
                <div className="py-3">
                  <p className="py-1">Pack de Variedad / Caja de 12</p>
                  <p className="py-1">Pack de Mandarina / Caja de 6</p>
                </div>
                
              </MDBCol>
            </MDBRow>

            <hr className="my-5" />
            
            <MDBRow className="flex-center">
              <MDBCol lg="5" className="flex-center">
                <MDBView className="mb-lg-0 mb-4 w-75" hover zoom>
                  <img
                    className="img-fluid"
                    src="Assets/NaturalWET.png"
                    alt=""
                  />
                  <a href="#!">
                    <MDBMask overlay="white-slight" />
                  </a>
                </MDBView>
              </MDBCol>
              <MDBCol lg="7">
                <h2 className="h1-responsive font-weight-bold">
                 <img src='Assets/SaintsTitleB.png' style={{width: '45%'}}/>
              </h2>
                <h1 className="cyan-text font-weight-bold mb-3 p-0 h1-responsive">
                  <MDBTypography tag="h1" variant="display-4">NATURAL</MDBTypography>
                </h1>
                <p className="h4 py-3">
                  Elaborado con ingredientes tropicales de la mejor calidad, 
                  Saints® Mango es una bebida premium que logra cautivar los sentidos.
                </p>
                <p className="h5">Disponible en:</p>
                <div className="py-3">
                  <p className="py-1">Pack de Variedad / Caja de 12</p>
                  <p className="py-1">Pack de Natural / Caja de 6</p>
                </div>
                
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
                  <strong> ????</strong>
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
                  <strong> ????</strong>
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
                  <strong> ????</strong>
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