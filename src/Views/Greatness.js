import React from "react";
import {  MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBIcon, MDBView, MDBBtn, MDBContainer } from "mdbreact";

const Sabores = () => {
  return (
    <div className="pt-5 bg-dark">

    <MDBCard className="mt-5">
      <MDBCardBody>
        <h2 className="h1-responsive font-weight-bold text-center mt-5 pb-3">
         ¿Qué es <img src='Assets/SaintsTitleB.png' style={{width: '25%'}}/>?
        </h2>
        <p className='grey-text text-center w-responsive mx-auto mb-5'>
          Saints® Hard Seltzer es una bebida ligera hecha con base de nuestra mezcla especial de un espíritu neutro con agua de Seltz y una sutil infusión de sabor frutal natural. 
        </p>
        
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
                      <h5 className="font-weight-bold mb-3">100% NATURALES</h5>
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
                      <h5 className="font-weight-bold mb-3">0g AZÚCAR</h5>
                      <p className="grey-text">
                        Endulzado con Stevia.
                      </p>
                    </MDBCol>
                  </MDBRow>
                </MDBCol>
              </MDBRow>
            </section>
            </MDBContainer>

      </MDBCardBody>
    </MDBCard>
    </div>
  );
}

export default Sabores;