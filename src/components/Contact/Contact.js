import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const contactFormSubmitHandler = (event) => {
    event.preventDefault();
    event.target.reset();
    toast.info("You will recieve a reply email soon", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <section className="p-6 md:p-10 lg:p-16">
      <div className="mb-8 text-center w-full md:w-3/5 mx-auto">
        <h2 className="text-4xl font-semibold mb-3">
          Ask for New Recipe or Contact
        </h2>
        <p>
          Feel free to ask for a new recipe or any queary.Send your message with
          your email.I will reply you as soon as possible
        </p>
      </div>
      <form
        onSubmit={contactFormSubmitHandler}
        className="w-full md:w-3/5 mx-auto p-2 space-y-4"
      >
        <div className="form-control">
          <input
            type="email"
            name="email"
            placeholder="email"
            className="input input-bordered input-primary"
            required
          />
        </div>
        <div className="form-control">
          <textarea
            className="textarea textarea-bordered textarea-primary"
            placeholder="Your message"
          ></textarea>
        </div>

        <div className="form-control mt-6">
          <button type="submit" className="btn btn-primary">
            Send
          </button>
        </div>
      </form>
      <ToastContainer />
    </section>
  );
};

export default Contact;
