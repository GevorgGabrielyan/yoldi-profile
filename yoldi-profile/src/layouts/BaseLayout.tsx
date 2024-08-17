"use client";

import { ReactNode } from "react";
import HeaderBlock from "@/components/HeaderBlock";
import { ConfigProvider } from "antd";

export const BaseLayout = ({ children }: { children: ReactNode }) => (
  <div className="base-layout-container" style={{ height: "100vh" }}>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#000",
        },
      }}
    >
      <HeaderBlock />
      {children}
    </ConfigProvider>
  </div>
);
