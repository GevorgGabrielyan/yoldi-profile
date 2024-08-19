import "../../../app-style.css";

import Account from "@/components/Account";
import { getSession } from "@/app/lib/session";

const Page = async () => {
  const apiKey = await getSession();
  return <Account apiKey={apiKey} isOwner={true} />;
};

export default Page;
