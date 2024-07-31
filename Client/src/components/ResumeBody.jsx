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
        <div className="mt-10 p-8 h-96 overflow-scroll rounded-md">
          {selectedSection === "Experience" && (
            <div>
              <div className="font-audio text-center text-2xl">Experience</div>
              <div className="mt-2 bg-zinc-950 p-5 rounded-md flex flex-col gap-2 items-center">
                <div className="text-red">02/2024 - Present</div>
                <div className="font-bold text-lg">Freelancer</div>
                <div className="text-center">
                  Developed an E-commerce platform
                </div>
              </div>
            </div>
          )}
          {selectedSection === "Education" && <div>education</div>}
          {selectedSection === "Skills" && <div>skill</div>}
          {selectedSection === "About me" && <div>about me</div>}
        </div>
      </div>
    </div>
  );
}

export default ResumeBody;
