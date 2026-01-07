"use client";
import {
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
  Bell as Yelp,
  FacebookIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const socialLinks = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/Lucidinfosystems/",
    icon: FacebookIcon,
  },
  {
    name: "Twitter",
    href: "http://www.twitter.com/lucidinfosystem",
    icon: Twitter,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/lucid-infosystems-llc",
    icon: Linkedin,
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/channel/UC89iFVuIVrVS2ykD_CaJ_wg",
    icon: Youtube,
  },
  {
    name: "Yelp",
    href: "http://www.yelp.com/biz/lucid-infosystems-llc-sunnyvale-2",
    icon: Yelp,
  },
];

const footerLinks = [
  {
    title: "Company",
    links: [
      { name: "Home", href: "/" },
      { name: "About", href: "/about" },
      { name: "Products", href: "#" },
      { name: "Services", href: "#" },
      { name: "Training", href: "#" },
    ],
  },
  {
    title: "Quick Links",
    links: [
      { name: "Meetups", href: "#" },
      { name: "Careers", href: "#" },
      { name: "E-Book", href: "#" },
      { name: "Amazon Kindle", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="w-full bg-white text-gray-900">
      {/* Main Footer Content */}
      <div className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Top Section: Logo, Company, Quick Links, Contact */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 lg:grid-cols-4 mb-12">
            {/* Logo Section */}
            <div className="flex flex-col">
              <Image
                src="/lucidLogoDark.svg"
                alt="Lucid Infosystems"
                width={120}
                height={100}
              />
              <p className="text-lg font-semibold text-gray-900">
                built to
                <br />
                simplify
              </p>
            </div>

            {/* Company Links */}

            {footerLinks.map((section, index) => (
              <div key={index} className="flex flex-col">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  {section.title}
                </h3>
                <nav className="flex flex-col gap-3">
                  {section.links.map((link, i) => (
                    <Link
                      key={i}
                      href={link.href}
                      className="text-gray-700 hover:text-blue-600 transition-colors"
                    >
                      {link.name}
                    </Link>
                  ))}
                </nav>
              </div>
            ))}

            {/* Contact Info */}
            <div className="flex flex-col">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Contact US
              </h3>
              <div className="flex flex-col gap-3">
                <div>
                  <p className="text-sm text-gray-600">Phone No:</p>
                  <Link
                    href="tel:+14086892590"
                    className="text-gray-700 text-xs sm:text-base hover:text-blue-600 transition-colors"
                  >
                    +1 (408) 689 2590
                  </Link>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Email:</p>
                  <Link
                    href="mailto:info@lucidinfosystems.com"
                    className="text-gray-700 text-xs sm:text-base hover:text-blue-600 transition-colors"
                  >
                    info@lucidinfosystems.com
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media Section */}
          <div className=" pt-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Connect with Us
            </h3>
            <div className="flex gap-6">
              {socialLinks.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  target="_blank"
                  className="text-gray-700 bg-[#FAFAFA] rounded-full p-2 hover:text-blue-600 transition-colors"
                >
                  <item.icon size={24} />
                  <span className="sr-only">{item.name}</span>
                </Link>
              ))}
              <Link
                href="http://www.yelp.com/biz/lucid-infosystems-llc-sunnyvale-2"
                target="_blank"
                className="flex items-center justify-center  text-gray-700 bg-[#FAFAFA] rounded-full p-2 hover:text-blue-600 transition-colors"
              >
                <img className="w-6 h-6 hover:text-blue-500" src={"/yelp.svg"} alt="yelp icon" />
                <span className="sr-only">Yelp</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#1B1B1B] text-white py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
            <Link href="#" className="hover:text-blue-400 transition-colors">
              Terms Of Service
            </Link>
            <span className="hidden sm:inline">|</span>
            <Link href="#" className="hover:text-blue-400 transition-colors">
              Privacy Policy
            </Link>
          </div>
          <p className="text-center text-gray-400 text-sm mt-4">
            © 2013-2025 Lucid Infosystem LLC. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
