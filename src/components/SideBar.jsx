import { useEffect } from 'react';
import { useAuth } from "../context/Context";
import { Button, ListGroup } from 'react-bootstrap';

// eslint-disable-next-line react/prop-types
const SideBar = ({ isSideBarOpen, onClose }) => {
  const { user, logout } = useAuth();

  useEffect(() => {
    console.log("user " + user?.username);
  }, [user]);

  const sideMenuStyle = {
    position: 'fixed',
    top: 0,
    right: 0,
    width: '314px',
    height: '100vh',
    background: 'linear-gradient(to right, #f15d24 0%, #f6991b 100%)',
    padding: '40px',
    zIndex: 1100,
    animation: isSideBarOpen ? 'slideIn 0.3s forwards' : 'slideOut 0.3s forwards',
    borderRadius: '40px 0 0 40px',
  };

  const listItemStyle = {
    display: 'flex',
    alignItems: 'center',
    padding: '10px 0',
    border: 'none',
    background: 'transparent',
  };

  const iconStyle = {
    height: '18px',
    width: '18px',
    marginRight: '10px',
  };

  const styles = `
    @keyframes slideIn {
      from {
        transform: translateX(100vw);
      }
      to {
        transform: translateX(0);
      }
    }

    @keyframes slideOut {
      from {
        transform: translateX(0);
      }
      to {
        transform: translateX(100vw);
      }
    }

    @media all and (max-width: 768px) {
      .collapsed-div {
        position: absolute !important;
      }
    }
  `;

  // Add the styles to your document
  const styleSheet = document.createElement("style");
  styleSheet.type = "text/css";
  styleSheet.innerText = styles;
  document.head.appendChild(styleSheet);

  

  return (
    <div style={sideMenuStyle} className="collapsed-div">
      <Button
        variant="link"
        onClick={onClose}
        className="close-btn"
        aria-label="Close"
        style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          fontSize: '35px',
          color: 'white',
          textDecoration: 'none',
        }}
      >
        ×
      </Button>
      <h3 className="text-white text-center fs-5 fw-bold">IIE Kerala Centre</h3>
      <center>
        <img src="sidemenu-image.png" alt="sidemenu" style={{ height: '81px', width: '80px' }} />
      </center>
      <p className="sidemenu-guest text-white">{user ? user.name : 'Guest'}</p>
      <hr className="sidemenu-line" />
      <ListGroup variant="flush">
        {user ? (
          <>
            <ListGroup.Item style={listItemStyle}>
              <img src="status-sidebar.png" alt="status-sidebar" style={iconStyle} />
              <a href="/documentupload" className="text-white text-decoration-none">
                Application Status
              </a>
            </ListGroup.Item>
            <ListGroup.Item style={listItemStyle}>
              <img src="approval-sidemenu.png" alt="approval-sidemenu" style={iconStyle} />
              <a
                href="https://iieinstitution.com/approval_and_recognition.aspx#go"
                className="text-decoration-none text-white"
              >
                Approvals & Recognition
              </a>
            </ListGroup.Item>
            <ListGroup.Item style={listItemStyle}>
              <img src="download-sidemenu.png" alt="download-sidemenu" style={iconStyle} />
              <a href="/download" className="text-decoration-none text-white">
                Download
              </a>
            </ListGroup.Item>
            <ListGroup.Item style={listItemStyle}>
              <img src="examination-sidemenu.png" alt="examination-sidemenu" style={iconStyle} />
              <a href="/examination" className="text-white text-decoration-none">
                Examination
              </a>
            </ListGroup.Item>
            <ListGroup.Item style={listItemStyle}>
              <img src="sidemenu-enquieries.png" alt="sidemenu-enquieries" style={iconStyle} />
              <a href="#container enquirybox" className="text-decoration-none text-white">
                Enquiries
              </a>
            </ListGroup.Item>
            <ListGroup.Item style={listItemStyle}>
              <img src="fee-payment-sidemenu.png" alt="fee-payment-sidemenu" style={iconStyle} />
              <a href="/payment" className="text-decoration-none text-white">
                Fee Payment
              </a>
            </ListGroup.Item>
            <ListGroup.Item style={listItemStyle}>
              <img src="sidemenu-gallary.png" alt="sidemenu-gallary" style={iconStyle} />
              <a href="/gallery" className="text-decoration-none text-white">
                Gallery
              </a>
            </ListGroup.Item>
            <ListGroup.Item style={listItemStyle}>
              <img src="rti-sidemenu.png" alt="rti-sidemenu" style={iconStyle} />
              <a
                href="https://www.iieinstitution.com/rtiinformation.aspx#go"
                className="text-decoration-none text-white"
              >
                RTI Information & Reply
              </a>
            </ListGroup.Item>
            <ListGroup.Item style={listItemStyle}>
              <img src="sidemenu-vision.png" alt="sidemenu-vision" style={iconStyle} />
              <a href="/vmm" className="text-decoration-none text-white">
                Vision, Mission & Motto
              </a>
            </ListGroup.Item>
            <ListGroup.Item style={listItemStyle}>
              <img src="logout-sidemenu.png" alt="logout" style={iconStyle} />
              <Button
                variant="link"
                onClick={logout}
                className="text-decoration-none text-white"
              >
                Logout
              </Button>
            </ListGroup.Item>
          </>
        ) : (
          <>
            <ListGroup.Item style={listItemStyle}>
              <img src="sidemenu-enquieries.png" alt="enquieries" style={iconStyle} />
              <a href="#container enquirybox" className="text-decoration-none text-white">
                Enquiries
              </a>
            </ListGroup.Item>
            <ListGroup.Item style={listItemStyle}>
              <img src="sidemenu-gallary.png" alt="gallary" style={iconStyle} />
              <a href="/gallery" className="text-decoration-none text-white">
                Gallery
              </a>
            </ListGroup.Item>
            <ListGroup.Item style={listItemStyle}>
              <img src="sidemenu-vision.png" alt="vision" style={iconStyle} />
              <a href="/vmm" className="text-decoration-none text-white">
                Vision, Mission & Motto
              </a>
            </ListGroup.Item>
            <center>
              <a href="/signup">
                <Button className="sidemenu-button-signup mt-3">
                  <b>Sign Up</b>
                </Button>
              </a>
            </center>
          </>
        )}
      </ListGroup>
    </div>
  );
};

export default SideBar;
