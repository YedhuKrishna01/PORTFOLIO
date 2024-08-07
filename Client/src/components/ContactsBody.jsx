import React from "react";
import "../styles/contact.css";
import Swal from "sweetalert2";

function ContactsBody() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "b3be7271-244d-4768-9119-317927040ecb");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      const Toast = Swal.mixin({
        toast: true,
        position: "top-start",
        showConfirmButton: false,
        timer: 3500,

        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        },
      });
      Toast.fire({
        icon: "success",
        title: "Your message has been sent!",
      });
    }
  };

  return (
    <div className="grid outer grid-cols-12">
      <div className="col-start-2 col-span-10 flex flex-col justify-center items-center h-full text-center font-audio text-white mt-5">
        <div className="shadows rounded-md p-2">
          Would you like to contact/hire me?
        </div>
        <section className="flex shadowsLg mt-10 rounded-md w-full lg:w-3/5 h-auto p-7">
          <form
            onSubmit={onSubmit}
            className="flex flex-col text-left space-y-2 w-full"
          >
            <div className="">
              <label htmlFor="name">Name</label>
              <br />
              <input
                type="text"
                id="name"
                name="name"
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
                name="email"
                className="p-2 rounded-md mt-1  bg-zinc-900 font-mont text-sm placeholder:pl-1 placeholder:text-sm placeholder:font-mont w-full"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="input-box">
              <label htmlFor="message">Write your message</label>
              <br />
              <textarea
                id="message"
                name="message"
                className="p-2 rounded-md mt-1 h-[30vh] resize-none bg-zinc-900 text-sm font-mont placeholder:pl-1 placeholder:text-sm placeholder:font-mont w-full"
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
