import { ReactElement } from "react";

import { NavLink } from "react-router";

import clsx from "clsx";

import SignOutButtonComponent from "../sign-out-button/sign-out-button.component.tsx";

import MingcuteAddLine from "../../../../icons/MingcuteAddLine.tsx";
import MingcuteClassify2Line from "../../../../icons/MingcuteClassify2Line.tsx";
import MingcuteUser5Line from "../../../../icons/MingcuteUser5Line.tsx";

import styles from "./sidebar.module.css";

export type NavItem = {
  title: string;
  href: string;
  icon: ReactElement;
};

const navItems: NavItem[] = [
  { title: "Profile", href: "/dashboard", icon: <MingcuteUser5Line /> },
  {
    title: "Selections",
    href: "/dashboard/selection",
    icon: <MingcuteClassify2Line />,
  },
  {
    title: "Create Selection",
    href: "/dashboard/selection/create",
    icon: <MingcuteAddLine />,
  },
];

export default function SidebarComponent(): ReactElement {
  return (
    <div className={styles.sidebar}>
      <ul>
        {navItems.map((item) => (
          <li key={item.title}>
            <NavLink
              to={item.href}
              end
              className={({ isActive }) => clsx(isActive && styles.active)}
            >
              {item.icon}
              {item.title}
            </NavLink>
          </li>
        ))}
        <li>
          <SignOutButtonComponent />
        </li>
      </ul>
    </div>
  );
}
