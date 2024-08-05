import React from "react";

function ContactsBody() {
  return (
    <div className="grid grid-cols-12">
      <div className="col-start-2 col-span-10 flex flex-col justify-center items-center h-[60vh] text-center font-audio text-white mt-5">
        <div className="shadows rounded-md p-2">
          Would you like to contact/hire me?
        </div>
        <div className="grid mt-10 w-full grid-cols-2 gap-3">
          <img src="/gmail.svg" className="bg-zinc-950 text-white rounded-md" />
        </div>
      </div>
    </div>
  );
}

export default ContactsBody;
