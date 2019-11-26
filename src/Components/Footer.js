import React from 'react';
import { Link } from 'react-router-dom'

function Footer (){
	return(

		<footer class="page-footer font-small blue pt-4" style={style.footer}>

		  {/* Footer Links */}
		  <div class="container-fluid text-center text-md-left">

		    {/* Grid Row */}
		    <div class="row">

		      {/* Grid Column */}
		      <div class="col-md-6 mt-md-0 mt-3">

		        {/* Content */}
		        <img src='/Assets/SaintsLogo.png' style={style.logo}/>
		        

		      </div>
		      
		      {/* Grid Column */}

		      <hr class="clearfix w-100 d-md-none pb-3"></hr>

		      {/* Grid Column */}
		      <div class="col-md-3 mb-md-0 mb-3">

		        {/* Links */}
		        <h6 class="text-uppercase">Social Media</h6>

		        <ul class="list-unstyled">
		          <li>
		            <a href="https://fb.me/SaintsHardSeltzer" target="_blank" >Facebook</a>
		          </li>
		          <li>
		            <a href="https://instagram.com" target="_blank" >Instagram (Coming Soon...)</a>
		          </li>
		          <li>
		            <a href="https://linkedin.com" target="_blank" >Linked-In (Coming Soon...)</a>
		          </li>
		          <li>
		            <a href="#!"></a>
		          </li>
		        </ul>

		      </div>
		      {/* Grid Column */}


		      {/* Grid Column */}
		      <div class="col-md-3 mb-md-0 mb-3">

		        {/* Links */}
		        <h6 class="text-uppercase">Navigation</h6>

		        <ul class="list-unstyled">
		          <li>
		            <Link to="/">Home</Link>
		          </li>
		          <li>
		            <Link to="/OurStory">Our Story</Link>
		          </li>
		          <li>
		            <Link to="/FAQs">FAQs</Link>
		          </li>		          
		          <li>
		            <Link to="/Contact">Contact</Link>
		          </li>
		        </ul>

		      </div>
		      {/* Grid Column */}






		    </div>
		    {/* Grid row */}

		  </div>
		  {/* Footer Links */}

		  {/* Copyright */}
		  <div class="footer-copyright text-center py-3">© 2019 Copyright: 
		    <a> Saints Hard Seltzer</a>
		  </div>
		</footer>
	)
}


const style = {
	footer: {
		backgroundColor: 'rgba(250,250,255,100%)',
		color: 'rgba(0,0,0,100%)',
		borderRadius: '3px',
		fontSize: '10px'
	},
	logo: {
		width: '20em'
	}
}


export default Footer;