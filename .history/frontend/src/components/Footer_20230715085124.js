/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { MDBFooter } from "mdb-react-ui-kit";

const Footer = () => {
  return (
    <MDBFooter
      bgColor="blue"
      color="light"
      className="text-center text-lg-start text-white bg-info"
    >
      <section className="d-flex justify-content-center p-3 border-bottom">
        <div className="me-2 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>

        <div className="">
          <a href="" className="col-md-3 col-lg-4 me-1 text-reset">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="" className="col-md-3 col-lg-4 me-1 text-reset">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="" className="col-md-3 col-lg-4 me-1 text-reset">
            <i className="fab fa-google"></i>
          </a>
          <a href="" className="col-md-3 col-lg-4 me-1 text-reset">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="" className="col-md-3 col-lg-4 me-1 text-reset">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="" className="col-md-3 col-lg-4 me-1 text-reset">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </section>

      <section className="">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <i className="fas fa-gem me-3"></i>About WippiNepal
              </h6>
              <p>
                WippiNepal is now a part of the WippiNepal Group. WippiNepal is a group of
                recylable products which brings into market for affodability and
                sustainability.
              </p>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Products</h6>
              <p>
                <a href="#!" className="text-reset">
                  Mobiles
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Televisions
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Laptop
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Accessories
                </a>
              </p>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <a href="#!" className="text-reset">
                  Pricing
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Settings
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Orders
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Help
                </a>
              </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <i className="fas fa-home me-3"></i> Baneshwor, Kathmandu, Nepal
              </p>
              <p>
                <i className="fas fa-envelope me-3"></i>
                wi@gmail.com
              </p>
              <p>
                <i className="fas fa-phone me-3"></i> +977 9804743591
              </p>
              <p>
                <i className="fas fa-print me-3"></i> +977 9803532714
              </p>
            </div>
          </div>
        </div>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2021 Copyright:
        <a className="text-reset p-1 fw-bold" href="https://www.cashify.in/">
          recan.com.np
        </a>
      </div>
    </MDBFooter>
  );
};
export default Footer;

// import "./style.css"
// // require("./style.css");
// // import { Container, Row, Col } from 'react-bootstrap';
// import styled from 'styled-components';
// import {
//   Facebook,
//   Instagram,
//   // MailOutline,
//   // Phone,
//   Pinterest,
//   // Room,
//   Twitter,
// } from "@material-ui/icons";
// const Payment = styled.img`
//     width: 50%;
// `;
// const SocialIcon = styled.div`
//   width: 40px;
//   height: 40px;
//   border-radius: 50%;
//   color: white;
//   background-color: #${(props) => props.color};
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   margin-right: 20px;
// `;
// const Left = styled.div`
//   flex: 1;
//   display: flex;
//   flex-direction: column;
//   padding:1 px;
// `;
// // const Logo = styled.h1``;
// const SocialContainer = styled.div`
//   display: flex;
// `;

// const Footer = () => {
//   return (
//     <footer>
//       <div className="main-footer">
//       <div className="container">
//         <div className="row">
//           {/* Column1 */}
//           <div className="col">
//           <h4>RECAN</h4>
//           <ui className="list-unstyled">
//         <li>Let's Revive The Old</li>
//     <Left>
//     <SocialContainer>
//     <SocialIcon color="3B5999">
//     <Facebook />
//     </SocialIcon>
//     <SocialIcon color="E4405F">
//     <Instagram />
//     </SocialIcon>
//     <SocialIcon color="55ACEE">
//     <Twitter />
//     </SocialIcon>
//     <SocialIcon color="E60023">
//     <Pinterest />
//     </SocialIcon>
//     </SocialContainer>
//     </Left>
//     </ui>
//           </div>
//           {/* Column2 */}
//           <div className="col">
//             <h4>Useful Links</h4>
//             <ui className="list-unstyled">
//               <li>Home</li>
//               <li>Cart</li>
//               <li>Coffee items</li>
//             </ui>
//           </div>
//           {/* Column3 */}
//           <div className="col">
//             <h4>We Are Located On</h4>
//             <ui className="list-unstyled">
//               <li>Biratnagar</li>
//               <li>Kathmandu</li>
//               <li>Damak</li>
//               <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
//             </ui>
//           </div>
//         </div>
//         <hr />
//         <div className="row">
//           <p className="col-sm">
//             &copy;{new Date().getFullYear()} Coffee Shop | All rights reserved |
//             Terms Of Service | Privacy
//           </p>
//         </div>
//       </div>
//     </div>
//     </footer>
//   )
// }

// export default Footer
