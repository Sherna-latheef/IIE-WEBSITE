import { useState, useEffect } from "react";
import { useAuth } from "../context/Context";

const formdataformat = {
  heading: "Exam Registration",
  name: "",
  course: "",
  stream: "",
  date: "",
  applicationNumber: "",
};

const ExamRegistration = () => {
  const [formData, setFormData] = useState(formdataformat);
  const { sendMail } = useAuth();

  useEffect(() => {
    // Dynamically add the GTM script
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-CZ0T7KJBXW";
    document.head.appendChild(script);

    // Add the GTM initialization script
    script.onload = () => {
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        window.dataLayer.push(arguments);
      }
      gtag("js", new Date());
      gtag("config", "G-CZ0T7KJBXW");
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    sendMail(formData);
    setFormData(formdataformat);
  };

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
      <link
        href="https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap"
        rel="stylesheet"
      />
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
      
      </div>
      <div className="backdrop" id="backdrop" />
      <main className="container">
        <section className="main-section-exams">
          {/* Adding the heading below the header */}
          <h1 className="page-heading text-center mt-5">EXAMINATIONS</h1>
          <br />
          <form onSubmit={handleSubmit} className="exam-form">
            <div className="form-row">
              <div className="form-group mb-3">
                <label
                  htmlFor="name"
                  style={{ color: "black", fontWeight: "600" }}
                >
                  Enter your Name
                </label>
                <input
                  type="text"
                  className="form-control-exams custom-input"
                  id="name"
                  placeholder="Name"
                  required
                />
              </div>
              <div className="form-group mb-3">
                <label
                  htmlFor="applicationNumber"
                  style={{ color: "black", fontWeight: "600" }}
                >
                  Enter Application Number
                </label>
                <input
                  type="text"
                  className="form-control-exams custom-input"
                  id="applicationNumber"
                  placeholder="Example: 301040"
                  required
                />
              </div>
              <div className="form-group mb-3">
                <label
                  htmlFor="examDate"
                  style={{ color: "black", fontWeight: "600" }}
                >
                  Select your Exam Date
                </label>
                <input
                  type="date"
                  className="form-control-exams custom-input"
                  id="examDate"
                  required
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group mb-3">
                <label
                  htmlFor="course"
                  style={{ color: "black", fontWeight: "600" }}
                >
                  Select Course
                </label>
                <select
                  className="form-control-exams custom-input"
                  id="course"
                  required
                >
                  <option value="">Course</option>
                  <option>Aeronautical Engineering</option>
                  <option>Agriculture Engineering</option>
                  <option>Air conditioning engineering</option>
                  <option>Architecture Engineering</option>
                  <option>Automobile Engineering</option>
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
              
                </select>
              </div>
              <div className="form-group mb-3">
                <label
                  htmlFor="stream"
                  style={{ color: "black", fontWeight: "600" }}
                >
                  Select Stream
                </label>
                <select
                  className="form-control-exams custom-input"
                  id="stream"
                  required
                >
                  <option value="">Stream</option>
                  <option>Diploma</option>
                  <option>B-Tech</option>
                </select>
              </div>
            </div>
            <center>
              <button type="submit" className="btn custom-btn-exams">
                SUBMIT
              </button>
            </center>
          </form>
        </section>
      </main>
    </>
  );
};

export default ExamRegistration;
