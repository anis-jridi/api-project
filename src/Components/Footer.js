import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Footer = () => {
  return (
    <div>
      <MDBFooter color="blue" className="font-small pt-4 mt-4">
        <MDBContainer fluid className="text-center text-md-left">
          <MDBRow>
            <MDBCol md="6">
              <h2 className="title">ANIS JRIDI</h2>
            </MDBCol>
            <MDBCol md="6">
              <h5 className="title"></h5>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <div className="footer-copyright text-center py-3"></div>
      </MDBFooter>
    </div>
  );
};

export default Footer;
