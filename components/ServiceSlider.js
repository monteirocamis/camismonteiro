import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import {
  RxCrop,
  RxDesktop,
  RxPencil2,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";

import { FreeMode, Pagination } from "swiper";
import Link from "next/link";

const serviceData = [
  {
    icon: <RxDesktop />,
    title: "Development",
    description: "Customized Web development, Mobile aplications and  maintenance ",
    
  },
  {
    icon: <RxPencil2 />,
    title: "3D Modeler",
    description: "On demand services for personalized designs and on demand  on 3d printing",
  },
  {
    icon: <RxRocket />,
    title: "Instructor",
    description: "Online classes and speaker about web development and women in tech",
  }
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{ 
        clickable: true
       }}
      modules={[ FreeMode, Pagination ]}
      className="h-[240px] sm:h-[340px]"
    >
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="bg-[rgba(65,47,123,0.3)]  h-max rounded-lg px-6  py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300">
              <div className="text-4xl text-accent mb-4"> {item.icon} </div>
              <div className="mb-8">
                <div className="mb-2 text-lg"> {item.title} </div>
                <p className="max-w-[350px] leading-normal "> {item.description} </p>
              </div>
              <Link className="text-3xl"
              href="https://devcamis.vercel.app">
                <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300"
               />
              </Link>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
