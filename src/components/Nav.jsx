import React, { useState } from "react";
import { Navbar, Nav, Container, Button, Collapse } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import SideBar from "./SideBar"; // Import the Sidebar component
import { useLocation } from "react-router-dom";

const NavBarComponent = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [isNavbarExpanded, setIsNavbarExpanded] = useState(false);

  const handleToggle = (expanded) => {
    console.log("Navbar expanded state:", expanded);
    setIsNavbarExpanded(expanded);
  };
  const toggleSideBar = () => {
    setIsSideBarOpen(!isSideBarOpen);
  };

  const closeSideBar = () => {
    setIsSideBarOpen(false);
  };

  const location = useLocation();
  const isNavBarHidden =
    location.pathname === "/escore" || location.pathname === "/eligibility";

  return (
    <header className={isNavBarHidden ? "nav-hidden" : ""}>
      
      <style>{`
        header .navbar .navbar-nav .nav-item .nav-link::after {
          content: "" !important;
          display: block;
          width: 0 !important;
          height: 20px !important;
          background-image: url(../newvara.png) !important;
          background-size: contain !important;
          background-repeat: no-repeat !important;
          margin: auto !important;
          transition: width 0.5s !important;
        }

        header .navbar .navbar-nav .nav-item .nav-link:hover::after {
          width: 35px !important;
        }
        
        //change
        .navbar-nav {
          margin-top: 25px;
        }

        @media all and (max-width: 768px) {
          .pt-lg-4 {
            top: 0 !important;
          }
          .pt-lg-4 img {
            background: transparent !important;
          }
            
        }
      `}</style>
      <div
        className={
          isNavbarExpanded
            ? "d-lg-block "
            : "d-flex d-md-flex d-lg-block flex-col"
        }
      >
        <Navbar
          bg="transprant"
          expand="lg"
          onToggle={handleToggle}
          className={isNavBarHidden ? "nav-hidden" : ""}
        >
          <Container
            fluid
            className="d-flex  justify-content-between align-items-center align-items-center"
          >
            <Navbar.Brand href="#" className="d-none">
              Navbar
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarNavDropdown" />
            <Navbar.Collapse id="navbarNavDropdown">
              <Nav className="me-auto w-100 justify-content-between align-items-center">
                <Nav.Item className="w-100">
                  <Nav.Link href="/" active>
                    Home
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item className="w-100">
                  <Nav.Link href="faq">FAQ</Nav.Link>
                </Nav.Item>
                <Nav.Item className="w-100">
                  <Nav.Link href="application">Admissions</Nav.Link>
                </Nav.Item>
                <Nav.Item className=" d-none d-lg-flex">
                  <Nav.Item href="/">
                    <img
                      src="iiecentrelogo.png"
                      alt="Logo"
                      style={{ height: 130, width: 130 }}
                    />
                  </Nav.Item>
                </Nav.Item>
                <Nav.Item className="w-100">
                  <Nav.Link href="coursesbtech">Courses</Nav.Link>
                </Nav.Item>
                <Nav.Item className="w-100">
                  <Nav.Link href="#footer">Contact</Nav.Link>
                </Nav.Item>
                <Nav.Item className="w-100">
                  <Nav.Link href="login">Profile</Nav.Link>
                </Nav.Item>
                <Nav.Item className="">
                  <Button
                    variant="link"
                    onClick={toggleSideBar}
                    // className=""
                    className={
                      isNavbarExpanded
                        ? "d-none"
                        : "d-lg-inline d-sm-none d-md-none"
                    }

                    // style={{
                    //   paddingTop: "px",
                    //   // position: 'absolute',
                    //   top: '10px',
                    //   right: '10px',
                    //   padding: 0,
                    // }}
                  >
                    <img
                      src="right-icon.png"
                      alt="toggle menu"
                      style={{
                        width: "50px",
                        // height: '65px',
                        paddingTop: "5px",
                        paddingBottom: "11px",
                        backgroundColor: "white",
                      }}
                    />
                  </Button>
                </Nav.Item>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <img
          className={
            isNavbarExpanded ? "d-none" : "d-lg-none position-sticky mx-auto"
          }
          // className=''
          src="iiecentrelogo.png"
          alt="Logo"
          style={{ height: 100, width: 100 }}
        />
        {/* Render Sidebar conditionally based on state */}
        <Collapse in={isSideBarOpen}>
          <div>
            <SideBar isSideBarOpen={isSideBarOpen} onClose={closeSideBar} />
          </div>
        </Collapse>

        {/* Toggle sidebar button for small and medium devices */}
        <Button
          variant="link"
          onClick={toggleSideBar}
          // className=""
          className={isNavbarExpanded ? "d-none" : "d-lg-none"}

          // style={{
          //   paddingTop: "px",
          //   // position: 'absolute',
          //   top: '10px',
          //   right: '10px',
          //   padding: 0,
          // }}
        >
          <img
            src="right-icon.png"
            alt="toggle menu"
            style={{
              width: "50px",
              height: "65px",
              paddingTop: "5px",
              paddingBottom: "11px",
              backgroundColor: "white",
            }}
          />
        </Button>
      </div>
    </header>
  );
};
export default NavBarComponent;
