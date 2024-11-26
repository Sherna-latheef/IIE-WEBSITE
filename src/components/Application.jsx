import { useState } from 'react';
import { useAuth } from '../context/Context';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';

const formdataFormat = {
  heading: 'Application',
  firstName: '',
  middleName: '',
  lastName: '',
  birthDate: '',
  gender: '',
  email: '',
  phone: '',
  whatsapp: '',
  alternativeNumber: '',
  qualification: '',
  experience: '',
  address: '',
  state: '',
  district: '',
  pincode: '',
  nationality: '',
  sector: '',
  country: '',
  course: '',
  stream: '',
  reference: ''
}

const Application = () => {
  const [formData, setFormData] = useState(formdataFormat);
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
    sendMail(formData);
    setFormData(formdataFormat);
  };

  return (
    <>
      <Helmet>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>IIECENTRE</title>
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

      <Container className="mt-5 pt-lg-5" id='applicationformchanged'>
        <Form
          style={{
            fontSize: '20px',
            fontWeight: 400,
            fontFamily: 'raleway',
            color: '#767676'
          }}
          onSubmit={handleSubmit}
        >
          <Row className="g-3 mb-3">
            <Col xs={12}>
              <h2 className="applicationtextheading" style={{
                fontWeight: 600,
                fontFamily: 'raleway'
              }}>
                Application Form
              </h2>
            </Col>
            <Col xs={12} className="d-flex justify-content-center">
              <Form.Check
                className="me-3"
                type="radio"
                name="course"
                id="option1"
                value="B Tech"
                label="B Tech"
                onChange={handleChange}
              />
              <Form.Check
                type="radio"
                name="course"
                id="option2"
                value="Diploma"
                label="Diploma"
                onChange={handleChange}
              />
            </Col>
          </Row>

          <Row className="g-3 mb-3">
            <Col xs={12} md={4}>
              <Form.Control required type="text" placeholder="First name" name="firstName" value={formData.firstName} onChange={handleChange} style={{ borderColor: '#f15d24' }} />
            </Col>
            <Col xs={12} md={4}>
              <Form.Control required type="text" placeholder="Middle name" name="middleName" value={formData.middleName} onChange={handleChange} style={{ borderColor: '#f15d24' }} />
            </Col>
            <Col xs={12} md={4}>
              <Form.Control required type="text" placeholder="Last name" name="lastName" value={formData.lastName} onChange={handleChange} style={{ borderColor: '#f15d24' }} />
            </Col>
          </Row>

          <Row className="g-3 mb-3">
            <Col xs={12} md={6}>
              <Form.Group>
                <Form.Label>Birth Date</Form.Label>
                <Form.Control required type="date" name="birthDate" value={formData.birthDate} onChange={handleChange} style={{ borderColor: '#f15d24' }} />
              </Form.Group>
            </Col>
            <Col xs={12} md={6}>
              <Form.Group>
                <Form.Label>Gender</Form.Label>
                <div>
                  <Form.Check
                    className="form-check-inline"
                    type="radio"
                    name="gender"
                    id="genderMale"
                    value="Male"
                    label="Male"
                    onChange={handleChange}
                  />
                  <Form.Check
                    className="form-check-inline"
                    type="radio"
                    name="gender"
                    id="genderFemale"
                    value="Female"
                    label="Female"
                    onChange={handleChange}
                  />
                  <Form.Check
                    className="form-check-inline"
                    type="radio"
                    name="gender"
                    id="genderOther"
                    value="Other"
                    label="Other"
                    onChange={handleChange}
                  />
                </div>
              </Form.Group>
            </Col>
          </Row>

         <br></br>
          <Row className="mb-3">
  <Col xs={12}>
    <h4 className="Application-contact-heading">Contact Information</h4>
  </Col>
</Row>

          <Row className="g-3 mb-3">
            <Col xs={12} md={6}>
              <Form.Control required type="text" placeholder="Email address" name="email" value={formData.email} onChange={handleChange} style={{ borderColor: '#f15d24' }} />
            </Col>
            <Col xs={12} md={6}>
              <Form.Control required type="text" placeholder="Phone" name="phone" value={formData.phone} onChange={handleChange} style={{ borderColor: '#f15d24' }} />
            </Col>
          </Row>

          <Row className="g-3 mb-3">
            <Col xs={12} md={6}>
              <Form.Control required type="text" placeholder="Whatsapp" name="whatsapp" value={formData.whatsapp} onChange={handleChange} style={{ borderColor: '#f15d24' }} />
            </Col>
            <Col xs={12} md={6}>
              <Form.Control required type="text" placeholder="Alternative Number" name="alternativeNumber" value={formData.alternativeNumber} onChange={handleChange}  style={{ borderColor: '#f15d24' }}/>
            </Col>
          </Row>

          <Row className="g-3 mb-3">
            <Col xs={12} md={6}>
              <Form.Control required type="text" placeholder="Qualification" name="qualification" value={formData.qualification} onChange={handleChange} style={{ borderColor: '#f15d24' }} />
            </Col>
            <Col xs={12} md={6}>
              <Form.Control required type="text" placeholder="Experience" name="experience" value={formData.experience} onChange={handleChange}  style={{ borderColor: '#f15d24' }}/>
            </Col>
          </Row>

          <Row className="g-3 mb-3">
            <Col xs={12}>
              <Form.Control required type="text" placeholder="Address" name="address" value={formData.address} onChange={handleChange} style={{ borderColor: '#f15d24' }} />
            </Col>
          </Row>

          <Row className="g-3 mb-3">
            <Col xs={12} md={4}>
              <Form.Control required type="text" placeholder="State" name="state" value={formData.state} onChange={handleChange} style={{ borderColor: '#f15d24' }} />
            </Col>
            <Col xs={12} md={4}>
              <Form.Control required type="text" placeholder="District" name="district" value={formData.district} onChange={handleChange}  style={{ borderColor: '#f15d24' }}/>
            </Col>
            <Col xs={12} md={4}>
              <Form.Control required type="text" placeholder="Pincode" name="pincode" value={formData.pincode} onChange={handleChange} style={{ borderColor: '#f15d24' }} />
            </Col>
          </Row>

          <Row className="g-3 mb-3">
            <Col xs={12} md={4}>
              <Form.Control required type="text" placeholder="Nationality" name="nationality" value={formData.nationality} onChange={handleChange} style={{ borderColor: '#f15d24' }} />
            </Col>
            <Col xs={12} md={4}>
              <Form.Control required type="text" placeholder="Sector" name="sector" value={formData.sector} onChange={handleChange}  style={{ borderColor: '#f15d24' }}/>
            </Col>
            <Col xs={12} md={4}>
              <Form.Control required type="text" placeholder="Country" name="country" value={formData.country} onChange={handleChange} style={{ borderColor: '#f15d24' }} />
            </Col>
          </Row>

          <Row className="g-3 mb-3">
          <Col xs={12} md={6}>
  <Form.Control
    as="select"
    required
    name="stream"
    value={formData.stream}
    onChange={handleChange}
    style={{ borderColor: '#f15d24' }}
  ><option value="stream">Stream</option>
  <option value="Aeronautical Engineering">
                  Aeronautical Engineering
                </option>
                <option value="Agriculture Engineering">
                  Agriculture Engineering
                </option>
                <option value="Air conditioning engineering">
                  Air conditioning engineering
                </option>
                <option value="Architecture Engineering">
                  Architecture Engineering
                </option>
                <option value="Automobile Engineering">
                  Automobile Engineering
                </option>
                <option value="Biological Engineering">
                  Biological Engineering
                </option>
                <option value="Biotechnology Engineering">
                  Biotechnology Engineering
                </option>
                <option value="Building technology Engineering">
                  Building technology Engineering
                </option>
                <option value="Ceramic Engineering">Ceramic Engineering</option>
                <option value="Chemical Engineering">
                  Chemical Engineering
                </option>
                <option value="Civil Engineering">Civil Engineering</option>
                <option value="Communication Engineering">
                  Communication Engineering
                </option>
                <option value="Computer hardware & networking Engineering">
                  Computer hardware & networking Engineering
                </option>
                <option value="Computer science Engineering">
                  Computer science Engineering
                </option>
                <option value="Construction Engineering">
                  Construction Engineering
                </option>
                <option value="Drilling Engineering">
                  Drilling Engineering
                </option>
                <option value="E-Commerce Engineering">
                  E-Commerce Engineering
                </option>
                <option value="Electrical & Electronics Engineering">
                  Electrical & Electronics Engineering
                </option>
                <option value="Electrical Engineering">
                  Electrical Engineering
                </option>
                <option value="Electronics & Communication Engineering">
                  Electronics & Communication Engineering
                </option>
                <option value="Electronics & Instrumentation Engineering">
                  Electronics & Instrumentation Engineering
                </option>
                <option value="Electronics & Telecommunication Engineering">
                  Electronics & Telecommunication Engineering
                </option>
                <option value="Electronics Engineering">
                  Electronics Engineering
                </option>
                <option value="Environmental Engineering">
                  Environmental Engineering
                </option>
                <option value="Fashion Design Engineering">
                  Fashion Design Engineering
                </option>
                <option value="Fire & Safety Engineering">
                  Fire & Safety Engineering
                </option>
                <option value="Food Technology Engineering">
                  Food Technology Engineering
                </option>
                <option value="Hardware Engineering">
                  Hardware Engineering
                </option>
                <option value="Horticulture Engineering">
                  Horticulture Engineering
                </option>
                <option value="Industrial Engineering">
                  Industrial Engineering
                </option>
                <option value="Information Technology Engineering">
                  Information Technology Engineering
                </option>
                <option value="Instrumentation & Control Engineering">
                  Instrumentation & Control Engineering
                </option>
                <option value="Instrumentation Engineering">
                  Instrumentation Engineering
                </option>
                <option value="Interior Designing Engineering">
                  Interior Designing Engineering
                </option>
                <option value="Leather Technology Engineering">
                  Leather Technology Engineering
                </option>
                <option value="Manufacturing Engineering">
                  Manufacturing Engineering
                </option>
                <option value="Marine Engineering">Marine Engineering</option>
                <option value="Material Engineering">
                  Material Engineering
                </option>
                <option value="Mechanical Engineering">
                  Mechanical Engineering
                </option>
                <option value="Mechatronics Engineering">
                  Mechatronics Engineering
                </option>
                <option value="Metallurgy Engineering">
                  Metallurgy Engineering
                </option>
                <option value="Mine survey Engineering">
                  Mine survey Engineering
                </option>
                <option value="Mining Engineering">Mining Engineering</option>
                <option value="Networking Engineering">
                  Networking Engineering
                </option>
                <option value="Petroleum Engineering">
                  Petroleum Engineering
                </option>
                <option value="Plastic Technology Engineering">
                  Plastic Technology Engineering
                </option>
                <option value="Polymer Engineering">Polymer Engineering</option>
                <option value="Power Engineering">Power Engineering</option>
                <option value="Printing Technology Engineering">
                  Printing Technology Engineering
                </option>
                <option value="Production Engineering">
                  Production Engineering
                </option>
                <option value="Safety Engineering">Safety Engineering</option>
                <option value="Shipbuilding Engineering">
                  Shipbuilding Engineering
                </option>
                <option value="Software Engineering">
                  Software Engineering
                </option>
                <option value="Sound Engineering">Sound Engineering</option>
                <option value="Structural Engineering">
                  Structural Engineering
                </option>
                <option value="Surveying Engineering">
                  Surveying Engineering
                </option>
                <option value="Telecommunication Engineering">
                  Telecommunication Engineering
                </option>
                <option value="Tool & Die Engineering">
                  Tool & Die Engineering
                </option>
                <option value="Transportation Engineering">
                  Transportation Engineering
                </option>
                <option value="Textile Engineering">Textile Engineering</option>
  </Form.Control>
</Col>

            <Col xs={12} md={6}>
              <Form.Control required type="text" placeholder="Reference" name="reference" value={formData.reference} onChange={handleChange} style={{ borderColor: '#f15d24' }} />
            </Col>
          </Row>

          <Row className="g-3 mb-3">
            <Col xs={12} className="d-flex justify-content-center">
              <Button type="submit" className="btn custom-btn-admsn">
                SUBMIT
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </>
  );
};

export default Application;
