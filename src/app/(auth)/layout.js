import LogoSvg from "../../../public/images/logo/LogoSvg";
import styles from "./auth.module.css";
import Link from "next/link";
// import {useLocale, useTranslations} from "next-intl";

export const metadata = {
  title: {
    absolute: "",
    default: "company name",
    template: "%s | company name",
  },
  description: "Generated by Next.js",
};

export default function AuthLayout({ children }) {
  // const localActive = useLocale();

  return (
    <>
      <div className={styles.headLayout}>
        <LogoSvg />
      </div>
      <div className={styles.loginContent}>
        <h1>Enter your Email and Password</h1>
        <div className={styles.signCont}>
          {children}
          <p>Forgot password?</p>
          <p>Need help?</p>
          <Link href={`/register`}>
            <p>CREATE ACCOUNT</p>
          </Link>
        </div>
      </div>
    </>
  );
}
