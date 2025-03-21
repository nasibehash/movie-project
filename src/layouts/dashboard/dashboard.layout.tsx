import { ReactElement } from "react";

import { Outlet } from "react-router";

import SidebarComponent from "./components/sidebar/sidebar.component.tsx";

import styles from "./dashboard.module.css";

function DashboardLayout(): ReactElement {
  return (
    <div className={styles["dashboard-layout"]}>
      <SidebarComponent />
      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  );
}

export default DashboardLayout;
