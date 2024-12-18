"use client";
import { useLocale } from "next-intl";
import styles from "./Button.module.css";
import Image from "next/image";
import { useState } from "react";

import Search from "../../../../public/images/button/search.png";
import Cart from "../../../../public/images/button/basket.png";
import Favorites from "../../../../public/images/button/favorites.png";
import Auth from "../../../../public/images/button/customer.png";
import Menu from "../../../../public/images/button/menu.png";
import HomeSvg from "../../../../public/images/button/HomeSvg";
import SearchMBSvg from "../../../../public/images/button/SearchMBSvg";
import UK from "../../../../public/images/button/uk.png";
import Georgia from "../../../../public/images/button/georgia.png";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Button({ type, title }) {
  const localActive = useLocale();
  const router = useRouter();

  const cangeLanguage = () => {
    if (localActive === "en") {
      router.replace(`/ka`);
    }
    if (localActive === "ka") {
      router.replace(`/en`);
    }
  };

  return (
    <>
      {type === "cart" && (
        <button className={styles.squareBtn}>
          <Image alt="cart icon" src={Cart} width={30} height={30} />
        </button>
      )}

      {type === "cartMB" && (
        <button className={styles.cyrcleBtn}>
          <Image alt="cart icon" src={Cart} width={30} height={30} />
        </button>
      )}

      {type === "home" && (
        <button className={styles.cyrcleBtn}>
          <HomeSvg />
        </button>
      )}

      {type === "favorites" && (
        <button className={styles.squareBtn}>
          <Image alt="favorites" src={Favorites} width={30} height={30} />
        </button>
      )}

      {type === "favoritesMB" && (
        <button className={styles.cyrcleBtn}>
          <Image alt="favorites" src={Favorites} width={30} height={30} />
        </button>
      )}

      {type === "auth" && (
        <Link href={`/login`}>
          <button className={styles.squareBtn}>
            <Image alt="auth icon" src={Auth} width={30} height={30} />
          </button>
        </Link>
      )}

      {type === "authMB" && (
        <button className={styles.cyrcleBtn}>
          <Image alt="auth icon" src={Auth} width={30} height={30} />
        </button>
      )}

      {type === "search" && (
        <button className={styles.searchBtn}>
          <Image alt="seatch icon" src={Search} width={30} height={30} />
        </button>
      )}

      {type === "searchMB" && (
        <button className={styles.cyrcleBtn}>
          <SearchMBSvg />
        </button>
      )}

      {type === "langs" && (
        <button className={styles.langBtn} onClick={cangeLanguage}>
          {localActive === "en" && (
            <Image alt="seatch icon" src={UK} width={50} height={50} />
          )}
          {localActive === "ka" && (
            <Image alt="seatch icon" src={Georgia} width={50} height={50} />
          )}
        </button>
      )}

      {type === "saidbar_taggle" && (
        <button className={styles.saidbarTaggle}>
          <Image alt="burger icon" src={Menu} width={30} height={30} />
        </button>
      )}

      {type === "tab" && <button className={styles.tab}>{title}</button>}
    </>
  );
}
