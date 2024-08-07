import { Link } from "react-router-dom";

function ServicesBody() {
  return (
    <div className="grid resume gap-y-10 tablet:gap-16 grid-cols-12">
      <div className="text-white col-start-2 col-span-10 lg:col-span-5 lg:col-start-2 h-auto tablet:mt-7 bg-zinc-950 p-5 rounded-lg">
        <div className="font-audio text-lg tablet:text-3xl flex justify-center">
          Web Development
          <Link
            to="/MyWorks"
            className="rounded-full flex justify-center items-center ml-2 tablet:ml-4 tablet:mt-1 tablet:scale-125 bg-red w-7 h-7"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="14px"
              viewBox="0 -960 960 960"
              width="14px"
              fill="#e8eaed"
            >
              <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" />
            </svg>
          </Link>
        </div>
        <div className="text-xs tablet:text-lg text-justify mt-1">
          My expertise in ReactJS allows me to build dynamic and efficient
          single-page applications, while my knowledge of NodeJS and ExpressJS
          equips me to develop robust backend services. I am proficient in using
          frameworks and libraries like Bootstrap and Tailwind CSS to create
          responsive and visually appealing layouts. Additionally, I have
          experience with MongoDB, which enables me to design and manage
          scalable databases, ensuring the seamless integration of frontend and
          backend systems. This comprehensive skill set allows me to create
          full-stack web applications that are both functional and
          user-friendly.
        </div>
      </div>
      <div className="text-white col-start-2 col-span-10 lg:col-span-5 h-auto bg-zinc-950 p-5 rounded-lg">
        <div className="font-audio text-lg tablet:text-3xl flex justify-center">
          UI Designing
          <Link
            to="/MyWorks"
            className="rounded-full flex justify-center items-center ml-2 tablet:ml-4 tablet:mt-1 tablet:scale-125 bg-red w-7 h-7"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="14px"
              viewBox="0 -960 960 960"
              width="14px"
              fill="#e8eaed"
            >
              <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" />
            </svg>
          </Link>
        </div>
        <div className="text-xs tablet:text-lg text-justify mt-1">
          With the help of tools like Figma and my strong foundation in HTML and
          CSS I am able to craft intuitive and aesthetically pleasing
          interfaces. I use design frameworks such as Bootstrap and Tailwind CSS
          to ensure that my designs are not only visually appealing but also
          responsive and accessible across various devices and screen sizes. My
          design process involves a deep understanding of user needs and
          behaviors, enabling me to create interfaces that are both user-centric
          and effective in meeting business objectives.
        </div>
      </div>
      <div className="text-white col-start-2 col-span-10 lg:col-span-5 lg:col-start-2 h-auto bg-zinc-950 p-5 rounded-lg">
        <div className="font-audio text-lg tablet:text-3xl flex justify-center">
          3D-Modelling
          <Link
            to="/MyWorks"
            className="rounded-full flex justify-center items-center ml-2 tablet:ml-4 tablet:mt-1 tablet:scale-125 bg-red w-7 h-7"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="14px"
              viewBox="0 -960 960 960"
              width="14px"
              fill="#e8eaed"
            >
              <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" />
            </svg>
          </Link>
        </div>
        <div className="text-xs tablet:text-lg text-justify mt-1">
          My 3D modeling skills are centered around my proficiency with Blender,
          where I specialize in environment modelling and excel at
          polymodelling. My expertise in polymodelling enables me to construct
          complex and intricate models with precision and efficiency. Whether
          it's designing landscapes or any architectural structures, I am adept
          at bringing creative visions to life through meticulous and thoughtful
          3D modelling.Since I enjoy making more and more 3D models, it grew on
          me more like a hobby. This skill set allows me to contribute
          significantly to projects that require high-quality and visually
          compelling 3D assets.
        </div>
      </div>
      <div className="text-white col-start-2 col-span-10 lg:col-span-5 h-auto bg-zinc-950 mb-10 p-5 tablet:p-9 rounded-lg">
        <div className="font-audio text-lg tablet:text-3xl flex gap-2 justify-center animate-pulse items-center h-full">
          Learning More...
        </div>
      </div>
    </div>
  );
}

export default ServicesBody;
