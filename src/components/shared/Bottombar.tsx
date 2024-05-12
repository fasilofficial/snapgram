import { bottombarLinks } from "@/constants";
import React from "react";
import { Link, useLocation } from "react-router-dom";

const Bottombar = () => {
  const { pathname } = useLocation();

  return (
    <section className="bottom-bar">
      {bottombarLinks.map((item) => {
        const isActive = pathname === item.route;

        return (
          <Link
            to={item.route}
            key={item.label}
            className={`bottom-bar-link group flex-center flex-col gap-1 p-2 transition ${
              isActive && "bg-primary-500 rounded-[10px]"
            }`}
          >
            <img
              src={item.imgURL}
              alt={item.label}
              width={16}
              height={16}
              className={`group-hover:invert-white ${
                isActive && "invert-white"
              }`}
            />
            <p className="tiny-medium text-light-2">{item.label}</p>
          </Link>
        );
      })}
    </section>
  );
};

export default Bottombar;
