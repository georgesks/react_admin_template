import React, { useState } from "react";
import { Link } from "react-router-dom";
import ChevronDownIcon from "@heroicons/react/24/outline/ChevronDownIcon";
import Sitemap from "../../Sitemap";
import "./Sidebar.css";

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

  // Renderizar submenús de forma recursiva si es necesario
  const renderSubMenu = (children) => {
    return children.map((child) => (
      <Link
        to={child.path}
        key={child.name}
        className="flex items-center space-x-2 sidebar-link sidebar-link-child"
      >
        <span>{child.name}</span>
      </Link>
    ));
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
        {Sitemap.map((item) => {
          // Verificar si el item es una etiqueta de grupo
          if (item.isGroupLabel) {
            // Renderizar etiquetas de grupo solo si el sidebar está expandido
            return isCollapsed ? null : (
              <div key={item.name} className="sidebar-group-label">
                {item.name}
              </div>
            );
          }

          const Icon = item.icon; // Icono dinámico basado en el mapa del sitio

          return (
            <React.Fragment key={item.name}>
              {item.childrens ? (
                <div
                  className={`sidebar-link relative group`}
                  onClick={() => item.childrens && toggleSubMenu(item.name)}
                >
                  {Icon && <Icon className="h-5 w-5" />}
                  <span className="flex-1 whitespace-nowrap">{item.name}</span>
                  <ChevronDownIcon
                    className={`h-5 w-5 absolute right-0 transform transition-transform ${
                      subMenusOpen[item.name] ? "rotate-180" : ""
                    } ${isCollapsed ? "invisible" : "visible"}`}
                  />
                </div>
              ) : (
                <Link
                  to={item.path}
                  className="flex items-center space-x-2 sidebar-link"
                >
                  {Icon && <Icon className="h-5 w-5" />}
                  <span>{item.name}</span>
                </Link>
              )}
              {item.childrens &&
                subMenusOpen[item.name] &&
                renderSubMenu(item.childrens)}
            </React.Fragment>
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar;
