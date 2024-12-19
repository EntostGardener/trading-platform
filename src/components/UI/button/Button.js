import { useLocale } from "next-intl";
import styles from "./Button.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";

import Auth from "../../../../public/button/customer.png";
import Menu from "../../../../public/button/menu.png";
import HomeSvg from "../../../../public/button/HomeSvg";
import UK from "../../../../public/button/uk.png";
import Georgia from "../../../../public/button/georgia.png";

export default function Button({ type, title }) {
  const localActive = useLocale();
  const router = useRouter();

  const changeLanguage = () => {
    if (localActive === "en") {
      router.replace(`/ka`);
    }
    if (localActive === "ka") {
      router.replace(`/en`);
    }
  };

  return (
    <>
      {type === "home" && (
        <button className={styles.cyrcleBtn}>
          <HomeSvg />
        </button>
      )}

      {type === "auth" && (
        <Link href={`/login`}>
          <button className={styles.squareBtn}>
            <Image alt="auth icon" src={Auth} width={30} height={30} />
          </button>
        </Link>
      )}
      {type === "langs" && (
        <button className={styles.langBtn} onClick={changeLanguage}>
          {localActive === "en" && (
            <Image alt="UK flag" src={UK} width={50} height={50} />
          )}
          {localActive === "ka" && (
            <Image alt="Georgia flag" src={Georgia} width={50} height={50} />
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