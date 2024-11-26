import { useEffect } from 'react';

const Download = () => {

  useEffect(() => {
    // Add Google Tag Manager script
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = "https://www.googletagmanager.com/gtag/js?id=G-CZ0T7KJBXW";
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-CZ0T7KJBXW');
    `;
    document.head.appendChild(script2);

    // Cleanup the scripts when the component unmounts
    return () => {
      document.head.removeChild(script1);
      document.head.removeChild(script2);
    };
  }, []);

  return (
    <>
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
      <main className="Download-1 container" id="changeddownload">
        <h1 className="page-heading text-center mt-5">DOWNLOAD</h1>
        <div className="info-box1 mt-5 d-flex align-items-center info-box">
          <div className="circle">
            <span>1</span>
          </div>
          <div className="info-text">
            <h3>IIE Information Brochure 2016</h3>
          </div>
          <a className="btn download-btn ms-auto" href="Brochure.pdf">
            Download &nbsp;
            <img
              src="downloadarrow.png"
              alt="download"
              style={{ width: 14, height: 14 }}
            />
          </a>
        </div>
        <div className="info-box2 mt-5 d-flex align-items-center info-box">
          <div className="circle">
            <span>2</span>
          </div>
          <div className="info-text">
            <h3>Academic Membership Examination Form</h3>
          </div>
          <a className="btn download-btn ms-auto" href="Examinationform.pdf">
            Download &nbsp;
            <img
              src="downloadarrow.png"
              alt="download"
              style={{ width: 14, height: 14 }}
            />
          </a>
        </div>
        <div className="info-box3 mt-5 d-flex align-items-center info-box">
          <div className="circle">
            <span>3</span>
          </div>
          <div className="info-text">
            <h3>Academic Membership Admission Form</h3>
          </div>
          <a className="btn download-btn ms-auto" href="admissionform.pdf">
            Download &nbsp;
            <img
              src="downloadarrow.png"
              alt="download"
              style={{ width: 14, height: 14 }}
            />
          </a>
        </div>
      </main>
    </>
  );
};

export default Download;
