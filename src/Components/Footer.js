import React from "react";
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white relative">
      <div className="md:flex md:justify-center md:items-center sm:px-12 px-4 bg-[#ffffff19] py-7">
        <h3
          className="lg:text-3xl text-2xl md:mb-0 mb-6 lg:leading-normal font-semibold
         md:w-2/5"
        >
          <span className="text-teal-400">Welcome</span> to Hartley Lab for
          Future.
        </h3>
      </div>

      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
      text-center pt-2 text-gray-400 text-sm pb-8"
      >
        <span>© 2020 Appy. All rights reserved.</span>
        <span>Terms · Privacy Policy</span>
      </div>
    </footer>
  );
};

export default Footer;
