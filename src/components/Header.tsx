import { FC } from "react";
import { Bars3Icon } from '@heroicons/react/24/outline';

// Declare specify type of props that must be passed
interface HeaderProps {
  //Set bg color navbar
  bgColor:string;
  //Set name of its profile
  profileName?:string;
  //Set storing menu navbar will appear using ? to make it optional but planning to  make its as default 
  menus?: Menu[] ;
}

// Declare specify of the interface for object type menu  array
interface Menu {
  name_menu: string;
  path_menu: string;
}

const katalogMenus: Menu[] = [
  { name_menu: "About", path_menu: "#about" },
  { name_menu: "Work", path_menu: "#work" },
  { name_menu: "Contact", path_menu: "/contact-us" }
];

// Declare props as it needs to pass the value of its param
const Header: FC<HeaderProps>  = ({ bgColor, profileName ="@Ayush Barnwal" , menus= katalogMenus}) => {
 
  return (
      // Setting dynamic bg color so the class must use {}
      <nav className={`flex justify-between p-4 lg:px-8 ${bgColor}`}>
        {/* Left Menu */}
        <div className="flex lg:flex-1">
          <a href="/" className="ml-20 py-0">
            <div className="text-md text-black-400">
              {profileName}
            </div>
          </a>
        </div>

        {/* Right Menu */}
        <div className="hidden lg:flex lg:gap-x-10 mr-20 py-0">
            {/* Use map for looping each value of its array*/}
          {menus.map((menu, index) => (
            <a
              key={index}
              href={menu.path_menu}
              className="text-md text-black-400 hover:font-bold"
            >
              {menu.name_menu}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden">
          <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-black-400">
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
      </nav>
     
   
 
 
  );
};

export default Header;
