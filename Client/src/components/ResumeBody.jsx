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
              <div className="mt-10 bg-zinc-950 p-5 rounded-md flex flex-col gap-2 items-center">
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
                <div className="text-red">01/2024 - 02/2024</div>
                <div className="font-bold text-center text-lg">
                  Full stack Internship(MERN)
                </div>
                <div className="text-center text-xs">At Synnefo Solutions</div>
              </div>
              <div className="mt-10 bg-zinc-950 p-5 rounded-md flex flex-col gap-2 items-center">
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
              <div className="mt-10 bg-zinc-950 p-5 rounded-md flex flex-col gap-2 items-center">
                <div className="text-red">08/2023 - 01/2024</div>
                <div className="font-bold text-center text-lg">
                  Full Stack Web Development(MERN)
                </div>
                <div className="text-center">At Synnefo Solutions</div>
              </div>
              <div className="mt-10 bg-zinc-950 p-5 rounded-md flex flex-col gap-2 items-center">
                <div className="text-red">08/2019 - 07/2023</div>
                <div className="font-bold text-center text-lg">
                  B.tech in EEE
                </div>
                <div className="text-center">
                  At Vidya Academy of Science & Technology
                </div>
              </div>
            </div>
          )}

          {/* Skill portion of the resume page */}

          {selectedSection === "Skills" && (
            <div>
              <div className="font-audio text-center text-lg border-x-2">
                Skills
              </div>
              <div className="grid mt-10 grid-cols-3 gap-4">
                <div className="flex flex-col gap-3 p-5 rounded-md border items-center bg-zinc-950">
                  <svg
                    viewBox="0 0 96 96"
                    fill="white"
                    height={30}
                    width={30}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title />
                    <g>
                      <path d="M24.8452,25.3957a6.0129,6.0129,0,0,0-8.4487.7617L1.3974,44.1563a5.9844,5.9844,0,0,0,0,7.687L16.3965,69.8422a5.9983,5.9983,0,1,0,9.21-7.687L13.8068,48l11.8-14.1554A6,6,0,0,0,24.8452,25.3957Z" />
                      <path d="M55.1714,12.1192A6.0558,6.0558,0,0,0,48.1172,16.83L36.1179,76.8262A5.9847,5.9847,0,0,0,40.8286,83.88a5.7059,5.7059,0,0,0,1.1835.1172A5.9949,5.9949,0,0,0,47.8828,79.17L59.8821,19.1735A5.9848,5.9848,0,0,0,55.1714,12.1192Z" />
                      <path d="M94.6026,44.1563,79.6035,26.1574a5.9983,5.9983,0,1,0-9.21,7.687L82.1932,48l-11.8,14.1554a5.9983,5.9983,0,1,0,9.21,7.687L94.6026,51.8433A5.9844,5.9844,0,0,0,94.6026,44.1563Z" />
                    </g>
                  </svg>
                  <div className="text-xs">HTML</div>
                </div>
                <div className="flex flex-col gap-3 p-5 rounded-md border items-center bg-zinc-950">
                  <svg
                    viewBox="0 0 96 96"
                    fill="white"
                    height={30}
                    width={30}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title />
                    <g>
                      <path d="M24.8452,25.3957a6.0129,6.0129,0,0,0-8.4487.7617L1.3974,44.1563a5.9844,5.9844,0,0,0,0,7.687L16.3965,69.8422a5.9983,5.9983,0,1,0,9.21-7.687L13.8068,48l11.8-14.1554A6,6,0,0,0,24.8452,25.3957Z" />
                      <path d="M55.1714,12.1192A6.0558,6.0558,0,0,0,48.1172,16.83L36.1179,76.8262A5.9847,5.9847,0,0,0,40.8286,83.88a5.7059,5.7059,0,0,0,1.1835.1172A5.9949,5.9949,0,0,0,47.8828,79.17L59.8821,19.1735A5.9848,5.9848,0,0,0,55.1714,12.1192Z" />
                      <path d="M94.6026,44.1563,79.6035,26.1574a5.9983,5.9983,0,1,0-9.21,7.687L82.1932,48l-11.8,14.1554a5.9983,5.9983,0,1,0,9.21,7.687L94.6026,51.8433A5.9844,5.9844,0,0,0,94.6026,44.1563Z" />
                    </g>
                  </svg>
                  <div className="text-xs">CSS</div>
                </div>
                <div className="flex flex-col gap-3 p-5 rounded-md border items-center bg-zinc-950">
                  <svg
                    viewBox="0 0 96 96"
                    fill="white"
                    height={30}
                    width={30}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title />
                    <g>
                      <path d="M24.8452,25.3957a6.0129,6.0129,0,0,0-8.4487.7617L1.3974,44.1563a5.9844,5.9844,0,0,0,0,7.687L16.3965,69.8422a5.9983,5.9983,0,1,0,9.21-7.687L13.8068,48l11.8-14.1554A6,6,0,0,0,24.8452,25.3957Z" />
                      <path d="M55.1714,12.1192A6.0558,6.0558,0,0,0,48.1172,16.83L36.1179,76.8262A5.9847,5.9847,0,0,0,40.8286,83.88a5.7059,5.7059,0,0,0,1.1835.1172A5.9949,5.9949,0,0,0,47.8828,79.17L59.8821,19.1735A5.9848,5.9848,0,0,0,55.1714,12.1192Z" />
                      <path d="M94.6026,44.1563,79.6035,26.1574a5.9983,5.9983,0,1,0-9.21,7.687L82.1932,48l-11.8,14.1554a5.9983,5.9983,0,1,0,9.21,7.687L94.6026,51.8433A5.9844,5.9844,0,0,0,94.6026,44.1563Z" />
                    </g>
                  </svg>
                  <div className="text-xs">Javascript</div>
                </div>
                <div className="flex flex-col gap-3 p-5 rounded-md border items-center bg-zinc-950">
                  <svg
                    viewBox="0 0 96 96"
                    fill="white"
                    height={30}
                    width={30}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title />
                    <g>
                      <path d="M24.8452,25.3957a6.0129,6.0129,0,0,0-8.4487.7617L1.3974,44.1563a5.9844,5.9844,0,0,0,0,7.687L16.3965,69.8422a5.9983,5.9983,0,1,0,9.21-7.687L13.8068,48l11.8-14.1554A6,6,0,0,0,24.8452,25.3957Z" />
                      <path d="M55.1714,12.1192A6.0558,6.0558,0,0,0,48.1172,16.83L36.1179,76.8262A5.9847,5.9847,0,0,0,40.8286,83.88a5.7059,5.7059,0,0,0,1.1835.1172A5.9949,5.9949,0,0,0,47.8828,79.17L59.8821,19.1735A5.9848,5.9848,0,0,0,55.1714,12.1192Z" />
                      <path d="M94.6026,44.1563,79.6035,26.1574a5.9983,5.9983,0,1,0-9.21,7.687L82.1932,48l-11.8,14.1554a5.9983,5.9983,0,1,0,9.21,7.687L94.6026,51.8433A5.9844,5.9844,0,0,0,94.6026,44.1563Z" />
                    </g>
                  </svg>
                  <div className="text-xs">Bootstrap</div>
                </div>
                <div className="flex flex-col gap-3 p-5 rounded-md border items-center bg-zinc-950">
                  <svg
                    viewBox="0 0 96 96"
                    fill="white"
                    height={30}
                    width={30}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title />
                    <g>
                      <path d="M24.8452,25.3957a6.0129,6.0129,0,0,0-8.4487.7617L1.3974,44.1563a5.9844,5.9844,0,0,0,0,7.687L16.3965,69.8422a5.9983,5.9983,0,1,0,9.21-7.687L13.8068,48l11.8-14.1554A6,6,0,0,0,24.8452,25.3957Z" />
                      <path d="M55.1714,12.1192A6.0558,6.0558,0,0,0,48.1172,16.83L36.1179,76.8262A5.9847,5.9847,0,0,0,40.8286,83.88a5.7059,5.7059,0,0,0,1.1835.1172A5.9949,5.9949,0,0,0,47.8828,79.17L59.8821,19.1735A5.9848,5.9848,0,0,0,55.1714,12.1192Z" />
                      <path d="M94.6026,44.1563,79.6035,26.1574a5.9983,5.9983,0,1,0-9.21,7.687L82.1932,48l-11.8,14.1554a5.9983,5.9983,0,1,0,9.21,7.687L94.6026,51.8433A5.9844,5.9844,0,0,0,94.6026,44.1563Z" />
                    </g>
                  </svg>
                  <div className="text-xs">Tailwind</div>
                </div>
                <div className="flex flex-col gap-3 p-5 rounded-md border items-center bg-zinc-950">
                  <svg
                    viewBox="0 0 96 96"
                    fill="white"
                    height={30}
                    width={30}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title />
                    <g>
                      <path d="M24.8452,25.3957a6.0129,6.0129,0,0,0-8.4487.7617L1.3974,44.1563a5.9844,5.9844,0,0,0,0,7.687L16.3965,69.8422a5.9983,5.9983,0,1,0,9.21-7.687L13.8068,48l11.8-14.1554A6,6,0,0,0,24.8452,25.3957Z" />
                      <path d="M55.1714,12.1192A6.0558,6.0558,0,0,0,48.1172,16.83L36.1179,76.8262A5.9847,5.9847,0,0,0,40.8286,83.88a5.7059,5.7059,0,0,0,1.1835.1172A5.9949,5.9949,0,0,0,47.8828,79.17L59.8821,19.1735A5.9848,5.9848,0,0,0,55.1714,12.1192Z" />
                      <path d="M94.6026,44.1563,79.6035,26.1574a5.9983,5.9983,0,1,0-9.21,7.687L82.1932,48l-11.8,14.1554a5.9983,5.9983,0,1,0,9.21,7.687L94.6026,51.8433A5.9844,5.9844,0,0,0,94.6026,44.1563Z" />
                    </g>
                  </svg>
                  <div className="text-xs">JQuery</div>
                </div>
                <div className="flex flex-col gap-3 p-5 rounded-md border items-center bg-zinc-950">
                  <svg
                    viewBox="0 0 96 96"
                    fill="white"
                    height={30}
                    width={30}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title />
                    <g>
                      <path d="M24.8452,25.3957a6.0129,6.0129,0,0,0-8.4487.7617L1.3974,44.1563a5.9844,5.9844,0,0,0,0,7.687L16.3965,69.8422a5.9983,5.9983,0,1,0,9.21-7.687L13.8068,48l11.8-14.1554A6,6,0,0,0,24.8452,25.3957Z" />
                      <path d="M55.1714,12.1192A6.0558,6.0558,0,0,0,48.1172,16.83L36.1179,76.8262A5.9847,5.9847,0,0,0,40.8286,83.88a5.7059,5.7059,0,0,0,1.1835.1172A5.9949,5.9949,0,0,0,47.8828,79.17L59.8821,19.1735A5.9848,5.9848,0,0,0,55.1714,12.1192Z" />
                      <path d="M94.6026,44.1563,79.6035,26.1574a5.9983,5.9983,0,1,0-9.21,7.687L82.1932,48l-11.8,14.1554a5.9983,5.9983,0,1,0,9.21,7.687L94.6026,51.8433A5.9844,5.9844,0,0,0,94.6026,44.1563Z" />
                    </g>
                  </svg>
                  <div className="text-xs">ReactJs</div>
                </div>
                <div className="flex flex-col gap-3 p-5 rounded-md border items-center bg-zinc-950">
                  <svg
                    viewBox="0 0 96 96"
                    fill="white"
                    height={30}
                    width={30}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title />
                    <g>
                      <path d="M24.8452,25.3957a6.0129,6.0129,0,0,0-8.4487.7617L1.3974,44.1563a5.9844,5.9844,0,0,0,0,7.687L16.3965,69.8422a5.9983,5.9983,0,1,0,9.21-7.687L13.8068,48l11.8-14.1554A6,6,0,0,0,24.8452,25.3957Z" />
                      <path d="M55.1714,12.1192A6.0558,6.0558,0,0,0,48.1172,16.83L36.1179,76.8262A5.9847,5.9847,0,0,0,40.8286,83.88a5.7059,5.7059,0,0,0,1.1835.1172A5.9949,5.9949,0,0,0,47.8828,79.17L59.8821,19.1735A5.9848,5.9848,0,0,0,55.1714,12.1192Z" />
                      <path d="M94.6026,44.1563,79.6035,26.1574a5.9983,5.9983,0,1,0-9.21,7.687L82.1932,48l-11.8,14.1554a5.9983,5.9983,0,1,0,9.21,7.687L94.6026,51.8433A5.9844,5.9844,0,0,0,94.6026,44.1563Z" />
                    </g>
                  </svg>
                  <div className="text-xs">NodeJs</div>
                </div>
                <div className="flex flex-col gap-3 p-5 rounded-md border items-center bg-zinc-950">
                  <svg
                    viewBox="0 0 96 96"
                    fill="white"
                    height={30}
                    width={30}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title />
                    <g>
                      <path d="M24.8452,25.3957a6.0129,6.0129,0,0,0-8.4487.7617L1.3974,44.1563a5.9844,5.9844,0,0,0,0,7.687L16.3965,69.8422a5.9983,5.9983,0,1,0,9.21-7.687L13.8068,48l11.8-14.1554A6,6,0,0,0,24.8452,25.3957Z" />
                      <path d="M55.1714,12.1192A6.0558,6.0558,0,0,0,48.1172,16.83L36.1179,76.8262A5.9847,5.9847,0,0,0,40.8286,83.88a5.7059,5.7059,0,0,0,1.1835.1172A5.9949,5.9949,0,0,0,47.8828,79.17L59.8821,19.1735A5.9848,5.9848,0,0,0,55.1714,12.1192Z" />
                      <path d="M94.6026,44.1563,79.6035,26.1574a5.9983,5.9983,0,1,0-9.21,7.687L82.1932,48l-11.8,14.1554a5.9983,5.9983,0,1,0,9.21,7.687L94.6026,51.8433A5.9844,5.9844,0,0,0,94.6026,44.1563Z" />
                    </g>
                  </svg>
                  <div className="text-xs">ExpressJs</div>
                </div>
                <div className="flex flex-col gap-3 p-5 rounded-md border items-center bg-zinc-950">
                  <svg
                    viewBox="0 0 96 96"
                    fill="white"
                    height={30}
                    width={30}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title />
                    <g>
                      <path d="M24.8452,25.3957a6.0129,6.0129,0,0,0-8.4487.7617L1.3974,44.1563a5.9844,5.9844,0,0,0,0,7.687L16.3965,69.8422a5.9983,5.9983,0,1,0,9.21-7.687L13.8068,48l11.8-14.1554A6,6,0,0,0,24.8452,25.3957Z" />
                      <path d="M55.1714,12.1192A6.0558,6.0558,0,0,0,48.1172,16.83L36.1179,76.8262A5.9847,5.9847,0,0,0,40.8286,83.88a5.7059,5.7059,0,0,0,1.1835.1172A5.9949,5.9949,0,0,0,47.8828,79.17L59.8821,19.1735A5.9848,5.9848,0,0,0,55.1714,12.1192Z" />
                      <path d="M94.6026,44.1563,79.6035,26.1574a5.9983,5.9983,0,1,0-9.21,7.687L82.1932,48l-11.8,14.1554a5.9983,5.9983,0,1,0,9.21,7.687L94.6026,51.8433A5.9844,5.9844,0,0,0,94.6026,44.1563Z" />
                    </g>
                  </svg>
                  <div className="text-xs">MongoDB</div>
                </div>
                <div className="flex flex-col gap-3 p-5 rounded-md border items-center bg-zinc-950">
                  <svg
                    viewBox="0 0 96 96"
                    fill="white"
                    height={30}
                    width={30}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title />
                    <g>
                      <path d="M24.8452,25.3957a6.0129,6.0129,0,0,0-8.4487.7617L1.3974,44.1563a5.9844,5.9844,0,0,0,0,7.687L16.3965,69.8422a5.9983,5.9983,0,1,0,9.21-7.687L13.8068,48l11.8-14.1554A6,6,0,0,0,24.8452,25.3957Z" />
                      <path d="M55.1714,12.1192A6.0558,6.0558,0,0,0,48.1172,16.83L36.1179,76.8262A5.9847,5.9847,0,0,0,40.8286,83.88a5.7059,5.7059,0,0,0,1.1835.1172A5.9949,5.9949,0,0,0,47.8828,79.17L59.8821,19.1735A5.9848,5.9848,0,0,0,55.1714,12.1192Z" />
                      <path d="M94.6026,44.1563,79.6035,26.1574a5.9983,5.9983,0,1,0-9.21,7.687L82.1932,48l-11.8,14.1554a5.9983,5.9983,0,1,0,9.21,7.687L94.6026,51.8433A5.9844,5.9844,0,0,0,94.6026,44.1563Z" />
                    </g>
                  </svg>
                  <div className="text-xs">Blender</div>
                </div>
                <div className="flex flex-col gap-3 p-5 rounded-md border items-center bg-zinc-950">
                  <svg
                    viewBox="0 0 96 96"
                    fill="white"
                    height={30}
                    width={30}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title />
                    <g>
                      <path d="M24.8452,25.3957a6.0129,6.0129,0,0,0-8.4487.7617L1.3974,44.1563a5.9844,5.9844,0,0,0,0,7.687L16.3965,69.8422a5.9983,5.9983,0,1,0,9.21-7.687L13.8068,48l11.8-14.1554A6,6,0,0,0,24.8452,25.3957Z" />
                      <path d="M55.1714,12.1192A6.0558,6.0558,0,0,0,48.1172,16.83L36.1179,76.8262A5.9847,5.9847,0,0,0,40.8286,83.88a5.7059,5.7059,0,0,0,1.1835.1172A5.9949,5.9949,0,0,0,47.8828,79.17L59.8821,19.1735A5.9848,5.9848,0,0,0,55.1714,12.1192Z" />
                      <path d="M94.6026,44.1563,79.6035,26.1574a5.9983,5.9983,0,1,0-9.21,7.687L82.1932,48l-11.8,14.1554a5.9983,5.9983,0,1,0,9.21,7.687L94.6026,51.8433A5.9844,5.9844,0,0,0,94.6026,44.1563Z" />
                    </g>
                  </svg>
                  <div className="text-xs">Figma</div>
                </div>
                <div className="flex flex-col gap-3 p-5 rounded-md border items-center bg-zinc-950">
                  <svg
                    viewBox="0 0 96 96"
                    fill="white"
                    height={30}
                    width={30}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title />
                    <g>
                      <path d="M24.8452,25.3957a6.0129,6.0129,0,0,0-8.4487.7617L1.3974,44.1563a5.9844,5.9844,0,0,0,0,7.687L16.3965,69.8422a5.9983,5.9983,0,1,0,9.21-7.687L13.8068,48l11.8-14.1554A6,6,0,0,0,24.8452,25.3957Z" />
                      <path d="M55.1714,12.1192A6.0558,6.0558,0,0,0,48.1172,16.83L36.1179,76.8262A5.9847,5.9847,0,0,0,40.8286,83.88a5.7059,5.7059,0,0,0,1.1835.1172A5.9949,5.9949,0,0,0,47.8828,79.17L59.8821,19.1735A5.9848,5.9848,0,0,0,55.1714,12.1192Z" />
                      <path d="M94.6026,44.1563,79.6035,26.1574a5.9983,5.9983,0,1,0-9.21,7.687L82.1932,48l-11.8,14.1554a5.9983,5.9983,0,1,0,9.21,7.687L94.6026,51.8433A5.9844,5.9844,0,0,0,94.6026,44.1563Z" />
                    </g>
                  </svg>
                  <div className="text-xs">Framer</div>
                </div>
                <div className="flex flex-col gap-3 p-5 rounded-md border items-center bg-zinc-950">
                  <svg
                    viewBox="0 0 96 96"
                    fill="white"
                    height={30}
                    width={30}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title />
                    <g>
                      <path d="M24.8452,25.3957a6.0129,6.0129,0,0,0-8.4487.7617L1.3974,44.1563a5.9844,5.9844,0,0,0,0,7.687L16.3965,69.8422a5.9983,5.9983,0,1,0,9.21-7.687L13.8068,48l11.8-14.1554A6,6,0,0,0,24.8452,25.3957Z" />
                      <path d="M55.1714,12.1192A6.0558,6.0558,0,0,0,48.1172,16.83L36.1179,76.8262A5.9847,5.9847,0,0,0,40.8286,83.88a5.7059,5.7059,0,0,0,1.1835.1172A5.9949,5.9949,0,0,0,47.8828,79.17L59.8821,19.1735A5.9848,5.9848,0,0,0,55.1714,12.1192Z" />
                      <path d="M94.6026,44.1563,79.6035,26.1574a5.9983,5.9983,0,1,0-9.21,7.687L82.1932,48l-11.8,14.1554a5.9983,5.9983,0,1,0,9.21,7.687L94.6026,51.8433A5.9844,5.9844,0,0,0,94.6026,44.1563Z" />
                    </g>
                  </svg>
                  <div className="text-xs">+</div>
                </div>
              </div>
            </div>
          )}
          {selectedSection === "About me" && <div>about me</div>}
        </div>
      </div>
    </div>
  );
}

export default ResumeBody;
