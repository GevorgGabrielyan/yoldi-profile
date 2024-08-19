"use client";

import { PropsWithChildren, useEffect } from "react";
import HeaderBlock from "@/components/HeaderBlock";
import { ConfigProvider } from "antd";
import useSWR from "swr";
import { UserService } from "@/services/api/user.service";

export const BaseLayout = ({
  children,
  apiKey,
}: PropsWithChildren<{ apiKey?: string }>) => {
  const { data } = useSWR(apiKey ? "Me" : null, UserService.me);
  useEffect(() => {
    if (data) {
      localStorage.setItem("currentUserEmail", data.email);
    }
  }, [data]);

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#000",
        },
      }}
    >
      <HeaderBlock apiKey={apiKey} me={data} />
      {children}
    </ConfigProvider>
  );
};
