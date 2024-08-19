import "../auth-styles.css";

import LoginForm from "@/components/LoginForm";
import { Button } from "antd";
import FooterBlock from "@/components/FooterBlock";
import { redirect } from "next/navigation";
import Link from "next/link";

const Login = () => (
  <>
    <div className="auth-content">
      <div
        style={{
          fontSize: "30px",
          fontWeight: 500,
          lineHeight: "42px",
        }}
      >
        Вход в Yoldi Agency
      </div>
      <LoginForm />
    </div>
    <FooterBlock>
      <div>
        Еще нет аккаунта?
        <Link style={{ all: "unset" }} href="/auth/signup">
          <Button type="text" style={{ fontWeight: 500, padding: "5px" }}>
            Зарегистрироваться
          </Button>
        </Link>
      </div>
    </FooterBlock>
  </>
);

export default Login;
