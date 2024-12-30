import React from "react";
import banner from "../../assets/images/Image2.png";
import Logo from "../../assets/images/mnasa.png";
import { NavLink } from "react-router-dom";
const OnboardingTwo = () => {
  return (
    <div className="min-h-screen  flex gap-3  flex-col justify-center items-center bg-viloat2">
      <h1 className="w-32">
        <img src={Logo} alt="" />
      </h1>
      <img src={banner} alt="" />
      <h3 className="text-2xl font-bold">اجعل التعلم متاحا في أي مكان</h3>
      <p className="text-slate-500">
        تعلم وطور مهاراتك بسهولة مع منصة تعليمية شاملة ومبتكرة{" "}
      </p>
      <button className="bg-viloat1 px-20 py-4 rounded-lg text-white font-bold text-2xl">
      <NavLink to={'/Home'}>التالي</NavLink>
      </button>
    </div>
  );
};

export default OnboardingTwo;
