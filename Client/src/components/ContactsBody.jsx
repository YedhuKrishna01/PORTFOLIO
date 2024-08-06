import React from "react";
import "../styles/contact.css";

function ContactsBody() {
  return (
    <div className="grid outer grid-cols-12">
      <div className="col-start-2 col-span-10 flex flex-col justify-center items-center h-full text-center font-audio text-white mt-5">
        <div className="shadows rounded-md p-2">
          Would you like to contact/hire me?
        </div>
        <section className="flex shadowsLg mt-10 rounded-md w-full lg:w-3/5 h-auto p-5">
          <form className="flex flex-col text-left space-y-2 w-full">
            <div className="">
              <label htmlFor="name">Name</label>
              <br />
              <input
                type="text"
                id="name"
                className="p-2 rounded-md mt-1 bg-zinc-900 font-mont text-sm placeholder:pl-1 placeholder:text-sm placeholder:font-mont w-full"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="input-box">
              <label htmlFor="email">Email</label>
              <br />
              <input
                type="email"
                id="email"
                className="p-2 rounded-md mt-1  bg-zinc-950 font-mont text-sm placeholder:pl-1 placeholder:text-sm placeholder:font-mont w-full"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="input-box">
              <label htmlFor="message">Write your message</label>
              <br />
              <textarea
                id="message"
                className="p-2 rounded-md mt-1 border-2 h-[30vh] resize-none bg-black text-sm font-mont placeholder:pl-1 placeholder:text-sm placeholder:font-mont w-full"
                placeholder="Enter your message"
                required
              ></textarea>
              <br />
              <button
                type="submit"
                className="mt-5 cursor-pointer w-full bg-red text-white rounded-md  py-2 px-4"
              >
                Send
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
}

export default ContactsBody;
