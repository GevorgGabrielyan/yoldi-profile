"use client";

import { Layout } from "antd";
import { ReactNode } from "react";

const { Footer } = Layout;

const FooterBlock = ({ children }: { children: ReactNode }) => (
  <Footer
    style={{
      padding: "20px 40px",
      borderTop: "1px solid #E6E6E6",
      position: "fixed",
      bottom: "0",
      lineHeight: "1",
      color: "#838383",
      background: "#fff",
      fontWeight: 400,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      left: 0,
      right: 0,
    }}
  >
    {children}
  </Footer>
);

export default FooterBlock;
