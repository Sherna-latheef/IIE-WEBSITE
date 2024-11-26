import { useEffect } from "react";

const TechAssistant = () => {
  useEffect(() => {
    // Dynamically add GTM script to the document head
    const script = document.createElement("script");
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-CZ0T7KJBXW";
    script.async = true;
    document.head.appendChild(script);

    // Add GTM initialization code
    const inlineScript = document.createElement("script");
    inlineScript.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-CZ0T7KJBXW');
    `;
    document.head.appendChild(inlineScript);

    return () => {
      // Cleanup scripts if needed
      document.head.removeChild(script);
      document.head.removeChild(inlineScript);
    };
  }, []);

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
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      />

      {/* New Section */}
      <section className="main-section-tech">
        <div className="main-box-tech">
          <a href="/DocumentUpload" className="sub-box-tech btn gradient-text">
            Verification
          </a>
          <button className="sub-box-tech btn gradient-bg">
            Technical Assistance
          </button>
          <a href="/verified" className="sub-box-tech btn gradient-text">
            Verification Status
          </a>
        </div>
        <br />
        <div className="heading-text-tech">Support 24/7</div>
        <div className="text-support-tech">
          <h4>Assistance is needed related to your document verification.</h4>
          <h4>
            If there is any rejection or any personal assistance needed, contact
            or get support from the technical team through a request.
          </h4>
          <h4>Assistance within 90 minutes.</h4>
        </div>
        <div className="row image-container">
          <div className="col-12 col-md-4">
            <div className="image-box">
              <a href="mailto:enquiry@iiecentre.com">
                <img src="e-mailpic.png" alt="Email Image" />
              </a>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="image-box">
              <a href="https://wa.me/918891222500" target="_blank" rel="noopener noreferrer">
                <img src="whatsapp-pic.png" alt="WhatsApp Image" />
              </a>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="image-box">
              <a href="tel:8891222500">
                <img src="phonepic.png" alt="Phone Image" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TechAssistant;
