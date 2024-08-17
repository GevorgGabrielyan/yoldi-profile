import "../auth-styles.css";

import SigUpForm from "@/components/SignUpForm";
import { Button } from "antd";
import FooterBlock from "@/components/FooterBlock";

const Signup = () => (
  <>
    <div className="auth-layout">
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
        <Button type="text" style={{ fontWeight: 500, padding: "5px" }}>
          Войти
        </Button>
      </div>
    </FooterBlock>
  </>
);

export default Signup;
