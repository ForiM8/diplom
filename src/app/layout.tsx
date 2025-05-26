import { Footer } from '@/components/layout/Footer/Footer';
import clsx from 'clsx';
import { Roboto } from 'next/font/google';
import { Header } from '../components/layout/Header/Header';
import './globals.scss';
import styles from './layout.module.scss';
import { MainProvider } from '@/providers/MainProvider';
import Head from 'next/head';
import 'react-toastify/dist/ReactToastify.css'
import { getServerSession } from 'next-auth';
import { authOptions } from './config/auth';
import { userGet } from '@/actions/user/user.actions';
import { withErrorHandler } from '@/utils/withErrorHandler';

const ubuntu = Roboto({
  subsets: ['cyrillic', 'latin'],
  weight: ['400', '500', '700'],
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions);
  const { data: user, error: errorUser } = await withErrorHandler(() =>
    userGet({
      email: session?.user?.email
    })
  );
  return (
    <html lang='en'>
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <body className={clsx(ubuntu.className, styles.layout)}>
        <MainProvider>
          <div className='layout'>
            <Header user={user?.result} />
            <main>{children}</main>
            <Footer />
          </div>
        </MainProvider>
      </body>
    </html>
  );
}
