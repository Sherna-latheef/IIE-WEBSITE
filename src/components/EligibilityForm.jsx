import { useState } from 'react';
import { Helmet } from 'react-helmet-async';

const EligibilityForm = () => {
  const [isPageAvailable, setIsPageAvailable] = useState(false); // Change to false to simulate unavailability

  return (
    <div className="container" id="changedeligibility">
      <Helmet>
        {/* Google Analytics */}
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

      {isPageAvailable ? (
        <>
          {/* Original form content here */}
          <img src="logomain.png" alt="Logo-cye" className="logomain-cye" />
          <p className="check-eligible-text">Get your eligibility Status</p>
          <p className="eligiblity-paragrph">
            Kindly fill-in the given columns to start processing your eligibility score check for B Tech/Diploma course by clicking the box given below.
          </p>

          <form id="eligibility-form">
            {/* Main Fields */}
            <div className="form-row">
              <input
                type="text"
                className="form-field"
                id="name"
                placeholder="Name"
                required
              />
              <input
                type="text"
                className="form-field"
                id="jobType"
                placeholder="Job Type"
                required
              />
            </div>
            <div className="form-row">
              <input
                type="email"
                className="form-field"
                id="email"
                placeholder="Email"
                required
              />
              <input
                type="text"
                className="form-field"
                id="number"
                placeholder="Phone Number"
                required
              />
            </div>

            <button type="button" className="submit-button-cye">
              Click here for Eligibility Score
            </button>
          </form>
        </>
      ) : (
        // Message displayed when the page is unavailable
        <div className="unavailable-container">
          <h1>Page Temporarily Unavailable</h1>
          <p>We are currently performing maintenance or updates. Please check back later.</p>
        </div>
      )}
    </div>
  );
};

export default EligibilityForm;
