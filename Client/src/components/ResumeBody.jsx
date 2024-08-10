import React, { useState } from "react";
import "../styles/resume.css";

function ResumeBody() {
  const [selectedSection, setSelectedSection] = useState("Experience");

  return (
    <div className="text-white tablet:mt-8 grid grid-cols-12">
      <div className="col-span-10 col-start-2">
        <div className="font-audio text-lg tablet:text-3xl laptop:text-4xl flex justify-center">
          Why hire me?
        </div>
        <div className="col-span-10 flex flex-col mt-5 rounded-md items-center gap-2 tablet:gap-5 text-center py-5 col-start-2">
          <button
            onClick={() => setSelectedSection("Experience")}
            className={`rounded-md py-1 bg-zinc-950 w-4/5 tablet:w-3/5 tablet:text-2xl tablet:py-2 ${
              selectedSection === "Experience" ? "scale-125 border-red" : ""
            }`}
          >
            Experience
          </button>
          <button
            onClick={() => setSelectedSection("Education")}
            className={`rounded-md py-1 bg-zinc-950 w-4/5 tablet:w-3/5 tablet:text-2xl tablet:py-2 ${
              selectedSection === "Education" ? "scale-125 border-red" : ""
            }`}
          >
            Education
          </button>
          <button
            onClick={() => setSelectedSection("Skills")}
            className={`rounded-md py-1 bg-zinc-950 w-4/5 tablet:w-3/5 tablet:text-2xl tablet:py-2 ${
              selectedSection === "Skills" ? "scale-125 border-red" : ""
            }`}
          >
            Skills
          </button>
          <button
            onClick={() => setSelectedSection("About me")}
            className={`rounded-md py-1 bg-zinc-950 w-4/5 tablet:w-3/5 tablet:text-2xl tablet:py-2 ${
              selectedSection === "About me" ? "scale-125 border-red" : ""
            }`}
          >
            About me
          </button>
        </div>
        <div className="mt-1 mb-2 p-8 rounded-md">
          {/* Experience portion of the resume page */}

          {selectedSection === "Experience" && (
            <div className="tablet:flex tablet:flex-col tablet:items-center">
              <div className="font-audio text-center text-lg tablet:text-3xl tablet:w-full laptop:text-4xl border-x-2">
                Experience
              </div>
              <div className="mt-10 bg-zinc-950 shadowsLg p-5 rounded-md flex flex-col gap-2 tablet:gap-1 tablet:w-3/5 laptop:w-3/6 laptop:p-7 laptop:mt-14 items-center">
                <div className="text-red laptop:text-lg">05/2024 - Present</div>
                <div className="font-bold text-lg tablet:text-2xl laptop:text-3xl">
                  Freelancer
                </div>
                <div>
                  <ul className="list-disc text-xs tablet:text-base laptop:text-lg list-inside">
                    <li>E-Commerce Platform</li>
                    <li>Designed a Blog</li>
                    <li>Designed a coding site</li>
                  </ul>
                </div>
              </div>
              <div className="mt-10 bg-zinc-950 shadowsLg p-5 rounded-md flex flex-col gap-2 tablet:gap-1 tablet:w-3/5 laptop:w-3/6 laptop:p-7 items-center">
                <div className="text-red laptop:text-lg">03/2024 - 05/2024</div>
                <div className="font-bold text-center text-lg tablet:text-2xl laptop:text-3xl">
                  Full stack Internship(Django)
                </div>
                <div className="text-center text-xs tablet:text-base laptop:text-lg">
                  At Business Web Solutions(BWS)
                </div>
              </div>
              <div className="mt-10 bg-zinc-950 shadowsLg p-5 rounded-md flex flex-col gap-2 tablet:gap-1 tablet:w-3/5 laptop:w-3/6 laptop:p-7 items-center">
                <div className="text-red laptop:text-lg">01/2024 - 02/2024</div>
                <div className="font-bold text-center text-lg tablet:text-2xl laptop:text-3xl">
                  Full stack Internship(MERN)
                </div>
                <div className="text-center text-xs tablet:text-base laptop:text-lg">
                  At Synnefo Solutions
                </div>
              </div>
              <div className="mt-10 bg-zinc-950 shadowsLg p-5 rounded-md flex flex-col gap-2 tablet:gap-1 tablet:w-3/5 laptop:w-3/6 laptop:p-7 items-center">
                <div className="text-red laptop:text-lg">12/2021 - 01/2022</div>
                <div className="font-bold text-center text-lg tablet:text-2xl laptop:text-3xl">
                  Internship in Embedded System & IoT
                </div>
                <div className="text-center text-xs tablet:text-base laptop:text-lg">
                  At Centre for Skill Enhancement & Employability
                  Development(CSEED){" "}
                </div>
              </div>
            </div>
          )}

          {/* Education portion of the resume page */}

          {selectedSection === "Education" && (
            <div className="tablet:flex tablet:flex-col tablet:items-center">
              <div className="font-audio text-center text-lg tablet:text-3xl tablet:w-full laptop:text-4xl border-x-2">
                Education
              </div>
              <div className="mt-10 bg-zinc-950 shadowsLg p-5 rounded-md flex flex-col gap-2 tablet:gap-1 tablet:w-3/5 laptop:w-3/6 laptop:p-7 laptop:mt-14 items-center">
                <div className="text-red laptop:text-lg">08/2023 - 01/2024</div>
                <div className="font-bold text-center tablet:text-2xl text-lg laptop:text-3xl">
                  Full Stack Web Development(MERN)
                </div>
                <div className="text-center text-xs tablet:text-base laptop:text-lg">
                  At Synnefo Solutions
                </div>
              </div>
              <div className="mt-10 bg-zinc-950 shadowsLg p-5 rounded-md flex flex-col gap-2 tablet:gap-1 tablet:w-3/5 laptop:w-3/6 laptop:p-7 items-center">
                <div className="text-red laptop:text-lg">11/2023 - 01/2024</div>
                <div className="font-bold text-center tablet:text-2xl text-lg laptop:text-3xl">
                  Web Development Bootcamp 2024
                </div>
                <div className="text-center text-xs tablet:text-base laptop:text-lg">
                  At Udemy Online Platform
                </div>
              </div>
              <div className="mt-10 bg-zinc-950 shadowsLg p-5 rounded-md flex flex-col gap-2 tablet:gap-1 tablet:w-3/5 laptop:w-3/6 laptop:p-7 items-center">
                <div className="text-red laptop:text-lg">08/2019 - 07/2023</div>
                <div className="font-bold text-center tablet:text-2xl text-lg laptop:text-3xl">
                  B.tech in EEE
                </div>
                <div className="text-center text-xs tablet:text-base laptop:text-lg">
                  At Vidya Academy of Science & Technology
                </div>
              </div>
              <div className="mt-10 bg-zinc-950 shadowsLg p-5 rounded-md flex flex-col gap-2 tablet:gap-1 tablet:w-3/5 laptop:w-3/6 laptop:p-7 items-center">
                <div className="text-red laptop:text-lg">04/2021 - 06/2021</div>
                <div className="font-bold text-center tablet:text-2xl text-lg laptop:text-3xl">
                  Python For Everybody(Basics)
                </div>
                <div className="text-center text-xs tablet:text-base laptop:text-lg">
                  At Coursera Online Platform
                </div>
              </div>
            </div>
          )}

          {/* Skill portion of the resume page */}

          {selectedSection === "Skills" && (
            <div className="tablet:flex tablet:flex-col tablet:items-center">
              <div className="font-audio text-center text-lg tablet:text-3xl tablet:w-full laptop:text-4xl border-x-2">
                Skills
              </div>
              <div className="grid mt-10 grid-cols-2 tablet:grid-cols-3 laptop:mt-14 gap-4">
                <div className="flex flex-col p-5 laptop:p-7 rounded-md shadows items-center bg-zinc-950">
                  <div className="text-lg laptop:text-2xl font-audio">HTML</div>
                </div>
                <div className="flex flex-col p-5 laptop:p-7 rounded-md shadows items-center bg-zinc-950">
                  <div className="text-lg laptop:text-2xl font-audio">CSS</div>
                </div>
                <div className="flex flex-col p-5 laptop:p-7 rounded-md shadows items-center bg-zinc-950">
                  <div className="text-lg laptop:text-2xl font-audio">
                    Javascript
                  </div>
                </div>
                <div className="flex flex-col p-5 laptop:p-7 rounded-md shadows items-center bg-zinc-950">
                  <div className="text-lg laptop:text-2xl font-audio">
                    Bootstrap
                  </div>
                </div>
                <div className="flex flex-col p-5 laptop:p-7 rounded-md shadows items-center bg-zinc-950">
                  <div className="text-lg laptop:text-2xl font-audio">
                    Tailwind
                  </div>
                </div>
                <div className="flex flex-col p-5 laptop:p-7 rounded-md shadows items-center bg-zinc-950">
                  <div className="text-lg laptop:text-2xl font-audio">
                    JQuery
                  </div>
                </div>
                <div className="flex flex-col p-5 laptop:p-7 rounded-md shadows items-center bg-zinc-950">
                  <div className="text-lg laptop:text-2xl font-audio">
                    ReactJs
                  </div>
                </div>
                <div className="flex flex-col p-5 laptop:p-7 rounded-md shadows items-center bg-zinc-950">
                  <div className="text-lg laptop:text-2xl font-audio">
                    NodeJs
                  </div>
                </div>
                <div className="flex flex-col p-5 laptop:p-7 rounded-md shadows items-center bg-zinc-950">
                  <div className="text-lg laptop:text-2xl font-audio">
                    ExpressJs
                  </div>
                </div>
                <div className="flex flex-col p-5 laptop:p-7 rounded-md shadows items-center bg-zinc-950">
                  <div className="text-lg laptop:text-2xl font-audio">
                    MongoDB
                  </div>
                </div>
                <div className="flex flex-col p-5 laptop:p-7 rounded-md shadows items-center bg-zinc-950">
                  <div className="text-lg laptop:text-2xl font-audio">
                    Blender
                  </div>
                </div>
                <div className="flex flex-col p-5 rounded-md shadows items-center bg-zinc-950">
                  <div className="text-lg laptop:text-2xl font-audio">
                    Figma
                  </div>
                </div>
                <div className="flex flex-col p-5 rounded-md shadows items-center bg-zinc-950">
                  <div className="text-lg laptop:text-2xl font-audio">
                    Framer
                  </div>
                </div>
                <div className="flex flex-col p-5 rounded-md shadows items-center bg-zinc-950">
                  <div className="text-lg laptop:text-2xl font-audio">+</div>
                </div>
              </div>
              <div className="flex flex-col tablet:text-xl tablet:w-5/6 laptop:w-4/6 laptop:mt-14 laptop:text-2xl laptop:gap-4 justify-center gap-2 items-center p-3 mt-10 rounded-md">
                <div className="italic font-light">
                  "Anyone who stops learning is old, whether at twenty or
                  eighty. Anyone who keeps learning stays young"
                </div>
                <div className="w-full flex font-semibold justify-end">
                  -Henry Ford
                </div>
              </div>
            </div>
          )}
          {selectedSection === "About me" && (
            <div className="tablet:flex tablet:flex-col tablet:items-center">
              <div className="font-audio text-center text-lg tablet:text-3xl tablet:w-full laptop:text-4xl border-x-2">
                About me
              </div>
              <div className="break-words text-sm tablet:text-lg laptop:text-2xl text-center mt-10 tablet:mt-14">
                A curious developer constantly exploring new technologies on the
                internet, eager to apply my skills to benefit others.
              </div>
              <div className="mt-10 tablet:mt-14 flex flex-col p-5 tablet:p-14 shadowsLg gap-1 break-words rounded-md">
                <div className="text-gray-500 font-audio text-sm tablet:text-lg">
                  Name:
                </div>
                <div className="text-base tablet:text-2xl font-audio">
                  Yedhukrishna K S
                </div>
                <div className="text-gray-500 font-audio text-sm tablet:text-lg">
                  Phone:
                </div>
                <div className="text-base tablet:text-2xl font-audio">
                  (+91)8592803244
                </div>
                <div className="text-gray-500 font-audio text-sm tablet:text-lg">
                  Experience
                </div>
                <div className="text-base tablet:text-2xl font-audio">
                  1 Year
                </div>
                <div className="text-gray-500 font-audio text-sm tablet:text-lg">
                  Email
                </div>
                <div className="text-base tablet:text-2xl font-audio">
                  yedhukrishnagk@gmail.com
                </div>
                <div className="text-gray-500 font-audio text-sm tablet:text-lg">
                  Nationality
                </div>
                <div className="text-base tablet:text-2xl font-audio">
                  India
                </div>
                <div className="text-gray-500 font-audio text-sm tablet:text-lg">
                  Freelance
                </div>
                <div className="text-base tablet:text-2xl font-audio">
                  Available
                </div>
                <div className="text-gray-500 font-audio text-sm tablet:text-lg">
                  Languages
                </div>
                <div className="text-base tablet:text-2xl font-audio">
                  English, Malayalam, Hindi, Tamil
                </div>
                <div className="text-gray-500 font-audio text-sm tablet:text-lg">
                  Interests
                </div>
                <div className="text-base tablet:text-2xl font-audio">
                  Coding, Designing
                </div>
                <div className="text-gray-500 font-audio text-sm tablet:text-lg">
                  Hobbies
                </div>
                <div className="text-base tablet:text-2xl font-audio">
                  Music, Reading, Gaming, TV
                </div>
              </div>
              <div className="grid grid-cols-3 mt-11">
                <img
                  className="col-start-2 tablet:h-32 laptop:h-28 rounded-full"
                  src="/music.jpg"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ResumeBody;
