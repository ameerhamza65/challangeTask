import Footer from "../atoms/Footer";
import Header from "../atoms/Header";
import Loader from "../atoms/Loader";

const Layout = ({ children ,error, isLoading}) => (
  <div className="flex flex-col min-h-screen">
    <Header />
    <main className="flex-grow p-4">
      {error ? <div className="text-center text-xl font-bold w-full lg:w-auto">{error}</div> : isLoading ? <Loader /> : null}
      {children}
    </main>
    <Footer />
  </div>
);

export default Layout;
