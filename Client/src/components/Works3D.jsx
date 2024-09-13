import { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import "../styles/work.css";

function Works3D() {
  const slides = [
    { url: "./upscale4.webp", name: "Room Interior" },
    { url: "./upscale2.webp", name: "Study Room" },
    { url: "./upscale1.webp", name: "Sci-fi Lab" },
    { url: "./upscale3.webp", name: "Mechanical CPR" },
  ];

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
      <div className="text-white col-start-2 col-span-10 text-lg tablet:text-3xl tablet:pl-4 laptop:text-4xl font-audio">
        3D Works
      </div>
      <div className="works col-span-12 tablet:mt-3 h-auto py-4 px-8 relative">
        <img
          className="w-full h-44 tablet:h-80 border-[0.5px] laptop:h-[500px] desktop:h-[660px] slide rounded-lg laptop:rounded-2xl duration-500"
          src={`${slides[currentIndex].url}`}
          alt={slides[currentIndex].name}
        />
        <div className="text-center text-orange-500 mt-4">
          <a
            href={slides[currentIndex].site}
            target="_blank"
            className="font-semibold underline underline-offset-2"
          >
            {slides[currentIndex].name}
          </a>
        </div>
        <BsChevronCompactLeft
          onClick={prevSlide}
          size={30}
          className="absolute top-[36%] left-8 text-2xl tablet:scale-150 rounded-full p-2 text-gray-400 cursor-pointer"
        />
        <BsChevronCompactRight
          onClick={nextSlide}
          size={30}
          className="absolute top-[36%] right-8 text-2xl tablet:scale-150 rounded-full p-2 text-gray-400 cursor-pointer"
        />
      </div>
      <div className="col-start-2 col-span-10 flex mt-[-0.75rem] mb-5 justify-center">
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

export default Works3D;
