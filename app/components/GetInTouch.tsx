import React from "react";
import FooterSection from "./Footer";

const GetInTouch = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section className="mt-2 px-3 sm:px-3.5 md:px-5">
        <div className="container mx-auto">
          <div className="">
            <div className="flex flex-col items-center">
              <div className="w-full xl:w-2/3">
                <h1 className="text-green uppercase leading-[80.769%] text-center">
                  Get in Touch
                </h1>
              </div>

              <p className="leading-normal mt-4 text-center">
                House's customer service team is here to support you! If you
                need assistance with an order, have a question about our
                products, or would like to order custom paddles, please:
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="mt-100">
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/2 flex flex-col justify-center bg-dark-green">
            <div className="xl:w-5/5 2xl:w-4/5 px-5  xl:ps-20 py-20 sm:py-22 md:py-24 lg:py-12 text-left">
              <h2 className="font-h1 text-white uppercase leading-[80.769%]">
                Feel Free To Contact Us
              </h2>
              <p className="leading-normal text-[#D2DCD9] mt-3.5 md:mt-6">
                Lorem ipsum dolor sit amet,adipiscing elit. Vivamus varius
                sapien semper odio ullamcorper,
              </p>
              <div className="mt-9 md:mt-11 flex flex-col gap-5 md:gap-7.5">
                <div className="flex flex-row gap-3.5">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_248_4033)">
                        <path
                          d="M28.4615 5H1.5385C0.692285 5 0 5.69228 0 6.53844V23.4615C0 24.3076 0.692285 25 1.5385 25H28.4616C29.3077 25 30.0001 24.3078 30.0001 23.4615V6.53844C30 5.69228 29.3077 5 28.4615 5ZM27.8842 6.15377L15.885 15.1539C15.6693 15.3181 15.3381 15.4208 14.9999 15.4193C14.6619 15.4208 14.3307 15.3181 14.1149 15.1539L2.11576 6.15377H27.8842ZM21.4746 15.7477L28.0131 23.8247C28.0196 23.8328 28.0277 23.8389 28.0346 23.8463H1.96535C1.97227 23.8386 1.98035 23.8328 1.98691 23.8247L8.52539 15.7477C8.72572 15.5001 8.68775 15.137 8.43961 14.9362C8.19193 14.7358 7.82883 14.7738 7.62844 15.0215L1.15383 23.0196V6.87494L13.423 16.0769C13.8842 16.4203 14.4453 16.5715 14.9999 16.573C15.5537 16.5719 16.1153 16.4207 16.5768 16.0769L28.8459 6.87494V23.0195L22.3715 15.0215C22.1711 14.7738 21.8077 14.7358 21.5603 14.9362C21.3122 15.1365 21.2742 15.5001 21.4746 15.7477Z"
                          fill="#B2FFA9"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_248_4033">
                          <rect width="30" height="30" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <p className="font-bold! text-white leading-[100%]">
                      Email Address
                    </p>
                    <a
                      href="mailto: info@housepickleball.com"
                      className="text-[#D2DCD9] fs-18 leading-normal mt-1.5"
                    >
                      info@housepickleball.com
                    </a>
                  </div>
                </div>

                <div className="flex flex-row gap-3.5">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_248_4041)">
                        <path
                          d="M17.0762 0C16.7525 0 16.4902 0.262298 16.4902 0.585937C16.4902 0.909575 16.7525 1.17187 17.0762 1.17187C23.556 1.17187 28.8276 6.4437 28.8276 12.9233C28.8276 13.247 29.0902 13.5093 29.4136 13.5093C29.7372 13.5093 29.9995 13.247 29.9995 12.9233C29.9995 5.79757 24.2022 0 17.0762 0Z"
                          fill="#B2FFA9"
                        />
                        <path
                          d="M25.8888 13.5101C26.2124 13.5101 26.4747 13.2476 26.4747 12.9242C26.4747 7.74162 22.2585 3.52539 17.0762 3.52539C16.7525 3.52539 16.4902 3.78792 16.4902 4.11133C16.4902 4.43497 16.7525 4.69726 17.0762 4.69726C21.6124 4.69726 25.3029 8.38775 25.3029 12.9242C25.3029 13.2476 25.5652 13.5101 25.8888 13.5101Z"
                          fill="#B2FFA9"
                        />
                        <path
                          d="M21.7774 12.9239C21.7774 13.2473 22.0397 13.5098 22.3633 13.5098C22.687 13.5098 22.9493 13.2473 22.9493 12.9239C22.9493 9.68544 20.3146 7.05078 17.0762 7.05078C16.7525 7.05078 16.4902 7.31308 16.4902 7.63649C16.4902 7.96013 16.7525 8.22243 17.0762 8.22243C19.6685 8.22243 21.7774 10.3313 21.7774 12.9239Z"
                          fill="#B2FFA9"
                        />
                        <path
                          d="M16.4902 11.1621C16.4902 11.4855 16.7525 11.7478 17.0762 11.7478C17.7248 11.7478 18.2526 12.2756 18.2526 12.9245C18.2526 13.2479 18.5149 13.5104 18.8386 13.5104C19.162 13.5104 19.4245 13.2479 19.4245 12.9245C19.4245 11.6295 18.371 10.5762 17.0762 10.5762C16.7525 10.5762 16.4902 10.8385 16.4902 11.1621Z"
                          fill="#B2FFA9"
                        />
                        <path
                          d="M10.9824 19.0234C10.9824 19.3471 10.7201 19.6094 10.3965 19.6094C10.0728 19.6094 9.81055 19.3471 9.81055 19.0234C9.81055 18.7 10.0728 18.4375 10.3965 18.4375C10.7201 18.4375 10.9824 18.7 10.9824 19.0234Z"
                          fill="#B2FFA9"
                        />
                        <path
                          d="M16.0566 29.2892C18.7246 30.5968 21.9345 30.0527 24.0443 27.9429L25.2558 26.7314C25.9136 26.0743 25.9138 25.0098 25.256 24.3522L20.5749 19.6716C19.9182 19.014 18.8535 19.0131 18.1961 19.6713L16.2072 21.6605C15.8176 22.0501 15.2163 22.1295 14.7778 21.8496C14.0628 21.3925 13.3672 20.8885 12.7105 20.3516C12.4599 20.1467 12.091 20.1838 11.8861 20.4342C11.6813 20.6848 11.7183 21.054 11.9687 21.2586C12.6606 21.8244 13.3933 22.3554 14.147 22.837C15.0454 23.4108 16.2603 23.2645 17.0357 22.4891L19.0252 20.4997C19.2241 20.3005 19.5463 20.3001 19.7461 20.4999L24.4274 25.1807C24.6268 25.3803 24.6273 25.703 24.4274 25.9024L23.2157 27.1143C21.4582 28.8719 18.7885 29.323 16.5722 28.237C8.45312 24.2556 4.0357 17.9426 1.75971 13.3476C0.670917 11.1501 1.12296 8.49047 2.88466 6.72922L4.06981 5.5443C4.26848 5.34518 4.59097 5.34449 4.79056 5.54453L9.47233 10.2261C9.67054 10.4241 9.6726 10.7468 9.47187 10.9471L7.48289 12.9363C6.70744 13.7117 6.56118 14.9266 7.13499 15.8252C7.47305 16.3541 7.83743 16.876 8.21828 17.3761C8.41421 17.6336 8.78179 17.6833 9.03928 17.4873C9.29677 17.2914 9.34667 16.9238 9.15052 16.6661C8.78934 16.1916 8.44328 15.6963 8.12238 15.1944C7.84246 14.7556 7.92188 14.1544 8.31144 13.7648L10.3002 11.7761C10.9578 11.1194 10.9585 10.0544 10.3006 9.3973L5.61933 4.71621C4.9629 4.05863 3.89792 4.05772 3.2408 4.71598L2.05611 5.90067C-0.0615041 8.0176 -0.60258 11.2194 0.709598 13.8678C3.06639 18.6256 7.64173 25.1629 16.0566 29.2892Z"
                          fill="#B2FFA9"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_248_4041">
                          <rect width="30" height="30" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <p className="font-bold! text-white leading-[100%]">
                      Contact Number
                    </p>
                    <a
                      href="tel: +201-961-5984"
                      className="text-[#D2DCD9] fs-18 leading-normal mt-1.5"
                    >
                      +201-961-5984
                    </a>
                  </div>
                </div>

                <div className="flex flex-row gap-3.5">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      fill="none"
                    >
                      <path
                        d="M15.0574 2.34377C14.7334 2.34142 14.4692 2.60216 14.4668 2.9256C14.4645 3.24904 14.7246 3.5133 15.0486 3.51564C15.3721 3.51799 15.6363 3.25783 15.6387 2.93439C15.641 2.61095 15.3809 2.3467 15.0574 2.34377Z"
                        fill="#B2FFA9"
                      />
                      <path
                        d="M15.0308 5.8596C12.7685 5.84355 10.9157 7.66869 10.8986 9.93035C10.8815 12.1919 12.7076 14.0456 14.9693 14.0626C14.9798 14.0627 14.9902 14.0627 15.0007 14.0627C17.248 14.0627 19.0846 12.2431 19.1016 9.99188C19.1186 7.73045 17.2926 5.87665 15.0308 5.8596ZM15.0006 12.8909C14.9932 12.8909 14.9855 12.8909 14.9781 12.8908C13.3626 12.8786 12.0582 11.5545 12.0704 9.93914C12.0825 8.33103 13.3943 7.0313 14.9995 7.0313C15.0069 7.0313 15.0147 7.03136 15.022 7.03142C16.6375 7.04361 17.9419 8.36771 17.9298 9.98309C17.9176 11.5912 16.6058 12.8909 15.0006 12.8909Z"
                        fill="#B2FFA9"
                      />
                      <path
                        d="M17.5563 2.78775C17.2515 2.67959 16.9164 2.83926 16.8082 3.1443C16.7001 3.44934 16.8598 3.7842 17.1648 3.89236C19.7457 4.80707 21.4657 7.26514 21.4451 10.0089C21.4427 10.3325 21.703 10.5968 22.0266 10.5993C22.0281 10.5993 22.0296 10.5993 22.0311 10.5993C22.3526 10.5993 22.6145 10.3398 22.6169 10.0177C22.6413 6.77471 20.6076 3.86922 17.5563 2.78775Z"
                        fill="#B2FFA9"
                      />
                      <path
                        d="M18.5954 22.0572C22.4926 17.0407 24.9282 14.4248 24.9611 10.0358C25.0023 4.51378 20.521 0 14.9993 0C9.5421 0 5.08088 4.41962 5.0394 9.88643C5.00588 14.3943 7.48669 17.0067 11.4108 22.0564C7.50702 22.6397 5.0394 24.1056 5.0394 25.8985C5.0394 27.0995 6.14952 28.1772 8.16532 28.9331C10.0001 29.6211 12.4274 30 15.0002 30C17.573 30 20.0004 29.6211 21.8352 28.9331C23.851 28.1771 24.9611 27.0994 24.9611 25.8984C24.9611 24.1065 22.4957 22.641 18.5954 22.0572ZM6.21122 9.89527C6.24778 5.0713 10.1838 1.17188 14.9994 1.17188C19.872 1.17188 23.8256 5.15556 23.7893 10.0271C23.7581 14.1951 21.1752 16.7637 17.0515 22.1393C16.316 23.0976 15.6405 24.0037 15.0011 24.8901C14.3636 24.0032 13.7016 23.1133 12.9551 22.1389C8.66097 16.5383 6.17946 14.1638 6.21122 9.89527ZM15.0002 28.8282C9.9699 28.8282 6.21122 27.2815 6.21122 25.8985C6.21122 24.8729 8.45817 23.5772 12.2362 23.1286C13.0713 24.2243 13.8035 25.2199 14.5216 26.2366C14.6313 26.3918 14.8096 26.4843 14.9997 26.4844C14.9999 26.4844 15.0001 26.4844 15.0002 26.4844C15.1902 26.4844 15.3684 26.3923 15.4782 26.2373C16.1896 25.2339 16.9418 24.2138 17.7698 23.1292C21.5443 23.5783 23.7893 24.8736 23.7893 25.8985C23.7892 27.2815 20.0306 28.8282 15.0002 28.8282Z"
                        fill="#B2FFA9"
                      />
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <p className="font-bold! text-white leading-[100%]">
                      Location
                    </p>
                    <a className="text-[#D2DCD9] fs-18 leading-normal mt-1.5">
                      Lot 2281, 1, Jalan Bukit Belimbing, Kawasan Perindustrian
                      Balakong, 43300 Seri Kembangan, Selangor, Malaysia
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 bg-pink">
            <div className="xl:w-5/5 p-5 lg:px-10 xl:px-20  sm:py-22 md:py-24 lg:py-12">
              <form
                action=""
                method="post"
                className="flex flex-col gap-3.5 sm:gap-5"
              >
                <div className="flex gap-2.5">
                  <div className="flex flex-col w-full gap-0.5">
                    <label
                      htmlFor="firstName"
                      className="fs-18 text-[#332929] leading-normal"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      name=""
                      id=""
                      className="input-field bg-[rgba(0,0,0,0.07)] border-0!"
                    />
                  </div>
                  <div className="flex flex-col w-full gap-0.5">
                    <label
                      htmlFor="lastName"
                      className="fs-18 text-[#332929] leading-normal"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      name=""
                      id=""
                      className="input-field bg-[rgba(0,0,0,0.07)] border-0!"
                    />
                  </div>
                </div>
                <div className="flex flex-col w-full gap-0.5">
                  <label
                    htmlFor="contactNumber"
                    className="fs-18 text-[#332929] leading-normal"
                  >
                    Contact Number
                  </label>
                  <input
                    type="number"
                    name=""
                    id=""
                    className="input-field bg-[rgba(0,0,0,0.07)] border-0!"
                  />
                </div>
                <div className="flex flex-col w-full gap-0.5">
                  <label
                    htmlFor="emailAddress"
                    className="fs-18 text-[#332929] leading-normal"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    name=""
                    id=""
                    className="input-field bg-[rgba(0,0,0,0.07)] border-0!"
                  />
                </div>
                <div className="flex flex-col w-full gap-0.5">
                  <label
                    htmlFor="query"
                    className="fs-18 text-[#332929] leading-normal"
                  >
                    Query
                  </label>
                  <textarea
                    name=""
                    id=""
                    rows={10}
                    className="textarea-field bg-[rgba(0,0,0,0.07)]"
                  ></textarea>
                </div>
                <button className="btn btn-white text-black! leading-normal cursor-pointer text-center shadow-sm">
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER SECTION  */}
      <FooterSection />
    </>
  );
};

export default GetInTouch;
