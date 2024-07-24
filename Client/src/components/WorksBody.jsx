import { useEffect, useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

function WorksBody() {
  const slides = [
    { url: "./upscale4.webp" },
    { url: "./upscale2.webp" },
    { url: "./upscale1.webp" },
    { url: "./upscale3.webp" },
  ];

  const [CurrentIndex, SetCurrentIndex] = useState(3);

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
            size={30}
            className="absolute top-[55%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 text-white cursor-pointer"
          />
        </div>
        <div>
          <BsChevronCompactRight
            size={30}
            className="absolute top-[55%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 text-white cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}

export default WorksBody;
