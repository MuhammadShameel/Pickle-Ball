import Link from "next/link";
import React from "react";

const FooterSection = () => {
  return (
    <>
      <footer className="py-12 px-5 bg-green">
        <div className="container mx-auto">
          <div className="flex flex-row flex-wrap gap-10">
            {/* About Us Section - Reduced width */}
            <div className="lg:w-1/4">
              <Link href="/" className="flex items-center">
                <h3 className="self-center uppercase font-Allotrope text-2xl font-semibold whitespace-nowrap dark:text-white">
                  About Us
                </h3>
              </Link>
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
                    <Link href="#" className="hover:underline">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:underline">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:underline">
                      Contact
                    </Link>
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
                    <Link href="#" className="hover:underline">
                      Github
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:underline">
                      Discord
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:underline">
                      Twitter
                    </Link>
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
                    <Link href="#" className="hover:underline">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:underline">
                      Terms & Conditions
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:underline">
                      Licensing
                    </Link>
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
                    <Link href="#" className="hover:underline">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:underline">
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:underline">
                      Contact
                    </Link>
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
