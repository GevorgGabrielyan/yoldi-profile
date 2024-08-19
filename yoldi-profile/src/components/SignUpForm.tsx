"use client";

import { Button, Form, FormProps, Input } from "antd";
import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  LockOutlined,
  MailOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { IUser } from "@/types/IUsers";
import { AuthService } from "@/services/api/auth.service";
import useSWRMutation from "swr/mutation";
import { Patterns } from "@/utils/validators";

const SigUpForm = () => {
  const { isMutating, trigger } = useSWRMutation(
    "Signup",
    (_, { arg }: { arg: IUser }) => AuthService.signup(arg),
  );

  const onFinish: FormProps<IUser>["onFinish"] = async (values: IUser) => {
    await trigger(values);
  };

  return (
    <Form
      name="signup"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      autoComplete="off"
    >
      <div style={{ paddingTop: "24px" }}>
        <Form.Item<IUser>
          name="name"
          rules={[
            {
              required: true,
              message: "Пожалуйста, введите имя пользователя!",
                whitespace: true,
            },
            {
              min: 2,
              message: "Имя должно быть больше 2!",
            },
          ]}
        >
          <Input
            maxLength={20}
            size="large"
            style={{ height: "50px" }}
            placeholder="Имя"
            prefix={<UserOutlined />}
          />
        </Form.Item>
      </div>
      <div style={{ paddingTop: "10px" }}>
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
          loading={isMutating}
          htmlType="submit"
          style={{
            width: "100%",
            height: "50px",
            fontWeight: 500,
            fontSize: "16px",
          }}
        >
          Создать аккаунт
        </Button>
      </div>
    </Form>
  );
};

export default SigUpForm;
