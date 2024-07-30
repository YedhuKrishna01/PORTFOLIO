import React from "react";

function ResumeBody() {
  return (
    <div className="text-white grid grid-cols-12">
      <div className="col-span-10 col-start-2">
        <div className="font-audio text-lg flex justify-center">
          Why hire me?
        </div>
        <div className="col-span-10 flex flex-col mt-5 rounded-md items-center gap-2 text-center py-5 col-start-2">
          <button className="rounded-md py-1 bg-zinc-950 focus:border-[1px] focus:scale-125 focus:border-red w-4/5">
            Experience
          </button>
          <button className="rounded-md py-1 bg-zinc-950 focus:border-[1px] focus:scale-125 focus:border-red w-4/5">
            Education
          </button>
          <button className="rounded-md py-1 bg-zinc-950 focus:border-[1px] focus:scale-125 focus:border-red w-4/5">
            Skills
          </button>
          <button className="rounded-md py-1 bg-zinc-950 focus:border-[1px] focus:scale-125 focus:border-red w-4/5">
            About me
          </button>
        </div>
        <div className="mt-10 h-96 bg-red overflow-scroll rounded-md"></div>
      </div>
    </div>
  );
}

export default ResumeBody;
