import { Urls } from "../../context/Urls";
import { ToastContainer, toast } from "react-toastify";
import { useState, useRef, useEffect } from "react";
import axios from "axios";
import {
  Image,
  Container,
  Row,
  Col,
  Button,
  Form,
  Spinner,
  Card,
  Modal,
  InputGroup,
} from "react-bootstrap";
// import "../css/cards.css";
import Carousel from "react-bootstrap/Carousel";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/Context";

import "./css/panel.css";

const AdminPanel = () => {
  const navigate = useNavigate();
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [uploadedImageUrls, setUploadedImageUrls] = useState([]);
  const [update, setUpdate] = useState(false);

  const { adminu } = useAuth();

  const config = {
    headers: {
      Authorization: `Bearer ${adminu?.token}`,
    },
  };

  const [formData, setFormData] = useState({
    company_name: "",
    description: "",
    current_status: "",
    product_title: "",
  });

  const [uFormData, setUFormData] = useState({
    company_name: "",
    description: "",
    project_status: "",
    product_title: "",
  });
  const [loading, setLoading] = useState(false); // Loading state
  const fileInputRef = useRef(null);
  const fetchData = async () => {
    try {
      const response = await axios.get(Urls.BACKEND_URL + "/data/getAllData");
      console.log(response.data);
      await setallData(response.data.data);
      console.log(allData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // auth;
  useEffect(() => {
    console.log("user" + adminu);
        if (  !adminu?.token) {
      logout();
      navigate("/Admin/login");
    }
  }, [adminu]);

  const handleFileSelect = (e) => {
    const files = Array.from(e.target.files);

    const compressedFiles = [];

    setLoading(true); // Start loading

  };

  const removeAll = () => {
    fileInputRef.current.value = ""; // Reset the file input
    setSelectedFiles([]);
  };

  const removeImage = (index) => {
    const updatedSelectedFiles = [...selectedFiles];
    updatedSelectedFiles.splice(index, 1);
    setSelectedFiles(updatedSelectedFiles);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleUpdateChange = (e) => {
    const { name, value } = e.target;
    setUFormData({
      ...uFormData,
      [name]: value,
    });
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (selectedFiles.length === 0) {
      // Display an error message or take appropriate action
      toast.error("Please select at least one image.");
      return;
    }
    const formDataToSend = new FormData();

    selectedFiles.forEach((file, index) => {
      formDataToSend.append(`images`, file); // Use "images" as the field name
    });

    // Append other form data fields
    for (const key in formData) {
      formDataToSend.append(key, formData[key]);
    }

    try {
      // Form is valid

      const response = await axios.post(
        Urls.BACKEND_URL + "/data/addProducts",
        formDataToSend,
        config
      );
      console.log("response=" + response);
      if (response.status === 200) {
        toast.success("success");
        fetchData();
        fileInputRef.current.value = "";
        // Assuming the server returns an array of uploaded image URLs
        const imageUrls = response.data.imageUrls;
        setUploadedImageUrls(imageUrls);
        setSelectedFiles([]); // Clear selected files after successful upload
        setFormData({
          company_name: "",
          description: "",
          current_status: "",
          product_title: "",
        }); // Clear input fields
      } else {
        toast.error("the size,capacity,price must be a number");
      }
    } catch (error) {
      if (error.response) {
        if (error.response.status === 401) {
          try {
            toast.error("Login time out");
            toast.error("Please login again");
            logout();
          } catch (e) {
            console.log(e);
          }
        }
        console.log("error=" + error.response.status);
      } else {
        console.log("Network or server error:", error.message);
      }
      // Handle network or server errors
    }
  };

  //getting all the data

  const [allData, setallData] = useState([]);
  const [yatchLoad, setYatchLoad] = useState(true);
  useEffect(() => {
    let isMounted = true; // Flag to track if component is mounted

    // Function to fetch data
    const fetchDataAndUpdateState = async () => {
      try {
        const response = await axios.get(Urls.BACKEND_URL + "/data/getAllData");
        console.log(response.data);
        if (isMounted) {
          setallData(response.data.data); // Update state only if component is mounted
          setYatchLoad(false);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        if (isMounted) {
          setYatchLoad(false); // Update state only if component is mounted
        }
      }
    };

    fetchDataAndUpdateState(); // Call the function

    // Cleanup function to update the mounted flag when component unmounts
    return () => {
      isMounted = false;
    };
  }, []);

  //logout
  const { logout } = useAuth();
  // const handleLogout = async (e) => {
  //   e.preventDefault();
  //   try {
  //     logout();
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  //for deleting the product

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);

  const handleShowDeleteModal = async (id) => {
    setItemToDelete(id);
    setShowDeleteModal(true);
  };

  const deleteProduct = async () => {
    //axios function to delete the data
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${adminu.token}`,
        },
      };
      await axios.post(
        Urls.BACKEND_URL + "/data/deleteProduct/" + itemToDelete,
        "",
        config
      );
      toast.success("deleted successfully");
    } catch (e) {
      console.log(e);
    }
    console.log("deleted data is " + itemToDelete);
    setallData(allData.filter((yatch) => yatch._id !== itemToDelete));
    setShowDeleteModal(false);
  };

  // Function to close the delete confirmation modal
  const handleCloseDeleteModal = () => {
    setShowDeleteModal(false);
    setItemToDelete(null);
  };
  const handleEdit = (data) => {
    console.log("the data's are " + data);
    setUpdate(true);
    setUFormData(data);

    console.log(update);
  };
  useEffect(() => {
    console.log("The update is" + update);
  }, [update]);
  //update
  const handleUpdate = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();

    // selectedFiles.forEach((file, index) => {
    //   formDataToSend.append(`images`, file); // Use "images" as the field name
    // });

    // Append other form data fields
    for (const key in formData) {
      formDataToSend.append(key, formData[key]);
    }
    const config = {
      headers: {
        Authorization: `Bearer ${adminu.token}`,
      },
    };
    try {
      const response = await axios.post(
        Urls.BACKEND_URL + "/data/updateProduct/" + uFormData._id,
        uFormData,
        config
      );

      if (response.status === 200) {
        toast.success("successfully updated");
        fetchData();

        setUFormData({
          _id: "",
          company_name: "",
          description: "",
          product_title: "",
          current_status: "",
        }); // Clear input fields
        setUpdate(false);
      } else {
        toast.error("failed to add the product");
        console.log("failed");
        // Handle upload failure
      }
    } catch (error) {
      if (error.response) {
        if (error.response.status === 401) {
          try {
            toast.error("Login time out");
            toast.error("Please login again");
            logout();
          } catch (e) {
            console.log(e);
          }
        }
        console.log("error=" + error.response.status);
      } else {
        console.log("Network or server error:", error.message);
      }
    }
  };
  const handleField = () => {
    setUpdate(false);
  };

  return (
    <Container>
      <ToastContainer />
      <Container>
        <form className="float-right mt-4 pt-4">
          <Row>
            <Col>
            </Col>
          </Row>
        </form>
        {update ? (
          <form onSubmit={handleUpdate}>
            <Container className="p-5">
              <div className="text-end">
                {" "}
                {/* Align the button to the right */}
              </div>
              <Row>
                <Col xs={8}>
                  <Form.Group controlId="company_name">
                    <Form.Label>Company Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="company_name"
                      value={uFormData.company_name}
                      onChange={handleUpdateChange}
                    />
                  </Form.Group>
                  <Form.Group controlId="product_title">
                    <Form.Label>Project Title</Form.Label>
                    <Form.Control
                      type="text"
                      name="product_title"
                      value={uFormData.product_title}
                      onChange={handleUpdateChange}
                    />
                  </Form.Group>
                  <Form.Group controlId="description">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                      type="text"
                      name="description"
                      value={uFormData.description}
                      onChange={handleUpdateChange}
                    />
                  </Form.Group>
                  <Form.Group controlId="project_status">
                    <Form.Label>Current status</Form.Label>
                    <Form.Select
                      name="project_status"
                      aria-label="Current status Select"
                      onChange={handleUpdateChange}
                      value={uFormData.project_status}
                    >
                      <option>Select the current status</option>
                      <option value="completed">Completed</option>
                      <option value="onGoining">Ongoing</option>
                    </Form.Select>
                  </Form.Group>

                  <Row xl={2}>
                    <Button type="submit" className="mt-5">
                      Update
                    </Button>
                  </Row>
                </Col>
                <Button
                  className="btn-close btn-close-black"
                  onClick={() => handleField()}
                ></Button>
              </Row>
              <div>
                {loading ? (
                  // Show loading spinner when images are being compressed
                  <div className="text-center">
                    <Spinner animation="border" variant="primary" />
                    <p>Compressing Images...</p>
                  </div>
                ) : (
                  <Row xs={3} md={5} className="g-5">
                    {selectedFiles.map((file, index) => (
                      <Col key={index} xs={6} sm={4} md={3} lg={2}>
                        <div className="img-fluid img-thumbnail">
                          <Button
                            className="btn-close btn-close-black"
                            onClick={() => removeImage(index)}
                          ></Button>
                          <Image
                            width="100%"
                            height="auto"
                            src={URL.createObjectURL(file)}
                            alt={`Selected Image ${index}`}
                            className="thumbnail"
                          />
                        </div>
                      </Col>
                    ))}
                  </Row>
                )}
              </div>
            </Container>
          </form>
        ) : (
          <form onSubmit={handleUpload}>
            <Container className="p-5">
              <div className="text-end">
                {" "}
                {/* Align the button to the right */}
              </div>
              <Row>
                <div>
                  {loading ? (
                    // Show loading spinner when images are being compressed
                    <div className="center">
                      <Spinner animation="border" variant="primary" />
                      <p>Compressing Images...</p>
                    </div>
                  ) : selectedFiles.length == 0 ? (
                    <div>
                  
                    </div>
                  ) : (
                    <Container>
                      <Row xs={3} md={5} className="g-5">
                        {selectedFiles.map((file, index) => (
                          <Col key={index} xs={6} sm={4} md={3} lg={2}>
                            <div className="img-fluid img-thumbnail">
                              <Button
                                className="btn-close btn-close-black"
                                onClick={() => removeImage(index)}
                              ></Button>
                              <Image
                                width="100%"
                                height="auto"
                                src={URL.createObjectURL(file)}
                                alt={`Selected Image ${index}`}
                                className="thumbnail"
                              />
                            </div>
                          </Col>
                        ))}
                      </Row>
                    </Container>
                  )}
                </div>

                <Col xs={15} xl={5}>
                  <Form.Group controlId="company_name">
                    <Form.Label>Company Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="company_name"
                      value={formData.company_name}
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                  <Form.Group controlId="product_title">
                    <Form.Label>Project Title</Form.Label>
                    <Form.Control
                      type="text"
                      name="product_title"
                      value={formData.product_title}
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                  <Form.Group controlId="description">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                      type="text"
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                  <Form.Group controlId="current_status">
                    <Form.Label>Current status</Form.Label>
                    <Form.Select
                      name="current_status"
                      aria-label="Current status Select"
                      onChange={handleInputChange}
                      value={formData.current_status}
                    >
                      <option>Select the current status</option>
                      <option value="completed">Completed</option>
                      <option value="onGoining">Ongoing</option>
                    </Form.Select>
                  </Form.Group>

                  <Col className="mt-4 d-flex  gap-5">
                    <Button type="submit">Upload</Button>

                    <input
                      accept="image/*"
                      type="file"
                      className="form-label"
                      id="exampleFormControlFile1"
                      name="images" // Set the field name to "images"
                      onChange={handleFileSelect}
                      ref={fileInputRef} // Reference to the file input element
                    />

                    <label
                      id="file-input-label"
                      htmlFor="exampleFormControlFile1"
                      className="btn btn-info"
                    >
                      Add Image
                    </label>
                  </Col>
                </Col>
              </Row>
            </Container>
          </form>
        )}
      </Container>
      {yatchLoad ? (
        // Show loading spinner while fetching data
        <div className="text-center">
          <Spinner animation="border" variant="primary" />
          <p>Loading...</p>
        </div>
      ) : (
        // Data has loaded, now render the cards with images
        <div className="pt-5">
          <div className="p-4">
            <Row xs={1} md={3} className="g-5">
              {allData.map((data, idx) => (
                <Col key={idx}>
                  <Card className="h-100">
                    <Carousel fade className="carousel">
                      {data.images.map((image, id) => (
                        <Carousel.Item touch={true} key={id}>
                          {/* Preload images in the background */}
                          <img
                            src={image.link}
                            alt="images"
                            style={{ display: "none" }}
                          />
                          <div className="image-wrapper">
                            <img
                              className="fixed-size-image"
                              loading="lazy"
                              src={Urls.IMAGE_URL + image.link}
                              alt="images"
                            />
                          </div>
                        </Carousel.Item>
                      ))}
                    </Carousel>
                    <Card.Body>
                      <Card.Title>
                        <span>Company name : </span>
                        <span className="fw-bold">{data.company_name}</span>
                      </Card.Title>
                      <Card.Title>
                        <span>Title : </span>
                        <span className="fw-bold">{data.product_title}</span>
                      </Card.Title>
                      <Card.Text className="mb-0 text-muted">
                        Description: {data.description}
                      </Card.Text>
                      <Card.Title className="fw-bold ">
                        Status: {data.project_status}
                      </Card.Title>
                      <div className="end">
                        <Button
                          className="mx-0"
                          style={{
                            backgroundColor: "#2e8985",
                            color: "white",
                            borderColor: "#2e8985",
                          }}
                          onClick={() => handleEdit(data)}
                        >
                          Edit
                        </Button>
                        <Button
                          className="mx-4"
                          style={{
                            backgroundColor: "red",
                            color: "white",
                            borderColor: "#2e8985",
                          }}
                          onClick={() => handleShowDeleteModal(data._id)}
                        >
                          Delete
                        </Button>
                        {/* Delete Confirmation Modal */}
                        <Modal
                          show={showDeleteModal}
                          onHide={handleCloseDeleteModal}
                        >
                          <Modal.Header closeButton>
                            <Modal.Title>Confirm Deletion</Modal.Title>
                          </Modal.Header>
                          <Modal.Body>
                            Are you sure you want to delete this item?
                          </Modal.Body>
                          <Modal.Footer>
                            <Button
                              variant="secondary"
                              onClick={handleCloseDeleteModal}
                            >
                              Cancel
                            </Button>
                            <Button
                              variant="danger"
                              onClick={() => deleteProduct()}
                            >
                              Delete
                            </Button>
                          </Modal.Footer>
                        </Modal>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </div>
      )}
    </Container>
  );
};

export default AdminPanel;
