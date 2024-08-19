import { Button, Form, FormProps, Input, message, Modal } from "antd";
import { IUser } from "@/types/IUsers";
import { UserOutlined } from "@ant-design/icons";
import useSWRMutation from "swr/mutation";
import { UserService } from "@/services/api/user.service";
import TextArea from "antd/es/input/TextArea";
import { useSWRConfig } from "swr";

const EditUserModal = ({
  handleClose,
  user,
  coverId,
  imageId,
}: {
  handleClose: () => void;
  user: IUser;
  imageId?: uuid;
  coverId?: uuid;
}) => {
  const { mutate } = useSWRConfig();

  const handleOk = () => {
    handleClose();
  };
  const { isMutating, trigger } = useSWRMutation(
    "Signup",
    (_, { arg }: { arg: IUser }) => UserService.editProfile(arg),
  );
  const onFinish: FormProps<IUser>["onFinish"] = async (values: IUser) => {
    try {
      await trigger({
        ...values,
        imageId,
        coverId,
        image: imageId ? values.image : null,
        cover: coverId ? values.cover : null,
      });
      handleClose();
      mutate("Me");
      mutate("Profile");
    } catch (error: any) {
      message.error(error?.response?.data?.message);
    }
  };
  return (
    <>
      <Modal
        width="600px"
        closeIcon={null}
        title={
          <div style={{ fontSize: "30px", lineHeight: "42px" }}>
            Редактировать профиль
          </div>
        }
        footer={null}
        open={true}
        onOk={handleOk}
        onCancel={handleClose}
      >
        <Form
          name="user"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <div>
            <Form.Item<IUser>
              name="name"
              initialValue={user?.name}
              label="Имя"
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
                size="large"
                style={{ height: "50px", width: "100%" }}
                placeholder="Имя"
                prefix={<UserOutlined />}
              />
            </Form.Item>
          </div>
          <div>
            <Form.Item<IUser>
              name="slug"
              initialValue={user?.slug}
              label="Адрес профиля"
              rules={[{ required: true, message: "Please input your email!" }]}
            >
              <Input
                placeholder="Адрес профиля"
                style={{ height: "50px", width: "100%" }}
                size="large"
                addonBefore="example.com/"
              />
            </Form.Item>
          </div>
          <div>
            <Form.Item<IUser>
              name="description"
              initialValue={user?.description}
              rules={[
                {
                  required: true,
                  whitespace: true,
                  message: "Пожалуйста, введите описание!",
                },
                {
                  min: 2,
                  message: "Имя должно быть больше 2!",
                },
              ]}
              label="Описание"
            >
              <TextArea
                maxLength={500}
                placeholder="Описание"
                autoSize={{ minRows: 3, maxRows: 5 }}
              />
            </Form.Item>
          </div>
          <div
            style={{
              gap: "10px",
              paddingTop: "20px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button
              type="default"
              style={{
                width: "265px",
                height: "50px",
                fontWeight: "500",
                gap: "10px",
                lineHeight: "26.5px",
              }}
            >
              Отмена
            </Button>
            <Button
              loading={isMutating}
              type="primary"
              htmlType="submit"
              style={{
                width: "265px",
                height: "50px",
                fontWeight: "500",
                gap: "10px",
                lineHeight: "26.5px",
              }}
            >
              Сохранить
            </Button>
          </div>
        </Form>
      </Modal>
    </>
  );
};

export default EditUserModal;
