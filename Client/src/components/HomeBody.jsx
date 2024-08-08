import "../styles/homebody.css";
import { Link } from "react-router-dom";

function HomeBody() {
  return (
    <div className="grid grid-cols-12 gap-y-7 tablet:gap-y-10 mt-2 tablet:mt-7 laptop:mt-1 text-white">
      <div className="bg-zinc-950 col-span-10 col-start-2 p-5 tablet:p-7 laptop:p-11 h-36 tablet:h-56 laptop:h-64 rounded-lg">
        <div className="text-3xl tablet:text-6xl laptop:text-7xl mb-3 tablet:mb-6 flex flex-col font-semibold">
          <div className="text-sm tablet:text-lg font-light">Hello! I'm</div>
          Yedhukrishna
        </div>
        <Link
          to="/MyWorks"
          className="font-audio text-sm tablet:text-2xl laptop:text-xl rounded-lg px-4 py-2 tablet:px-6 tablet:py-3"
          style={{ border: "2px solid red" }}
        >
          Explore
        </Link>
      </div>
      <Link
        to="/Services"
        className="col-start-3 col-span-8 laptop:col-start-4 laptop:col-span-6 p-5 tablet:p-6 laptop:p-7 text-lg tablet:text-3xl text-center tablet:text-right laptop:text-right overflow-hidden relative font-semibold"
      >
        <div className="absolute w-48 tablet:w-72 laptop:w-96 top-0 pt-2 serviceOne animate_scroll left-[100%]">
          WEB DEVELOPER
        </div>
        <div className="absolute w-48 tablet:w-72 laptop:ml-7 top-0 pt-2 serviceTwo animate_scroll left-[100%]">
          UI DESIGNER
        </div>
        <div className="absolute w-44 tablet:w-72 laptop:ml-6 top-0 pt-2 serviceThree animate_scroll left-[100%]">
          3D-MODELLIST
        </div>
      </Link>
      <div className="bg-zinc-950 col-span-10 col-start-2 p-5 tablet:p-8 laptop:p-12 laptop:mb-8 rounded-lg">
        <div className="font-audio tablet:text-3xl laptop:text-2xl tablet:mb-3 laptop:mb-0">
          About me
        </div>
        <div className="float-right">
          <img
            className="h-32 rounded-full tablet:h-40 laptop:h-44"
            src="./profile.jpg"
          />
        </div>
        <div className="text-xs tablet:text-lg laptop:text-lg text-justify mt-1">
          With a blend of skills in web developement , UI designing and also 3D
          modelling, I bring ideas to life across various mediums
          <br /> Love designing, coding, reading, listening to music and playing
          video games. With each project, I aim to push boundaries and surpass
          expectations. I thrive on challenges, seeing them as opportunities for
          growth and innovation. Collaborating with clients and fellow creatives
          fuels my passion, allowing me to continuously evolve and refine my
          craft.Thank you for visiting my corner of the internet. Whether you're
          here to explore my portfolio or discuss a potential collaboration, I
          look forward to connecting with you and bringing our shared visions to
          life. Let's create something extraordinary together!
        </div>
      </div>
    </div>
  );
}

export default HomeBody;
