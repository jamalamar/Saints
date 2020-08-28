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
	        	FREQUENTLY ASKED QUESTIONS
	        </h2>
	        
	        <hr className="my-5" />
	        
            <a onClick={this.toggleCollapse("collapse1")}>
	        <MDBRow>
	          <MDBCol md='12' sm='12'>
	            <h3 className="" >
		            <i className={ this.state.collapseID==="collapse1" ? "fa fa-angle-down rotate-icon" : "fa fa-angle-down" } />
		            <strong> What are the ingredients in Saints® Hard Seltzer?</strong> 
	            </h3>
	            <MDBCollapse id="collapse1" isOpen={this.state.collapseID}>
		            <p className="dark-grey-text" isOpen={this.state.collapseID}>
		              Saints® Hard Seltzer is made with a blend of our Seltzer, our Gluten-Free Alcohol base, and a Fruity Infusion.
		            </p>
	            </MDBCollapse>
	          </MDBCol>
	        </MDBRow>
            </a>
	        
	        <hr className="my-5" />
	        
            <a onClick={this.toggleCollapse("collapse2")}>
	        <MDBRow>
	          <MDBCol md='12' sm="12">
	            <h3>
		            <i className={ this.state.collapseID==="collapse2" ? "fa fa-angle-down rotate-icon" : "fa fa-angle-down" } />
		            <strong> How many calories, carbohydrates, sugar and alcohol are in a Saints® Hard Seltzer?</strong> 
	            </h3>
	            <MDBCollapse id="collapse2" isOpen={this.state.collapseID}>
		            <p className="dark-grey-text" isOpen={this.state.collapseID}>
		              All of our varieties are 12oz (355ml) and have 90 Calories, 0g Carbohydrates, 0g Sugar and 4.5% Alcohol.
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
		            <strong> What type of alcohol is in a Saints® Hard Seltzer?</strong>
	            </h3>
	            
	            <MDBCollapse id="collapse3" isOpen={this.state.collapseID}>
		            <p className="dark-grey-text" isOpen={this.state.collapseID}>
		              Saints® Hard Seltzer contains a completely pure neutral spirit.
		            </p>
	            </MDBCollapse>
	          </MDBCol>
	        </MDBRow>
	        </a>
	         
	        <hr className="my-5" />

            <a onClick={this.toggleCollapse("collapse4")}>
	        <MDBRow>
	          <MDBCol md="12" sm="12">
	            <h3>
		            <i className={ this.state.collapseID==="collapse4" ? "fa fa-angle-down rotate-icon" : "fa fa-angle-down" } />
		            <strong> How is Saints® Hard Seltzer sweetened?... What is the sugar content?</strong> 
	            </h3>
	            <MDBCollapse id="collapse4" isOpen={this.state.collapseID}>
		            <p className="dark-grey-text" isOpen={this.state.collapseID}>
		              Saints® Hard Seltzer is sweetened with Stevia (a natural, calorie-free sweetener originally derived from plants).
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
		            <strong> Does Saints® Hard Seltzer contain gluten?</strong> 
	            </h3>
	            <MDBCollapse id="collapse5" isOpen={this.state.collapseID}>
		            <p className="dark-grey-text" isOpen={this.state.collapseID}>
		              No. Saints® Hard Seltzer is completely Gluten-Free.


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
		            <strong> Does Saints® Hard Seltzer contain caffeine?</strong> 
	            </h3>
	            <MDBCollapse id="collapse6" isOpen={this.state.collapseID}>
		            <p className="dark-grey-text" isOpen={this.state.collapseID}>
		              No. Saints® Hard Seltzer does not contain caffeine.
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
		            <strong> Does Saints® Hard Seltzer contain allergens?</strong> 
	            </h3>
	            <MDBCollapse id="collapse7" isOpen={this.state.collapseID}>
		            <p className="dark-grey-text" isOpen={this.state.collapseID}>
		              Our products do not contain common allergens such as milk, eggs, fish, shellfish, tree nuts, peanuts, wheat and soy. 
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