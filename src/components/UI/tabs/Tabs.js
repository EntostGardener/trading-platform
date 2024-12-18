import Link from "next/link";
import { useLocale } from "next-intl";
import Button from "../button/Button";

import styles from "./Tabs.module.css";

export default function Tabs({ type, tabData }) {
  const locale = useLocale();

  return (
    <>
      {type === "tabs01" && (
        <div className={styles.tabsWrapper}>
          {tabData.map((i, index) => {
            return (
              <Link href={`/${locale}${i.path}`} key={index}>
                <Button type="tab" title={i.title} />
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
}
