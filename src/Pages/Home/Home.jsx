import React from "react";
import Slider from "../../components/HomeComponents/Slider/Slider";
import NeedHelpp from "../../components/HomeComponents/NeedHelpp/NeedHelpp";
import HeroCards from "../../components/HomeComponents/HeroCards/HeroCards";

const Home = () => {
  return (
    <div>
      <Slider />
      <HeroCards />
      <NeedHelpp />
    </div>
  );
};

export default Home;
