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
        <div className="mt-1 p-8 h-96 overflow-scroll rounded-md">
          {/* Experience portion of the resume page */}

          {selectedSection === "Experience" && (
            <div>
              <div className="font-audio text-center text-lg border-x-2">
                Experience
              </div>
              <div className="mt-10 bg-zinc-950 p-5 rounded-md flex flex-col gap-2 items-center">
                <div className="text-red">05/2024 - Present</div>
                <div className="font-bold text-lg">Freelancer</div>
                <div className="text-center">
                  <ul className="list-disc list-inside">
                    <li>E-Commerce Platform</li>
                    <li>Designed a Blog(Figma)</li>
                    <li>Designed a site about coding(Figma)</li>
                  </ul>
                </div>
              </div>
              <div className="mt-10 bg-zinc-950 p-5 rounded-md flex flex-col gap-2 items-center">
                <div className="text-red">03/2024 - 05/2024</div>
                <div className="font-bold text-center text-lg">
                  Full stack Internship(Django)
                </div>
                <div className="text-center text-xs">
                  At Business Web Solutions(BWS)
                </div>
              </div>
              <div className="mt-10 bg-zinc-950 p-5 rounded-md flex flex-col gap-2 items-center">
                <div className="text-red">08/2023 - 02/2024</div>
                <div className="font-bold text-center text-lg">
                  Full Stack Internship(MERN)
                </div>
                <div className="text-center text-xs">At Synnefo Solutions</div>
              </div>
            </div>
          )}

          {/* Education portion of the resume page */}

          {selectedSection === "Education" && (
            <div>
              <div className="font-audio text-center text-lg border-x-2">
                Education
              </div>
              <div className="mt-10 bg-zinc-950 p-5 rounded-md flex flex-col gap-2 items-center">
                <div className="text-red">05/2024 - Present</div>
                <div className="font-bold text-lg">Freelancer</div>
                <div className="text-center">
                  <ul className="list-disc list-inside">
                    <li>E-Commerce Platform</li>
                    <li>Designed a Blog(Figma)</li>
                    <li>Designed a site about coding(Figma)</li>
                  </ul>
                </div>
              </div>
              <div className="mt-10 bg-zinc-950 p-5 rounded-md flex flex-col gap-2 items-center">
                <div className="text-red">03/2024 - 05/2024</div>
                <div className="font-bold text-center text-lg">
                  Full stack Internship(Django)
                </div>
                <div className="text-center text-xs">
                  At Business Web Solutions(BWS)
                </div>
              </div>
              <div className="mt-10 bg-zinc-950 p-5 rounded-md flex flex-col gap-2 items-center">
                <div className="text-red">08/2023 - 02/2024</div>
                <div className="font-bold text-center text-lg">
                  Full Stack Internship(MERN)
                </div>
                <div className="text-center text-xs">At Synnefo Solutions</div>
              </div>
            </div>
          )}
          {selectedSection === "Skills" && <div>skill</div>}
          {selectedSection === "About me" && <div>about me</div>}
        </div>
      </div>
    </div>
  );
}

export default ResumeBody;
