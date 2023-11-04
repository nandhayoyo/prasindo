import React from "react";
import nyctimes_img from "../assets/logo_nyc.png";

const Footer = () => {
  return (
    <>
      <footer className="footer  items-center justify-center p-4 text-neutral-content bg-violet-400">
        <aside className="items-center grid-flow-col">
          <img className="h-8 w-auto" src={nyctimes_img} alt="logo" />
          <p className="text-black text-center">
            Copyright © 2023 - All right reserved
          </p>
        </aside>
      </footer>
    </>
  );
};

export default Footer;
