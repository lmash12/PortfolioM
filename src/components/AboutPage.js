import React from "react";
import "../Contact.css";
import { FaRegHandPointDown } from "react-icons/fa";

const AboutPage = () => {
  return (
    <div className="about">
      <h1>About.</h1>
      <p>
        As a frontend developer, my journey in tech has been a wild ride so far.
        I hopped on the bandwagon in 2020, armed with nothing but a laptop and a
        thirst for knowledge. I scoured the internet for resources, devouring
        online courses on Udemy, YouTube tutorials, and even brushing up on my
        skills with SoloLearn. Things really kicked into high gear when I
        attended a bootcamp at Altschool Africa - they say that's where the
        magic happens! Now, armed with the power of ReactJS and VueJS, I'm
        taking on the world one website at a time. But I'm not done yet - I'm
        currently exploring the possibilities of NextJS, and who knows where
        that will take me? All I know is that it's an exciting journey, and I'm
        glad to be on it!
      </p>

      <span>Reach out on any of the links below</span>
      <span>
        <FaRegHandPointDown />
      </span>
    </div>
  );
};

export default AboutPage;
