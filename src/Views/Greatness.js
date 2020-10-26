import React from "react";
import {  MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBIcon, MDBView, MDBBtn, MDBContainer } from "mdbreact";

const Sabores = () => {
  return (
    <div className="bg-dark">

      <MDBView>
        <MDBCol className="p-0">
         <div style={style.bg} className="flex-center">
         </div>
        </MDBCol>
        <MDBMask/>
      </MDBView>

    <MDBCard className="">
      <MDBCardBody>
        <h2 className="h1-responsive font-weight-bold flex-center py-4">
         What is <img src='Assets/SaintsTitleB.png' style={{width: '25%'}}/>?
        </h2>
        <p className='grey-text text-center w-responsive mx-auto mb-5'>
          Saints® Hard Seltzer is a light drink made from our special blend of a neutral spirit, with our signature Seltzer and a subtle infusion of natural fruit flavor. 
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
                      <h5 className="font-weight-bold mb-3">90 CALORIES</h5>
                      <p className="grey-text">
                        A fundamental lifestyle choice.
                      </p>
                    </MDBCol>
                  </MDBRow>
                  <MDBRow className="mb-3 py-4">
                    <MDBCol size="2">
                      <MDBIcon fab icon="envira" size="2x" className="cyan-text" />
                    </MDBCol>
                    <MDBCol size="10">
                      <h5 className="font-weight-bold mb-3">NATURAL INGREDIENTS</h5>
                      <p className="grey-text">
                        Seltz water with a fruity infusion.
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
                        So you can enjoy it on any occasion.
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
                        Because we know you care.
                      </p>
                    </MDBCol>
                  </MDBRow>
                  <MDBRow className="mb-3 py-5">
                    <MDBCol size="2">
                      <MDBIcon fab icon="pagelines" size="2x" className="cyan-text" />
                    </MDBCol>
                    <MDBCol size="10">
                      <h5 className="font-weight-bold mb-3">GLUTEN-FREE</h5>
                      <p className="grey-text">
                        That's how light our Seltzer is.
                      </p>
                    </MDBCol>
                  </MDBRow>
                  <MDBRow className="mb-3 py-5">
                    <MDBCol size="2">
                      <MDBIcon icon="info-circle" size="2x" className="cyan-text" />
                    </MDBCol>
                    <MDBCol size="10">
                      <h5 className="font-weight-bold mb-3">0% SUGAR</h5>
                      <p className="grey-text">
                        Sweetened without calories.
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

  const style = {
    bg: {
      backgroundImage: `url('Assets/pex7.jpg')`,
      height: '30vh',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',

    }
  }

export default Sabores;