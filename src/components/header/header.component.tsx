import { ReactElement } from "react";

import { Link } from "react-router";

import { useUser } from "../../hooks/use-user.hook.ts";

import NavItemComponent from "./components/nav-item/nav-item.component.tsx";

import { NavItemType } from "./types/nav-item.type.ts";

import styles from "./header.module.css";

const navItems: NavItemType[] = [
  { title: "Home", href: "/" },
  { title: "About Us", href: "/about" },
  { title: "Contact Us", href: "/contact" },
];

const guestOnlyNavItems: NavItemType[] = [
  { title: "Sign In", href: "/auth/sign-in" },
];

const userOnlyNavItems: NavItemType[] = [
  { title: "Dashboard", href: "/dashboard" },
];

function HeaderComponent(): ReactElement {
  const user = useUser();

  return (
    <div className={styles.header}>
      <Link to="/" className={styles.logo}>
        Movie Box
      </Link>
      <nav>
        <ul>
          {navItems.map((item) => (
            <NavItemComponent key={item.title} item={item} />
          ))}
          {!user &&
            guestOnlyNavItems.map((item) => (
              <NavItemComponent key={item.title} item={item} />
            ))}
          {user &&
            userOnlyNavItems.map((item) => (
              <NavItemComponent key={item.title} item={item} />
            ))}
        </ul>
      </nav>
    </div>
  );
}

export default HeaderComponent;
