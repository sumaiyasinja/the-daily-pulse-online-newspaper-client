import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css";
// import 'swiper/css/pagination';
import "swiper/css/autoplay";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import "../../css/sweeper.css";

const Banner = () => {
  

  return (
    <div className="">
      <h2 className="text-3xl font-bold text-center py-3">Trending News</h2>
      <Swiper
        slidesPerView={2}
        loop={true}
        centeredSlides={true}
        spaceBetween={-300}
        watchSlidesProgress={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        // pagination={{
        //   clickable: true,
        // }}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        <div className="flex justify-center items-center">
          <SwiperSlide className="custom-slide">
            <img
              src="https://www.livemint.com/lm-img/img/2023/11/12/600x338/BRITAIN-PALESTINIA_1699714834169_1699758783040.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="custom-slide">
            {/* <img src="https://i.ibb.co/G3vMwRG/sam.webp" alt="" /> */}
            <img
              src="https://media.licdn.com/dms/image/D4D12AQEOGyK-qKkTQw/article-cover_image-shrink_720_1280/0/1700663816278?e=2147483647&v=beta&t=OYla3bDhiYrlXuLieZJLxsRJQBE7yN3rhXu6wLmGgS4"
              alt=""
            />
          </SwiperSlide>

          <SwiperSlide className="custom-slide">
            <img
              src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_w_1200/lsci/db/PICTURES/CMS/371700/371745.jpg"
              alt=""
            />
            {/* <img src="https://hindi.insidesport.in/wp-content/uploads/2023/03/WhatsApp-Image-2023-03-24-at-19.34.33.webp?w=690" alt="" /> */}
          </SwiperSlide>
          <SwiperSlide className="custom-slide">
            {/* station */}
            <img
              src="https://www.tbsnews.net/sites/default/files/styles/infograph/public/images/2023/11/06/01_view_32_1_0.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="custom-slide">
            {/* ballon */}
            <img
              src="https://ghanaeducation.org/wp-content/uploads/2023/05/maxresdefault-3-1.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="custom-slide">
            {/* ballon */}
            <img src="https://i.ibb.co/stGNRZ5/Shakib-2311261111.jpg" alt="" />
          </SwiperSlide>
        </div>
      </Swiper>
    </div>
  );
};

export default Banner;
