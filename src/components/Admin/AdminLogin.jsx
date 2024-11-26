import { useState, useEffect } from "react";
import { useAuth } from "../../context/Context";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Spinner from 'react-bootstrap/Spinner';
import { jwtDecode } from 'jwt-decode'

const AdminLogin = () => {
  const { login } = useAuth(); // Access the login function from the authentication context
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loadingu, setloadingu] = useState(false);

  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      setloadingu(true);
      // Call the login function from the context with email and password
      await login(email, password);
      setloadingu(false);
      // Redirect to a different route if login is successful
    } catch (error) {
      // Handle login error
      toast.error("login failed");
      console.error(error);
      setloadingu(false);

    }
  };
 const {admin,loading} = useAuth();
  useEffect(() => {
    console.log("user" + admin?.token);
    if (  admin?.token && !loading) {
      if(jwtDecode(admin?.token).role === "admin") {
      navigate("/admin/panel");
      }
      else{
      toast.error("You are not allowed ");
      }
    }
  }, [admin, navigate]);

  return (
    <div>
      <ToastContainer />
      <div>
        <div className="">
          <div className="row">
            <div className="col-sm-9 col-md-7 col-lg-5 ">
              <div className="card border-0 shadow rounded-3 my-5">
                <div className="card-body p-4 p-sm-5">
                  <h5 className="card-title text-center mb-5 fw-light fs-5">
                    <img
                      src="/Branding/bes%20logo%20(1)-1-200h.png"
                      width="120"
                      height="60"
                      className="d-inline-block align-top"
                      alt="React Bootstrap logo"
                    />
                  </h5>
                  <form onSubmit={handleLogin}>
                    <div className="form-floating mb-3">
                      <input
                        type="text"
                        className="form-new form-control"
                        id="floatingInput"
                        placeholder="name@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required/>
                      <label htmlFor="floatingInput">User Name</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input
                        type="password"
                        className="form-control"
                        id="floatingPassword"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required/>
                      <label htmlFor="floatingPassword">Password</label>
                    </div>

                    <div className="d-grid">
                      {loadingu?(<Spinner className="mx-3" animation="grow" />):( <button
                        className="btn btn-primary btn-login text-uppercase fw-bold"
                        type="submit"
                      >
                        Log in
                      </button>)}
                     
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
