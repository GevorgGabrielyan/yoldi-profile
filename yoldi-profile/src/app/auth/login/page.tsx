import "../auth-styles.css";

import LoginForm from "@/components/LoginForm";
import { Button } from "antd";
import FooterBlock from "@/components/FooterBlock";

const Login = () => (
  <>
    <div className="auth-layout">
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
        <Button type="text" style={{ fontWeight: 500, padding: "5px" }}>
          Зарегистрироваться
        </Button>
      </div>
    </FooterBlock>
  </>
);

export default Login;
