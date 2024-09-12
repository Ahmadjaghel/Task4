import React from "react";
import { FaUserDoctor } from "react-icons/fa6";
import { FaRegHospital } from "react-icons/fa6";
import { HiMiniBeaker } from "react-icons/hi2";
import { SlBadge } from "react-icons/sl";
import AboutCard from "./AboutCard";
const AboutCards = () => {
  const cardData = [
    {
      icon: () => <FaUserDoctor size={50} className="text-maincolor " />,
      title: "25",
      text: "Doctor",
    },
    {
      icon: () => <FaRegHospital size={50} className="text-maincolor " />,
      title: "15",
      text: "Depatrments",
    },
    {
      icon: () => <HiMiniBeaker size={50} className="text-maincolor " />,
      title: "8",
      text: "Research Labs",
    },
    {
      icon: () => <SlBadge size={50} className="text-maincolor " />,
      title: "150",
      text: "Awards",
    },
  ];
  return (
    <div className="container d-flex flex-wrap gap-3 my-5  ">
      {cardData.map((item, ind) => (
        <AboutCard
          icon={item.icon}
          title={item.title}
          text={item.text}
          key={ind}
        />
      ))}
    </div>
  );
};

export default AboutCards;
