import React from "react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import AboutCards from "../../components/AboutComponents/AboutCard/AboutCards";
import Features from "../../components/AboutComponents/Features/Features";
import Features1 from "../../components/AboutComponents/Features1/Features1";
const About = () => {
  return (
    <div id="About">
      <SectionTitle
        title="About Us"
        text="Necessiatibus elus consequatur ex aliquid fuga eum quidem sint consectetur velit"
      />
      <Features1 />
      <AboutCards />
      <Features />
    </div>
  );
};

export default About;
