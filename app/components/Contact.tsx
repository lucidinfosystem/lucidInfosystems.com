"use client";

import axios from "axios";
import { Fira_Code } from "next/font/google";
import Image from "next/image";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      setIsLoading(true);
      const response = await axios.post("/api/contact", formData);
      if (response) {
        toast.success("Thanks for reaching out! We’ll contact you soon.");
        setFormData({ name: "", email: "", phone: "", message: "" });
      }
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center my-20 p-4 md:px-16">
      <div className="w-full ">
        {/* Main container with border and rounded corners */}
        <div className="relative bg-white sm:rounded-4xl border-2 border-[#DFDFDF] shadow overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Left side - Form */}
            <div className="p-7 md:p-20 flex flex-col justify-center">
              <h1 className="text-2xl md:text-3xl font-bold text-black mb-8 leading-tight">
                Get in touch with us.
                <br />
                {"We're here to assist you."}
              </h1>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name field */}
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full h-10 px-4 py-3 bg-transparent text-black placeholder-gray-400 border border-[#DFDFDF] focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  required
                />

                {/* Email field */}
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full h-10 px-4 py-3 bg-transparent text-black placeholder-gray-400  border border-[#DFDFDF] focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  required
                />

                {/* Phone field */}
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full h-10 px-4 py-3 bg-transparent text-black placeholder-gray-400 border border-[#DFDFDF] focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                />

                {/* Message field */}
                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-4 py-3 bg-transparent text-black placeholder-gray-400 border border-[#DFDFDF] focus:outline-none focus:ring-2 focus:ring-blue-500 transition resize-none"
                  required
                />

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full py-3 bg-blue-600 text-white font-semibold  hover:bg-blue-700 transition duration-200"
                >
                  {isLoading ? "Sending.." : "Send"}
                </button>
              </form>
            </div>

            {/* Right side - Image and blue accent */}
            <div className="relative hidden lg:flex items-center justify-center bg-gradient-to-br from-blue-600 to-blue-700 p-8 md:p-12">
              <div className="absolute bg-white w-3/5 h-full top-0 bottom-0 left-0 right-0"></div>
              {/* Image container */}
              <div className="relative w-full h-full flex items-center justify-center">
                <div className="relative w-[80%] h-full rounded-xs overflow-hidden shadow-lg">
                  <Image
                    src="/contact.png"
                    alt="Location map with pins"
                    fill
                    className="object-cover h-full"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Blue accent corner - visible on desktop */}
          <div className="hidden lg:block absolute bottom-0 right-0 w-32 h-32 bg-blue-600 rounded-tl-3xl pointer-events-none" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
