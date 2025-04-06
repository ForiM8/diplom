import { Open_Sans } from "next/font/google";
import "./globals.scss";
import clsx from "clsx";
import styles from './layout.module.scss';
import { Header } from "@/components/layout/Header/Header";
import { Footer } from "@/components/layout/Footer/Footer";

const ubuntu = Open_Sans({
  subsets: ['cyrillic', 'latin'],
  weight: ['400', '500', '700'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={clsx(ubuntu.className, styles.layout)}>
        <div className='layout'>
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
