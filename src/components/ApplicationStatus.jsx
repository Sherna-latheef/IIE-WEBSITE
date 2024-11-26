import { Helmet } from "react-helmet-async"

const ApplicatioStatus = () =>{
 
return(<>
<Helmet>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>IIECENTRE</title>
  <link rel="stylesheet" href="css/style.css" />
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
    rel="stylesheet"
  />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
  <link
    href="https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap"
    rel="stylesheet"
  />
  <link
    href="https://fonts.googleapis.com/css2?family=Raleway:wght@100..900&display=swap"
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
  <header className="container">
    <nav className="navbar navbar-expand-lg bg-transparent navbar-animated">
      <div className="container-fluid navbar-icons">
        <a href="#">
          <img
            src="left-icon.png"
            alt="Icon Left"
            style={{ paddingTop: 0, paddingBottom: 11 }}
            width="50px"
            height="60px"
          />
        </a>
        <a className="navbar-brand d-none" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav w-100 align-items-center">
            <li className="nav-item w-100">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item w-100">
              <a className="nav-link" href="FAQ.html">
                FAQ
              </a>
            </li>
            <li className="nav-item w-100">
              <a className="nav-link" href="application-form.html">
                Admissions
              </a>
            </li>
            <li className="nav-item w-100">
              <a
                className="navbar-brand d-flex align-items-center justify-content-center"
                href="#"
              >
                <img
                  src="iiecentrelogo.png"
                  alt="iiecentelogo"
                  style={{ height: 149, width: 145 }}
                />
              </a>
            </li>
            <li className="nav-item w-100">
              <a className="nav-link" href="coursesbtech.html">
                Courses
              </a>
            </li>
            <li className="nav-item w-100">
              <a className="nav-link" href="#footer">
                Contact
              </a>
            </li>
            <li className="nav-item w-100">
              <a className="nav-link" href="login.html">
                Profile
              </a>
            </li>
          </ul>
        </div>
        <a href="#" id="rightIcon">
          <img
            src="right-icon.png"
            alt="Icon Right"
            style={{ paddingTop: 5, paddingBottom: 11 }}
            width="50px"
            height="65px"
          />
        </a>
      </div>
    </nav>
  </header>
  <div className="side-menu" id="sideMenu">
    <ul>
      <li>
        <a href="#">Action</a>
      </li>
      <li>
        <a href="#">Another action</a>
      </li>
      <li>
        <a href="#">Something else here</a>
      </li>
    </ul>
  </div>
  <div className="backdrop" id="backdrop" />
  <section className="main-section">
    <div className="main-box">
      <button className="sub-box btn">
        <div className="sub-box-text">Verification</div>
      </button>
      <button className="sub-box btn">
        <div className="sub-box-text">Technical Assistance</div>
      </button>
      <button className="sub-box btn">
        <div className="sub-box-text">Verification Status</div>
      </button>
    </div>
    <br />
    <div className="heading-text">Please fill the following requirements</div>
    <br />
    <div className="form-container">
      <div className="form-row1">
        <div className="form-field">
          <input type="file" id="file1" multiple="" />
          <label htmlFor="file1">Educational Certificates</label>
          <img src="dwnldicon.png" alt="Icon" />
        </div>
        <div className="form-field">
          <select>
            <option>Courses</option>
            <option>Aeronautical Engineering</option>
            <option>Agriculture Engineering</option>
            <option>Air conditioning engineering</option>
            <option>Architecture Engineering</option>
            <option>Automobile Engineering</option>
            <option>Biological Engineering</option>
            <option>Biotechnology Engineering</option>
            <option>Building technology Engineering</option>
            <option>Ceramic Engineering</option>
            <option>Chemical Engineering</option>
            <option>Civil Engineering</option>
            <option>Communication Engineering</option>
            <option>Computer hardware &amp; networking Engineering</option>
            <option>Computer science Engineering</option>
            <option>Construction Engineering</option>
            <option>Drilling Engineering</option>
            <option>E-Commerce Engineering</option>
            <option>Electrical &amp; Electronics Engineering</option>
            <option>Electrical Engineering</option>
            <option>Electronics &amp; Communication Engineering</option>
            <option>Electronics &amp; Instrumentation Engineering</option>
            <option>Electronics &amp; Telecommunication Engineering</option>
            <option>Electronics Engineering</option>
            <option>Environmental Engineering</option>
            <option>Fashion Design Engineering</option>
            <option>Fire &amp; Safety Engineering</option>
            <option>Food Technology Engineering</option>
            <option>Hardware Engineering</option>
            <option>Horticulture Engineering</option>
            <option>Industrial Engineering</option>
            <option>Information Technology Engineering</option>
            <option>Instrumentation &amp; Control Engineering</option>
            <option>Instrumentation Engineering</option>
            <option>Interior Designing Engineering</option>
            <option>Leather Technology Engineering</option>
            <option>Manufacturing Engineering</option>
            <option>Marine Engineering</option>
            <option>Material Engineering</option>
            <option>Mechanical Engineering</option>
            <option>Mechatronics Engineering</option>
            <option>Metallurgy Engineering</option>
            <option>Mine survey Engineering</option>
            <option>Mining Engineering</option>
            <option>Networking Engineering</option>
            <option>Petroleum Engineering</option>
            <option>Plastic Technology Engineering</option>
            <option>Polymer Engineering</option>
            <option>Power Engineering</option>
            <option>Printing Technology Engineering</option>
            <option>Production Engineering</option>
            <option>Safety Engineering</option>
            <option>Shipbuilding Engineering</option>
            <option>Software Engineering</option>
            <option>Sound Engineering</option>
            <option>Structural Engineering</option>
            <option>Surveying Engineering</option>
            <option>Telecommunication Engineering</option>
            <option>Tool &amp; Die Engineering</option>
            <option>Transportation Engineering</option>
            <option>Textile Engineering</option>
          </select>
        </div>
      </div>
      <div className="form-row1">
        <div className="form-field">
          <input type="file" id="file2" multiple="" />
          <label htmlFor="file2">Experience Certificates</label>
          <img src="dwnldicon.png" alt="Icon" />
        </div>
        <div className="form-field">
          <input type="file" id="file3" multiple="" />
          <label htmlFor="file3">Upload Image</label>
          <img src="dwnldicon.png" alt="Icon" />
        </div>
      </div>
    </div>
  </section>
  <button className="submit-button">SUBMIT</button>
 
 
</>
)}
export default ApplicatioStatus