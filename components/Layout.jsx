import Footer from "./Footer";
import Particle from "./Particle";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-black  text-white ">
      <Header />
      <main className="mt-24 lg:px-20 px-6 ">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
