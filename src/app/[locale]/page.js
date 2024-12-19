import styles from "./page.module.css";
import MainSlider from "@/components/mainContent/mainSlider/MainSlider";
import { useTranslations } from "next-intl";
import LogoCorousel from "@/components/logoCorousel/LogoCorousel"; 

export default function Home() {

  return (
    <main className={styles.main}>
      <MainSlider />
      <LogoCorousel /> 
    </main>
  );
}