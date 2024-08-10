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
      <div className="col-start-2 col-span-10 flex flex-col justify-center items-center h-full text-center font-audio tablet:text-3xl laptop:text-4xl text-white mt-5">
        <div>Would you like to contact/hire me?</div>
        <section className="flex shadowsLg mt-10 rounded-md w-full tablet:w-5/6 laptop:w-8/12 desktop:w-6/12 laptop:p-14 tablet:mt-14 h-auto p-7">
          <form
            onSubmit={onSubmit}
            className="flex flex-col text-left space-y-2 tablet:space-y-6 desktop:space-y-3 w-full"
          >
            <div>
              <label
                className="tablet:text-2xl laptop:text-3xl desktop:text-xl"
                htmlFor="name"
              >
                Name
              </label>
              <br />
              <input
                type="text"
                id="name"
                name="name"
                className="p-2 rounded-md mt-1 bg-zinc-900 font-mont text-sm tablet:text-xl laptop:text-2xl placeholder:pl-1 placeholder:text-sm placeholder:font-mont tablet:placeholder:text-lg laptop:placeholder:text-2xl tablet:mt-3 laptop:mt-5 desktop:mt-2 desktop:placeholder:text-xl desktop:text-xl w-full"
                placeholder="Enter your name"
                required
              />
            </div>
            <div>
              <label
                className="tablet:text-2xl laptop:text-3xl desktop:text-xl"
                htmlFor="email"
              >
                Email
              </label>
              <br />
              <input
                type="email"
                id="email"
                name="email"
                className="p-2 rounded-md mt-1  bg-zinc-900 font-mont text-sm tablet:text-xl laptop:text-2xl placeholder:pl-1 placeholder:text-sm placeholder:font-mont tablet:placeholder:text-lg laptop:placeholder:text-2xl tablet:mt-3 laptop:mt-5 desktop:mt-2 desktop:placeholder:text-xl desktop:text-xl w-full"
                placeholder="Enter your email"
                required
              />
            </div>
            <div>
              <label
                className="tablet:text-2xl laptop:text-3xl desktop:text-xl"
                htmlFor="message"
              >
                Write your message
              </label>
              <br />
              <textarea
                id="message"
                name="message"
                className="p-2 rounded-md mt-1 h-[30vh] resize-none bg-zinc-900 text-sm tablet:text-xl laptop:text-2xl font-mont placeholder:pl-1 placeholder:text-sm placeholder:font-mont tablet:placeholder:text-lg laptop:placeholder:text-2xl tablet:mt-3 laptop:mt-5 desktop:mt-2 desktop:placeholder:text-xl desktop:text-xl w-full"
                placeholder="Enter your message"
                required
              ></textarea>
              <br />
              <button
                type="submit"
                className="mt-5 cursor-pointer tablet:text-2xl desktop:text-xl w-full bg-red text-white rounded-md  py-2 px-4"
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
