import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useAuth } from "../context/Context";
import { useNavigate } from "react-router-dom";

// import Spinner from 'react-bootstrap/Spinner';
const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useAuth(); // Access the login function from the authentication context

  const { user } = useAuth();
  useEffect(() => {
    console.log("user " + user?.name);
    if (user?.userName || user?.token) {
      console.log("user is logged in");
      navigate("/");
    }
  }, [user]);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      console.log("email: " + email + " password: " + password);
      // Call the login function from the context with email and password
      await login(email, password);

      // navigate('/')
      // Redirect to a different route if login is successful
    } catch (error) {
      // Handle login error
      toast.error("login failed");
      console.error(error);
    }
  };

  return (
    <>
      <ToastContainer />
      <helmet>

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
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
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
      
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-CZ0T7KJBXW"></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-CZ0T7KJBXW');
          `}
        </script>
      


</helmet>
      <section className="login-container mt-5" id="loginpagechanged">
        <div className="login-box">
          <h2 className="welcomeback-text-in-login-page">Welcome Back !</h2>
          <div className="logo-container">
            <img src="logomain.png" alt="Logo" width={111} height={120} />
          </div>
          <form onSubmit={handleLogin} className="login-form row">
            <div className="col-12">
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  required=""
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="col-12">
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  id="password"
                  required=""
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <a href="index.html">
              <button type="submit" className="SIGNUP-button">
                <b>LOGIN</b>
              </button>
            </a>
          </form>
          <br />
          <div className="line-container">
            <div className="line" />
            <div className="text">
              <h6>Or sign up with</h6>
            </div>
            <div className="line" />
          </div>
          <div className="social-login">
            {/* <a href="#">
            <img src="google -icon.png" alt="Google" />
          </a> */}
            {/* <a href="#">
            <img src="facebook-icon.png" alt="Facebook" />
          </a> */}
          </div>
          <div className="signup-under">
            <p className="text-center m-0">
              Not have an account?{" "}
              <a href="signup" className="sign-up-link">
                <b> Sign Up</b>
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
