import styles from "./page.module.css";
import OutstandingProductsFirst from "@/components/mainContent/outstandingProductsFirst/OutstandingProductsFirst";
import MainSlider from "@/components/mainContent/mainSlider/MainSlider";

import {useTranslations} from "next-intl";

export default function Home() {
  const t = useTranslations("Index");

  return (
    <main className={styles.main}>
      <MainSlider />
      <OutstandingProductsFirst />
    </main>
  );
}
