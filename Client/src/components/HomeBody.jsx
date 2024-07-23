import "../styles/homebody.css";
import { Link } from "react-router-dom";

function HomeBody() {
  return (
    <div className="grid grid-cols-12 gap-y-10 mt-3 text-white">
      <div className="bg-zinc-950 col-span-10 col-start-2 p-5 h-44 rounded-lg">
        <div className="text-3xl mb-6 flex flex-col font-bold">
          Hello! I'm Yedhukrishna
        </div>
        <Link
          to="/MyWorks"
          className="font-audio text-lg rounded-lg px-4 py-2"
          style={{ border: "2px solid red" }}
        >
          Explore
        </Link>
      </div>
      <Link
        to="/Services"
        className="col-start-3 col-span-8 p-5 text-lg text-center overflow-hidden relative font-semibold"
      >
        <div className="absolute w-44 top-0 pt-2 serviceOne animate_scroll left-[100%]">
          WEB DEVELOPER
        </div>
        <div className="absolute w-48 top-0 pt-2 serviceTwo animate_scroll left-[100%]">
          UI DESIGNER
        </div>
        <div className="absolute w-44 top-0 pt-2 serviceThree animate_scroll left-[100%]">
          3D-MODELLIST
        </div>
      </Link>
      <div className="bg-zinc-950 col-span-10 col-start-2 p-5 rounded-lg">
        <div className="font-audio">About me</div>
        <div className="float-right">
          <img className="h-24 rounded-full" src="./profile.jpg" />
        </div>
        <div className="text-xs mt-1">
          With a blend of skills in web development, UI designing, and 3D
          modelling, I bring ideas to life across various mediums.
          <br />
          Love designing, coding, reading, listening to music and playing video
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
