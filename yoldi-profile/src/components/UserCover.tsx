import { Avatar, Button, Upload } from "antd";
import Image from "next/image";
import { IUser } from "@/types/IUsers";
import { Configs } from "@/app/config/configs";
import { useEffect, useState } from "react";
import { IImage } from "@/types/IImage";
import { UploadChangeParam, UploadFile } from "antd/es/upload/interface";

const generateUploadProps = (apiKey: string) => ({
  name: "file",
  action: `${process.env.NEXT_PUBLIC_BACKEND_URL}/image`,
  headers: {
    "X-API-KEY": apiKey,
  },
});

const UserCover = ({
  user,
  selectCoverId,
  selectImageId,
}: {
  user: IUser;
  selectCoverId: (id?: uuid) => void;
  selectImageId: (id?: uuid) => void;
}) => {
  const [uploadedAvatar, setUploadAvatar] = useState<IImage>();
  const [uploadedCover, setUploadCover] = useState<IImage>();

  const apiKey = localStorage.getItem(Configs.apiKey);

  const handleUploadCover = (file: UploadChangeParam<UploadFile<IImage>>) => {
    setUploadCover(file.file.response);
  };

  const handleUploadAvatar = (file: UploadChangeParam<UploadFile<IImage>>) => {
    setUploadAvatar(file.file.response);
  };

  useEffect(() => {
    selectCoverId(uploadedCover?.id);
    selectImageId(uploadedAvatar?.id);
  }, [uploadedAvatar, uploadedCover]);

  useEffect(() => {
    setUploadAvatar(user.image);
    setUploadCover(user.cover);
  }, [user]);
  return (
    <div className="cover-block">
      <div
        className="cover-image"
        style={{
          backgroundImage: `url(${uploadedCover?.url})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        {user.image || uploadedCover ? (
          <Button
            onClick={() => setUploadCover(undefined)}
            type="default"
            style={{
              width: "195",
              height: "40px",
              fontWeight: "500",
              gap: "10px",
              lineHeight: "26.5px",
            }}
          >
            <Image src="/icons/trash.svg" width={25} height={25} alt="trash" />
            Удалить
            <Image src="/icons/image.svg" width={25} height={25} alt="image" />
          </Button>
        ) : (
          <Upload<IImage>
            accept="image/png, image/jpeg"
            maxCount={1}
            showUploadList={false}
            {...generateUploadProps(apiKey as string)}
            onChange={handleUploadCover}
          >
            <Button
              type="default"
              style={{
                width: "195",
                height: "40px",
                fontWeight: "500",
                gap: "10px",
                lineHeight: "26.5px",
              }}
            >
              <Image
                src="/icons/upload.svg"
                width={25}
                height={25}
                alt="upload"
              />
              Загрузить
              <Image
                src="/icons/image.svg"
                width={25}
                height={25}
                alt="image"
              />
            </Button>
          </Upload>
        )}
      </div>
      <div className="avatar-block">
        <Upload
          accept="image/png, image/jpeg"
          maxCount={1}
          showUploadList={false}
          {...generateUploadProps(apiKey as string)}
          onChange={handleUploadAvatar}
        >
          <Avatar
            style={{
              cursor: "pointer",
              width: "100px",
              height: "100px",
              fontSize: "18px",
              background: "#F3F3F3",
              border: "1px solid #E6E6E6",
              color: "#000",
            }}
            src={uploadedAvatar?.url}
          >
            {user.name[0]}
          </Avatar>
          {!!uploadedAvatar?.url && (
            <div
              className="remove-avatar"
              onClick={(event) => {
                event.stopPropagation();
                setUploadAvatar(undefined);
              }}
            >
              <Button
                shape="circle"
                icon={
                  <Image
                    src="/icons/trash.svg"
                    width={25}
                    height={25}
                    alt="trash"
                  />
                }
              />
            </div>
          )}
        </Upload>
      </div>
    </div>
  );
};

export default UserCover;
