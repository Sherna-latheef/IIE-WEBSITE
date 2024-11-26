import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { Urls } from "./Urls";
import { toast } from "react-toastify";
import { jwtDecode } from "jwt-decode";
const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [admin, setAdmin] = useState(null);
  const [loading, setLoading] = useState(true);
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    const storedUserData = localStorage.getItem("userData");
    const adminData = localStorage.getItem("adminData");

    if (storedUserData) {
      const parsedUserData = JSON.parse(storedUserData);
      setUser(parsedUserData);
    }

    if (adminData) {
      const parsedAdminData = JSON.parse(adminData);
      setAdmin(parsedAdminData);
    }

    setLoading(false); // Set loading to false after user and admin data are retrieved
  }, []);

  const login = async (userName, password) => {
    try {
      const response = await axios.post(Urls.BACKEND_URL + "/user/login", {
        username: userName,
        password,
      });

      const decodedToken = jwtDecode(response.data.token);

      if (decodedToken.role === "user") {
        setUser(response.data);
        localStorage.setItem("userData", JSON.stringify(response.data));
      } else if (decodedToken.role === "admin") {
        setAdmin(response.data);
        localStorage.setItem("adminData", JSON.stringify(response.data));
      }

      toast.success("Success");
    } catch (error) {
      toast.error("Wrong username or password");
      console.error("Login failed:", error);
    }
  };

  const sendMail = async (Data) => {
    try {
      const response = await axios.post(Urls.BACKEND_URL + "/email/send", Data);
      if (response.status === 200) {
        toast.success("Form submitted successfully!");
      } else {
        toast.error("Failed to submit form.");
      }
    } catch (error) {
      toast.error("Error occurred");
      console.error("Failed to submit ", error);
    }
  };

  const getCertificate = async () => {
    try {
      const response = await axios.get(Urls.BACKEND_URL + "/user/admin/get/documents", {
        headers: {
          Authorization: `Bearer ${admin?.token}`,
        },
      });

      if (response.status === 200) {
        setDocuments(response.data);
      } else {
        toast.error("Failed to submit form.");
      }
    } catch (error) {
      toast.error("Error occurred");
      console.error("Failed to submit ", error);
    }
  };

  const signup = async (name, userName, password) => {
    try {
      const response = await axios.post(Urls.BACKEND_URL + "/user/registerUser", {
        name: name,
        username: userName,
        password: password,
      });
      if (response.status === 200) {
        toast.success("Success");
        return true;
      } else if (response.status === 409) {
        toast.error("User already exists");
        return false;
      } else {
        toast.error("Error occurred");
        return false;
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || "error ");
      console.error("Signup failed:", error);
      return false;
    }
  };

  const logout = () => {
    localStorage.removeItem("userData");
    localStorage.removeItem("adminData");

    setUser(null);
    setAdmin(null);
  };

  const getFiles = async () => {
    if (user) {
      try {
        const response = await axios.get(Urls.BACKEND_URL + "/user/documents", {
          headers: {
            Authorization: `Bearer ${user?.token}`,
          },
        });
        if (response.status === 200) {
          setDocuments(response.data);
        } else {
          return undefined;
        }
      } catch (error) {
        toast.error("Error occurred");
        console.error("Failed to retrieve documents ", error);
        return undefined;
      }
    } else {
      console.log("User not logged in");
    }
  };

  return (
    <AuthContext.Provider value={{ getCertificate, admin, loading, sendMail, getFiles, documents, signup, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  return useContext(AuthContext);
};

export { useAuth };
