import "./globals.css";

import type { Metadata } from "next";
import { ReactNode } from "react";
import { RootLayout } from "@/layouts/RootLayout";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { Fonts } from "@/app/config/configs";
import { BaseLayout } from "@/layouts/BaseLayout";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const Layout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => (
  <html lang="en">
    <RootLayout>
      <body className={Fonts.className}>
        <AntdRegistry>
          <BaseLayout>{children}</BaseLayout>
        </AntdRegistry>
      </body>
    </RootLayout>
  </html>
);

export default Layout;
