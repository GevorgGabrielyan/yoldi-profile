import "./auth-styles.css";

import { BaseLayout } from "@/layouts/BaseLayout";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => (
  <BaseLayout>
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      {children}
    </div>
  </BaseLayout>
);

export default Layout;
