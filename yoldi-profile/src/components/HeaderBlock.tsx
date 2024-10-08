import { Avatar, Button, Layout } from "antd";
import Image from "next/image";
import useMediaQuery from "@/hooks/useMediaQuery";
import { IUser } from "@/types/IUsers";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

const { Header } = Layout;

const HeaderBlock = ({
  me,
  apiKey,
}: {
  me: IUser | undefined;
  apiKey?: string;
}) => {
  const isMobile = useMediaQuery();
  const path = usePathname();
  const isLoginPage = useMemo(() => path.includes("login"), [path]);
  return (
    <Header
      style={{
        height: "80px",
        zIndex: "100",
        padding: "0 30px 0 20px",
        background: "#fff",
        display: "flex",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        borderBottom: "1px solid #E6E6E6",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Image width={80} height={50} src="/logo.png" alt="Logo" />
        {!isMobile && (
          <div
            className="header-text"
            style={{
              paddingLeft: "20px",
              width: "230px",
              fontWeight: "400",
              lineHeight: "25.6px",
              fontSize: "16px",
            }}
          >
            Разрабатываем и запускаем сложные веб проекты
          </div>
        )}
      </div>
      {me && apiKey ? (
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <div style={{ paddingRight: "15px" }}>{me.name}</div>
          <Link href={`/accounts/owner/${me.slug}`}>
            <Avatar
              style={{
                cursor: "pointer",
                width: "50px",
                height: "50px",
                fontSize: "18px",
                background: "#F3F3F3",
                color: "#000",
              }}
              src={me.image?.url}
            >
              {me.name[0]}
            </Avatar>
          </Link>
        </div>
      ) : (
        !isLoginPage && (
          <Link href={`/auth/login`} style={{ all: "unset" }}>
            <Button
              type="default"
              style={{ borderRadius: "5px", padding: "7px 33px" }}
            >
              Войти
            </Button>
          </Link>
        )
      )}
    </Header>
  );
};

export default HeaderBlock;
