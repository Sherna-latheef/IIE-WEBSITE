import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/Context";
import { Urls } from "../context/Urls";

const Verified = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [documents, setDocuments] = useState([]);

  const getFiles = async () => {
    try {
      const response = await axios.get(Urls.BACKEND_URL + "/user/documents", {
        headers: {
          Authorization: `Bearer ${user?.token}`,
        },
      });
      if (response.status === 200) {
        console.log("response: ", response.data);
        return response.data;
      } else {
        return [];
      }
    } catch (error) {
      console.error("Failed to retrieve documents ", error);
      return [];
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await getFiles();
      console.log("data is", data);
      if (!user?.token) {
        navigate("/");
      } else if (data.length === 0) {
        navigate("/documentupload");
      } else {
        setDocuments(data);
      }
    };
    fetchData();
  }, [user, navigate]);

  return (
    <>
    
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-CZ0T7KJBXW"></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-CZ0T7KJBXW');
          `}
        </script>
     
      <meta charSet="UTF-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
      />
      <title>IIECENTRE</title>
      <link rel="stylesheet" href="css/style.css" />
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
      />
      <link
        rel="preconnect"
        href="https://fonts.googleapis.com"
        crossOrigin=""
      />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin=""
      />
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
    <section className="main-section-tech">
      <div className="main-box-tech">
        <a href="/DocumentUpload" className="sub-box-tech btn gradient-text">Verification</a>
        <a href = "/techassistant" className="sub-box-tech btn gradient-text">
          Technical Assistance
        </a>
        <button className="sub-box-tech btn gradient-bg">
          Verification Status
        </button>
      </div>
      <br />
      <div className="heading-text-verified">Verification Status</div>
      <div className="verification-status-container">
     
 
        {documents.length > 0 && (
                <div>
                  {documents.map((data,index) => (
                     <div key ={index} className="status-item">
                     <span className="status-text">{data.url}</span>
                    <a>{data.status}</a>
                     <span className="status-icon">
                      
                       <i className="fa" id="doc1Status" />
                     </span>
                   </div>
                  ))}
                </div>
              )}
      </div>
    </section>
  
  </>
  )
}
export default Verified