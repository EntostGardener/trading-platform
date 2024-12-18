import {redirect} from "next/navigation";
import {useLocale} from "next-intl";

export default function RootPage() {
  const localActive = useLocale();
  redirect(`/${localActive}`);
}
