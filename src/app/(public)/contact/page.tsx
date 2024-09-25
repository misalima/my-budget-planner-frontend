"use client"
import Image from "next/image";
import React from "react";
import { useForm } from "react-hook-form";

type ContactFormInputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const ContactPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormInputs>();

  const onSubmit = (data: ContactFormInputs) => {
    console.log(data);
  };

  return (
    <main className="flex flex-col lg:flex-row justify-center items-center gap-10 mt-4 px-4 lg:px-20">
      {/* Contact Form */}
      <div className="flex flex-col gap-8 px-4 lg:px-8 w-full lg:min-w-[400px] lg:max-w-[600px]">
        <h1 className="text-3xl lg:text-4xl leading-none font-medium text-blue">
          Contact Us
        </h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4 w-full"
        >
          {/* Name Field */}
          <div>
            <label
              className="block text-lg font-medium text-blue mb-1"
              htmlFor="name"
            >
              Your Name
            </label>
            <input
              id="name"
              type="text"
              {...register("name", { required: "Name is required" })}
              className={`w-full p-2 border rounded-lg ${
                errors.name ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Enter your name"
            />
            {errors.name && (
              <span className="text-red-500 text-sm">
                {errors.name.message}
              </span>
            )}
          </div>

          {/* Email Field */}
          <div>
            <label
              className="block text-lg font-medium text-blue mb-1"
              htmlFor="email"
            >
              Your Email
            </label>
            <input
              id="email"
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                  message: "Enter a valid email address",
                },
              })}
              className={`w-full p-2 border rounded-lg ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Enter your email"
            />
            {errors.email && (
              <span className="text-red-500 text-sm">
                {errors.email.message}
              </span>
            )}
          </div>

          {/* Subject Field */}
          <div>
            <label
              className="block text-lg font-medium text-blue mb-1"
              htmlFor="subject"
            >
              Subject
            </label>
            <input
              id="subject"
              type="text"
              {...register("subject", { required: "Subject is required" })}
              className={`w-full p-2 border rounded-lg ${
                errors.subject ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Enter subject"
            />
            {errors.subject && (
              <span className="text-red-500 text-sm">
                {errors.subject.message}
              </span>
            )}
          </div>

          {/* Message Field */}
          <div>
            <label
              className="block text-lg font-medium text-blue mb-1"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              {...register("message", { required: "Message is required" })}
              className={`w-full p-2 border rounded-lg ${
                errors.message ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Enter your message"
            />
            {errors.message && (
              <span className="text-red-500 text-sm">
                {errors.message.message}
              </span>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="transition-all text-lg font-medium text-white bg-blue px-8 py-2 rounded-lg hover:bg-darkblue"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Image Section */}
      <div className="w-full lg:max-w-none lg:w-auto lg:flex items-center">
        <Image
          className="w-full max-h-[600px] lg:max-h-[400px]"
          alt="contact-art"
          src={"/images/contact.png"}
          width={750}
          height={360}
        />
      </div>
    </main>
  );
};

export default ContactPage;
