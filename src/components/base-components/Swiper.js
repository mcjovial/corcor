import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import swiperOne from "../../assets/auth/business-signup-one.png";
import swiperTwo from "../../assets/auth/sign-in-one.png";
import swiperThree from "../../assets/auth/Group.png";
// import "../../pages/tweaks.css";

const Slider = () => {
  const sliderData = [
    {
      image: swiperOne,
      title: "Quick Loan",
      context: `You can now apply for loans from the comfort of your homes
          with instant approval.`,
    },
    {
      image: swiperTwo,
      title: "Easy Check",
      context: `You can now apply for loans from the comfort of your homes
          with instant approval.`,
    },
    {
      image: swiperThree,
      title: "Super Secure",
      context: `You can now apply for loans from the comfort of your homes
          with instant approval.`,
    },
  ];
  return (
    <Carousel
      autoPlay={true}
      interval={3000}
      onSwipeMove={(swiper) => {
        setTimeout(() => {
          for (var i = 0; i < swiper.slides?.length; i++) {
            swiper.slides[i].childNodes[0].setAttribute(
              "data-swiper-parallax",
              0.75 * swiper.width
            );
          }
        });
      }}
      slidesPerView={1}
    >
      {sliderData.map((x, index) => (
        <div
          key={index}
          className="flex flex-col items-center px-6 mt-20 lg:w-2/5 slider-img"
        >
          <img alt="" src={x.image} />
          <div className="mb-5">
            <h2 className="my-5 text-2xl font-semibold text-center text-masto-brown-10">
              {x.title}
            </h2>
            <p className="mb-3 text-sm text-center text-masto-ash-10">
              {x.context}
            </p>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default Slider;
