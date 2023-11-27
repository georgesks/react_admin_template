import HomeIcon from "@heroicons/react/24/outline/HomeIcon";
import ShoppingBagIcon from "@heroicons/react/24/outline/ShoppingBagIcon";
import CogIcon from "@heroicons/react/24/outline/CogIcon";

const Sitemap = [
  {
    name: "Comercial",
    isGroupLabel: true,
  },
  {
    name: "Page 1",
    path: "/page1",
    icon: HomeIcon,
  },
  {
    name: "Multi level 1",
    path: "#",
    icon: CogIcon,
    childrens: [
      {
        name: "Page 3",
        path: "/page3",
      },
      // Puedes agregar más subenlaces aquí
    ],
  },
  {
    name: "Configuracion",
    isGroupLabel: true,
  },
  {
    name: "Multi level 2",
    path: "#",
    icon: ShoppingBagIcon,
    childrens: [
      {
        name: "Page 2",
        path: "/page2",
      },
      // Puedes agregar más subenlaces aquí
    ],
  },
  // Más enlaces principales aquí
];

export default Sitemap;
