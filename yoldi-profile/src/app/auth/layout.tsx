import "./auth-styles.css";

import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => (
  <div className="auth-layout">{children}</div>
);

export default Layout;
