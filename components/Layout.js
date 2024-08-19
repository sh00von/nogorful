// components/Layout.js
import Header from './Header';
import Footer from './Footer';
import Preloader from './Preloader';

const Layout = ({ children }) => {
  return (
    <>
      {/* <Preloader /> */}
      <div className="page-wrapper">
        <Header />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
