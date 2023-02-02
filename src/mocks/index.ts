import type { NavigationMenuElement } from "@/types/models/Navigation";

const navigationMenu: NavigationMenuElement[] = [
  {
    url: '/',
    name: 'Home',
  },
  {
    url: '/portfolio/',
    name: 'Portfolio',
  },
  {
    url: '/about-us/',
    name: 'About Us',
  },
  {
    url: 'mailto:john_doe@example.com',
    name: 'Contact',
  },
];

export {
  navigationMenu,
};
