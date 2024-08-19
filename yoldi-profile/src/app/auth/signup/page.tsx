import "../auth-styles.css";

import SigUpForm from "@/components/SignUpForm";
import { Button } from "antd";
import FooterBlock from "@/components/FooterBlock";
import Link from "next/link";

const Signup = () => (
  <>
    <div className="auth-content">
      <div
        style={{
          fontSize: "30px",
          fontWeight: 500,
          lineHeight: "42px",
        }}
      >
        Регистрация <br />в Yoldi Agency
      </div>
      <SigUpForm />
    </div>
    <FooterBlock>
      <div>
        Уже есть аккаунт?
        <Link href={`/auth/login`} style={{ all: "unset" }}>
          <Button type="text" style={{ fontWeight: 500, padding: "5px" }}>
            Войти
          </Button>
        </Link>
      </div>
    </FooterBlock>
  </>
);

export default Signup;
