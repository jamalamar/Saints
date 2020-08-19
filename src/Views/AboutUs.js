import React from "react";
import {  MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBIcon, MDBView, MDBBtn } from "mdbreact";

const AboutUs = () => {
  return (
  	<div className="py-5 bg-dark">
    <MDBCard className="my-5">
      <MDBCardBody>
        <h2 className="h1-responsive font-weight-bold text-center my-5 pb-5">
         ¿Qué es <img src='Assets/SaintsTitleB.png' style={{width: '25%'}}/>?
        </h2>

        <hr className="my-5" />
        
        <MDBRow>
          <MDBCol lg="5">
            <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
              <img
                className="img-fluid"
                src="https://mdbootstrap.com/img/Photos/Others/images/19.jpg"
                alt=""
              />
              <a href="#!">
                <MDBMask overlay="white-slight" />
              </a>
            </MDBView>
          </MDBCol>
          <MDBCol lg="7">
            <a href="#!" className="orange-text">
              <h6 className="font-weight-bold mb-3">
                <MDBIcon icon="sun" className="pr-2" />
                DÍA
              </h6>
            </a>
            <h3 className="font-weight-bold mb-3 p-0">
              <strong>Title</strong>
            </h3>
            <p>
              Nam libero tempore, cum soluta nobis est eligendi optio cumque
              nihil impedit quo minus id quod maxime placeat facere possimus,
              omnis voluptas assumenda est, omnis dolor repellendus et aut
              officiis debitis.
            </p>
			<p>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui 
              blanditiis praesentium voluptatum deleniti atque corrupti quos 
              dolores et quas molestias excepturi sint occaecati cupiditate 
              non provident.
            </p>
            <p>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni dolores eos qui ratione
              voluptatem sequi nesciunt. Neque porro qui dolorem ipsum quia
              sit amet.
            </p>
            <MDBBtn color="orange" size="md" className="waves-light ">
              Read more
            </MDBBtn>
          </MDBCol>
        </MDBRow>

        <hr className="my-5" />
        
        <MDBRow>
          <MDBCol lg="7">
            <a href="#!" className="indigo-text">
              <h6 className="font-weight-bold mb-3">
                <MDBIcon icon="moon" className="pr-2" />
                NOCHE
              </h6>
            </a>
            <h3 className="font-weight-bold mb-3 p-0">
              <strong>Title</strong>
            </h3>
            <p>
              Nam libero tempore, cum soluta nobis est eligendi optio cumque
              nihil impedit quo minus id quod maxime placeat facere possimus,
              omnis voluptas assumenda est, omnis dolor repellendus et aut
              officiis debitis.
            </p>
			<p>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui 
              blanditiis praesentium voluptatum deleniti atque corrupti quos 
              dolores et quas molestias excepturi sint occaecati cupiditate 
              non provident.
            </p>
            <p>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni dolores eos qui ratione
              voluptatem sequi nesciunt. Neque porro qui dolorem ipsum quia
              sit amet.
            </p>
            <MDBBtn
              color="indigo"
              size="md"
              className="mb-lg-0 mb-4 waves-light"
            >
              Read more
            </MDBBtn>
          </MDBCol>
          <MDBCol lg="5">
            <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
              <img
                className="img-fluid"
                src="https://mdbootstrap.com/img/Photos/Others/images/84.jpg"
                alt=""
              />
              <a href="#!">
                <MDBMask overlay="white-slight" />
              </a>
            </MDBView>
          </MDBCol>
        </MDBRow>

        <hr className="my-5" />
        
        <MDBRow>
          <MDBCol lg="5">
            <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
              <img
                className="img-fluid"
                src="https://mdbootstrap.com/img/Photos/Others/images/86.jpg"
                alt=""
              />
              <a href="#!">
                <MDBMask overlay="white-slight" />
              </a>
            </MDBView>
          </MDBCol>
          <MDBCol lg="7">
            <a href="#!" className="pink-text">
              <h6 className="font-weight-bold mb-3">
                <MDBIcon icon="suitcase" className="pr-2" />
                LIFESTYLE
              </h6>
            </a>
            <h3 className="font-weight-bold mb-3 p-0">
              <strong>Title</strong>
            </h3>
            <p>
              Nam libero tempore, cum soluta nobis est eligendi optio cumque
              nihil impedit quo minus id quod maxime placeat facere possimus,
              omnis voluptas assumenda est, omnis dolor repellendus et aut
              officiis debitis.
            </p>
			<p>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui 
              blanditiis praesentium voluptatum deleniti atque corrupti quos 
              dolores et quas molestias excepturi sint occaecati cupiditate 
              non provident.
            </p>
            <p>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni dolores eos qui ratione
              voluptatem sequi nesciunt. Neque porro qui dolorem ipsum quia
              sit amet.
            </p>
            <MDBBtn color="pink" size="md" className="waves-light ">
              Read more
            </MDBBtn>
          </MDBCol>
        </MDBRow>

        <hr className="my-5" />
        
        <MDBRow>
          <MDBCol lg="7">
            <a href="#!" className="blue-text">
              <h6 className="font-weight-bold mb-3">
                <MDBIcon icon="mountain" className="pr-2" />
                HIKE
              </h6>
            </a>
            <h3 className="font-weight-bold mb-3 p-0">
              <strong>Title</strong>
            </h3>
            <p>
              Nam libero tempore, cum soluta nobis est eligendi optio cumque
              nihil impedit quo minus id quod maxime placeat facere possimus,
              omnis voluptas assumenda est, omnis dolor repellendus et aut
              officiis debitis.
            </p>
			<p>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui 
              blanditiis praesentium voluptatum deleniti atque corrupti quos 
              dolores et quas molestias excepturi sint occaecati cupiditate 
              non provident.
            </p>
            <p>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni dolores eos qui ratione
              voluptatem sequi nesciunt. Neque porro qui dolorem ipsum quia
              sit amet.
            </p>
            <MDBBtn
              color="blue"
              size="md"
              className="mb-lg-0 mb-4 waves-light"
            >
              Read more
            </MDBBtn>
          </MDBCol>
          <MDBCol lg="5">
            <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
              <img
                className="img-fluid"
                src="https://mdbootstrap.com/img/Photos/Others/img (28).jpg"
                alt=""
              />
              <a href="#!">
                <MDBMask overlay="white-slight" />
              </a>
            </MDBView>
          </MDBCol>
        </MDBRow>

      </MDBCardBody>
    </MDBCard>
    </div>
  );
}

export default AboutUs;