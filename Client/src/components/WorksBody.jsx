import { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

function WorksBody() {
  const slides = [
    { url: "./upscale4.webp" },
    { url: "./upscale2.webp" },
    { url: "./upscale1.webp" },
    { url: "./upscale3.webp" },
  ];

  const [CurrentIndex, SetCurrentIndex] = useState(0);

  // Funcion to slide to the left

  const prevSlide = () => {
    const isFirstSlide = CurrentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : CurrentIndex - 1;
    SetCurrentIndex(newIndex);
  };

  // Funcion to slide to the left

  const nextSlide = () => {
    const isLastSlide = CurrentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : CurrentIndex + 1;
    SetCurrentIndex(newIndex);
  };

  return (
    <div>
      <div className="text-white text-lg font-audio">Developement</div>
      <div className="w-full h-56 py-4 px-1 relative">
        <div>
          <div
            style={{ backgroundImage: `url(${slides[CurrentIndex].url})` }}
            className="w-full h-56 rounded-2xl bg-center bg-cover duration-500"
          ></div>
        </div>
        <div>
          <BsChevronCompactLeft
            onClick={prevSlide}
            size={30}
            className="absolute top-[55%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 text-white cursor-pointer"
          />
        </div>
        <div>
          <BsChevronCompactRight
            onClick={nextSlide}
            size={30}
            className="absolute top-[55%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 text-white cursor-pointer"
          />
        </div>
      </div>
      <div className="flex top-4 justify-center py-2">
        {slides.map((slides, slideIndex) => (
          <div>
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
}

export default WorksBody;
