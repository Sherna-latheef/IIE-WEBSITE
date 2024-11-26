import { Container, Row, Col, ListGroup } from "react-bootstrap";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const isFooterHidden =
    location.pathname === "/escore" || location.pathname === "/eligibility";

  return (
    <footer id="footer" className={isFooterHidden ? "nav-hidden pt-5" : "pt-5 mt-4"}>
      <Container fluid>
        <Row className="footer-contact-container">
          <Col xs={12} xl={4} className="p-0">
            <div className="left-footer d-flex">
              <div className="footer-image-container d-none d-lg-block">
                <img
                  src="iiecentrelogo.png"
                  alt="Footer Image"
                  className="footer-image"
                />
              </div>
              <ListGroup variant="flush" className="contact-dtls">
                <h2 className="footerheaderiie">IIE Kerala Centre</h2>

                {/* Address with location icon */}
                <ListGroup.Item
                  style={{ fontFamily: "roboto", fontSize: "20px" }}
                  className="dtl-icons loc"
                >
                  <img
                    src="/Location.png"  /* Replace with your actual location icon URL */
                    alt="location"
                    style={{ width: "20px", marginRight: "10px" }}
                  />
                  <a href="#">
                    Ponnurunni, Chalikkavattom, Vyttila Ernakulam, Kerala 682019
                  </a>
                </ListGroup.Item>

                {/* Phone with call icon */}
                <ListGroup.Item
                  style={{ fontFamily: "roboto", fontSize: "20px" }}
                  className="dtl-icons phn"
                >
                  <img
                    src="/Calling.png"  /* Replace with your actual phone icon URL */
                    alt="call"
                    style={{ width: "20px", marginRight: "10px" }}
                  />
                  <a href="tel:+918891222500">+91 8891222500</a>
                </ListGroup.Item>

                {/* Email with email icon */}
                <ListGroup.Item
                  style={{ fontFamily: "roboto", fontSize: "20px" }}
                  className="dtl-icons mail"
                >
                  <img
                    src="/Message.png"  /* Replace with your actual email icon URL */
                    alt="email"
                    style={{ width: "20px", marginRight: "10px" }}
                  />
                  <a href="mailto:enquiry@iiecentre.com">
                    enquiry@iiecentre.com
                  </a>
                  <br />
                  <a href="mailto:info@iiecentre.com">info@iiecentre.com</a>
                  <br />
                  <a href="mailto:admin@iiecentre.com">admin@iiecentre.com</a>
                </ListGroup.Item>
              </ListGroup>
            </div>
          </Col>
          <Col xs={12} xl={8} className="p-0">
            <div className="quickLinks">
              <h5 className="quicklinkheadng m-0">
                Quick Links
                <span>
                  <img src="arrow-right.svg" alt="arrow-right" />
                </span>
              </h5>
              <div className="d-flex align-items-center flex-wrap gap-5">
                <a href="/#Home">Home</a>
                <a href="/#about">About</a>
                <a href="/#coursebtechhome">Courses</a>
                <a href="/faq">FAQ</a>
                <a href="">Contact</a>
              </div>
            </div>
            <div className="quickLinks">
              <h5 className="informtnhed m-0">
                Information
                <span>
                  <img src="arrow-right.svg" alt="arrow-right" />
                </span>
              </h5>
              <div className="d-flex align-items-center flex-wrap gap-3">
                <a href="/Exam">Examination Result</a>
                <a href="/#enquiry">Enquiries</a>
                <a href="/DocumentUpload">Application Status</a>
                <a href="/Download">Download</a>
              </div>
            </div>
            <div className="maps">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.441347575638!2d76.31572247450832!3d9.980353773373567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa8b95c087eb47b3f%3A0xa4aced13a67f4222!2sIIE%20KERALA%20CENTRE!5e0!3m2!1sen!2sin!4v1721645715178!5m2!1sen!2sin"
                width="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Col>
        </Row>
      </Container>
      <div className="copyright">copyright. All rights Reserved 2024</div>

      {/* CSS styling */}
      <style>{`
        .left-footer {
          position: relative;
          padding-left: 0; /* Reset padding for smaller screens */
        }

        .footer-image-container {
          position: relative;
          top: 0;
          transform: none;
          margin-bottom: 15px;
        }

        .footer-image {
          width: 100px; /* Adjusted width for smaller screens */
          height: auto; /* Maintain aspect ratio */
        }

        @media (min-width: 768px) {
          .footer-image {
            width: 150px;
            height: 168px;
            margin-top:60px;
          }
        }

        .quickLinks div a {
          font-size: 16px;
        }

        .maps iframe {
          width: 100%;
          height: 100%;
        }

        @media (max-width: 576px) {
          .footer-contact-container {
            text-align: center;
          }

          .footer-image {
            width: 80px;
          }

          .informtnhed {
            font-size: 24px !important;
            font-weight: 600 !important;
          }

          .quickLinks div a {
            display: block;
            margin-bottom: 10px;
            font-size: 20px !important;
          }

          .quickLinks img {
            display: none;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
