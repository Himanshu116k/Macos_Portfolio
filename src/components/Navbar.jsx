import React from "react";
import dayjs from "dayjs";
import { navIcons, navLinks } from "../constants/index.js";

const Navbar = () => {
  const data = [
    { id: 1, nam: "Portfolio" },
    { id: 2, nam: "Contact" },
    { id: 3, nam: "Projects" },
  ];
  return (
    <nav>
      <div>
        <img src="/images/logo.svg" alt="logo" />
        <p className="font-bold">Himanshu Portfolio</p>
        <ul>
          {navLinks.map((item) => (
            <li key={item.id}>
              <p>{item.name}</p>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <ul>
            {navIcons.map(({id, img}) => (
                <li key={id}>
                    <img src={img} className="icon-hover"  alt={`icon-${id}`} />
                </li>
            ))}
        </ul>
        <time>
            {dayjs().format("ddd MMM D h:mm A")}
        </time>
      </div>
    </nav>
  );
};

export default Navbar;
