import { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

function WorksDesigns() {
  const slides = [
    { url: "./knowit.jpeg" },
    { url: "./codeit.jpeg" },
    { url: "./blog.jpeg" },
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
    <div>
      <div className="text-white text-lg font-audio">UI-Designs</div>
      <div className="w-full h-56 py-4 px-1 relative">
        <img
          className="w-full h-52 rounded-2xl duration-500"
          src={`${slides[currentIndex].url}`}
        />
        <BsChevronCompactLeft
          onClick={prevSlide}
          size={30}
          className="absolute top-[55%] left-5 text-2xl rounded-full p-2 text-gray-400 cursor-pointer"
        />
        <BsChevronCompactRight
          onClick={nextSlide}
          size={30}
          className="absolute top-[55%] right-5 text-2xl rounded-full p-2 text-gray-400 cursor-pointer"
        />
      </div>
      <div className="flex top-4 justify-center py-2 mt-5">
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

export default WorksDesigns;
