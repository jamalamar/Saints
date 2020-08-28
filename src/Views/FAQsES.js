import React, { Component } from "react";
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBIcon, MDBView, MDBBtn, MDBCollapse } from "mdbreact";

class FAQs extends Component {
	state={
	  collapseID: ""
	}

	toggleCollapse = collapseID => () =>
	  this.setState(prevState => ({
	    collapseID: prevState.collapseID !== collapseID ? collapseID : ""
 	}));

render() {

	const style = {
		bg: {
		  backgroundImage: `url('Assets/pex5.jpg')`,
		  height: '50vh',
		  backgroundPosition: 'center',
		  backgroundRepeat: 'no-repeat',
		  backgroundSize: 'cover',

		}
	}

	  return (
	  	<section className="black">
	  	
	  	<MDBView>
		  	<MDBCol className="p-0">
		  	 <div style={style.bg} className="flex-center">
				<img 
		        src="Assets/Saints_BLACK.png" 
		        className="img-fluid w-25 pt-5" 
		        alt="Saints Hard Seltzer" />
		     </div>
		    </MDBCol>
	      <MDBMask/>
	  	</MDBView>

	    <MDBCard className="px-5">
	      <MDBCardBody>
	        
	        <h2 className="h1-responsive font-weight-bold my-5">
	        	PREGUNTAS FRECUENTES
	        </h2>
	        
	        <hr className="my-5" />
	        
            <a onClick={this.toggleCollapse("collapse1")}>
	        <MDBRow>
	          <MDBCol md='12' sm='12'>
	            <h3 className="" >
		            <i className={ this.state.collapseID==="collapse1" ? "fa fa-angle-down rotate-icon" : "fa fa-angle-down" } />
		            <strong> ¿Cuáles son los ingredientes de Saints® Hard Seltzer?</strong> 
	            </h3>
	            <MDBCollapse id="collapse1" isOpen={this.state.collapseID}>
		            <p className="dark-grey-text" isOpen={this.state.collapseID}>
		              Saints® Hard Seltzer está hecho con una mezcla de agua de seltz, nuestra base de alcohol sin gluten y una infusión de sabor frutal.
		            </p>
	            </MDBCollapse>
	          </MDBCol>
	        </MDBRow>
            </a>
	        
	        <hr className="my-5" />
	        
            <a onClick={this.toggleCollapse("collapse2")}>
	        <MDBRow>
	          <MDBCol lgmd='12' sm='12'>
	            <h3>
		            <i className={ this.state.collapseID==="collapse2" ? "fa fa-angle-down rotate-icon" : "fa fa-angle-down" } />
		            <strong> ¿Cuántas calorías, carbohidratos, azúcar y alcohol contiene Saints® Hard Seltzer?</strong> 
	            </h3>
	            <MDBCollapse id="collapse2" isOpen={this.state.collapseID}>
		            <p className="dark-grey-text" isOpen={this.state.collapseID}>
		              Todas las variedades son de 355ml y tienen 90 calorías, 0g carbohidratos, 0g de azúcar y 4.5% de alcohol.
		            </p>
	            </MDBCollapse>
	          </MDBCol>
	        </MDBRow>
            </a>

	        <hr className="my-5" />
	        
	        <a onClick={this.toggleCollapse("collapse3")}>
	        <MDBRow>
	          <MDBCol md='12' sm='12'>
	            <h3>
		            <i className={ this.state.collapseID==="collapse3" ? "fa fa-angle-down rotate-icon" : "fa fa-angle-down" } />
		            <strong> ¿Qué tipo de alcohol contiene Saints® Hard Seltzer?</strong>
	            </h3>
	            
	            <MDBCollapse id="collapse3" isOpen={this.state.collapseID}>
		            <p className="dark-grey-text" isOpen={this.state.collapseID}>
		              Saints® Hard Seltzer contiene un destilado neutro completamente puro. 
		            </p>
	            </MDBCollapse>
	          </MDBCol>
	        </MDBRow>
	        </a>
	         
	        <hr className="my-5" />

            <a onClick={this.toggleCollapse("collapse4")}>
	        <MDBRow>
	          <MDBCol lgmd='12' sm='12'>
	            <h3>
		            <i className={ this.state.collapseID==="collapse4" ? "fa fa-angle-down rotate-icon" : "fa fa-angle-down" } />
		            <strong> ¿Cómo se endulza Saints® Hard Seltzer? ¿Cuál es el contenido de azúcar?</strong> 
	            </h3>
	            <MDBCollapse id="collapse4" isOpen={this.state.collapseID}>
		            <p className="dark-grey-text" isOpen={this.state.collapseID}>
		              Saints® Hard Seltzer es endulzado con Stevia (edulcorante natural sin calorías derivado originalmente de plantas).
		            </p>
	            </MDBCollapse>
	          </MDBCol>
	        </MDBRow>
            </a>

	        <hr className="my-5" />
	        
            <a onClick={this.toggleCollapse("collapse5")}>
	        <MDBRow>
	          <MDBCol md='12' sm='12'>
	            <h3>
		            <i className={ this.state.collapseID==="collapse5" ? "fa fa-angle-down rotate-icon" : "fa fa-angle-down" } />
		            <strong> ¿Saints® Hard Seltzer contiene gluten?</strong> 
	            </h3>
	            <MDBCollapse id="collapse5" isOpen={this.state.collapseID}>
		            <p className="dark-grey-text" isOpen={this.state.collapseID}>
		              No. Saints® Hard Seltzer es completamente libre de gluten.
		            </p>
	            </MDBCollapse>
	          </MDBCol>
	        </MDBRow>
            </a>

	        <hr className="my-5" />
	        
            <a onClick={this.toggleCollapse("collapse6")}>
	        <MDBRow>
	          <MDBCol md='12' sm='12'>
	            <h3>
		            <i className={ this.state.collapseID==="collapse6" ? "fa fa-angle-down rotate-icon" : "fa fa-angle-down" } />
		            <strong> ¿Saints® Hard Seltzer contiene cafeína?</strong> 
	            </h3>
	            <MDBCollapse id="collapse6" isOpen={this.state.collapseID}>
		            <p className="dark-grey-text" isOpen={this.state.collapseID}>
		              No. Saints® Hard Seltzer no contiene cafeína.
		            </p>
	            </MDBCollapse>
	          </MDBCol>
	        </MDBRow>
            </a>

	        <hr className="my-5" />
	        
            <a onClick={this.toggleCollapse("collapse7")}>
	        <MDBRow>
	          <MDBCol md='12' sm='12'>
	            <h3>
		            <i className={ this.state.collapseID==="collapse7" ? "fa fa-angle-down rotate-icon" : "fa fa-angle-down" } />
		            <strong> ¿Saints® Hard Seltzer contiene alérgenos?</strong> 
	            </h3>
	            <MDBCollapse id="collapse7" isOpen={this.state.collapseID}>
		            <p className="dark-grey-text" isOpen={this.state.collapseID}>
		              Nuestros productos no contienen alérgenos comunes como leche, huevos, pescado, mariscos, nueces, maní, trigo y soya. 
		            </p>
	            </MDBCollapse>
	          </MDBCol>
	        </MDBRow>
            </a>

	        <hr className="my-5" />

	      </MDBCardBody>
	    </MDBCard>
	    </section>
	  );
	}
}

export default FAQs;