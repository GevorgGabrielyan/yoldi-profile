"use client";

import { Button, Form, FormProps, Input, message } from "antd";
import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  LockOutlined,
  MailOutlined,
} from "@ant-design/icons";
import useSWRMutation from "swr/mutation";
import { IUser } from "@/types/IUsers";
import { AuthService } from "@/services/api/auth.service";
import { Configs } from "@/app/config/configs";
import { Patterns } from "@/utils/validators";

const LoginForm = () => {
  const { isMutating, trigger } = useSWRMutation(
    "Login",
    (_, { arg }: { arg: Partial<IUser> }) => AuthService.login(arg),
  );

  const onFinish: FormProps<IUser>["onFinish"] = async (values: IUser) => {
    try {
      const res = await trigger(values);
      localStorage.setItem(Configs.apiKey, res.value);
    } catch (error: any) {
      message.error(error?.response?.data?.message);
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
          loading={isMutating}
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
