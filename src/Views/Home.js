import React from 'react'
import {Link} from 'react-router-dom';

import { MDBJumbotron, MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCardTitle, MDBIcon } from "mdbreact";


function Home(){
	return(
		<div>
		    <MDBContainer>
		      <MDBRow>
		        <MDBCol>
		          <MDBJumbotron style={{ padding: 0 }}>
		            <MDBCol className="text-white text-center py-5 px-4 my-5" style={{ backgroundImage: `url(/Assets/Beach_Background.jpg)` }}>
		              <MDBCol className="py-5">
		                <MDBCardTitle className="h1-responsive pt-3 m-5 font-bold">Create your beautiful website with MDBootstrap</MDBCardTitle>
		                <p className="mx-5 mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat fugiat, laboriosam, voluptatem,
		                  optio vero odio nam sit officia accusamus minus error nisi architecto nulla ipsum dignissimos. Odit sed qui, dolorum!
		                </p>
		                <MDBBtn outline color="white" className="mb-5"><MDBIcon icon="clone" className="mr-2"></MDBIcon> View project</MDBBtn>
		              </MDBCol>
		            </MDBCol>
		          </MDBJumbotron>
		        </MDBCol>
		      </MDBRow>
		    </MDBContainer>
		</div>

	)
}



const style = {
	header: {
	    fontSize: '',
	    backgroundImage: 'url(/Assets/Beach_Background.jpg)',
	    backgroundPosition: 'center',
	    backgroundRepeat: 'no-repeat',
	    backgroundSize: 'cover',
	    textAlign: 'center',
	    padding: '2em 0em 2em 0em',
	    fontSize: '18px',
		letterSpacing: '0.095em',
		backgroundColor: '#cccccc',
	  },
	  LogoHeader: {
	  	width: '55%',
	  	padding: '6em 0em 2em 0em'
	  },
	  button: {
	  	fontWeight: 'bold',
	  }
}

export default Home;