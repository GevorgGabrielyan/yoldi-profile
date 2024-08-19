"use client";

import { Button, Form, FormProps, Input, message } from "antd";
import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  LockOutlined,
  MailOutlined,
} from "@ant-design/icons";
import { IUser } from "@/types/IUsers";
import { Patterns } from "@/utils/validators";
import login from "@/app/actions/auth";

const LoginForm = () => {
  const onFinish: FormProps<IUser>["onFinish"] = async (values: IUser) => {
    try {
      await login(values);
    } catch (error: any) {
      message.error("Неверный адрес электронной почты или пароль");
    }
  };

  return (
    <Form
      name="login"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      autoComplete="off"
    >
      <div style={{ paddingTop: "24px" }}>
        <Form.Item<IUser>
          name="email"
          rules={[
            {
              required: true,
              message: "Пожалуйста, введите адрес электронной почты!",
            },
            {
              type: "email",
              pattern: Patterns.EMAIL,
              message: "Недействительный адрес электронной почты!",
            },
          ]}
        >
          <Input
            style={{ height: "50px" }}
            size="large"
            placeholder="E-mail"
            prefix={<MailOutlined />}
          />
        </Form.Item>
      </div>
      <div style={{ paddingTop: "10px" }}>
        <Form.Item<IUser>
          name="password"
          rules={[
            { required: true, message: "Пожалуйста, введите пароль!" },
            {
              pattern: Patterns.PASSWORD,
              message: "Пароль недействителен!",
            },
          ]}
        >
          <Input.Password
            style={{ height: "50px" }}
            size="large"
            placeholder="Пароль"
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
            prefix={<LockOutlined />}
          />
        </Form.Item>
      </div>
      <div style={{ paddingTop: "10px" }}>
        <Button
          type="primary"
          htmlType="submit"
          style={{
            width: "100%",
            height: "50px",
            fontWeight: 500,
            fontSize: "16px",
          }}
        >
          Войти
        </Button>
      </div>
    </Form>
  );
};

export default LoginForm;
