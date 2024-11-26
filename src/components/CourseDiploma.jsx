import { Helmet } from "react-helmet-async";

const CourseDiploma = () => {

  return(< >
  <Helmet>
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

    <div className="side-menu" id="sideMenu">
      <button className="close-btn" id="closeBtn">
        ×
      </button>
      <p className="sidemenu-heading">IIE Kerala Centre</p>
      <br />
      <center>
        <img
          src="sidemenu-image.png"
          alt="sidemenuimage"
          style={{ height: 81, width: 80 }}
        />
      </center>
      <p className="sidemenu-guest">Guest</p>
      <center>
        <a href="signup">
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
              alt="sidemenuimage"
              style={{ height: 17, width: 18 }}
            />{" "}
            &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; Enquiries
          </a>
        </li>
        <li>
          <a href="#" className="list-in-sidemenu">
            <img
              src="sidemenu-gallary.png"
              alt="sidemenuimage"
              style={{ height: 17, width: 18 }}
            />{" "}
            &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; Gallery
          </a>
        </li>
        <li>
          <a href="#" className="list-in-sidemenu">
            <img
              src="sidemenu-vision.png"
              alt="sidemenuimage"
              style={{ height: 18, width: 14 }}
            />{" "}
            &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; Vision, Mission &amp; Motto
          </a>
        </li>
      </ul>
    </div>
    <div className="backdrop" id="backdrop" />

    <div className="pt-5 container text-center my-5"id="coursebtechchanged">
      <div className=" d-flex gap-2 justify-content-center">
        <a href = "coursesbtech" className="btn btndiploma-custom " id="">
          B TECH/ AMIIE
        </a>
        {/* <a href="coursesdiploma"> */}
          {/* <button className="btn btndiploma-custom" id="button2"> */}
            {/* DIPLOMA/ TMIIE */}
        
        {/* </a> */}
        <a href = "coursesdiploma" className="btn  btnbtechcoursepage-custom" id="">
        DIPLOMA/ TMIIE
        </a>
      </div>
    </div>
    <center>
      {" "}
      <section className="container"id="">
        <div className="row">
          <div className="col-md-6">
            <img
              src="A.png"
              alt="Your Image"
              className="img-fluid mb-3"
              style={{ width: 420, height: 53 }}
            />
            <ul className="list-unstyled">
              <li>
                <a href="https://iieinstitution.com/CourseEng.aspx?cs=25">
                  <h4>Aeronautical Engineering</h4>
                </a>
              </li>
              <li>
                <a href="https://iieinstitution.com/CourseEng.aspx?cs=16">
                  <h4>Agriculture Engineering</h4>
                </a>
              </li>
              <li>
                <a href="https://iieinstitution.com/CourseEng.aspx?cs=21">
                  <h4>Air conditioning engineering</h4>
                </a>
              </li>
              <li>
                <a href="https://iieinstitution.com/CourseEng.aspx?cs=7">
                  <h4>Architecture Engineering</h4>
                </a>
              </li>
              <li>
                <a href="https://iieinstitution.com/CourseEng.aspx?cs=22">
                  <h4>Automobile Engineering</h4>
                </a>
              </li>
            </ul>
            <img
              src="B.png"
              alt="Your Image"
              className="img-fluid mb-3"
              style={{ width: 420, height: 53 }}
            />
            <ul className="list-unstyled">
              <li>
                <a href="https://iieinstitution.com/CourseEng.aspx?cs=60">
                  <h4>Biological Engineering</h4>
                </a>
              </li>
              <li>
                <a href="https://iieinstitution.com/CourseEng.aspx?cs=49">
                  <h4>Biotechnology Engineering</h4>
                </a>
              </li>
              <li>
                <a href="https://iieinstitution.com/CourseEng.aspx?cs=12">
                  <h4>Building technology Engineering</h4>
                </a>
              </li>
            </ul>
            <img
              src="C.png"
              alt="Your Image"
              className="img-fluid mb-3"
              style={{ width: 420, height: 53 }}
            />
            <ul className="list-unstyled">
              <li>
                <a href="https://iieinstitution.com/CourseEng.aspx?cs=4">
                  <h4>Ceramic Engineering</h4>
                </a>
              </li>
              <li>
                <a href="https://iieinstitution.com/CourseEng.aspx?cs=46">
                  <h4>Chemical Engineering</h4>
                </a>
              </li>
              <li>
                <a href="https://iieinstitution.com/CourseEng.aspx?cs=1">
                  <h4>Civil Engineering</h4>
                </a>
              </li>
              <li>
                <a href="https://iieinstitution.com/CourseEng.aspx?cs=30">
                  <h4>Communication Engineering</h4>
                </a>
              </li>
              <li>
                <a href="https://iieinstitution.com/CourseEng.aspx?cs=66">
                  <h4>Computer hardware &amp; networking Engineering</h4>
                </a>
              </li>
              <li>
                <a href="https://iieinstitution.com/CourseEng.aspx?cs=34">
                  <h4>Computer science Engineering</h4>
                </a>
              </li>
              <li>
                <a href="https://iieinstitution.com/CourseEng.aspx?cs=2">
                  <h4>Construction Engineering</h4>
                </a>
              </li>
            </ul>
            <img
              src="D.png"
              alt="Your Image"
              className="img-fluid mb-3"
              style={{ width: 420, height: 53 }}
            />
            <ul className="list-unstyled">
              <li>
                <a href="https://iieinstitution.com/CourseEng.aspx?cs=42">
                  <h4>Drilling Engineering</h4>
                </a>
              </li>
            </ul>
            <img
              src="E.png"
              alt="Your Image"
              className="img-fluid mb-3"
              style={{ width: 420, height: 53 }}
            />
            <ul className="list-unstyled">
              <li>
                <a href="https://iieinstitution.com/CourseEng.aspx?cs=137">
                  <h4>E-Commerce Engineering</h4>
                </a>
              </li>
              <li>
                <a href="https://iieinstitution.com/CourseEng.aspx?cs=67">
                  <h4>Electrical &amp; Electronics Engineering</h4>
                </a>
              </li>
              <li>
                <a href="https://iieinstitution.com/CourseEng.aspx?cs=29">
                  <h4>Electrical Engineering</h4>
                </a>
              </li>
              <li>
                <a href="https://iieinstitution.com/CourseEng.aspx?cs=148">
                  <h4>Electronics &amp; Communication Engineering</h4>
                </a>
              </li>
              <li>
                <a href="https://iieinstitution.com/CourseEng.aspx?cs=19">
                  <h4>Electronics &amp; Instrumentation Engineering</h4>
                </a>
              </li>
              <li>
                <a href="https://iieinstitution.com/CourseEng.aspx?cs=147">
                  <h4>Electronics &amp; Telecommunication Engineering</h4>
                </a>
              </li>
              <li>
                <a href="https://iieinstitution.com/CourseEng.aspx?cs=31">
                  <h4>Electronics Engineering</h4>
                </a>
              </li>
              <li>
                <a href="https://iieinstitution.com/CourseEng.aspx?cs=152">
                  <h4>Environmental Engineering</h4>
                </a>
              </li>
            </ul>
            <img
              src="F.png"
              alt="Your Image"
              className="img-fluid mb-3"
              style={{ width: 420, height: 53 }}
            />
            <ul className="list-unstyled">
              <li>
                <a href="https://iieinstitution.com/CourseEng.aspx?cs=56">
                  <h4>Fashion Design Engineering</h4>
                </a>
              </li>
              <li>
                <a href="https://iieinstitution.com/CourseEng.aspx?cs=155">
                  <h4>Fire &amp; Safety Engineering</h4>
                </a>
              </li>
              <li>
                <a href="https://iieinstitution.com/CourseEng.aspx?cs=50">
                  <h4>Food Technology Engineering</h4>
                </a>
              </li>
            </ul>
            <img
              src="H.png"
              alt="Your Image"
              className="img-fluid mb-3"
              style={{ width: 420, height: 53 }}
            />
            <ul className="list-unstyled">
              <li>
                <a href="https://iieinstitution.com/CourseEng.aspx?cs=35">
                  <h4>Hardware Engineering</h4>
                </a>
              </li>
              <li>
                <a href="https://iieinstitution.com/CourseEng.aspx?cs=157">
                  <h4>Horticulture Engineering</h4>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-6" >
            <img src="I.png" alt="Your Image" className="img-fluid mb-3"         style={{ width: 420, height: 53 }} />
            <ul className="list-unstyled">
              <li>
                <a href="https://iieinstitution.com/CourseEng.aspx?cs=62">
                  <h4>Industrial Engineering</h4>
                </a>
              </li>
              <li>
                <a href="https://iieinstitution.com/CourseEng.aspx?cs=18">
                  <h4>Information Technology Engineering</h4>
                </a>
              </li>
              <li>
                <a href="https://iieinstitution.com/CourseEng.aspx?cs=150">
                  <h4>Instrumentation &amp; Control Engineering</h4>
                </a>
              </li>
              <li>
                <a href="https://iieinstitution.com/CourseEng.aspx?cs=139">
                  <h4>Instrumentation Engineering</h4>
                </a>
              </li>
              <li>
                <a href="https://iieinstitution.com/CourseEng.aspx?cs=9">
                  <h4>Interior Designing Engineering</h4>
                </a>
              </li>
            </ul>
            <img src="L.png" alt="Your Image" className="img-fluid mb-3"        style={{ width: 420, height: 53 }} />
            <ul className="list-unstyled">
              <li>
                <a href="https://iieinstitution.com/CourseEng.aspx?cs=146">
                  <h4>Leather Technology Engineering</h4>
                </a>
              </li>
            </ul>
            <img src="M.png" alt="Your Image" className="img-fluid mb-3"        style={{ width: 420, height: 53 }} />
            <ul className="list-unstyled">
              <li>
                <a href="https://iieinstitution.com/CourseEng.aspx?cs=26">
                  <h4>Manufacturing Engineering</h4>
                </a>
              </li>
              <li>
                <a href="https://iieinstitution.com/CourseEng.aspx?cs=28">
                  <h4>Marine Engineering</h4>
                </a>
              </li>
              <li>
                <a href="https://iieinstitution.com/CourseEng.aspx?cs=5">
                  <h4>Material engineering</h4>
                </a>
              </li>
              <li>
                <a href="https://iieinstitution.com/CourseEng.aspx?cs=14">
                  <h4>Mechanical engineering</h4>
                </a>
              </li>
              <li>
                <a href="https://iieinstitution.com/CourseEng.aspx?cs=41">
                  <h4>Mechatronics engineering</h4>
                </a>
              </li>
              <li>
                <a href="https://iieinstitution.com/CourseEng.aspx?cs=44">
                  <h4>Metallurgy engineering</h4>
                </a>
              </li>
              <li>
                <a href="https://iieinstitution.com/CourseEng.aspx?cs=43">
                  <h4>Mine survey engineering</h4>
                </a>
              </li>
              <li>
                <a href="https://iieinstitution.com/CourseEng.aspx?cs=40">
                  <h4>Mining engineering</h4>
                </a>
              </li>
            </ul>
            <img src="N.png" alt="Your Image" className="img-fluid mb-3"        style={{ width: 420, height: 53 }} />
            <ul className="list-unstyled">
              <li>
                <a href="https://iieinstitution.com/CourseEng.aspx?cs=36">
                  <h4>Networking engineering</h4>
                </a>
              </li>
            </ul>
            <img src="P.png" alt="Your Image" className="img-fluid mb-3"         style={{ width: 420, height: 53 }}/>
            <ul className="list-unstyled">
              <li>
                <a href="https://iieinstitution.com/CourseEng.aspx?cs=52">
                  <h4>Petroleum engineering</h4>
                </a>
              </li>
              <li>
                <a href="https://iieinstitution.com/CourseEng.aspx?cs=47">
                  <h4>Plastic Technology Engineering</h4>
                </a>
              </li>
              <li>
                <a href="https://iieinstitution.com/CourseEng.aspx?cs=51">
                  <h4>Polymer Engineering</h4>
                </a>
              </li>
              <li>
                <a href="https://iieinstitution.com/CourseEng.aspx?cs=23">
                  <h4>Power Engineering</h4>
                </a>
              </li>
              <li>
                <a href="https://iieinstitution.com/CourseEng.aspx?cs=57">
                  <h4>Printing Technology Engineering</h4>
                </a>
              </li>
              <li>
                <a href="https://iieinstitution.com/CourseEng.aspx?cs=144">
                  <h4>Production Engineering</h4>
                </a>
              </li>
            </ul>
            <img src="S.png" alt="Your Image" className="img-fluid mb-3"        style={{ width: 420, height: 53 }} />
            <ul className="list-unstyled">
              <li>
                <a href="https://iieinstitution.com/CourseEng.aspx?cs=65">
                  <h4>Safety Engineering</h4>
                </a>
              </li>
              <li>
                <a href="https://iieinstitution.com/CourseEng.aspx?cs=145">
                  <h4>Shipbuilding Engineering</h4>
                </a>
              </li>
              <li>
                <a href="https://iieinstitution.com/CourseEng.aspx?cs=38">
                  <h4>Software Engineering</h4>
                </a>
              </li>
              <li>
                <a href="https://iieinstitution.com/CourseEng.aspx?cs=11">
                  <h4>Sound Engineering</h4>
                </a>
              </li>
              <li>
                <a href="https://iieinstitution.com/CourseEng.aspx?cs=3">
                  <h4>Structural Engineering</h4>
                </a>
              </li>
              <li>
                <a href="https://iieinstitution.com/CourseEng.aspx?cs=8">
                  <h4>Surveying Engineering</h4>
                </a>
              </li>
            </ul>
            <img src="T.png" alt="Your Image" className="img-fluid mb-3"        style={{ width: 420, height: 53 }} />
            <ul className="list-unstyled">
              <li>
                <a href="https://iieinstitution.com/CourseEng.aspx?cs=33">
                  <h4>Telecommunication Engineering</h4>
                </a>
              </li>
              <li>
                <a href="https://iieinstitution.com/CourseEng.aspx?cs=15">
                  <h4>Tool &amp; Die Engineering</h4>
                </a>
              </li>
              <li>
                <a href="https://iieinstitution.com/CourseEng.aspx?cs=24">
                  <h4>Transportation Engineering</h4>
                </a>
              </li>
              <li>
                <a href="https://iieinstitution.com/CourseEng.aspx?cs=53">
                  <h4>Textile Engineering</h4>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </center>
    
    {/* Smooth Scroll Script */}
  </>
  )
};

export default CourseDiploma;