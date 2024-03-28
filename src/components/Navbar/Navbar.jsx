import { useState } from "react";
import { Link } from "react-router-dom";
import { IconNav } from "../../SVG/IconNav";
import style from "./Navbar.module.css";
import { List, X } from "@phosphor-icons/react";

const contentNav = [
  {
    name: "Home",
    link: "/home",
  },
  {
    name: "Services",
    link: "/services",
  },
  {
    name: "Technology",
    link: "/technology",
  },
  {
    name: "Case studies",
    link: "/caseStudies",
  },
  {
    name: "About",
    link: "/about",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={style.navContainer}>
      <span>
        <p>compleet labs</p>
      </span>
      <nav className={`${style.navLinks} ${isOpen ? style.open : ""}`}>
        {contentNav.map(({ name, link }) => (
          <Link key={name} to={link}>
            {name}
          </Link>
        ))}
        <div className={style.hireUs}>
          <Link to="/hireUs">
            <IconNav /> Hire us
          </Link>
        </div>
      </nav>
      <div className={style.mobileMenuToggle} onClick={toggleMenu}>
        <div className={`${style.hamburger} ${isOpen ? style.iconIcon : ""}`}>
          <figure>{isOpen ? <X size={32} /> : <List size={32} />}</figure>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
