// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
  FaUnity,
  FaBlender,
} from "react-icons/fa";

import { SiNextdotjs, SiAdobephotoshop } from "react-icons/si";

const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Development",
        icons: [
          <FaUnity />,
          <FaJs />,
          <FaHtml5 />,
          <FaCss3 />,
          <FaReact />,
          <SiNextdotjs />,
          <FaWordpress />,
        ],
      },
      {
        title: "3D art",
        icons: [<FaFigma />, , <SiAdobephotoshop />, "Blender ", "Fusion"],
      },
    ],
  },

  {
    title: "experience",
    info: [
      {
        title: "3D Printing services - NewSew 3D , Self-employment",
        stage: "Sep 2023 - Present ",
      },
      {
        title: " 3D modeling online classes  - NewSew 3D, Freelancer projects",
        stage: "March 2024 - Present ",
      },
      {
        title: "Web Developer - Codivas, Freelancer projects",
        stage: "2020 - 2024",
      },
      {
        title: "Front end Developer - Poliedro",
        stage: "Feb 2023 - Aug 2023 ",
      },
      {
        title: "Intern Full-stack development- Avanade",
        stage: "2022 - 2023",
      },
      {
        title: "Web development Instructor - Labenu",
        stage: "Aug 2021 - Sep 2022",
      },
    ],
  },
  {
    title: "education",
    info: [
      {
        title: "Game development , Bachelor - Uninter (EAD)",
        stage: "2023 - 2025",
      },
      {
        title: "Computer Science , Bachelor - Anhembi Morumbi(EAD)",
        stage: "2021 - 2025",
      },
      {
        title: "Front end Developer - Reprograma, São Paulo, SP",
        stage: "2017",
      },
      {
        title: "Hospitality , Bachelor - SENAC, Campos do Jordão, SP",
        stage: "2008 - 2009",
      },
    ],
  },
  {
    title: "others",
    info: [
      {
        title: "Academic research - Software , Uninter",
        stage: "2024 ",
      },
      {
        title:
          "Academic research - Sustainable Filaments - University of São Paulo & Cietec/IPEN",
        stage: "2024 ",
      },
      {
        title: "Academic research - Software and IoT , Anhembi Morumbi",
        stage: "2023 ",
      },
      {
        title: "Speaker - Google Women Tech Ambassator  ",
        stage: "2023 - present",
      },
      {
        title: "Speaker - Women in 3D printing - São Paulo ",
        stage: "2023",
      },

      {
        title: "Advanced Game development Bursary - CNB Academy",
        stage: "2023",
      },
      {
        title:
          "Fashion design - Summer intensive course - Parsons The new School of Design - NYC",
        stage: "2013",
      },
      {
        title:
          "Business English - Summer intensive course - University of California,Irvine",
        stage: "2013",
      },
    ],
  },
];
import React, { useState } from "react";
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import Image from "next/image";

import CountUp from "react-countup";

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    //
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left  ">
      <Circles />
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden "
        // transition={{ duration: 1, ease: "easeInOut" }}
        // removi
        className="hidden max-w-[380px] xl:flex absolute  bottom-0 "
      >
        <Avatar />
      </motion.div>

      {/* removi my-5  */}
      <div className="container mx-auto my-5  h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* text title  */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden "
            className="h2"
          >
            Transforming ideas <br /> into{" "}
            <span className="text-accent"> reality</span>
          </motion.h2>

          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden "
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            4 years ago, I began freelancing as a developer. Since then , I've
            done remote work for agencies, counsulted for startups,mentored lots
            of women in tecnology, and collaborated on digital products for
            business and consumer use.
          </motion.p>

          {/* counters */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden "
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6">
              {/* experience */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={4} duration={8} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Years of experience
                </div>
              </div>
              {/* clients */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={20} duration={7} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Mundial Clients
                </div>
              </div>

              {/* projects  */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={35} duration={7} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Finished projects
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* info   - about   */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden "
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          {/* title */}
          <div className=" flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${
                    index === itemIndex &&
                    "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300 "
                  }
                 cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0 `}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>

          {/*  conteudo tabs */}
          {/* removi bg-pink-400/10 */}
          <div className=" py-20 xl:py-6 flex   flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start mb-20 ">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
                >
                  <div className="font-light mb-2 md:mb-0">{item.title}</div>
                  <div className="hidden md:flex">-</div>
                  <div className=""> {item.stage} </div>
                  <div className="flex gap-x-4">
                    {item.icons?.map((icon, itemIndex) => {
                      return <div className="text-2xl ">{icon}</div>;
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
