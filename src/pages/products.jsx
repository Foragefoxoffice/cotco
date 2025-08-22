import React from "react";

import Navbar from "../components/layout/Navbar";
import ProductsHero from "../components/coctoproducts/ProductsHero";
import Footer from "../components/layout/Footer";
import LmwMachines from "../components/coctoproducts/LmwMachines";
import ContactToday from "../components/common/ContactToday";
import PartnerSection from "../components/coctoproducts/PartnerSection";
const Products = () => {
  return (
    <div>
      <Navbar />
      <ProductsHero />
      <LmwMachines />
   
      <PartnerSection />
         <ContactToday />
      <Footer />
    </div>
  );
};

export default Products;
