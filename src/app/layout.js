import Providers from "@/redux/Providers";
import {Josefin_Sans} from "next/font/google";
import "./globals.css";

const roboto = Josefin_Sans({weight: ["600"], subsets: ["latin"]});

export default function RootLayout({children, params: {locale}}) {
  return (
    <html lang={locale}>
      <body className={roboto.className}>
        <Providers>
          <>{children}</>
        </Providers>
      </body>
    </html>
  );
}
