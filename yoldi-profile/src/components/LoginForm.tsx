"use client";

import { Button, Input } from "antd";
import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  LockOutlined,
  MailOutlined,
} from "@ant-design/icons";

const LoginForm = () => (
  <>
    <div style={{ paddingTop: "25px" }}>
      <Input
        style={{ height: "50px" }}
        size="large"
        placeholder="E-mail"
        prefix={<MailOutlined />}
      />
    </div>
    <div style={{ paddingTop: "25px" }}>
      <Input.Password
        style={{ height: "50px" }}
        size="large"
        placeholder="Пароль"
        iconRender={(visible) =>
          visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
        }
        prefix={<LockOutlined />}
      />
    </div>
    <div style={{ paddingTop: "25px" }}>
      <Button
        type="primary"
        style={{
          background: "#000",
          width: "100%",
          height: "50px",
          fontWeight: 500,
          fontSize: "16px",
        }}
      >
        Войти
      </Button>
    </div>
  </>
);

export default LoginForm;
