import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";


import emailjs from "@emailjs/browser";
import SocialLinks from "../components/SocialLinks";

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isValid },
  } = useForm();

  const delay = (d) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, d * 1000);
    });
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_x8hut4o", "template_rw6nx8f", form.current, {
        publicKey: "MKlmHK9s8eZZ-bfY0",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );

    reset();
  };

  return (
    <>
      <section
        className="relative bg-cover bg-fixed bg-[#151515] bg-center h-full md:max-h-full w-full overflow-x-hidden "
        id="contact"
      >
        <div className="absolute inset-0 opacity-55 items-center pointer-events-none"></div>
        <div className="relative z-10 md:max-w-4xl mx-auto text-center pt-24 pb-20 items-center max-w-2xl">
          <h1 className=" text-xl font-bold text-pink-700 mb-2">CONTACT</h1>
          <h1 className=" md:text-4xl text-2xl text-white font-bold">
            I'd love to hear from you.
          </h1>
        </div>
        <form
          ref={form}
          className=" p-2 md:w-96 w-72 mx-auto grid md:gap-12 gap-5 h-96 mb-32 text-white"
          onSubmit={sendEmail}
        >
          {isSubmitting && <p>Loading...</p>}
          <div className="border-b">
            {" "}
            <input
              type="text"
              className="grow bg-[#151515] focus:outline-none text-white"
              placeholder="name"
              {...register("from_name", {
                required: "from_name is required",
                minLength: {
                  value: 3,
                  message: "from_name must be at least 3 characters",
                },
                maxLength: {
                  value: 10,
                  message: "from_name must be at most 10 characters",
                },
              })}
            />
            {errors.from_name && (
              <span className="text-red-500">{errors.from_name.message}</span>
            )}
          </div>
          <div className="border-b">
            <input
              type="text"
              className="grow bg-[#151515] focus:outline-none"
              placeholder="Email"
              {...register("from_Email", {
                required: "from_Email is required",
                pattern: {
                  message: "Please enter a valid email address",
                },
              })}
            />

            {errors.from_Email && (
              <span className="text-red-500">{errors.from_Email.message}</span>
            )}
          </div>
          <div className="border-b">
            <input
              type="text"
              className="grow bg-[#151515] focus:outline-none"
              placeholder="Subject"
              {...register("Subject", {
                required: "Subject is required",
                maxLength: {
                  value: 20,
                  message: "Subject must be at most 20 characters",
                },
              })}
            />

            {errors.Subject && (
              <span className="text-red-500">{errors.Subject.message}</span>
            )}
          </div>
          <div className="border-b">
            <input
              type="text-area"
              className="grow bg-[#151515] focus:outline-none"
              placeholder="Message"
              {...register("message", {
                required: "message is required",
                maxLength: {
                  value: 150,
                  message: "message must be at most 150 characters",
                },
              })}
            />
            {errors.message && (
              <span className="text-red-500">{errors.message.message}</span>
            )}
          </div>
          <div className=" text-white flex justify-center  rounded w-60 md:w-96 m-auto bg-[#ff0077] shadow-xl shadow-pink-950 md:p-5 p-3">
            <button type="submit" disabled={!isValid || isSubmitting}>
              Submit
            </button>
          </div>
        </form>
        <div className="flex flex-col lg:flex-row items-center text-center justify-center lg:gap-56 gap-12 pb-14 bg-[#151515]">
          <div className="flex flex-col items-center text-center text-white w-full lg:w-[40%] h-52 pt-0 hover:scale-105 duration-700 ">
            <span className="text-5xl lg:pt-2">
              <IoLocationOutline />
            </span>
            <h1 className="text-[#ff0077] font-bold md:text-2xl text-lg mt-5">
              Where to find me
            </h1>
            <p className="mt-4 text-slate-400">
              Raj nagar, Indore, Madhya Pradesh
            </p>
          </div>
          <div className="flex flex-col items-center text-center text-white w-full lg:w-[40%] h-52 pt-0 hover:scale-105 duration-700 ">
            <span className="text-5xl">
              <MdOutlineEmail />
            </span>
            <h1 className="text-[#ff0077] font-bold md:text-2xl text-lg mt-5">
              Email me at
            </h1>
            <p className="mt-4 text-slate-400">
              <a
                href="mailto:sharmaraghu157@gmail.com"
                className="hover:underline"
              >
                sharmaraghu157@gmail.com
              </a>{" "}
              <br />
              <a
                href="mailto:sharmaveer157@gmail.com"
                className="hover:underline"
              >
                sharmaveer157@gmail.com
              </a>
              <br />
              <a
                href="mailto:raghuverrsharma@gmail.com"
                className="hover:underline"
              >
                raghuverrsharma@gmail.com
              </a>
            </p>
          </div>
          <div className="flex flex-col items-center text-center text-white w-full lg:w-[40%] h-52 pt-0 hover:scale-105 duration-700">
            <span className="text-5xl lg:pt-2">
              <IoCallOutline />
            </span>
            <h1 className="text-[#ff0077] font-bold md:text-2xl text-lg mt-5">
              Call me at
            </h1>
            <p className="mt-4 text-slate-400">
              {" "}
              <a
                href="tel:+919575136951"
                className="hover:underline text-slate-400 text-sm md:text-lg relative z-20"
              >
                +91 95751 36951
              </a>
            </p>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="mb-20 text-3xl ">
          <SocialLinks />
        </div>
      </section>
    </>
  );
};

export default Contact;
