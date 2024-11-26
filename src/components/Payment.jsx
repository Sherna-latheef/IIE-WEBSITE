import React, { useEffect } from "react";
import PaymentButton from "./PaymentButton";

const Payment = () => {
  useEffect(() => {
    // Dynamically add the gtag script
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-CZ0T7KJBXW";
    document.head.appendChild(script);

    // Initialize gtag
    script.onload = () => {
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        window.dataLayer.push(arguments);
      }
      gtag("js", new Date());
      gtag("config", "G-CZ0T7KJBXW");
    };
  }, []);

  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>IIECENTRE</title>
      <link rel="stylesheet" href="css/style.css" />
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
        crossOrigin="anonymous"
      />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.1.1/assets/owl.carousel.min.css"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.1.1/assets/owl.theme.default.css"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.css"
      />

      <div className="side-menu" id="sideMenu">
        <button className="close-btn" id="closeBtn">×</button>
        <p className="sidemenu-heading">IIE Kerala Centre</p>
        <center>
          <img src="sidemenu-image.png" alt="sidemenuimage" style={{ height: 81, width: 80 }} />
        </center>
        <p className="sidemenu-guest">Name</p>
        <hr className="sidemenu-line" />
        <ul>
          <li>
            <a href="verification.html" className="list-in-sidemenu">
              <img
                src="status-sidebar.png"
                alt="status-sidebar"
                style={{ height: 18, width: 18 }}
              />
              &nbsp;&nbsp; Application Status
            </a>
          </li>
          <li>
            <a
              href="https://www.iieinstitution.com/approval_and_recognition.aspx#go"
              className="list-in-sidemenu"
            >
              <img
                src="approval-sidemenu.png"
                alt="approval-sidemenu"
                style={{ height: 18, width: 18 }}
              />
              &nbsp;&nbsp; Approvals &amp; Recognition
            </a>
          </li>
          <li>
            <a href="Download.html" className="list-in-sidemenu">
              <img
                src="download-sidemenu.png"
                alt="download-sidemenu"
                style={{ height: 18, width: 18 }}
              />
              &nbsp;&nbsp; Download
            </a>
          </li>
          <li>
            <a href="examination.html" className="list-in-sidemenu">
              <img
                src="examination-sidemenu.png"
                alt="examination-sidemenu"
                style={{ height: 18, width: 18 }}
              />
              &nbsp;&nbsp; Examination
            </a>
          </li>
          <li>
            <a href="examination.html" className="list-in-sidemenu">
              <img
                src="examination-sidemenu.png"
                alt="examination-sidemenu"
                style={{ height: 18, width: 18 }}
              />
              &nbsp;&nbsp; Examination Result
            </a>
          </li>
          <li>
            <a href="#" className="list-in-sidemenu">
              <img
                src="sidemenu-enquieries.png"
                alt="sidemenu-enquieries"
                style={{ height: 17, width: 18 }}
              />
              &nbsp;&nbsp; Enquiries
            </a>
          </li>
          <li>
            <a href="feepayment.html" className="list-in-sidemenu">
              <img
                src="fee-payment-sidemenu.png"
                alt="fee-payment-sidemenu"
                style={{ height: 15, width: 18 }}
              />
              &nbsp;&nbsp; Fee Payment
            </a>
          </li>
          <li>
            <a href="#" className="list-in-sidemenu">
              <img
                src="sidemenu-gallary.png"
                alt="gallary"
                style={{ height: 17, width: 18 }}
              />
              &nbsp;&nbsp; Gallery
            </a>
          </li>
          <li>
            <a
              href="https://www.iieinstitution.com/rtiinformation.aspx#go"
              className="list-in-sidemenu"
            >
              <img
                src="rti-sidemenu.png"
                alt="rti"
                style={{ height: 18, width: 18 }}
              />
              &nbsp;&nbsp; RTI Information &amp; Reply
            </a>
          </li>
          <li>
            <a href="vision-mission-motto.html" className="list-in-sidemenu">
              <img
                src="sidemenu-vision.png"
                alt="vision"
                style={{ height: 18, width: 14 }}
              />
              &nbsp;&nbsp; Vision, Mission &amp; Motto
            </a>
          </li>
          <li>
            <a href="home.html" className="list-in-sidemenu">
              <img
                src="logout-sidemenu.png"
                alt="logout"
                style={{ height: 16, width: 18 }}
              />
              &nbsp;&nbsp; Logout
            </a>
          </li>
        </ul>
      </div>

      <div className="backdrop" id="backdrop" />

      <section className="fee-section" id="feechangedpage">
        <h2 className="section-heading-feepayment">FEE PAYMENT</h2>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-5">
              <div className="box-1-fee">
                <span className="part-title-fee">
                  <strong>Account Name : IIE KERALA CENTRE</strong>
                </span>
                <br />
                <span className="part-title-fee">
                  <strong>Bank Name : HDFC</strong>
                </span>
                <br />
                <span className="part-title-fee">
                  <strong>Account No:</strong>
                </span>
                <span className="account-details">50200065474213</span>
                <br />
                <span className="part-title-fee">
                  {" "}
                  <strong>IFSC : </strong>
                </span>
                <span className="account-details">HDFC0001513</span>
                <br />
                <span className="part-title-fee">
                  <strong>Swift Code :</strong>{" "}
                </span>
                <span className="account-details">HDFCINBBXXX</span>
                <br />
                <span className="part-title-fee">
                  {" "}
                  <strong>Branch:</strong>
                </span>
                <span className="account-details">Vyttila</span>
                <img src="HDFC-logo.png" alt="HDFC Logo" />
              </div>
            </div>
            <div className="col-md-5">
              <div className="box-2-fee">
                <span className="part-title-fee">
                  <strong>Account Name : IIE KERALA CENTRE</strong>
                </span>
                <br />
                <span className="part-title-fee">
                  <strong>Bank Name : State Bank of India</strong>
                </span>
                <br />
                <span className="part-title-fee">
                  <strong>Account No:</strong>
                </span>
                <span className="account-details">42863712174</span>
                <br />
                <span className="part-title-fee">
                  {" "}
                  <strong>IFSC : </strong>
                </span>
                <span className="account-details">SBIN0070808</span>
                <br />
                <span className="part-title-fee">
                  <strong>Swift Code :</strong>{" "}
                </span>
                <span className="account-details">SBININBB453</span>
                <br />
                <span className="part-title-fee">
                  {" "}
                  <strong>Branch:</strong>
                </span>
                <span className="account-details">Thripunithura</span>
                <img src="SBI-logo.png" alt="SBI Logo" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Centered Payment Button */}
      <div className="payment-button-container">
        <PaymentButton />
      </div>
    </>
  );
};

export default Payment;
