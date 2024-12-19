// "use client";
import {useLocale} from "next-intl";

export default function NotFound() {
  const localActive = useLocale();
  return (
    <html lang={localActive}>
      <body>
        <p>This page does not exist.</p>
      </body>
    </html>
  );
}
