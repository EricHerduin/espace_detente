import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Image from "../components/image";
import Description from "../components/description";
import Productlist from "../components/productList";
import ArticleText from "../components/article";

export default function Homepage() {
  return (
    <div className="mainHome">
      <Header />
      <div className="mainHome__text">
        <Image />
        <Description />
        <Productlist />
        <ArticleText />
      </div>
      <Footer />
    </div>
  );
}
