import { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

function WorksDevop() {
  const slides = [{ url: "./upscale4.webp" }];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to slide to the left
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  // Function to slide to the right
  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="grid grid-cols-12 mt-7">
      <div className="text-white col-start-2 col-span-10 text-lg font-audio">
        Development Projects
      </div>
      <div className="col-start-2 col-span-10 w-full h-48 py-4 px-1 relative">
        <img
          className="w-full h-44 rounded-lg duration-500"
          src={`${slides[currentIndex].url}`}
        />
        <BsChevronCompactLeft
          onClick={prevSlide}
          size={30}
          className="absolute top-[45%] left-5 text-2xl rounded-full p-2 text-gray-400 cursor-pointer"
        />
        <BsChevronCompactRight
          onClick={nextSlide}
          size={30}
          className="absolute top-[45%] right-5 text-2xl rounded-full p-2 text-gray-400 cursor-pointer"
        />
      </div>
      <div className="col-start-2 col-span-10 flex m-5 justify-center">
        {slides.map((_, slideIndex) => (
          <RxDotFilled
            key={slideIndex}
            className={`border-2 scale-50 rounded-full border-white cursor-pointer ${
              currentIndex === slideIndex ? "text-white" : "text-black"
            }`}
            onClick={() => setCurrentIndex(slideIndex)}
          />
        ))}
      </div>
    </div>
  );
}

export default WorksDevop;
