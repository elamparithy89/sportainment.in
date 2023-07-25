import React from "react";


// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "../styles.css"
import "./logos.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const Logoimages = [
  "images/client-logos/Akshaya-logo.jpg",
  "images/client-logos/cashier.jpg",
  "images/client-logos/Cric Aus logo.png",
  "images/client-logos/Crizal.jpg",
  "images/client-logos/Dhanalakshmi.jpg",
  "images/client-logos/Godrej.jpg",
  "images/client-logos/Gulf_logo.jpg",
  "images/client-logos/hero logo.jpg",
  "images/client-logos/kf.jpg",
  "images/client-logos/KF1.jpg",
  "images/client-logos/Khadim's.jpg",
  "images/client-logos/Kingfisherlogo.jpg",
  "images/client-logos/Mansion House.jpg",
  "images/client-logos/MKTG.png",
  "images/client-logos/moov.jpg",
  "images/client-logos/Officer's choice blue logo.png",
  "images/client-logos/Picture1.jpg",
  "images/client-logos/rajasthan-royals-logo-png.png",
  "images/client-logos/Rising_Pune_Supergiants.jpg",
  "images/client-logos/SAT sports.jpg",
  "images/client-logos/Tata motors.jpg",
  "images/client-logos/TI_India.jpg",
  "images/client-logos/videocon D2H logo.jpg",
  "images/client-logos/Vpayqwik logo.png",
  "images/client-logos/shriram-group-logo.jpg",
  "images/client-logos/sknp logotype.png",
];


export default function Logoshowcase() {


      
  return (
    <>
    
    <section id="clients" className="client-logo-area text-center pt-5">

    <div className="container p-5">
    <div className="row">
                    <div className="col-md-12">
                        <div className="site-heading text-center">
                            <h2>Our - <span>Clients</span></h2>
                        </div>
                    </div>
                </div>
      <Swiper
      autoplay={{
        delay: 1000,
        disableOnInteraction: false,
      }}
      speed={5000}
      loop={false}
      
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        breakpoints={{
          320: {
            slidesPerView: 3,
            spaceBetween: 5,
          },
          480: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
            640: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        
        {Logoimages.map((img, i) => {
          return (
            <SwiperSlide key={i}>
              <img src={img} alt="" />
            </SwiperSlide>
          );
        })}
      </Swiper>
      </div>
      </section>
    </>
  );
}
