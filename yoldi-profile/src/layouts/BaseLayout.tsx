"use client";

import { ReactNode } from "react";
import HeaderBlock from "@/components/HeaderBlock";
import { ConfigProvider } from "antd";
import useSWR from "swr";
import { UserService } from "@/services/api/user.service";

export const BaseLayout = ({ children }: { children: ReactNode }) => {
  const { data } = useSWR("Me", UserService.me);

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#000",
        },
      }}
    >
      <HeaderBlock me={data} />
      {children}
    </ConfigProvider>
  );
};
