
import { useState } from 'react';
import profilePicture from '../assets/formal_profile_pic.png'



const Header = () => {
  const navElement = [
    { itemText: "HOME", itemLink: "home" },
     { itemText: "ABOUT", itemLink: "about" },
    { itemText: "PROJECT", itemLink: "project" },
     { itemText: "CONTACT", itemLink: "contact" },
  ];
  let [ActiveLink, setActiveLink ] = useState("home");
  return (
    <header className="mb-4 pt-2">
      <nav className="  d-flex gap-3 align-items-center justify-content-between ">
        <h1 className="logo-name h1 mb-0">Kerbs</h1>

        <div className="">
          <ul className="d-flex align-items-center justify-content-between gap-3 mb-0">
            <span
              className="nav-bg"
              style={{
                transform: `translateX(${
                  navElement.findIndex((item) => item.itemLink === ActiveLink) *
                  100
                }%)`,
              }}
            />
            {navElement.map((item) => (
              <li
                key={item.itemLink}
                className={
                  ActiveLink === item.itemLink
                    ? "nav-item text-white rounded p-1 bg-black"
                    : "nav-item"
                }
              >
                <a
                  className={
                    ActiveLink === item.itemLink
                      ? "text-white fs-5"
                      : "text-dark fs-5"
                  }
                  href={`#${item.itemLink}`}
                  onClick={() => {
                    setActiveLink(item.itemLink);
                  }}
                >
                  {item.itemText}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="mode">
          <i className="fa-solid fa-moon fs-3"></i>
        </div>
      </nav>
    </header>
  );
}

export default Header
