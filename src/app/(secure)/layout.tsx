import { authOptions } from '@/app/config/auth'
import { AuthProvider } from '@/providers/SessionProvider'
import { getServerSession } from 'next-auth'
import { Roboto } from 'next/font/google'
import { redirect } from 'next/navigation'
import '../globals.scss'

const ubuntu = Roboto({
	subsets: ['cyrillic', 'latin'],
	weight: ['400', '500', '700'],
})

export default async function SecureLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	const session = await getServerSession(authOptions)
	console.log('session - ', session)
	if (!session?.user?.email) {
		redirect('/auth')
	}
	return (
		<AuthProvider>
			<div className='layout'>
				<main>{children}</main>
			</div>
		</AuthProvider>
	)
}
