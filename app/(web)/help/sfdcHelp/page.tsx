"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";

export default function SfdcHelpPage() {
  const [formData, setFormData] = useState<any>({
    about: "",
    name: "",
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    company: "",
    description: "",
    comments: "",
    attachment: null,
    securityCode: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev: any) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev: any) => ({ ...prev, about: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setFormData((prev:any) => ({ ...prev, attachment: file }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <main className="min-h-screen my-20 bg-white">
      {/* Header Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-6 sm:py-8 border-b border-gray-200">
        <div className="max-w-4xl mx-auto flex items-center justify-center">
          <h1 className="text-2xl sm:text-3xl font-serif text-black italic">
            Sfdc Help
          </h1>
        </div>
      </section>

      {/* Form Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex justify-center ">
              <img
                src={
                  "https://www.salesforce.com/news/wp-content/uploads/sites/3/2021/05/Salesforce-logo.jpg"
                }
                width={200}
                height={200}
                className=" object-contain"
                alt="salesforce_logo"
              />
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-500 mb-4 text-balance">
              Make the most of your Salesforce Experience
            </h2>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* About Dropdown with shadcn Select */}
            <div>
              <label className="block text-sm font-semibold text-black mb-2">
                About <span className="text-red-500">*</span>
              </label>
              <Select value={formData.about} onValueChange={handleSelectChange}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="-Select About-" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="sfdc-question">
                    Salesforce Question
                  </SelectItem>
                  <SelectItem value="integration">Integration Help</SelectItem>
                  <SelectItem value="training">Training Request</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Name Field */}
            <div>
              <label className="block text-sm font-semibold text-black mb-2">
                Name:
              </label>
              <Input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg"
              />
            </div>

            {/* First Name and Last Name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-black mb-2">
                  First Name <span className="text-red-500">*</span>
                </label>
                <Input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-black mb-2">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <Input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-black mb-2">
                Your Email Address <span className="text-red-500">*</span>
              </label>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg"
              />
            </div>

            {/* Mobile and Company */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-black mb-2">
                  Mobile
                </label>
                <Input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-black mb-2">
                  Company
                </label>
                <Input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                />
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-semibold text-black mb-2">
                Description <span className="text-red-500">*</span>
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Additional Comments */}
            <div>
              <label className="block text-sm font-semibold text-black mb-2">
                Additional Comments:
              </label>
              <textarea
                name="comments"
                value={formData.comments}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* File Upload */}
            <div>
              <label className="block text-sm font-semibold text-black mb-2">
                Attachment (Only .pdf or .doc will be accepted)
              </label>
              <div className="flex items-center gap-3">
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                />
              </div>
              {formData.attachment && (
                <p className="text-sm text-gray-600 mt-2">
                  File: {formData.attachment.name}
                </p>
              )}
            </div>

            {/* Security Code */}
            <div>
              <label className="block text-sm font-semibold text-black mb-2">
                Security code <span className="text-red-500">*</span>
              </label>
              <Input
                type="text"
                name="securityCode"
                value={formData.securityCode}
                onChange={handleChange}
                placeholder="Enter security code"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <Button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg"
              >
                Submit
              </Button>
            </div>
          </form>

          {/* Need Help Section */}
          <div className="mt-16 text-center">
            <h3 className="text-xl sm:text-2xl font-bold text-blue-500 mb-4">
              Need Additional Help?
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">
              If you need targeted training or other specific custom services,
              we have them. Learn more about our additional{" "}
              <Link
                href="#"
                className="text-blue-500 hover:text-blue-600 font-semibold"
              >
                training
              </Link>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
