import React, { useState } from "react";
import { Link } from "react-router-dom";
import HomeIcon from "@heroicons/react/24/outline/HomeIcon";
import ShoppingBagIcon from "@heroicons/react/24/outline/ShoppingBagIcon";
import CogIcon from "@heroicons/react/24/outline/CogIcon";
import ChevronDownIcon from "@heroicons/react/24/outline/ChevronDownIcon";
import "./Sidebar.css";
import Sitemap from "../../Sitemap";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [subMenusOpen, setSubMenusOpen] = useState({});

  // Toggle the submenu open state
  const toggleSubMenu = (name) => {
    setSubMenusOpen((prevState) => ({
      ...prevState,
      [name]: !prevState[name],
    }));
  };

  return (
    <div
      className={`flex flex-col sidebar ${
        isCollapsed ? "sidebar-collapsed w-16" : "sidebar-expanded w-64"
      } h-full bg-gray-800 text-white px-4 transition-width duration-300`}
      onMouseEnter={() => setIsCollapsed(false)}
      onMouseLeave={() => setIsCollapsed(true)}
    >
      <nav className="mt-5">
        <Link to="/page1" className="flex items-center space-x-2 sidebar-link">
          <HomeIcon className="h-5 w-5" />
          <span>Page 1</span>
        </Link>

        {/* Multi-level link example */}
        <div
          className="sidebar-link relative"
          onClick={() => !isCollapsed && toggleSubMenu("menu1")}
        >
          <CogIcon className="h-5 w-5" />
          <span className="flex-1 whitespace-nowrap">Multi level 1</span>
          {!isCollapsed && (
            <ChevronDownIcon
              className={`h-5 w-5 absolute right-0 transform transition-transform ${
                subMenusOpen["menu1"] ? "rotate-180" : ""
              }`}
            />
          )}
        </div>
        {subMenusOpen["menu1"] && (
          <Link
            to="/page3"
            className="flex items-center space-x-2 sidebar-link sidebar-link-child"
          >
            <span>Page 3</span>
          </Link>
        )}

        {/* Another multi-level link example */}
        <div
          className="sidebar-link relative"
          onClick={() => !isCollapsed && toggleSubMenu("menu2")}
        >
          <ShoppingBagIcon className="h-5 w-5" />
          <span className="flex-1 whitespace-nowrap">Multi level 2</span>
          {!isCollapsed && (
            <ChevronDownIcon
              className={`h-5 w-5 absolute right-0 transform transition-transform ${
                subMenusOpen["menu2"] ? "rotate-180" : ""
              }`}
            />
          )}
        </div>
        {subMenusOpen["menu2"] && (
          <Link
            to="/page3"
            className="flex items-center space-x-2 sidebar-link sidebar-link-child"
          >
            <span>Page 3</span>
          </Link>
        )}

        {/* More main links... */}
        <Link to="/page3" className="flex items-center space-x-2 sidebar-link">
          <CogIcon className="h-5 w-5" />
          <span>Page 3</span>
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
