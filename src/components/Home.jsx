/* eslint-disable react/no-unescaped-entities */
import './css/Home.css';
import { useAuth } from "../context/Context";
import { useState, useEffect } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import CountUp from 'react-countup';
import { Helmet } from 'react-helmet-async';

const formdataformat = {
  heading: 'Enquiry',
  Name: '',
  Phone: '',
  Email: '',
  Course: '',
  Message: ''
};

const ContinuousCount = ({ end }) => {
  const [key, setKey] = useState(0);
  const duration = 5; // Increased duration to 5 seconds for slower movement

  useEffect(() => {
    const interval = setInterval(() => {
      setKey((prevKey) => prevKey + 1);
    }, (duration + 3) * 1000); // 5-second animation + 3-second delay

    return () => clearInterval(interval); // Cleanup interval
  }, []);

  return <CountUp key={key} end={end} duration={duration} />;
};


const Home = () => {
  const [formData, setFormData] = useState(formdataformat);
  const [isExpanded, setIsExpanded] = useState(false);
  const { sendMail } = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await sendMail(formData);
    setFormData(formdataformat);
  };

  const options = {
    loop: true,
    margin: 10,
    nav: true,
    items: 1,
    autoplay: true,
    autoplayTimeout: 1500, // Decrease this value for faster transitions (default 3000)
    autoplayHoverPause: true,
    autoplaySpeed: 300, // Decrease this value for faster transition speed (default 500)
  };
  
  const options1 = {
    loop: true,
    margin: 10,
    items: 1,
    autoplay: true,
    autoplayTimeout: 1500, // Decrease this value for faster transitions (default 3000)
    autoplayHoverPause: true,
    autoplaySpeed: 300, // Decrease this value for faster transition speed (default 500)
    dots: false,
    responsive: {
      1000: { items: 4 },
      768: { items: 1 }
    }
  };
  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return(<>
 <>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="This is the home page of the application." />
        <link rel="stylesheet" href="css/style.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.css" />
        
        {/* Google Analytics */}
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

  <style>{`

    section {
      width: 100vw !important;
    }

    .bg-bannerimage {
          border-radius: 50px;
          box-shadow: 0 5px #f2f2f2;
          height: 550px !important;
          margin-bottom:50px;
    }
    .bg-certificateimage{

  margin-bottom:-100px;
    }
    .certificate-div {
      display: flex;
      justify-content: center;
      position: relative;
      top: -130px;
    }

    .certificate-div img {
      width: 200px;
      height: 200px;
      background: #fff;
      box-shadow: 0px -5px #f2f2f2;
      border-radius: 50%;
    }
    
    .rotating-div {
      position: relative;
      top: -400px;
      right: 60px;
    }

         

    @media all and (max-width: 768px) {
      

      .rotating-div {
        display: none;
      }
        .certificate-div {
        display: center;
      }
      .content {
        margin-top: -320px !important;
      }
      .about {
        margin-top: 0 !important;
        margin-bottom: 25px;
      }
       
   
      .banner {
        margin-top: 200px !important;
        height: auto !important;
      }
      .home-heading {
        font-size: 22px !important;
     
      }
      .contact-box-container {
        flex-direction: column;
      }
      .explore-info-container {
        gap: 20px;
      } 
      .center-info-text {
        transform: scaleX(-1) !important;
      }
      .center-info-text div {
        transform: scaleX(-1);
        text-align: end;
      }
      .center-info-text div p {
      
        padding-right: 0 !important;
      }
      
      .whyChoosingUsContainer {
        flex-direction: column-reverse;
      
      }
      .testimonial-block .info-box {
        padding: 15px !important;
        width: auto !important;
        text-align: center !important;
      }
      .testimonial-block .inner-box {
        padding-left: 20px !important;
        padding-right: 20px !important;
      }
      .testimonial-block {
        padding: 50px !important;
        padding-left: 0 !important;
        padding-right: 0 !important;
      }
      .nav-pills {
        justify-content: end;
      }
      .owl-item {
        display: flex;
        justify-content: center;
      }
    }

    .rotating-div .rotatingLogo {
      float: right;
      animation: rotation 10s infinite linear
    }
    
    .rotating-div .centerLogo {
      position: absolute;
      right: 43px;
      top: 40px;
    }

    @keyframes rotation {
      from {
          transform: rotate(0deg);
      }
      to {
          transform: rotate(360deg);
      }
    }

    .thumb {
      position: absolute !important;
      width: 100px !important;
      top: 0 !important;
      right: 50% !important;
      transform: translate(50%, 0);
    }

    .testimonial-block {
      padding: 50px;
    }

    .info-box {
      text-align: center;
    }

    .user-profile-demo {
      width: 25px !important;
      height: 25px !important;
    }

    .course-thumb {
      height: auto !important;
    }

    .course-text-div {
      position: absolute;
      bottom: 0;
    }

    .courses-block {
      position: relative
    }
    
    .contact-box-container {
      display: flex;
      gap: 5px;
    }

    
      
          
    `}
  </style>


  <div className="backdrop" id="backdrop" />
  <section className="container-fluid banner">
    <div className="container bg-certificateimage">
      <div className="container bg-bannerimage">
        <div className="content">
          <div className="text-center">
            <h3 className="homeh3">Your bright future at every turn</h3>
            <h1 className='home-heading'>Accept the Path That will Ensure Growth</h1>
            <p className="text-center">
              Learn at your own pace, empower your future.
            </p>
            <div className="d-flex align-items-center justify-content-center gap-0 mt-3">
              <button className="register" type="submit">
                <a className="buttonfrontreg" href="Application">
                  Register
                </a>
                <img src="/registericon-black.png" className="iconreg" alt='registericon' />
                <img
                  src="registericon-white.png"
                  className="iconreg-hover" alt='registericon'
                />
              </button>
              <button className="howitworks" type="button">
                <a className="buttonfrontarrow" href="acadmembership">
                  How it works
                </a>
                <img src="/arrow-up-right-black.png" className="arrow" alt='arrowup' />
                <img
                  src="/arrow-up-right-white.png" alt='arrowupright'
                  className="arrow-hover"
                />
              </button>
            </div>
            <div className="testimonial-img">
              <img src="/Testimonial.png"  alt='testimonial'/> 
            </div>
          </div>
        </div>
      </div>
      <div className="certificate-div">
        <img src="/CERTIFICATE.png" alt="certificate logo" />
      </div>
      <div className="rotating-div">
        <img src="/IIE LOGO rotating.png" className="rotatingLogo" alt="certificate logo" />
        <img src="/logo center.png" className="centerLogo" alt="certificate logo" />
      </div>
    </div>
  </section>
  <section className="container-fluid about m_btm">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-12 col-md-6 mb-3">
          <div className="image-section">    
            <img className="w-100" src="about-image.png" alt="About Image" />
           </div>
        </div>
        <div className="col-12 col-md-6">
          <div id='about' className="about-text">
            <p className="knowaboutus">Know about Us</p>
            <h2 className="knowaboutus1">
              Indian Institution of <br/> Engineers
            </h2>
            <div className="paragraph-container">
      <p className="paragraph">
        The Indian Institution of Engineers (IIE) is a pivotal organization
        dedicated to advancing professionals in Engineering &amp; Technology
        fields. Established to elevate engineering standards, IIE offers diverse
        membership programs, including diploma courses such as DIPIIE/DMIIE/TMIIE,
        equivalent to B.Tech through its recognized AMIIE program.
        <span className={`more-text ${isExpanded ? 'expanded' : ''}`}>
          The Indian Institution of Engineers (IIE) is a pivotal organization
          dedicated to advancing professionals in Engineering &amp; Technology
          fields. Established to elevate engineering standards, IIE offers diverse
          membership programs, including diploma courses such as DIPIIE/DMIIE/TMIIE,
          equivalent to B.Tech through its recognized AMIIE program.
          <br hidden />
          Embracing online education, IIE conducts Degree &amp; Diploma level
          examinations in various engineering disciplines, providing opportunities
          for individuals to upgrade their qualifications and enhance their
          employment status. Recognized by the Government of India, IIE issues
          membership certificates to qualifying members under Section-8 Act 2013.
        </span>
        <a className="read-more" onClick={toggleReadMore}>
        {isExpanded ? 'Read Less' : 'Read More'}{' '}
        <img
          src={isExpanded ? 'readless.png' : 'readmore.png'}
          className={isExpanded ? 'read-less-arrow' : 'read-more-arrow'}
          alt="toggle"
        />
      </a>
      </p>
  
    </div>
            <button className="howitworks" type="button">
              <a className="buttonfrontarrow" href="Application">
                {" "}
                Apply online
              </a>
              <img src="/arrow-up-right-black.png" className="arrow" alt='arrowup' />
              <img
                src="arrow-up-right-white.png"
                className="arrow-hover" alt='arrowup'
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="container-fluid exploremore m_btm">
    <div className="container">
      <div className="row mb-5">
        <div className="col-12 col-md-6">
          <h2>
            Engineer Your <span>Future</span>: Join Us Anywhere, Anytime!
          </h2>
        </div>
        <div className="col-12 col-md-6">
          <a className="d-flex align-items-center gap-2" href="#">
            <h3>Explore More</h3>
            <i>
              <img src="/arrow.png"  alt='arrow' style={{ width: 30 }} />
            </i>
          </a>
          <p>
            The Indian Institution of Engineers (IIE) is a pivotal organization
            dedicated to advancing professionals in Engineering &amp; Technology
            fields.
          </p>
        </div>
      </div>
      <div className="row explore-info-container">
        <div className="col-12 col-md-4">
          <div className="exploreCard">
            <span>
              <img src="/explore-icon-1.png" alt="explore-icon" />
            </span>
            <div>
              <h3>Flexible Learning</h3>
              <p className="m-0">
                Customisation of the educational experience is made possible by
                flexible learning, which adjusts to individual needs.
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div className="exploreCard flip center-info-text">
            <span>
              <img src="/explore-icon-2.png" alt="explore-icon-2" />
            </span>
            <div>
              <p className="m-0">
                "Enhance your abilities with continuous practice and learning,
                striving for improvement every day."
              </p>
              <h3>Improve Your Skills</h3>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div className="exploreCard">
            <span>
              <img src="/explore-icon-3.png" alt="explore-icon-3" />
            </span>
            <div>
              <h3>Home study</h3>
              <p className="m-0">
                Customisation of the educational experience is made possible by
                flexible learning, which adjusts to individual needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="container-fluid testimonial m_btm">
    <div className="container">
      <div className="d-flex flex-column align-items-center justify-content-center">
        <h3 className='buildabetter'>Build a better Future</h3>
        <h2 className='studentsayabt'>Students Say About Us</h2>
      </div>
      <div className="row justify-content-center align-items-center">
        <div className="col-10 col-md-12">
          <OwlCarousel className="testimonial-carousel owl-carousel owl-theme" {...options}>
            <div className="testimonial-block">
              <div className="inner-box">
                  <div className="thumb">
                    <img src="/testimony-img-1.png" alt="testimony-img-1" />
                  </div>
                <div className="text">
                  “It was a life-changing event to receive the Indian
                  Institution of Engineers certification! I completed my Civil
                  Engineering degree and certificate with confidence thanks to
                  the thorough curriculum and professional advice. I appreciate
                  the priceless information and abilities I've acquired, which
                  have advanced my profession”
                </div>
                <div className="info-box">
                  <h4 className="name">Krishna Das</h4>
                  <span className="designation">Civil Engineering</span>
                </div>
              </div>
            </div>
            <div className="testimonial-block">
              <div className="inner-box">
                  <div className="thumb">
                    <img src="/testimony-img-2.png" alt="testimony-img-2.png" />
                  </div>
                <div className="text">
                  "Thanks to the Indian Institution of Engineers, I've earned my
                  Instrumentation Engineering certificate! I am grateful for the
                  top-notch education and supportive team that empowered me to
                  excel in my field. I highly recommend it for aspiring
                  engineers!"
                </div>
                <div className="info-box">
                  <h4 className="name">Kudrath Elahi</h4>
                  <span className="designation">
                    Instrumentation Engineering
                  </span>
                </div>
              </div>
            </div>
            <div className="testimonial-block">
              <div className="inner-box">
                  <div className="thumb">
                    <img src="/testimony-img-3.png" alt="testimony-img-3" />
                  </div>
                <div className="text">
                  "Hello, I'm Pradeep. My experience at the Indian Institution
                  of Engineers was truly transformative. With their guidance, I
                  earned my Electrical Engineering certificate, opening doors to
                  endless opportunities. Grateful for the journey!"
                </div>
                <div className="info-box">
                  <h4 className="name">Pradeep Kumar</h4>
                  <span className="designation">Electrical Engineering</span>
                </div>
              </div>
            </div>
            <div className="testimonial-block">
              <div className="inner-box">
                  <div className="thumb">
                    <img src="/testimony-4.png" alt="testimony-4" />
                  </div>
                <div className="text">
                  "Hi, I'm Saravanan. Thanks to the Indian Institution of
                  Engineers, now I hold a Civil Engineering Diploma certificate.
                  Grateful for the supportive environment and quality education
                  that paved the way for my success!"
                </div>
                <div className="info-box">
                  <h4 className="name">K Saravanan</h4>
                  <span className="designation">Civil Engineering Diploma</span>
                </div>
              </div>
            </div>
            <div className="testimonial-block">
              <div className="inner-box">
                <div className="thumb">
                  <img src="/testimony-5.png" alt="testimony-5" />
                </div>
                <div className="text">
                  "Thrilled to have earned my Petroleum Engineering certificate
                  from the Indian Institution of Engineers Institute! Their
                  comprehensive program and dedicated guidance provided the
                  perfect foundation for my career in the oil and gas industry.
                  Highly recommend!"
                </div>
                <div className="info-box">
                  <h4 className="name">Shujathulla Khan</h4>
                  <span className="designation">Petroleum Engineering</span>
                </div>
              </div>
            </div>
          </OwlCarousel>
        </div>
      </div>
    </div>
  </section>
  <section className="container-fluid popular-courses m_btm">
    <div className="container">
      <div id='coursebtechhome' className="d-flex align-items-center justify-content-between">
        <div>
          <h3 className='explorenowhom'>Explore Now</h3>
          <h2 className='headerpopcrse'>Popular Courses</h2>
        </div>
        <div className="">
          <ul className="nav nav-pills d-flex gap-2 align-items-center">
            <li className="nav-item">
              <a
                className="register courseBtn active"
                aria-current="page"
                href="coursesbtech"
              >
                B TECH/ AMIIE
              </a>
            </li>
            <li className="nav-item">
              <a className="register courseBtn" href="coursesdiploma">
                DIPLOMA/ TMIIE
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="row justify-content-center align-items-center">
        <OwlCarousel  className="popular-courses-carousel owl-carousel owl-theme" {...options1}>
          <div className="courses-block">
            <div className="inner-box">
              <div className="info-box">
                <div className="thumb course-thumb">
                  <img
                    src="/civil-course.png "
                    alt="civil-course"
                  />
                </div>
              </div>
              <div className="px-3 course-text-div">
                <div className="text">
                  <h4>Civil Engineering</h4>
                  <p>
                  A civil engineering course teaches students to build and manage structures for sustainable growth.
                  </p>
                </div>
                <div className="enrollWrap d-flex align-items-center justify-content-between mt-3 pb-3">
                  <div className="ratingWrap">
                    <span className="fa fa-star checked" />
                    <span className="fa fa-star checked" />
                    <span className="fa fa-star checked" />
                    <span className="fa fa-star" />
                    <span className="fa fa-star" />
                  </div>
                  <div className="enrollBtn">
                  <button type="button" className="register courseBtn">
                  <a className='coursebtn' href='application'> Enroll now</a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="courses-block">
            <div className="inner-box">
              <div className="info-box">
                <div className="thumb course-thumb">
                  <img
                    src="/electrical-courses.png "
                   
                    alt="electrical-courses"
                  />
                </div>
              </div>
              <div className="px-3 course-text-div">
                <div className="text">
                  <h4>Electrical Engineering</h4>
                  <p>
                  An electrical engineering course teaches how to work with electricity and electronic systems
                  </p>
                </div>
                <div className="enrollWrap d-flex align-items-center justify-content-between mt-3 pb-3">
                  <div className="ratingWrap">
                    <span className="fa fa-star checked" />
                    <span className="fa fa-star checked" />
                    <span className="fa fa-star checked" />
                    <span className="fa fa-star" />
                    <span className="fa fa-star" />
                  </div>
                  <div className="enrollBtn">
                  <button type="button" className="register courseBtn">
                  <a className='coursebtn' href='application'> Enroll now</a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="courses-block">
            <div className="inner-box">
              <div className="info-box">
                <div className="thumb course-thumb">
                  <img
                    src="/instrumntatn-courses.png"
                 
                    alt="instrumntatn-courses"
                  />
                </div>
              </div>
              <div className="px-3 course-text-div">
                <div className="text">
                  <h4>Instrumentation Engineering</h4>
                  <p>
                  "
An engineering course teaches how to make and manage systems for industry control.
                  </p>
                </div>
                <div className="enrollWrap d-flex align-items-center justify-content-between mt-3 pb-3">
                  <div className="ratingWrap">
                    <span className="fa fa-star checked" />
                    <span className="fa fa-star checked" />
                    <span className="fa fa-star checked" />
                    <span className="fa fa-star" />
                    <span className="fa fa-star" />
                  </div>
                  <div className="enrollBtn">
                  <button type="button" className="register courseBtn">
                  <a className='coursebtn' href='application'> Enroll now</a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="courses-block">
            <div className="inner-box">
              <div className="info-box">
                <div className="thumb course-thumb">
                  <img
                    src="/aero-courses.png"
               
                    alt="aero-courses"
                  />
                </div>
              </div>
              <div className="px-3 course-text-div">
                <div className="text">
                  <h4>Aeronautical Engineering</h4>
                  <p>
                  An aeronautical engineering course covers the design, development, and testing of aircraft and spacecraft.
                  </p>
                </div>
                <div className="enrollWrap d-flex align-items-center justify-content-between mt-3 pb-3">
                  <div className="ratingWrap">
                    <span className="fa fa-star checked" />
                    <span className="fa fa-star checked" />
                    <span className="fa fa-star checked" />
                    <span className="fa fa-star" />
                    <span className="fa fa-star" />
                  </div>
                  <div className="enrollBtn">
                  <button type="button" className="register courseBtn">
                  <a className='coursebtn' href='application'> Enroll now</a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="courses-block">
            <div className="inner-box">
              <div className="info-box">
                <div className="thumb course-thumb">
                  <img
                    src="/construction-courses.png"
                  
                    alt="construction-courses"
                  />
                </div>
              </div>
              <div className="px-3 course-text-div">
                <div className="text">
                  <h4>Construction Engineering</h4>
                  <p>
                  A construction engineering course focus on how to plan, manage, and carry out construction projects.
                  </p>
                </div>
                <div className="enrollWrap d-flex align-items-center justify-content-between mt-3 pb-3">
                  <div className="ratingWrap">
                    <span className="fa fa-star checked" />
                    <span className="fa fa-star checked" />
                    <span className="fa fa-star checked" />
                    <span className="fa fa-star" />
                    <span className="fa fa-star" />
                  </div>
                  <div className="enrollBtn">
                  <button type="button" className="register courseBtn">
                  <a className='coursebtn' href='application'> Enroll now</a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </OwlCarousel>
      </div>
    </div>
  </section>
{/* New Owl Carousel Below */}
<section className="container-fluid additional-carousel-section">
  <div className="container">
   
    <OwlCarousel className="additional-courses-carousel owl-carousel owl-theme" {...options1}>
      <div className="courses-block">
        <div className="inner-box">
          <div className="info-box">
            <div className="thumb course-thumb">
              <img src="/fireandsafety.png" alt="fire and safety" />
            </div>
          </div>
          <div className="px-3 course-text-div">
            <div className="text">
              <h4>Fire & Safety Engineering</h4>
              <p>A fire and safety engineering course focuses on fire prevention, detection, and mitigation.
</p>
            </div>
            <div className="enrollWrap d-flex align-items-center justify-content-between mt-3 pb-3">
              <div className="ratingWrap">
                <span className="fa fa-star checked" />
                <span className="fa fa-star checked" />
                <span className="fa fa-star checked" />
                <span className="fa fa-star" />
                <span className="fa fa-star" />
              </div>
              <div className="enrollBtn">
                <button type="button" className="register courseBtn">
                  <a className="coursebtn" href="application">Enroll now</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Repeat for additional courses */}
      <div className="courses-block">
        <div className="inner-box">
          <div className="info-box">
            <div className="thumb course-thumb">
              <img src="/interior.png" alt="Course 2" />
            </div>
          </div>
          <div className="px-3 course-text-div">
            <div className="text">
              <h4>Interior Engineering</h4>
              <p>Interior design engineering combines aesthetics and technical skills for functional spaces.</p>
            </div>
            <div className="enrollWrap d-flex align-items-center justify-content-between mt-3 pb-3">
              <div className="ratingWrap">
                <span className="fa fa-star checked" />
                <span className="fa fa-star checked" />
                <span className="fa fa-star checked" />
                <span className="fa fa-star" />
                <span className="fa fa-star" />
              </div>
              <div className="enrollBtn">
                <button type="button" className="register courseBtn">
                  <a className="coursebtn" href="application">Enroll now</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Add more courses as needed */}


      <div className="courses-block">
        <div className="inner-box">
          <div className="info-box">
            <div className="thumb course-thumb">
              <img src="/mechanical.png" alt="Course 2" />
            </div>
          </div>
          <div className="px-3 course-text-div">
            <div className="text">
              <h4>Mechanical Engineering</h4>
              <p>Mechanical engineering designs and manufactures systems to solve real-world problems.</p>
            </div>
            <div className="enrollWrap d-flex align-items-center justify-content-between mt-3 pb-3">
              <div className="ratingWrap">
                <span className="fa fa-star checked" />
                <span className="fa fa-star checked" />
                <span className="fa fa-star checked" />
                <span className="fa fa-star" />
                <span className="fa fa-star" />
              </div>
              <div className="enrollBtn">
                <button type="button" className="register courseBtn">
                  <a className="coursebtn" href="application">Enroll now</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="courses-block">
        <div className="inner-box">
          <div className="info-box">
            <div className="thumb course-thumb">
              <img src="/chemical.png" alt="Course 2" />
            </div>
          </div>
          <div className="px-3 course-text-div">
            <div className="text">
              <h4>Chemical Engineering</h4>
              <p>Chemical engineering focuses on designing and optimizing processes for chemicals and materials.</p>
            </div>
            <div className="enrollWrap d-flex align-items-center justify-content-between mt-3 pb-3">
              <div className="ratingWrap">
                <span className="fa fa-star checked" />
                <span className="fa fa-star checked" />
                <span className="fa fa-star checked" />
                <span className="fa fa-star" />
                <span className="fa fa-star" />
              </div>
              <div className="enrollBtn">
                <button type="button" className="register courseBtn">
                  <a className="coursebtn" href="application">Enroll now</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="courses-block">
        <div className="inner-box">
          <div className="info-box">
            <div className="thumb course-thumb">
              <img src="/aircondition.png" alt="Course 2" />
            </div>
          </div>
          <div className="px-3 course-text-div">
            <div className="text">
              <h4>Air Conditioning Engineering</h4>
              <p>Air conditioning engineering focuses on designing and maintaining climate control systems.
</p>
            </div>
            <div className="enrollWrap d-flex align-items-center justify-content-between mt-3 pb-3">
              <div className="ratingWrap">
                <span className="fa fa-star checked" />
                <span className="fa fa-star checked" />
                <span className="fa fa-star checked" />
                <span className="fa fa-star" />
                <span className="fa fa-star" />
              </div>
              <div className="enrollBtn">
                <button type="button" className="register courseBtn">
                  <a className="coursebtn" href="application">Enroll now</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="courses-block">
        <div className="inner-box">
          <div className="info-box">
            <div className="thumb course-thumb">
              <img src="/mechanical.png" alt="Course 2" />
            </div>
          </div>
          <div className="px-3 course-text-div">
            <div className="text">
              <h4>Hardware Engineering</h4>
              <p>
              Hardware engineering focuses on designing and developing electronic components and systems.</p>
            </div>
            <div className="enrollWrap d-flex align-items-center justify-content-between mt-3 pb-3">
              <div className="ratingWrap">
                <span className="fa fa-star checked" />
                <span className="fa fa-star checked" />
                <span className="fa fa-star checked" />
                <span className="fa fa-star" />
                <span className="fa fa-star" />
              </div>
              <div className="enrollBtn">
                <button type="button" className="register courseBtn">
                  <a className="coursebtn" href="application">Enroll now</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>




    </OwlCarousel>
  </div>
</section>







  <section className="container-fluid ">
        <div className="container">
          <div className="row align-items-center justify-content-center text-center">
            <div className="col-12 col-md-4">
              <div className="ourAchievements">
                <div className="mb-4 ">
                  <h2 className="Achievetexts">Our Achievements</h2>
                  <p>
                    Unlock Your Potential for Engineering Success and Empowering&nbsp;Innovators.
                  </p>
                </div>
                <div className="achievementCounter ">
                  <div className="counter ">
                    <div className="pre-img">
                      <img src="/counter-icon-new1.png" alt="counter-icon-new1" />
                    </div>
                    <div>
                      <ContinuousCount end={24} duration={2} className="counting fs-2" />
                      <p>Year of Experience</p>
                    </div>
                  </div>
                  <div className="counter">
                    <div className="pre-img">
                      <img src="/counter-icon-2.svg" alt="counter-icon-2" />
                    </div>
                    <div>
                      <ContinuousCount end={80000} duration={2} className="counting fs-2" />
                      <p>Students</p>
                    </div>
                  </div>
                  <div className="counter">
                    <div className="pre-img">
                      <img src="/counter-icon-new2.png" alt="counter-icon-new2.png" />
                    </div>
                    <div>
                      <ContinuousCount end={20000} duration={2} className="counting fs-2" />
                      <p>People Certified</p>
                    </div>
                  </div>
                  <div className="counter">
                    <div className="pre-img">
                      <img src="/counter-icon-4.svg" alt="counter-icon-4" />
                    </div>
                    <div>
                      <ContinuousCount end={72} duration={2} className="counting fs-2" />
                      <p>Courses</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-5">
              <div>
                <img className="w-100" src="climbingyoursuccess.png" alt="climbingyoursuccess" />
              </div>
            </div>
          </div>
        </div>
      </section>
  <section className="container-fluid whyChooseUs ">
  <div className="container">
    <div className="row align-items-end whyChoosingUsContainer">
      <div className="col-12 col-md-5 position-relative">
        <div className="whyChooseUsimg">
          <img src="/girl2.png" alt="girl2" />
        </div>
      </div>
      <div className="col-12 col-md-7">
        <div className="p-5 d-flex align-items-start flex-column">
          <h2 className='whychooseushomeheadg'>Why Choose Us ?</h2>
          <ul>
            <li>
              We are providing more than 2000 certificate courses in areas
              like business, IT, leisure, and health.
            </li>
            <li>
              We are providing graduate programme (B.E./B. Tech, Diploma).
              AMIIE/TMIIE
            </li>
            <li>
              Our 24/7 support services are available to guarantee that our
              students' enquiries&nbsp;are&nbsp;answered.
            </li>
          </ul>
          <a href="Application">
            <button className="howitworks" type="button">
              Apply Online
              <img
                src="arrow-up-right-white.png"
                className="arrow-no-hover" alt='arrow white'
                style={{ marginLeft: "10px" }}
              />
            </button>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

  <section id = "enquiry" className="container-fluid m_btm">
    <div className="container enquirybox">
      <div className="row mb-3 align-items-center justify-content-between">
        <div className="col-12 col-md-6">
          <h2 className='ready2boost'>
            
          </h2>
        </div>
        <div className="col-12 col-md-6">
          <p className='ready2para'>
            Complete our Course eligibility Form to see if you qualify for
            enrollment in our dynamic programs, including distance B. Tech in
            India. Take the next step with the Indian Institution of Engineers
            (IIE) today!
          </p>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="enquirybox-form">
        <div className="row">
          <div id="enquirybox">
            <div className='contact-box-container'>
              <div className="col-12 col-md-6 mb-3">
                <input  value={formData.Name} required onChange={handleChange} type="text" name="Name" className="form-input" placeholder="Name" />
              </div>
              <div className="col-12 col-md-6 mb-3">
                <input value={formData.Phone} required  onChange={handleChange} type="text" name="Phone" className="form-input" placeholder="Phone" />
              </div>
            </div>
            <div className='contact-box-container'>
              <div className="col-12 col-md-6 mb-3">
                <input  value={formData.Email} required onChange={handleChange} type="email" name="Email" className="form-input" placeholder="Email" />
              </div>
              <div className="col-12 col-md-6 mb-3"> 
                <select  required onChange={handleChange} className="form-input" name="Course">
                  <option value="">Select Course</option>
                  <option value="B Tech">Btech</option>
                  <option value="Diploma">Diploma</option>

                </select>
              </div>
            </div>
            <div className="col-12 mb-3">
            
              <textarea value = {formData.firstName} name="Message" onChange={handleChange}
                rows={5}
                className="form-textarea"
                placeholder="Your message..."
                defaultValue={""}
              />
            </div>
            <div className="d-flex justify-content-center enquiry-submit-button">
              <button type="submit" className="enquiry-submit-button enquirysubmitnow">
                Submit Now
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </section>
  </>

  </>
  )
}

export default Home;