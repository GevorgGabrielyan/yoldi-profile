import { Button, Layout } from "antd";
import Image from "next/image";
import useMediaQuery from "@/hooks/useMediaQuery";

const { Header } = Layout;

const HeaderBlock = () => {
  const isMobile = useMediaQuery();

  return (
    <Header
      style={{
        height: "80px",
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
      <Button
        type="default"
        style={{ borderRadius: "5px", padding: "7px 33px" }}
      >
        Войти
      </Button>
    </Header>
  );
};

export default HeaderBlock;
