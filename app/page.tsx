// import Image from "next/image";
// import Landing from "./components/Landing";
// import Landing from "./components/landing";
// import BlogSlide from "./components/BlogSlide";
// import HowItWorks from "./components/HowItWorks";
import Landing from "./components/landing";
import "./styles/globals.css";
// import Navbar from "./components/Navbar";
// import BlogSlide from "./components/BlogSlide";
// import HowItWorks from "./components/Footer";
import ProductsServer from "./components/ProductsServer";

export default function Home() {
  return (
    <>
      <ProductsServer />

      {/* <Landing /> */}
    </>
  );
}
