import "./App.css";
// import "swiper/css";
//bootstrap library
import "bootstrap/dist/css/bootstrap.min.css";
// import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import "react-toastify/dist/ReactToastify.css";

import Home from "./components/Home";
import Login from "./components/Login.jsx";
import Faq from "./components/Faq.jsx";
import Application from "./components/Application.jsx";
//For routing purposes
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

// import { useEffect } from "react";

//components
import RootLayout from "./components/RootLayout/RootLayout.jsx";

import { ToastContainer } from "react-toastify";
import { AuthProvider } from "./context/Context";
import Signup from "./components/Signup.jsx";
import CourseBtech from "./components/CourseBtech.jsx";
import CourseDiploma from "./components/CourseDiploma.jsx";
import AcadMembership from "./components/AcadMembership.jsx";

import Exam from "./components/Exam.jsx";
import ApplicatioStatus from "./components/ApplicationStatus.jsx";
import DocumentUpload from "./components/DocumentUpload.jsx";
import ExamRegistration from "./components/ExamRegistration.jsx";
import TechAssistant from "./components/TechAssistant.jsx";
import Verified from "./components/Verified.jsx";
import EligibilityForm from "./components/EligibilityForm.jsx";
import EligibilityScore from "./components/EligibilityScore.jsx";
import AdminLogin from "./components/Admin/AdminLogin.jsx";
import AdminMain from "./components/Admin/AdminMain.jsx";
// import Payment from "./components/Payment.jsx";
import Payment from "./components/Payment.jsx";

import VMM from "./components/VMM.jsx";
import Download from "./components/Download.jsx";
import Gallery from "./components/Gallery.jsx";

function App() {
  // document.getElementById("body").setAttribute("data-theme", "dark");
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path = "login" element = {<Login/>}/>
      <Route path = "faq" element = {<Faq/>}/>
      <Route path = "application" element = {<Application/>}/>
      <Route path = "signup" element = {<Signup/>}/>
      <Route path = "coursesbtech" element = {<CourseBtech/>}/>
      <Route path = "coursesdiploma" element = {<CourseDiploma/>}/>
      <Route path = "acadmembership" element = {<AcadMembership/>}/>
      <Route path = "exam" element = {<Exam/>}/>
      <Route path = "status" element = {<ApplicatioStatus/>}/>
      <Route path = "documentupload" element = {<DocumentUpload/>}/>
      <Route path = "examination" element = {<ExamRegistration/>}/>
      <Route path = "techassistant" element = {<TechAssistant/>}/>
      <Route path = "verified" element = {<Verified/>}/>
      <Route path = "eligibility" element = {<EligibilityForm/>}/>
      <Route path = "escore" element = {<EligibilityScore/>}/>
      <Route path="admin/login" element={<AdminLogin/>}  />
      <Route  path="admin/panel" element={<AdminMain/>} />
      <Route path="payment" element={<Payment/>}  />
      <Route path="vmm" element={<VMM/>}  />
      <Route path="download" element={<Download/>}  />
      <Route path="gallery" element={<Gallery/>}  />


      </Route>
    )
  );
  return (
    <div className="App ">
      <AuthProvider>
        
        <RouterProvider router={router} />
        <div className="footer">
          <div className="gradient-top"></div>
        </div>
        
      </AuthProvider>
      <ToastContainer />
    </div>
  );
}

export default App;