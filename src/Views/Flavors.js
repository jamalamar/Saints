import React from "react";
import {  MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBIcon, MDBView, MDBBtn, MDBContainer, MDBTypography, Link } from "mdbreact";

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
        <h1 className="text-center mb-3 pt-5 h1-responsive">
          <MDBTypography tag="h1" variant="display-4">OUR FLAVORS</MDBTypography>
        </h1>
        <p className='grey-text text-center w-responsive mx-auto mb-5'>
        90 calories, 4.5% alcohol, 0g carbohydrates, 0g sugar per 12oz (355ml) can.
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
                 <img src='Assets/SaintsTitleB.png' style={{width: '40%'}}/>
              </h2>
                <h1 className="yellow-text font-weight-bold mb-3 p-0 h1-responsive">
                  <MDBTypography tag="h1" variant="display-4">MANGO</MDBTypography>
                </h1>
                <p className="h4 py-3 font-weight-light">
                  Discover and enjoy this refreshing and light flavor, accented with a
                  distinctive natural infusion of the "Tropical Jewel" in our Seltzer.
                </p>
                <p className="h5 font-weight-bold">Available in:</p>
                <div className="py-3">
                  <p className="py-1">Tropical Variety 12-Pack</p>
                  <p className="py-1">Mango 6-Pack</p>
                  <p className="py-1">Mango 4-Pack</p>
                </div>
                <Link to='/BuyNow' className="p-0">
                  <MDBBtn color="yellow" size="bg" className="waves-light">Buy Now</MDBBtn>
                </Link>
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
                 <img src='Assets/SaintsTitleB.png' style={{width: '40%'}}/>
              </h2>
                <h1 className="orange-text font-weight-bold mb-3 p-0 h1-responsive">
                  <MDBTypography tag="h1" variant="display-4">TANGERINE</MDBTypography>
                </h1>
                <p className="h4 py-3 font-weight-light">
                  We rescued the best features of each extract, and we combined it with
                  our Seltzer to create a distinctive refreshing citrus flavor and light sensation.
                </p>
                <p className="h5 font-weight-bold">Available in:</p>
                <div className="py-3">
                  <p className="py-1">Tropical Variety 12-Pack</p>
                  <p className="py-1">Tangerine 6-Pack</p>
                  <p className="py-1">Tangerine 4-Pack</p>
                </div>
                <Link to='/BuyNow' className="p-0">
                  <MDBBtn color="orange" size="bg" className="waves-light">Buy Now</MDBBtn>
                </Link>
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
                 <img src='Assets/SaintsTitleB.png' style={{width: '40%'}}/>
              </h2>
                <h1 className="cyan-text font-weight-bold mb-3 p-0 h1-responsive">
                  <MDBTypography tag="h1" variant="display-4">NATURAL</MDBTypography>
                </h1>
                <p className="h4 py-3 font-weight-light">
                  Vivid, refreshing sensation and neutral flavor. This defines the nature of our
                  Seltzer, distinguishing it as a unique light drink. Ideal for any occasion.
                </p>
                <p className="h5 font-weight-bold">Available in:</p>
                <div className="py-3">
                  <p className="py-1">Natural 12-Pack</p>
                  <p className="py-1">Natural 6-Pack</p>
                  <p className="py-1">Natural 4-Pack</p>
                </div>
                <Link to='/BuyNow' className="p-0">
                  <MDBBtn color="cyan" size="bg" className="waves-light">Buy Now</MDBBtn>
                </Link>
              </MDBCol>
            </MDBRow>

            <hr className="my-5" />
            
            <MDBRow className="flex-center">
              <MDBCol lg="5" className="flex-center">
                <MDBView className="mb-lg-0 mb-4 w-75" hover zoom>
                  <img
                    className="img-fluid"
                    src="Assets/FresaKiwiWET.png"
                    alt=""
                  />
                  <a href="#!">
                    <MDBMask overlay="white-slight" />
                  </a>
                </MDBView>
              </MDBCol>
              <MDBCol lg="7">
                <h2 className="h1-responsive font-weight-bold">
                 <img src='Assets/SaintsTitleB.png' style={{width: '40%'}}/>
              </h2>
                <h1 className="pink-text font-weight-bold mb-3 p-0 h1-responsive">
                  <MDBTypography tag="h1" variant="display-4">STRAWBERRY-KIWI</MDBTypography>
                </h1>
                <p className="h4 py-3 font-weight-light">
                  The freshness in strawberries and kiwifruit are the perfect match for Hard Seltzer,
                  this flavorful combination is one of a kind.
                </p>
                <p className="h5 font-weight-bold">Available in:</p>
                <div className="py-3">
                  <p className="py-1">Tropical Variety 12-Pack</p>
                  <p className="py-1">Strawberry-Kiwi 6-Pack</p>
                  <p className="py-1">Strawberry-Kiwi 4-Pack</p>
                </div>
                <Link to='/BuyNow' className="p-0">
                  <MDBBtn color="cyan" size="bg" className="waves-light">Buy Now</MDBBtn>
                </Link>
              </MDBCol>
            </MDBRow>

            <hr className="my-5" />

            <MDBRow className="flex-center">
              <MDBCol lg="4">
                <h2 className="h1-responsive font-weight-bold">
                 <img src='Assets/SaintsTitleB.png' style={{width: '75%'}}/>
              </h2>
                <h1 className="purple-text font-weight-bold mb-3 p-0 h1-responsive">
                  <MDBTypography tag="h2" variant="display-5">COMING SOON</MDBTypography>
                </h1>
              </MDBCol>
            </MDBRow>

            <hr className="my-5" />
            
            <MDBRow className="flex-center">
              <MDBCol lg="4">
                <h2 className="h1-responsive font-weight-bold">
                 <img src='Assets/SaintsTitleB.png' style={{width: '75%'}}/>
              </h2>
                <h1 className="green-text font-weight-bold mb-3 p-0 h1-responsive">
                  <MDBTypography tag="h2" variant="display-5">COMING SOON</MDBTypography>
                </h1>
              </MDBCol>
            </MDBRow>

            <hr className="my-5" />
            
            <MDBRow className="flex-center">
              <MDBCol lg="4">
                <h2 className="h1-responsive font-weight-bold">
                 <img src='Assets/SaintsTitleB.png' style={{width: '75%'}}/>
              </h2>
                <h1 className="red-text font-weight-bold mb-3 p-0 h1-responsive">
                  <MDBTypography tag="h2" variant="display-5">COMING SOON</MDBTypography>
                </h1>
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
      backgroundImage: `url('Assets/pex8.jpg')`,
      height: '30vh',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',

    }
  }

export default Sabores;