// import { useState , useTranslation} from "react";

// import { close, logo, menu,logosls,logoslss,sls} from "../assets";
// import { navLinks } from "../constants";

// const Navbar = () => {
//   const [active, setActive] = useState("Home");
//   const [toggle, setToggle] = useState(false);

//   return (
//     <nav className="w-full flex py-6 justify-between items-center navbar ">
//       {/* <nav className="w-full flex py-6 justify-between items-center fixed top-0 z-10 navbar"> */}
//       <img src={sls}  className="w-[182px] h-[58px]" />

//       <ul className="list-none sm:flex hidden justify-end items-center flex-1">
//         {navLinks.map((nav, index) => (
//           <li
//             key={nav.id}
//             className={`font-poppins font-normal cursor-pointer text-[16px] ${
//               active === nav.title ? "text-white" : "text-dimWhite"
//             } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
//             onClick={() => setActive(nav.title)}
//           >
//             <a href={`#${nav.id}`}>{nav.title}</a>

//           </li>
//         ))}
//       </ul>

//       <div className="sm:hidden flex flex-1 justify-end items-center">
//         <img
//           src={toggle ? close : menu}
//           alt="menu"
//           className="w-[28px] h-[28px] object-contain"
//           onClick={() => setToggle(!toggle)}
//         />

//         <div
//           className={`${
//             !toggle ? "hidden" : "flex"
//           } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
//         >
//           <ul className="list-none flex justify-end items-start flex-1 flex-col">
//             {navLinks.map((nav, index) => (
//               <li
//                 key={nav.id}
//                 className={`font-poppins font-medium cursor-pointer text-[16px] ${
//                   active === nav.title ? "text-white" : "text-dimWhite"
//                 } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
//                 onClick={() => setActive(nav.title)}
//               >
//                 <a href={`#${nav.id}`}>{nav.title}</a>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { close, menu, sls, france, anglais } from "../assets";
import { navLinks } from "../constants";


function getScrollbarWidth() {
  return window.innerWidth - document.documentElement.clientWidth;
}

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [scrollbarWidth, setScrollbarWidth] = useState(getScrollbarWidth());
  
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLangMenuOpen(false);
  };

  const handleClickOutside = (event) => {
    if (langMenuOpen && event.target.closest(".language-selector") === null) {
      setLangMenuOpen(false);
    }
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      setScrollbarWidth(getScrollbarWidth());
    };
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [langMenuOpen]);
 
  

  return (
    // <nav className="w-full flex py-6 justify-between items-center navbar">
    <nav className=" w-full flex py-6 justify-between items-center navbar ">

      <img src={sls} className="w-[182px] h-[58px]" alt="Logo" />

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              active === nav.title ? "text-white" : "text-dimWhite"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{t(nav.title)}</a>
          </li>
        ))}
        <li className="language-selector relative">
          <button
            onClick={() => setLangMenuOpen(!langMenuOpen)}
            className="flex items-center focus:outline-none"
          >
            <img
              src={i18n.language === "en" ? anglais : france}
              alt={t("language")}
              className="w-6 h-6 pr-2"
            />
          </button>

          {langMenuOpen && (
            <ul className="absolute right-0 mt-2 w-20 bg-white rounded-md shadow-lg overflow-hidden z-20">
              <li
                className="cursor-pointer hover:bg-gray-100 p-2"
                onClick={() => changeLanguage("en")}
              >
                <img src={anglais} alt="English" className="w-6 h-6" />
              </li>
              <li
                className="cursor-pointer hover:bg-gray-100 p-2"
                onClick={() => changeLanguage("fr")}
              >
                <img src={france} alt="Français" className="w-6 h-6" />
              </li>
            </ul>
          )}
        </li>
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-white" : "text-dimWhite"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{t(nav.title)}</a>
              </li>
            ))}
            <li className="language-selector flex items-center mt-4 relative">
              <img
                src={i18n.language === "en" ? anglais : france}
                alt={t("language")}
                className="w-auto h-4 cursor-pointer"
                onClick={() => setLangMenuOpen(!langMenuOpen)}
              />
              {langMenuOpen && (
                <ul className="absolute left-0 mt-2 w-20 bg-white rounded-md shadow-lg overflow-hidden z-20">
                  <li
                    className="cursor-pointer hover:bg-gray-100 p-2"
                    onClick={() => changeLanguage("en")}
                  >
                    <img src={anglais} alt="English" className="w-auto h-4" />
                  </li>
                  <li
                    className="cursor-pointer hover:bg-gray-100 p-2"
                    onClick={() => changeLanguage("fr")}
                  >
                    <img
                      src={france}
                      alt="Français"
                      className="w-auto h-4 ml-2"
                    />
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
