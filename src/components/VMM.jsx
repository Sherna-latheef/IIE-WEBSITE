import { useEffect } from "react";

const VMM = () => {
  useEffect(() => {
    // Dynamically add the GTM script to the document
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-CZ0T7KJBXW";
    document.head.appendChild(script);

    // Initialize GTM after the script is loaded
    script.onload = () => {
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        window.dataLayer.push(arguments);
      }
      gtag("js", new Date());
      gtag("config", "G-CZ0T7KJBXW");
    };
  }, []); // Empty dependency array ensures this runs once when the component mounts

  return (
    <>
      
      <div className="side-menu" id="sideMenu">
       
      </div>
      <div className="backdrop" id="backdrop" />
      <section className="custom-section-VMM">
        <div className="custom-box-vision left-aligned-VMM">
          <img src="vision.png" alt="Left Box Image" className="box-image-vision" />
          <div className="box-content-VMM">
            <div className="visionpart">Vision</div>
            <p>
              To become a world-class professional institute with focus on
              excellence, moulding committed global professionals and technocrats
              who can meet the demands of business, industry, and research.
            </p>
          </div>
        </div>
        <div className="custom-box-mission right-aligned-VMM">
          <img src="mission.png" alt="Right Box Image" className="box-image-mission"/>
          <div className="box-content-VMM-mission">
            <div className="missionpart">Mission</div>
            <p>
              To transform into an advanced centre of technical education, which
              will, in turn, bring out professionals with superior skills and social
              commitment. To provide state-of-the-art facilities to mould brilliant
              young talents, enabling them to take up challenging assignments in the
              highly competitive global scenario.
            </p>
          </div>
        </div>
        <div className="custom-box-motto left-aligned-VMM">
          <img src="motto.png" alt="Left Box Image" className="box-image-motto" />
          <div className="box-content-VMM">
            <div className="mottopart">Motto</div>
            <p>Focus on Excellence</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default VMM;
