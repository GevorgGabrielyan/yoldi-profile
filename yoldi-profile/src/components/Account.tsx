"use client";

import useSWR from "swr";
import { UserService } from "@/services/api/user.service";
import { useParams } from "next/navigation";
import { Button, Spin } from "antd";
import Image from "next/image";
import UserCover from "@/components/UserCover";
import { useState } from "react";
import EditUserModal from "@/components/EditUserModal";

const Account = () => {
  const { id } = useParams();

  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  const [imageId, selectImageId] = useState<uuid>();
  const [coverId, selectCoverId] = useState<uuid>();

  const { data, isValidating } = useSWR("Profile", () =>
    UserService.account(id as string),
  );

  return (
    <Spin spinning={isValidating}>
      <div style={{ paddingTop: "80px" }}>
        {data && (
          <div>
            <UserCover
              user={data}
              selectCoverId={selectCoverId}
              selectImageId={selectImageId}
            />
            <div className="user-block">
              <div className="user-info">
                <div>
                  <div className="user-name">{data.name}</div>
                  <div style={{ color: "gray", lineHeight: "25.6px" }}>
                    {data.email}
                  </div>
                </div>
                <Button
                  onClick={() => setIsOpenModal(true)}
                  style={{
                    width: "200px",
                    height: "40px",
                    fontWeight: "500",
                    gap: "10px",
                    lineHeight: "26.5px",
                  }}
                >
                  <Image
                    src="/icons/edit.svg"
                    width={20}
                    height={20}
                    alt="edit"
                  />
                  Редактировать
                </Button>
              </div>
              <div className="user-desc">{data.description}</div>
              <Button
                style={{
                  width: "130px",
                  height: "40px",
                  marginTop: "60px",
                  fontWeight: "500",
                  gap: "10px",
                  lineHeight: "26.5px",
                }}
              >
                <Image
                  src="/icons/sign-out.svg"
                  width={20}
                  height={20}
                  alt="sign-out"
                />
                Выйти
              </Button>
            </div>
          </div>
        )}
      </div>
      {isOpenModal && data && (
        <EditUserModal
          user={data}
          handleClose={() => setIsOpenModal(false)}
          coverId={coverId}
          imageId={imageId}
        />
      )}
    </Spin>
  );
};

export default Account;
