import  { useEffect, useState } from "react";
// import './style.css'; // Assuming your CSS is in a file named style.css
import { Helmet } from 'react-helmet-async';


const EligibilityScore = () => {
  const [percentage, setPercentage] = useState(0);
  const [eligibilityMessage, setEligibilityMessage] = useState("");
  const [resultColor, setResultColor] = useState("red");

  useEffect(() => {
    const getParameterByName = (name) => {
      const url = window.location.href;
      name = name.replace(/[\[\]]/g, "\\$&");
      const regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)");
      const results = regex.exec(url);
      if (!results) return null;
      if (!results[2]) return "";
      return decodeURIComponent(results[2].replace(/\+/g, " "));
    };

    const percentage = parseInt(getParameterByName("percentage"), 10);
    setPercentage(percentage);

    if (percentage > 70) {
      setResultColor("green");
      setEligibilityMessage("You are eligible for certification!");
    } else if (percentage >= 50) {
      setResultColor("yellow");
      setEligibilityMessage("You have moderate eligibility for certification.");
    } else {
      setResultColor("red");
      setEligibilityMessage("You are not eligible for certification.");
    }

    setTimeout(() => {
      document.getElementById("result-percentage").style.width = percentage + "%";
    }, 100);
  }, []);

  return (
    
    <div style={{ fontFamily: 'Arial, sans-serif', display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0', padding: '30px', backgroundColor: 'white' }}>
    <Helmet>
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
    
    <div style={{ position: 'absolute', top: '10px', left: '10px' }}>
  <br/>
  
  <a href="/">
    <button 
      className="btn" 
      style={{
        background: 'linear-gradient(90deg, #f15d24, #ff9500)', 
        color: 'white',
        border: 'none', 
        padding: '5px 10px', 
        fontSize: '15px', 
        cursor: 'pointer',
        transition: 'background 0.3s ease',
        width: '90px', /* Fixed width */
        textAlign: 'center' /* Center text inside button */
      }}
      onMouseOver={(e) => e.target.style.background = 'linear-gradient(90deg, #ff9500, #f15d24)'}
      onMouseOut={(e) => e.target.style.background = 'linear-gradient(90deg, #f15d24, #ff9500)'}
    >
      IIE Centre
    </button>
  </a>
  <br/>
  <br/>

  <a href="https://iieinstitution.com/">
    <button 
      className="btn" 
      style={{
        background: 'linear-gradient(90deg, #f15d24, #ff9500)', 
        color: 'white',
        border: 'none', 
        padding: '5px 10px', 
        fontSize: '15px', 
        cursor: 'pointer',
        transition: 'background 0.3s ease',
        width: '90px', /* Fixed width */
        textAlign: 'center' /* Center text inside button */
      }}
      onMouseOver={(e) => e.target.style.background = 'linear-gradient(90deg, #ff9500, #f15d24)'}
      onMouseOut={(e) => e.target.style.background = 'linear-gradient(90deg, #f15d24, #ff9500)'}
    >
      IIE Main
    </button>
  </a> 
</div>
<br/><br/><br/><br/>
      <img src="logomain.png" alt="Logo-cye" className="logomain-cye" style={{ marginTop: '10px', height: '211px', width: '181px' , display: 'block'}} /><br/>
      <p style={{ fontSize: '29px', fontFamily: 'abril fatface', fontWeight: '1000', color: '#f15d24', marginBottom:'16px' }}>Your Eligibility Score</p><br/>
      {<div style={{ width: '100%', maxWidth: '755px', height: '50px', position: 'relative', margin: '20px 0', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', background: 'linear-gradient(to bottom, #ffffff, #e0e0e0)' }}>
        <div id="result-percentage" style={{ height: '100%', width: '0', position: 'absolute', left: '0', top: '0', borderRadius: '20px', backgroundColor: resultColor, transition: 'width 2s ease-in-out' }}></div>
        <div style={{ position: 'absolute', right: '10px', top: '10px', fontWeight: 'bold', fontSize: '24px', color: '#333', fontFamily: 'roboto' }}>{percentage}%</div>
      </div> }
     
      <div style={{ fontSize: '20px', fontWeight: 'bold', marginTop: '20px', textAlign: 'center', color: '#C73E3E' }}>{eligibilityMessage}</div>
      <br/>
      <p style={{ fontSize: '20px', fontFamily: 'abril fatface', fontWeight: 'bold', color: '#000103', marginBottom:'8px' }}>Thank You For Your Response!</p><br/>
      
    </div>
    
  );
};

export default EligibilityScore;
