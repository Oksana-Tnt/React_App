import { Outlet } from "react-router";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
