import React from 'react';
import { Link } from 'react-router-dom'

function Footer (){
	return(
		<footer class="page-footer font-small blue pt-4" style={style.footer}>
		  <div class="footer-copyright text-center py-3">© 2020 Copyright: 
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