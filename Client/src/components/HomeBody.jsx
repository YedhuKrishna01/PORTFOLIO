import "../styles/homebody.css";
import { Link } from "react-router-dom";

function HomeBody() {
  return (
    <div className="grid grid-cols-12 gap-y-7 tablet:gap-y-10 mt-3 text-white">
      <div className="bg-zinc-950 col-span-10 col-start-2 p-5 tablet:p-7 h-44 tablet:h-60 rounded-lg">
        <div className="text-3xl tablet:text-5xl mb-6 tablet:mb-9 flex flex-col font-bold">
          Hello! I'm Yedhukrishna
        </div>
        <Link
          to="/MyWorks"
          className="font-audio text-lg tablet:text-2xl rounded-lg px-4 py-2 tablet:px-6 tablet:py-3"
          style={{ border: "2px solid red" }}
        >
          Explore
        </Link>
      </div>
      <Link
        to="/Services"
        className="col-start-3 col-span-8 p-5 tablet:p-6 text-lg tablet:text-3xl text-center overflow-hidden relative font-semibold"
      >
        <div className="absolute w-48 tablet:w-72 top-0 pt-2 serviceOne animate_scroll left-[100%]">
          WEB DEVELOPER
        </div>
        <div className="absolute w-48 tablet:w-72 top-0 pt-2 serviceTwo animate_scroll left-[100%]">
          UI DESIGNER
        </div>
        <div className="absolute w-44 tablet:w-72 top-0 pt-2 serviceThree animate_scroll left-[100%]">
          3D-MODELLIST
        </div>
      </Link>
      <div className="bg-zinc-950 col-span-10 col-start-2 p-5 rounded-lg">
        <div className="font-audio tablet:text-2xl">About me</div>
        <div className="float-right">
          <img className="h-32 rounded-full tablet:h-40" src="./profile.jpg" />
        </div>
        <div className="text-xs tablet:text-lg text-justify mt-1">
          With a blend of skills in web development, UI designing, and 3D
          modelling, I bring ideas to life across various mediums. Love
          designing, coding, reading, listening to music and playing video
          games. With each project, I aim to push boundaries and surpass
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
