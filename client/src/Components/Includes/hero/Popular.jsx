// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Pagination } from "swiper";
import { AiTwotoneStar } from "react-icons/ai";

export default function App() {
  return (
    <div className="py-3 px-8 container mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 my-4" >Popular professional deliverers</h2>
      <Swiper
        slidesPerView={
            window.innerWidth > 768 ? 4 : window.innerWidth > 640 ? 2 : 1
        }
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="container mx-auto h-80 "
      >
        <SwiperSlide  >
            <div className="mx-auto h-full bg-red-400 rounded-lg " >
                <div className="text-xl fixed  font-bold text-gray-50 pl-2 pt-3">
                    <p>Said Ahmed </p> 
                    <span className="flex mt-1  text-yellow-300">
                        <AiTwotoneStar size={20}  />
                        <AiTwotoneStar size={20}  />
                        <AiTwotoneStar size={20}  />
                        <AiTwotoneStar size={20}  />
                        <AiTwotoneStar size={20}  />
                    </span>
                </div>
                <img src="./images/deliveryguy.jpg" className="w-full h-full rounded-lg" alt="" />
            </div>
        </SwiperSlide>
        <SwiperSlide >
            <div className="mx-auto h-full bg-green-400 rounded-lg">
            <div className="text-xl fixed  font-bold text-gray-50 pl-2 pt-3">
                    <p>Said Ahmed </p> 
                    <span className="flex mt-1  text-yellow-50">
                        <AiTwotoneStar size={20}  />
                        <AiTwotoneStar size={20}  />
                        <AiTwotoneStar size={20}  />
                        <AiTwotoneStar size={20}  />
                        <AiTwotoneStar size={20}  />
                    </span>
                </div>                <img src="./images/deliveryguy2.jpg" className="w-full h-full rounded-lg" alt="" />
            </div>
        </SwiperSlide>
        <SwiperSlide  >
            <div className="mx-auto h-full bg-gray-400 rounded-lg">
            <div className="text-xl fixed  font-bold text-gray-50 pl-2 pt-3">
                    <p>Said Ahmed </p> 
                    <span className="flex mt-1  text-yellow-300">
                        <AiTwotoneStar size={20}  />
                        <AiTwotoneStar size={20}  />
                        <AiTwotoneStar size={20}  />
                        <AiTwotoneStar size={20}  />
                        <AiTwotoneStar size={20}  />
                    </span>
                </div>                
                <img src="./images/deliveryguy3.jpg" className="w-full h-full rounded-lg" alt="" />
            </div>
        </SwiperSlide>
        <SwiperSlide >
            <div className="mx-auto h-full bg-green-400 rounded-lg">
            <div className="text-xl fixed  font-bold text-gray-50 pl-2 pt-3">
                    <p>Said Ahmed </p> 
                    <span className="flex mt-1  text-yellow-50">
                        <AiTwotoneStar size={20}  />
                        <AiTwotoneStar size={20}  />
                        <AiTwotoneStar size={20}  />
                        <AiTwotoneStar size={20}  />
                        <AiTwotoneStar size={20}  />
                    </span>
                </div>
                <img src="./images/deliveryguy2.jpg" className="w-full h-full rounded-lg" alt="" />
            </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
