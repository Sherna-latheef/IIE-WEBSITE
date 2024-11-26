import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useAuth } from "../context/Context";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordc, setCPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { signup } = useAuth();
  const { user } = useAuth();

  useEffect(() => {
    // Inject Google Analytics script
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-CZ0T7KJBXW";
    document.head.appendChild(script);

    script.onload = () => {
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        window.dataLayer.push(arguments);
      }
      gtag("js", new Date());
      gtag("config", "G-CZ0T7KJBXW");
    };

    // Cleanup the script on component unmount
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  useEffect(() => {
    console.log("user " + user?.name);
    if (user?.userName || user?.token) {
      console.log("user is logged in");
      navigate("/");
    }
  }, [user, navigate]);

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      if (password === passwordc || !passwordc) {
        setLoading(true);
        console.log("email: " + email + " password: " + password);
        const state = await signup(name, email, password);
        setLoading(false);
        console.log("state: " + state);
        if (state) {
          navigate("/login");
        } else {
          console.log("not registered");
        }
      } else {
        toast.error("Password is not matching");
      }
    } catch (error) {
      toast.error("Signup failed");
      console.error(error);
      setLoading(false);
    }
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
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap"
        rel="stylesheet"
      />
      <section className="container SIGNUP-container mt-5" id="signupchangedpage">
        <div className="SIGNUP-box">
          <h2 className="welcomeback-text-in-login-page">Get Started</h2>
          <div className="logo-container">
            <img src="logomain.png" alt="Logo" width={111} height={120} />
          </div>
          <form onSubmit={handleSignup} className="row SIGNUP-form">
            <div className="col-12">
              <div className="form-group">
                <input
                  type="name"
                  className="form-control"
                  placeholder="Enter Your Name"
                  required=""
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>
            <div className="col-12">
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email/Phone no"
                  required=""
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="form-group passwordsignup-container">
                <input
                  type="password"
                  className="form-control password-field"
                  placeholder="Password"
                  id="password1"
                  required=""
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="form-group passwordsignup-container">
                <input
                  type="password"
                  className="form-control confirm-password-field"
                  placeholder="Confirm Password"
                  id="password2"
                  required=""
                  onChange={(e) => setCPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="d-flex justify-content-center">
              <button type="submit" className="SIGNUP-button">
                <b>SIGN UP</b>
              </button>
            </div>
          </form>
          <div className="signuppage-under">
            <p className="text-center m-0">
              Already have an account?{" "}
              <a href="login" className="sign-up-link"><b>Login</b></a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;
