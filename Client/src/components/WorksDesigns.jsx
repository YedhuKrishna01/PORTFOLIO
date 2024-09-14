import { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import "../styles/work.css";

function WorksDesigns() {
  const slides = [
    { url: "./codeit.jpg", name: "Online Code Editor" },
    { url: "./knowit.jpeg", name: "Knowledge Sharing Platform" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  // Function to toggle modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="grid grid-cols-12 mt-7">
      <div className="text-white col-start-2 col-span-10 laptop:col-start-3 laptop:col-span-8 tv:col-start-4 tv:col-span-6 text-lg tablet:text-3xl tablet:pl-8 laptop:text-4xl desktop:text-2xl font-audio">
        Web Designs
      </div>
      <div className="works col-span-12 tablet:col-start-2 tablet:col-span-10 laptop:col-start-3 laptop:col-span-8 tv:col-start-4 tv:col-span-6 h-auto py-4 px-8 relative">
        <img
          className="w-full h-44 phone:h-52 tablet:h-80 border-[0.5px] laptop:h-[22rem] desktop:h-[28rem] tv:h-[26rem] ltv:h-[30rem] slide rounded-lg laptop:rounded-2xl duration-500"
          src={`${slides[currentIndex].url}`}
          alt={slides[currentIndex].name}
        />
        <div className="text-center text-orange-400 mt-4 tablet:mt-5">
          <a
            href="#"
            onClick={openModal}
            className="font-semibold tablet:text-2xl laptop:text-3xl desktop:text-2xl underline underline-offset-2 cursor-pointer"
          >
            {slides[currentIndex].name}
          </a>
        </div>
        <BsChevronCompactLeft
          onClick={prevSlide}
          size={40}
          className="absolute top-[35%] laptop:top-[40%] left-8 text-2xl tablet:scale-150 rounded-full p-2 text-gray-400 cursor-pointer"
        />
        <BsChevronCompactRight
          onClick={nextSlide}
          size={40}
          className="absolute top-[35%] laptop:top-[40%] right-8 text-2xl tablet:scale-150 rounded-full p-2 text-gray-400 cursor-pointer"
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

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-50">
          <div className="relative flex justify-center">
            <img
              className="w-full h-full desktop:w-[90%] desktop:h-[90%]"
              src={slides[currentIndex].url}
              alt={slides[currentIndex].name}
            />
            <button
              onClick={closeModal}
              className="absolute top-0 right-0 text-2xl tablet:text-4xl laptop:text-5xl text-gray-400 pt-2 pr-6 tablet:pr-10 laptop:pt-6 desktop:pr-28 rounded-full"
            >
              x
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default WorksDesigns;
