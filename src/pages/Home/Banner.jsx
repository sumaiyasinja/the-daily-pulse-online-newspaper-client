import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css";
// import 'swiper/css/pagination';
import "swiper/css/autoplay";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import "../../css/sweeper.css";
import useApprovedArticles from "../../hooks/useApprovedArticles";

const Banner = () => {
  const [articles] = useApprovedArticles();

  // Step 1: Sort articles based on views in descending order
  const sortedArticles = articles.sort((a, b) => b.views - a.views);

  // Step 2: Take the top six articles or all available articles if there are fewer than six
  const topSixArticles = sortedArticles.slice(
    0,
    Math.min(sortedArticles.length, 6)
  );

  // Now 'topSixArticles' contains the top six viewed articles or all available articles if less than six

  return (
    <div className="">
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
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        <h2 className="text-3xl font-bold text-center py-3">Trending News</h2>
        <div className="flex justify-center items-center">
          {topSixArticles?.map((article) => (
            <SwiperSlide key={article._id} className="custom-slide">
              <div className="relative  max-w-xl mx-auto mt-20">
                <img
                  className=" w-full object-cover rounded-md"
                  src={article?.image}
                />
                <div className="absolute inset-0 bg-gray-700 opacity-60 rounded-md"></div>
                <div className="absolute inset-0 flex items-center flex-col justify-center">
                  <h2 className="text-white text-2xl font-bold">
                    {article?.title}
                  </h2>
                  <div>
                    <a
                      href={`/view-deatials/${article?._id}`}
                      aria-label=""
                      className="inline-flex hover:bg-slate-950 text-slate-200 items-center font-semibold tracking-wider transition-colors duration-200 text-teal-accent-400 hover:text-teal-accent-700"
                    >
                      Read more
                      <svg
                        className="inline-block w-3 ml-2"
                        fill="currentColor"
                        viewBox="0 0 12 12"
                      >
                        <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              {/* <div className="relative">
                <img
                  src={article?.image}
                  className="absolute inset-0 object-cover w-full h-full"
                  alt=""
                />
                  <h2 className="absoulte max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                    {article?.title}
                  </h2>
                <div>
                  <a
                    href={`/view-deatials/${article?._id}`}
                    aria-label=""
                    className="inline-flex text-white items-center font-semibold tracking-wider transition-colors duration-200 text-teal-accent-400 hover:text-teal-accent-700"
                  >
                    Read more
                    <svg
                      className="inline-block w-3 ml-2"
                      fill="currentColor"
                      viewBox="0 0 12 12"
                    >
                      <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                    </svg>
                  </a>
                </div>
              </div> */}
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};

export default Banner;
