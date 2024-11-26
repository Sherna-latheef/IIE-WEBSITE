
import { Container, Nav,Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useAuth } from "../../context/Context";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import CertificateUpload from "./CertificateUpload"

function AdminMain () {

  const { admin,loading } = useAuth();
  const navigate = useNavigate();
  const [page, setPage] = useState('certificates');

  const renderPage = () => {
    if (page === 'projects') {
      // return <AdminPanel type="projects" />;
    } else if (page === 'certificates') {
      return <CertificateUpload type="certificates" />;
    }
  };

  useEffect(() => {
    console.log("user" + admin);
    if (!admin?.token && !loading) {
      navigate("/admin/login");
    }
  }, [admin, loading]);



    const handleNavClick = (value) => {
      console.log(`Nav.Link clicked: ${value}`);
       setPage(value);
      
      // Perform any action with the value, such as navigation or state update

    };

    const { logout } = useAuth();
    const handleLogout = async (e) => {
      e.preventDefault();
      try {
        logout();
      } catch (e) {
        console.log(e);
      }
    };
  
  return (
    
    <Container class = "px-5">
      <div className=''>
                      <img
                        src="/Branding/bes%20logo%20(1)-1-200h.png"
                        width="200"
                        height=""
                        className="d-inline-block align-left mx-5 "
                        alt="React Bootstrap logo"
                      />
                      {"                "}
                <Button onClick={handleLogout} class = "mx-5 d-inline-block align-right bg-primary" >Log Out</Button>
                </div>
      <Nav variant="tabs" >
        <Nav.Item>
          <Nav.Link style={{color:"black"}} onClick={() => handleNavClick('projects')}>Projects</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link style={{color:"black"}} onClick={() => handleNavClick('certificates')}>Certificates</Nav.Link>
        </Nav.Item>
      </Nav>
    {renderPage()}
    </Container>
  );
}

export default AdminMain ;
