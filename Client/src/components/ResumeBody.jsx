import React, { useState } from "react";
import "../styles/resume.css";

function ResumeBody() {
  const [selectedSection, setSelectedSection] = useState("Experience");

  return (
    <div className="text-white grid grid-cols-12">
      <div className="col-span-10 col-start-2">
        <div className="font-audio text-lg flex justify-center">
          Why hire me?
        </div>
        <div className="col-span-10 flex flex-col mt-5 rounded-md items-center gap-2 text-center py-5 col-start-2">
          <button
            onClick={() => setSelectedSection("Experience")}
            className={`rounded-md py-1 bg-zinc-950 w-4/5 ${
              selectedSection === "Experience" ? "scale-125 border-red" : ""
            }`}
          >
            Experience
          </button>
          <button
            onClick={() => setSelectedSection("Education")}
            className={`rounded-md py-1 bg-zinc-950 w-4/5 ${
              selectedSection === "Education" ? "scale-125 border-red" : ""
            }`}
          >
            Education
          </button>
          <button
            onClick={() => setSelectedSection("Skills")}
            className={`rounded-md py-1 bg-zinc-950 w-4/5 ${
              selectedSection === "Skills" ? "scale-125 border-red" : ""
            }`}
          >
            Skills
          </button>
          <button
            onClick={() => setSelectedSection("About me")}
            className={`rounded-md py-1 bg-zinc-950 w-4/5 ${
              selectedSection === "About me" ? "scale-125 border-red" : ""
            }`}
          >
            About me
          </button>
        </div>
        <div className="mt-1 mb-2 p-8 rounded-md">
          {/* Experience portion of the resume page */}

          {selectedSection === "Experience" && (
            <div>
              <div className="font-audio text-center text-lg border-x-2">
                Experience
              </div>
              <div className="mt-10 bg-zinc-950 shadowsLg p-5 rounded-md flex flex-col gap-2 items-center">
                <div className="text-red">05/2024 - Present</div>
                <div className="font-bold text-lg">Freelancer</div>
                <div className="text-center">
                  <ul className="list-disc text-xs list-inside">
                    <li>E-Commerce Platform</li>
                    <li>Designed a Blog(Figma)</li>
                    <li>Designed a site about coding(Figma)</li>
                  </ul>
                </div>
              </div>
              <div className="mt-10 bg-zinc-950 shadowsLg p-5 rounded-md flex flex-col gap-2 items-center">
                <div className="text-red">03/2024 - 05/2024</div>
                <div className="font-bold text-center text-lg">
                  Full stack Internship(Django)
                </div>
                <div className="text-center text-xs">
                  At Business Web Solutions(BWS)
                </div>
              </div>
              <div className="mt-10 bg-zinc-950 shadowsLg p-5 rounded-md flex flex-col gap-2 items-center">
                <div className="text-red">01/2024 - 02/2024</div>
                <div className="font-bold text-center text-lg">
                  Full stack Internship(MERN)
                </div>
                <div className="text-center text-xs">At Synnefo Solutions</div>
              </div>
              <div className="mt-10 bg-zinc-950 shadowsLg p-5 rounded-md flex flex-col gap-2 items-center">
                <div className="text-red">12/2021 - 01/2022</div>
                <div className="font-bold text-center text-lg">
                  Internship in Embedded System & IoT
                </div>
                <div className="text-center text-xs">
                  At Centre for Skill Enhancement & Employability
                  Development(CSEED){" "}
                </div>
              </div>
            </div>
          )}

          {/* Education portion of the resume page */}

          {selectedSection === "Education" && (
            <div>
              <div className="font-audio text-center text-lg border-x-2">
                Education
              </div>
              <div className="mt-10 bg-zinc-950 shadowsLg p-5 rounded-md flex flex-col gap-2 items-center">
                <div className="text-red">08/2023 - 01/2024</div>
                <div className="font-bold text-center text-lg">
                  Full Stack Web Development(MERN)
                </div>
                <div className="text-center">At Synnefo Solutions</div>
              </div>
              <div className="mt-10 bg-zinc-950 shadowsLg p-5 rounded-md flex flex-col gap-2 items-center">
                <div className="text-red">11/2023 - 01/2024</div>
                <div className="font-bold text-center text-lg">
                  Web Development Bootcamp 2024
                </div>
                <div className="text-center">At Udemy Online Platform</div>
              </div>
              <div className="mt-10 bg-zinc-950 shadowsLg p-5 rounded-md flex flex-col gap-2 items-center">
                <div className="text-red">08/2019 - 07/2023</div>
                <div className="font-bold text-center text-lg">
                  B.tech in EEE
                </div>
                <div className="text-center">
                  At Vidya Academy of Science & Technology
                </div>
              </div>
              <div className="mt-10 bg-zinc-950 shadowsLg p-5 rounded-md flex flex-col gap-2 items-center">
                <div className="text-red">04/2021 - 06/2021</div>
                <div className="font-bold text-center text-lg">
                  Python For Everybody
                </div>
                <div className="text-center">At Coursera Online Platform</div>
              </div>
            </div>
          )}

          {/* Skill portion of the resume page */}

          {selectedSection === "Skills" && (
            <div>
              <div className="font-audio text-center text-lg border-x-2">
                Skills
              </div>
              <div className="grid mt-10 grid-cols-2 gap-4">
                <div className="flex flex-col gap-3 p-5 rounded-md shadows items-center bg-zinc-950">
                  <div className="text-lg font-audio">HTML</div>
                </div>
                <div className="flex flex-col gap-1 p-5 rounded-md shadows items-center bg-zinc-950">
                  <div className="text-lg font-audio">CSS</div>
                </div>
                <div className="flex flex-col gap-3 p-5 rounded-md shadows items-center bg-zinc-950">
                  <div className="text-lg font-audio">Javascript</div>
                </div>
                <div className="flex flex-col gap-3 p-5 rounded-md shadows items-center bg-zinc-950">
                  <div className="text-lg font-audio">Bootstrap</div>
                </div>
                <div className="flex flex-col gap-3 p-5 rounded-md shadows items-center bg-zinc-950">
                  <div className="text-lg font-audio">Tailwind</div>
                </div>
                <div className="flex flex-col gap-3 p-5 rounded-md shadows items-center bg-zinc-950">
                  <div className="text-lg font-audio">JQuery</div>
                </div>
                <div className="flex flex-col gap-3 p-5 rounded-md shadows items-center bg-zinc-950">
                  <div className="text-lg font-audio">ReactJs</div>
                </div>
                <div className="flex flex-col gap-3 p-5 rounded-md shadows items-center bg-zinc-950">
                  <div className="text-lg font-audio">NodeJs</div>
                </div>
                <div className="flex flex-col gap-3 p-5 rounded-md shadows items-center bg-zinc-950">
                  <div className="text-lg font-audio">ExpressJs</div>
                </div>
                <div className="flex flex-col gap-3 p-5 rounded-md shadows items-center bg-zinc-950">
                  <div className="text-lg font-audio">MongoDB</div>
                </div>
                <div className="flex flex-col gap-3 p-5 rounded-md shadows items-center bg-zinc-950">
                  <div className="text-lg font-audio">Blender</div>
                </div>
                <div className="flex flex-col gap-3 p-5 rounded-md shadows items-center bg-zinc-950">
                  <div className="text-lg font-audio">Figma</div>
                </div>
                <div className="flex flex-col gap-3 p-5 rounded-md shadows items-center bg-zinc-950">
                  <div className="text-lg font-audio">Framer</div>
                </div>
                <div className="flex flex-col gap-3 p-5 rounded-md shadows items-center bg-zinc-950">
                  <div className="text-lg font-audio">+</div>
                </div>
              </div>
              <div className="flex flex-col text-md font-semibold justify-center gap-2 items-center p-3 mt-10 rounded-md">
                <div className="italic">
                  "Anyone who stops learning is old, whether at twenty or
                  eighty. Anyone who keeps learning stays young"
                </div>
                <div className="w-full flex justify-end">-Henry Ford</div>
              </div>
            </div>
          )}
          {selectedSection === "About me" && (
            <div>
              <div className="font-audio text-center text-lg border-x-2">
                About me
              </div>
              <div className="break-words mt-10">
                il8lfnrofhrorurufhruwjrnferxsccdcsaceefbtryjrrvfdgtethecdavswrrbtbt4whthgreahethdfggfhytryj
              </div>
              <div className="mt-10 rounded-md">
                <div className="text-gray-400 text-sm">Name:</div>
                <div className="text-lg font-audio">Yedhukrishna K S</div>
                <div className="text-gray-400 text-sm">Phone:</div>
                <div className="text-lg font-audio">(+91)8592803244</div>
                <div className="text-gray-400 text-sm">Experience</div>
                <div className="text-lg font-audio">1 Year</div>
                <div className="text-gray-400 text-sm">Email</div>
                <div className="text-lg font-audio">
                  yedhukrishnagk@gmail.com
                </div>
                <div className="text-gray-400 text-sm">Nationality</div>
                <div className="text-lg font-audio">India</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ResumeBody;
