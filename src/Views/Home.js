import React from 'react'
import {Link} from 'react-router-dom';

import { MDBJumbotron, MDBBtn, MDBRow, MDBCol, MDBCardTitle, MDBIcon } from "mdbreact";

function Home(){
	return(
		<div>
          <MDBJumbotron fluid style={{ padding: 0 }}>
            <MDBCol className="text-white text-center py-5" style={style.jumbotron}>
              <MDBCol className="py-5" md="6" style={style.logoHeader}>
	            <img src='/Assets/Saints_Logo_Original.png' className="img-fluid"/>
              </MDBCol>
                <Link to='/AboutUs'><MDBBtn outline color="dark" className="mb-5">Learn More</MDBBtn></Link>
            </MDBCol>
          </MDBJumbotron>
		</div>
	)
}



const style = {
	jumbotron: {
	  backgroundImage: 'url(/Assets/Beach_Background.jpg)',
	  backgroundPosition: 'center',
	  backgroundRepeat: 'no-repeat',
	  backgroundSize: 'cover'
	},
	logoHeader: {
	  margin: 'auto'
	  }
}

export default Home;