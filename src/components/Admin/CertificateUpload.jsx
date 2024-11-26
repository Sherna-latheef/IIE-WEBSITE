import { useState, useEffect } from 'react';
import { Container, Row, Col, Nav, Modal, Button, Image, Form, Fade, Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useAuth } from "../../context/Context";
import { Urls } from "../../context/Urls";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function CertificateUpload() {
  const [showView, setShowView] = useState(false);
  const [showAdd, setShowAdd] = useState(false);
  const [showDelete, setShowVerify] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null);
  const [newCert, setNewCert] = useState({ type: '', image: null });
  const [heading, setHeading] = useState("Certificate");
  const [page, setPage] = useState('certificate');
  const [certToVerify, setCertToVerify] = useState(null);
  const [inProp, setInProp] = useState(false);
  const [loadingu, setLoading] = useState(false);
  const [documents, setDocuments] = useState([]);

  const { admin, loading } = useAuth();
  const navigate = useNavigate();

  const getCertificate = async () => {
    if (admin && !loading) {
      console.log("admin is", admin);
      try {
        const response = await axios.get(Urls.BACKEND_URL + "/user/admin/get/documents", {
          headers: {
            Authorization: `Bearer ${admin?.token}`,
          },
        });

        if (response.status === 200) {
          setDocuments(response.data);
        } else {
          toast.error("Failed to fetch documents.");
        }
      } catch (error) {
        toast.error("Error occurred while fetching documents.");
        console.error("Failed to fetch documents", error);
      }
    }
    if (!admin && !loading) {
      navigate('/');
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setInProp(false);
        await getCertificate();
        setTimeout(() => {
          setInProp(true);
        }, 500);
      } catch (error) {
        console.error("Error fetching certificates:", error);
      }
    };

    fetchData();
  }, [loading]); // Removed documents from dependency array

  const handleNavClick = (value) => {
    setPage(value);
    console.log(`Nav.Link clicked: ${value}`);
    setTimeout(() => {
      if (value === 'certificate') {
        setHeading("Certificate");
      } else if (value === 'policy') {
        setHeading("Policies");
      }
    }, 500);
  };

  const handleCloseView = () => setShowView(false);

  const handleCloseAdd = () => setShowAdd(false);

  const handleCloseDelete = () => setShowVerify(false);

  const handleShowVerify = async (cert) => {
    setCertToVerify(cert.id);
    setShowVerify(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCert({ ...newCert, [name]: value });
  };

  const handleImageChange = (e) => {
    setNewCert({ ...newCert, image: e.target.files[0] });
  };

  const handleAddCertificate = async () => {
    setLoading(true);
    console.log('Adding certificate:' + newCert + " loading is " + loadingu);
    const formData = new FormData();
    if (newCert.type === "") {
      toast.error('Please select a type');
      setLoading(false)
      return;
    }
    formData.append('type', newCert.type);
    formData.append('image', newCert.image);
    try {
      // await addCertificate(formData); // Assuming addCertificate accepts FormData
      setHeading("HSE Certificate");
      setLoading(false)
      handleCloseAdd();
    } catch (e) {
      console.log("the error from add certificate", e);
      toast.error("error occurred")
    } finally {
      setLoading(false)
    }
  };

  const { logout } = useAuth();

  const handleDeleteCertificate = async () => {
    console.log('Deleting certificate:', certToVerify);
    setLoading(true);
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${admin?.token}`,
        },
      };
      const data = await axios.post(
        Urls.BACKEND_URL + "/user/admin/verifyDocument/" + certToVerify,
        "",
        config
      );
      if (data.status === 200) {
        toast.success("verified successfully");
        await getCertificate(); // Refresh the certificates after verification
      } else if (data.status === 401) {
        logout();
        navigate("/Admin/login");
      }
    } catch (e) {
      console.log(e);
    }
    setLoading(false)
    handleCloseDelete();
    setHeading("HSE Certificate");
  };

  return (
    <Container>
      <Nav variant="tabs">
        <Nav.Item>
          <Nav.Link style={{ color: "black" }} onClick={() => handleNavClick('certificate')}>HSE Certificate</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link style={{ color: "black" }} onClick={() => handleNavClick('policy')}>Policies</Nav.Link>
        </Nav.Item>
      </Nav>

      <Fade in={inProp}>
        <div>
          <h2 className="mt-3 pb-3">{heading}</h2>
          <Row>
            {documents.map((cert) => (
              <Col key={cert.id} xs={12} md={6} lg={3} className="mb-4">
                <object
                  data={Urls.IMAGE_URL + cert.url}
                  alt="Certificate"
                  width={"200px"}
                  style={{ cursor: 'pointer' }}
                />
                <div>
                  <h3>STATUS: {cert.status}</h3>
                  <a className='px-2' href={Urls.IMAGE_URL + cert.url}>
                    <Button variant="info">view</Button>
                  </a>
                  <Button variant="primary" onClick={() => handleShowVerify(cert)}>Verify</Button>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </Fade>

      <Modal show={showView} onHide={handleCloseView} centered>
        <Modal.Body>
          {selectedCert && <Image src={Urls.IMAGE_URL + selectedCert.images} alt={selectedCert} fluid />}
        </Modal.Body>
      </Modal>

      <Modal show={showAdd} onHide={handleCloseAdd} centered>
        <Modal.Header closeButton>
          <Modal.Title>Add Certificate</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formCertType">
              <Form.Label>Certificate Type</Form.Label>
              <Form.Control as="select" name="type" value={newCert.type} onChange={handleInputChange}>
                <option value="">Select type</option>
                <option value="certificate">HSE Certificate</option>
                <option value="policy">Policy</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="formCertImage" className="mt-3">
              <Form.Label>Certificate Image</Form.Label>
              <Form.Control type="file" name="image" onChange={handleImageChange} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          {loadingu ? (
            <Spinner className="mx-3" animation="grow" />
          ) : (
            <div>
              <Button variant="secondary" onClick={handleCloseAdd}>Close</Button>
              <Button variant="primary" onClick={handleAddCertificate}>Add Certificate</Button>
            </div>
          )}
        </Modal.Footer>
      </Modal>

      <Modal show={showDelete} onHide={handleCloseDelete} centered>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Verify</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to verify this certificate?
        </Modal.Body>
        <Modal.Footer>
          {loadingu ? (
            <Spinner className="mx-3" animation="grow" />
          ) : (
            <div>
              <Button variant="secondary" onClick={handleCloseDelete}>Cancel</Button>
              <Button variant="primary" onClick={handleDeleteCertificate}>Verify</Button>
            </div>
          )}
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default CertificateUpload;
