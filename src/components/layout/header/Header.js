"use client";

import styles from "./Header.module.css";
import { useLocale, useTranslations } from "next-intl";
import { usePathname,  useRouter } from "next/navigation";
import Button from "@/components/UI/button/Button";
import LogoSvg from "../../../../public/logo/LogoSvg";
import LogoSvgGe from "../../../../public/logo/LogoSvgGe";
import Tabs from "@/components/UI/tabs/Tabs";
import useWindowSize from "@/hook/useWindowSize";

const tabData = [
  { title: "Home", path: "/" },
  { title: "Learn trading", path: "/learn" },
  { title: "about Us", path: "/about-us" },
  { title: "FAQ", path: "/faq" },
  { title: "Contact Us", path: "/contact-us" },
];

export default function Header() {
  const router = useRouter(); 
  const [width, height] = useWindowSize();
  const localActive = useLocale();
  // const t = useTranslations("Header");
  const pathname = usePathname();
  if (
    pathname === `/${localActive}/register` ||
    pathname === `/${localActive}/login` ||
    pathname === `/${localActive}/forgot-password`
  ) {
    return;
  }

  return (
    <div className={styles.header}>
      <div className={styles.headerTop}>
        {localActive === "en" && <LogoSvg />}
        {localActive === "ka" && <LogoSvgGe />}
        {width >= 770 && (
          <div className={styles.headerBottom}>
            <Button type="saidbar_taggle" />
            <Tabs type="tabs01" tabData={tabData} />
          </div>
        )}
        {width <= 770 && (
          <div className={styles.mobileBar} style={{ width: width }}>
            <Button type="searchMB" />
            {/* <Button type="favoritesMB" />
            <Button type="cartMB" /> */}
            <Button type="authMB" />
          </div>
        )}
        {width >= 770 && (
          <>
            <div className={styles.headerBtnWraper}>
              <Button type="langs" />
              {/* <Button type="favorites" />
              <Button type="cart" /> */}
              <Button type="auth" />
            </div>
          </>
        )}
        {width <= 770 && (
          <>
            <Button type="langs" />
            <Button type="saidbar_taggle" />
          </>
        )}
      </div>
    </div>
  );
}
