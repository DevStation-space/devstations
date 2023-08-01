import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y,Autoplay } from "swiper/modules";
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
const CommunityPartners = () => {
  const communityData = [
    {
      id: 1,
      name: "BlockChained India",
      logo: " /assets/img/community_partners/blockchained.png",
    },
    {
      id: 2,
      name: "Bubble Up",
      logo: " /assets/img/community_partners/bubbleup.png",
    },
    {
      id: 3,
      name: "Central DAO",
      logo: " /assets/img/community_partners/centraldao.png",
    },
    {
      id: 4,
      name: "Geeky Hub",
      logo: " /assets/img/community_partners/geekyhub.png",
    },
    {
      id: 5,
      name: "Code Set Go",
      logo: " /assets/img/community_partners/csg.png",
    },
    {
      id: 6,
      name: "Ver Station",
      logo: " /assets/img/community_partners/verstation.png",
    },
    {
      id: 7,
      name: "Optimizer overview",
      logo: " /assets/img/community_partners/optimizeroverview.png",
    },
    {
      id: 8,
      name: "PY Pro",
      logo: " /assets/img/community_partners/pypro.png",
    },
    {
      id: 9,
      name: "LUMOS",
      logo: " /assets/img/community_partners/lumos.png",
    },
    {
      id: 10,
      name: "CODEDU",
      logo: " /assets/img/community_partners/codedu.png",
    },
  ];

  return (
    <div>
      <div>
        <h3 className="mb-8 text-center text-3xl">OUR COMMUNITY PARTNERS</h3>
      </div>
      <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={ 3}
      navigation
      pagination={{ clickable: true, el: '.swiper-pagination', }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      Autoplay={{delay: 2500, disableOnInteraction: false,}}
      className=" blueGlassmorphism"
      loop={true}

    >
      {communityData.map((community) => (
        <SwiperSlide key={community.id}>
          <div className="flex justify-center items-center ">
            <img
              src={community.logo}
              alt={community.name}
              className="md:h-24 h-10 w-auto px-5 md:py-3 py-0.5 object-contain"
            />
            
          </div>
        </SwiperSlide>
      ))}
     
    </Swiper>
    </div>
    
  );
};

export default CommunityPartners;
