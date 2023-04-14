/** @format */

import Container from "./Container";
import { BrowserRouter, NavLink as RouterLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const getClassName = (props) => {
    return `${
      props.isActive ? "font-bold" : ""
    } hover:underline hover:text-gray-600 transition duration-300 `;
  };

  return (
    <BrowserRouter>
      <Container className="bg-gray-300">
        <nav className="flex gap-4">
          <RouterLink className={getClassName} to="/">
            Home
          </RouterLink>
          <RouterLink className={getClassName} to="/about">
            About
          </RouterLink>
          <RouterLink className={getClassName} to="/books">
            Books
          </RouterLink>
        </nav>
      </Container>
    </BrowserRouter>
  );
};

export default Header;
