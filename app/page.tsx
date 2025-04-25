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
import Products from "./components/Products";
import Cart from "./components/Cart";
import ProductsServer from "./components/ProductsServer";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Products products={[]} />
      <ProductsServer />
      {/* <Cart isOpen={false} onClose={function (): void {
        throw new Error('Function not implemented.');
      }} /> */}
      {/* <ProductDetail /> */}
      {/* <Landing /> */}
    </>
  );
}
