import React from 'react'
import {Link} from 'react-router-dom';

import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'


function Home(){
	return(
		<div>
			<Jumbotron fluid style={style.header}>
			  <Container>
			    <div>
				    <img src='Assets/Saints_Logo_Original.png' style={style.LogoHeader}/>
			    </div>
			    {/*<Button as={Link} to='/About' variant="outline-dark" size="lg" style={style.button}>Learn More</Button>*/}
			  </Container>
			</Jumbotron>



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
	  header: {
	    backgroundImage: 'url(/Assets/Beach_Background.jpg)',
	    backgroundPosition: 'center',
	    backgroundRepeat: 'no-repeat',
	    backgroundSize: 'cover',
	    padding: '25px',
	    textAlign: 'center',
	    padding: '2em 0em 2em 0em',
	    fontSize: '18px',
		letterSpacing: '0.095em',
		backgroundColor: '#cccccc',
	  },
	  button: {
	  	fontWeight: 'bold',
	  }
}

export default Home;