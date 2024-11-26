import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useAuth } from "../context/Context";
import { Urls } from "../context/Urls";
import { Helmet } from "react-helmet-async";

const DocumentUpload = () => {
  const navigate = useNavigate();
  const { user, loading } = useAuth();
  const [educationalCertificates, setEducationalCertificates] = useState([]);
  const [experienceCertificates, setExperienceCertificates] = useState([]);
  const [profileImage, setProfileImage] = useState(null);
  const [course, setCourse] = useState("");
  const [documents, setDocuments] = useState([]);

  const getFiles = async () => {
    try {
      const response = await axios.get(Urls.BACKEND_URL + "/user/documents", {
        headers: { Authorization: `Bearer ${user?.token}` },
      });
      return response.status === 200 ? response.data : [];
    } catch (error) {
      console.error("Failed to retrieve documents ", error);
      return [];
    }
  };

  useEffect(() => {
    if (!user && !loading) {
      navigate("/");
      return;
    }
    const fetchData = async () => {
      const data = await getFiles();
      toast.success(data?.message || "success");

      if (data.length !== 0) {
        navigate("/verified");
      } else {
        setDocuments(data);
      }
    };
    fetchData();
  }, [user, loading, navigate]);

  const handleEducationalCertificatesChange = (e) =>
    setEducationalCertificates([...e.target.files]);
  const handleExperienceCertificatesChange = (e) =>
    setExperienceCertificates([...e.target.files]);
  const handleProfileImageChange = (e) => setProfileImage(e.target.files[0]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    educationalCertificates.forEach((file) => formData.append("educationalCertificates", file));
    experienceCertificates.forEach((file) => formData.append("experienceCertificates", file));
    if (profileImage) formData.append("profileImage", profileImage);
    formData.append("course", course);

    try {
      await axios.post("http://localhost:5001/user/upload/details", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${user.token}`,
        },
      });
      toast.success("Files uploaded successfully");
      navigate("/techassistant");
    } catch (error) {
      console.error("Error uploading files:", error);
      toast.error("Error uploading files");
    }
  };

  return (
    <div>
      <Helmet>
        <title>IIECENTRE</title>
        <link rel="stylesheet" href="css/style.css" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-CZ0T7KJBXW"></script>
        <script>{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-CZ0T7KJBXW');
        `}</script>
      </Helmet>

      <ToastContainer containerId="containerA" />

      <section className="main-section">
        <div className="main-box">
          <button className="sub-box btn">
            <a href="/" className="sub-box-text" style={{ textDecoration: "none", color: "inherit" }}>
              Verification
            </a>
          </button>
          <button className="sub-box btn">
            <a href="/TechAssistant" className="sub-box-text" style={{ textDecoration: "none", color: "inherit" }}>
              Technical Assistance
            </a>
          </button>
          <button className="sub-box btn">
            <a href="/verified" className="sub-box-text" style={{ textDecoration: "none", color: "inherit" }}>
              Verification Status
            </a>
          </button>
        </div>

        <div className="heading-text">Please fill the following requirements</div>
        <form className="form-container" onSubmit={handleSubmit}>
          <div className="form-row1">
            <div className="form-field">
              {educationalCertificates.length > 0 && (
                <ul>
                  {educationalCertificates.map((file, index) => (
                    <li key={index}>{file.name}</li>
                  ))}
                </ul>
              )}
              <input
                type="file"
                id="file1"
                multiple
                onChange={handleEducationalCertificatesChange}
              />
              {!educationalCertificates.length && (
                <label htmlFor="file1">Educational Certificates</label>
              )}
              <img src="dwnldicon.png" alt="Icon" />
            </div>
            <div className="form-field">
              <select
                required
                onChange={(e) => setCourse(e.target.value)}
                value={course}
              >
                <option value="" disabled>
                  Courses
                </option>
       
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
              </select>
            </div>
          </div>

          <div className="form-row1">
            <div className="form-field">
              {experienceCertificates.length > 0 && (
                <ul>
                  {experienceCertificates.map((file, index) => (
                    <li key={index}>{file.name}</li>
                  ))}
                </ul>
              )}
              <input
                type="file"
                id="file2"
                multiple
                onChange={handleExperienceCertificatesChange}
              />
              {!experienceCertificates.length && (
                <label htmlFor="file2">Experience Certificates</label>
              )}
              <img src="dwnldicon.png" alt="Icon" />
            </div>
            <div className="form-field">
              {profileImage && <ul><li>{profileImage.name}</li></ul>}
              <input
                type="file"
                id="file3"
                onChange={handleProfileImageChange}
              />
              {!profileImage && (
                <label htmlFor="file3">Upload Image</label>
              )}
              <img src="dwnldicon.png" alt="Icon" />
            </div>
          </div>
          <button className="submit-button" type="submit">
            SUBMIT
          </button>
        </form>
      </section>
    </div>
  );
};

export default DocumentUpload;
