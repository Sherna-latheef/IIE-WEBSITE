import { Outlet } from "react-router-dom";
import Nav from "../Nav"
import Footer from "../Footer";

const RootLayout = () => {
  return (
    <>
      <main>
        <Nav />
        <Outlet />
        <Footer/>
      </main>
    </>
  );
};

export default RootLayout;
