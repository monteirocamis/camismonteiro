import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import Link from "next/link";
import { BsArrowRight } from "react-icons";
import Image from "next/image";

export const workSlidesItems = {
  slides: [
    {
      images: [
        {
          title: "Orion",
          path: "/orion.png",
          link: "https://www.grupoorion.com.br"
        },
        {
          title: "Carib Farm",
          path: "/carib.png",
          link: "https://carib.farm"
        },
        {
          title: "Whatslabe",
          path: "/whatslabe.png",
          link: "https://whatslabe.vercel.app"
        },
        {
          title: "Store",
          path: "/visie.png",
          link: "storevisie.vercel.app"
        },
      ],
    },
    {
      images: [
        {
          title: "Multiform",
          path: "/form1.png",
          link: "https://didactic-plantation.surge.sh/" ,
        },
        {
          title: "Game Baloon",
          path: "/gamebaloon.png",
          link: ""
        },
        // {
          //   title: "Openframeworks",
          //   path: "/openframeworks.png",
        //   link: ""
        // },
        // {
        //   title: "3d models",
        //   path: "/3dmodels.png",
        //   link: ""
        // },
      ],
    },
  ],
};

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      
      pagination={{
        clickable: true,
      }}
      modules={Pagination}
      className="h-[280px] sm:h-[480px]"
    >
      {workSlidesItems.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
              {slide.images.map((image, index) => {
                return (
                  <div className="relative rounded-lg overflow-hidden flex items-center justify-center group " key={index}>
                    <div className="flex items-center justify-center relative overflow-hidden group">
                      <Image
                        src={image.path}
                        width={500}
                        height={300}
                        alt="images from websites and apps"
                      />
                      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#4a22bd]  to-[#e838cc] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                      <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-x-20 transition-all duration-300">
                        <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                          <div className="delay-100"> LIVE </div>
                          <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">

                            PROJECT
                          </div>
                          <div className=" translate-y-[500px] group-hover:translate-y-0 transition-all duration-300 delay-200">
                            {/* <BsArrowRight /> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
