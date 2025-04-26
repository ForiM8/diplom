import { Open_Sans } from "next/font/google";
import "./globals.scss";
import clsx from "clsx";
import styles from './layout.module.scss';
import { Header } from "@/components/layout/Header/Header";
import { Footer } from "@/components/layout/Footer/Footer";
import { MainProvider } from "@/providers/MainProvider";
// import Head from "next/head";

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
    <html lang='en'>
      {/* <Head>
				<link rel="icon" href="/favicon.ico" sizes="any" />
			</Head> */}
      <body className={clsx(ubuntu.className, styles.layout)}>
        <MainProvider>
          <div className='layout'>
            <Header />
            <main>{children}</main>
            <Footer />
          </div>
        </MainProvider>
      </body>
    </html>
  );
}
