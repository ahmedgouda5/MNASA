import { motion } from "motion/react";
import "./styel.css";
import Logo from'../../assets/images/mnasa.png'

const SplashScreen = () => {
  return (
    <motion.div className=" bg-viloatbas min-h-screen flex justify-center items-center overflow-hidden ">
      <img src={Logo} alt="" />
    </motion.div>
  );
};

export default SplashScreen;
