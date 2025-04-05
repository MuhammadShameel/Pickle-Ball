import React from "react";
import Image from "next/image";

const FooterSection = () => {
  return (
    <>
      <footer className="mt-100 py-12 px-5 bg-green">
        <div className="container mx-auto">
          <div className="flex flex-row flex-wrap gap-10">
            {/* About Us Section - Reduced width */}
            <div className="lg:w-1/4">
              <a href="/" className="flex items-center">
                <h3 className="self-center uppercase font-Allotrope text-2xl font-semibold whitespace-nowrap dark:text-white">
                  About Us
                </h3>
              </a>
              <p className="text-gray-400 mt-4" style={{ fontSize: "18px" }}>
                A job career refers to the long-term professional journey of an
                individual, encompassing various roles,
              </p>
            </div>

            {/* 4 Lists in Single Row */}
            <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-8">
              {/* Resources */}
              <div>
                <p className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Menu
                </p>
                <ul className="text-gray-500 dark:text-gray-400 font-medium space-y-4">
                  <li>
                    <a href="#" className="hover:underline">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>

              {/* Follow us */}
              <div>
                <p className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Explore
                </p>
                <ul className="text-gray-500 dark:text-gray-400 font-medium space-y-4">
                  <li>
                    <a href="#" className="hover:underline">
                      Github
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Discord
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Twitter
                    </a>
                  </li>
                </ul>
              </div>

              {/* Legal */}
              <div>
                <p className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Help & Support
                </p>
                <ul className="text-gray-500 dark:text-gray-400 font-medium space-y-4">
                  <li>
                    <a href="#" className="hover:underline">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Terms & Conditions
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Licensing
                    </a>
                  </li>
                </ul>
              </div>

              {/* Company */}
              <div>
                <p className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  OFFICE LOCATION
                </p>
                <ul className="text-gray-500 dark:text-gray-400 font-medium space-y-4">
                  <li>
                    <a href="#" className="hover:underline">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Careers
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterSection;
