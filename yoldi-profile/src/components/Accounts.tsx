"use client";

import useSWR from "swr";
import { UserService } from "@/services/api/user.service";
import { Avatar, Spin } from "antd";
import Link from "next/link";

const Accounts = () => {
  const { data, isValidating } = useSWR("Accounts", UserService.accounts);
  return (
    <div className="accounts-block">
      <div className="account-list">
        <div
          className="user-name"
        >
          Список аккаунтов
        </div>
        <Spin size="small" spinning={isValidating}>
          <div className="accounts-scroll">
            {data?.map((item, index) => (
              <div
                key={item.email}
                style={{
                  display: "flex",
                  padding: "10px 0",
                  borderTop: !index ? "1px solid #E6E6E6" : "none",
                  borderBottom: "1px solid #E6E6E6",
                  alignItems: "center",
                }}
              >
                <Avatar
                  style={{
                    cursor: "pointer",
                    width: "50px",
                    height: "50px",
                    fontSize: "18px",
                    background: "#F3F3F3",
                    color: "#000",
                  }}
                  src={item.image?.url}
                >
                  {item.name[0]}
                </Avatar>
                <div className="account-list-item-info">
                  <Link href={`/accounts/${item.slug}`} style={{ all: "unset", cursor: "pointer" }}>
                    <div style={{ fontWeight: "500" }}>{item.name}</div>
                  </Link>
                  <div style={{ fontWeight: "400", color: "#838383" }}>
                    {item.email}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Spin>
      </div>
    </div>
  );
};

export default Accounts;
