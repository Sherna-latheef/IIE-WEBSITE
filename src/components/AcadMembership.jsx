/* eslint-disable react/no-unescaped-entities */
import React, { useEffect } from 'react';

const AcadMembership = () => {

  useEffect(() => {
    // Inject Google Analytics script dynamically
    const script1 = document.createElement('script');
    script1.src = "https://www.googletagmanager.com/gtag/js?id=G-CZ0T7KJBXW";
    script1.async = true;
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-CZ0T7KJBXW');
    `;
    document.head.appendChild(script2);

    // Cleanup the script tags when component unmounts
    return () => {
      document.head.removeChild(script1);
      document.head.removeChild(script2);
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
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
    <link
      href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap"
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
      <button className="close-btn" id="closeBtn">
        ×
      </button>
      <p className="sidemenu-heading">IIE Kerala Centre</p>
      <br />
      <center>
        <img
          src="sidemenu-image.png"
          alt="iiesidemenu"
          style={{ height: 81, width: 80 }}
        />
      </center>
      <p className="sidemenu-guest">Guest</p>
      <center>
        <a href="signup.html">
          <button type="submit" className="sidemenu-button-signup">
            <b>Sign Up</b>
          </button>
        </a>
      </center>
      <br />
      <hr className="sidemenu-line-1" />
      <ul>
        <li>
          <a href="#container enquirybox" className="list-in-sidemenu">
            <img
              src="sidemenu-enquieries.png"
              alt="iie side enquieries"
              style={{ height: 17, width: 18 }}
            />{" "}
            &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; Enquiries
          </a>
        </li>
        <li>
          <a href="#" className="list-in-sidemenu">
            <img
              src="sidemenu-gallary.png"
              alt="iie sidemenu-gallary"
              style={{ height: 17, width: 18 }}
            />{" "}
            &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; Gallery
          </a>
        </li>
        <li>
          <a href="#" className="list-in-sidemenu">
            <img
              src="sidemenu-vision.png"
              alt="iie sidemenu-vision"
              style={{ height: 18, width: 14 }}
            />{" "}
            &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; Vision, Mission &amp; Motto
          </a>
        </li>
      </ul>
    </div>
    <div className="backdrop" id="backdrop" />
    <section className="main-sectionAcadamic">
      <h2 className="section-heading">ACADEMIC MEMBERSHIP</h2>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-5">
            <div className="box-1">
              <img src="cap.png" alt="iie Image 1" />
              <div className="textbox-1">Diploma/TMIIE</div>
              <div className="textacademy-1">
                <br />
                <p>
                  IIE Institution conduct a bi-annual examination known as
                  Technician Membership examination Part-1 &amp; Part – II
                  <br />
                </p>
               
                <span className="part-title">Part-I:</span>
                <span className="part-content-1">
                  To qualify, members must have passed the Secondary Examination
                  with Mathematics and Science or its equivalent, be at least 16
                  years old at the time of application, and can choose up to six
                  subjects out of nine for the examination.
                </span>
                <br />
                <span className="part-title">Part-II:</span>
                <span className="part-content-2">
                  To be eligible for Part-II examination, members must have passed
                  either the 10,+2 examination in the science stream or completed
                  I.T.I.
                </span>
                <p />
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <div className="box-2">
              <img src="badge.png" alt="iie Image 2" />
              <div className="textbox-2">B Tech/AMIIE</div>
              <div className="textacademy-2">
                <br />
                <p>
                  <span className="part-content-3">
                    The Associate Membership in Engineering is conferred by the
                    Indian Institution of Engineers and is equivalent to a
                    Bachelor's degree in Engineering and Technology from
                    recognised Indian universities. The examination comprises two
                    sections: A and B, with 9 papers in Section A and 18 papers in
                    Section B. Upon passing all 27 papers and submitting an
                    experience certificate, members are eligible for the AMIIE
                    membership certificate.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="additional-paragraph">
        <strong>
          Note: - I.T.I candidate will be eligible for the part 2 examination only
          after clearing the eligibility test online.
        </strong>
      </p>
    </section>
    
    
  </>
  )
}

export default AcadMembership