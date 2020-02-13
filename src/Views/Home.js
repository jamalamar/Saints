import React, {Component} from 'react'
import {Link} from 'react-router-dom';

import { MDBJumbotron,MDBContainer, MDBBtn, MDBRow, MDBCol, MDBCardTitle, MDBIcon, MDBMask, MDBView } from "mdbreact";

class Home extends Component {
state = {
collapsed: false
};

handleTogglerClick = () => {
this.setState({
  collapsed: !this.state.collapsed
});
};

render() {
const navStyle = { marginTop: "4rem" };
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

const overlay = (
  <div
    id="sidenav-overlay"
    style={{ backgroundColor: "transparent" }}
    onClick={this.handleTogglerClick}
  />
);
	return(
        <div fluid>
        {this.state.collapsed && overlay}
	        <MDBView src='/Assets/Beach_Background.jpg' fixed>
	          <MDBMask className="rgba-white-light d-flex justify-content-center align-items-center">
	            <MDBContainer>
	              <MDBCol className="text-white text-center py-5" style={style.jumbotron}>
			          <MDBCol className="py-5" md="6" style={style.logoHeader}>
			            <img src='/Assets/Saints_Logo_Original.png' className="img-fluid"/>
			          </MDBCol>
			          <Link to='/AboutUs'><MDBBtn outline color="dark" className="mb-5">Learn More</MDBBtn></Link>
		          </MDBCol>
	            </MDBContainer>
	          </MDBMask>
	        </MDBView>
	        <main>
	          <MDBContainer>
	            <MDBRow className="py-5">
	              <MDBCol md="12" className="text-center">
	                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
	                  et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
	                  aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
	                  cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
	                  qui officia deserunt mollit anim id est laborum.</p>
	                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
	                  totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta
	                  sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
	                  consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
	                  dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi
	                  tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam,
	                  quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
	                  consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil
	                  molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
	                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
	                  et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
	                  aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
	                  cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
	                  qui officia deserunt mollit anim id est laborum.</p>
	                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
	                  totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta
	                  sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
	                  consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
	                  dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi
	                  tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam,
	                  quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
	                  consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil
	                  molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
	              </MDBCol>
	            </MDBRow>
	          </MDBContainer>
	        </main>
	    </div>
	)
	}
}
export default Home;