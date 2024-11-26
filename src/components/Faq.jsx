import React from "react";
import { Helmet } from "react-helmet";

const Faq = () => {
  return (
    <>
      <Helmet>
        {/* Meta Tags */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>IIECENTRE</title>

        {/* Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />

        {/* External Stylesheets */}
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

        {/* Google Analytics Script */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-CZ0T7KJBXW"></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-CZ0T7KJBXW');
          `}
        </script>
      </Helmet>

      {/* Page Content */}
      <div className="side-menu" id="sideMenu">
        <button className="close-btn" id="closeBtn">×</button>
        <p className="sidemenu-heading">IIE Kerala Centre</p>
        <br />
        <center>
          <img src="sidemenu-image.png" alt="sidemenuimage" style={{ height: 81, width: 80 }} />
        </center>
        <p className="sidemenu-guest">Guest</p>
        <center>
          <a href="signup.html">
            <button type="submit" className="sidemenu-button-signup"><b>Sign Up</b></button>
          </a>
        </center>
        <br />
        <hr className="sidemenu-line-1" />
        <ul>
          <li>
            <a href="#container enquirybox" className="list-in-sidemenu">
              <img src="sidemenu-enquieries.png" alt="sidemenuimage" style={{ height: 17, width: 18 }} />
              &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; Enquiries
            </a>
          </li>
          <li>
            <a href="#" className="list-in-sidemenu">
              <img src="sidemenu-gallary.png" alt="sidemenuimage" style={{ height: 17, width: 18 }} />
              &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; Gallery
            </a>
          </li>
          <li>
            <a href="#" className="list-in-sidemenu">
              <img src="sidemenu-vision.png" alt="sidemenuimage" style={{ height: 18, width: 14 }} />
              &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; Vision, Mission &amp; Motto
            </a>
          </li>
        </ul>
      </div>

      <div className="backdrop" id="backdrop"></div>

      <main className="container" id="faqchanged">
        <h1 className="page-heading text-center mt-5">FAQ</h1>
        <center>
          <div className="info-box mt-5 d-flex align-items-center">
            <div className="circle">
              <span>1</span>
            </div>
            <div className="info-text">
              <h3>Frequently Asked Question</h3>
            </div>
            <a className="btn download-btn ms-auto" href="FAQ.pdf">
              Download &nbsp;
              <img src="downloadarrow.png" alt="download" style={{ width: 14, height: 14 }} />
            </a>
          </div>
        </center>
      </main>
    </>
  );
};

export default Faq;
