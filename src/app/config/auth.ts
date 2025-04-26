// // import { login, refresh } from '@/actions/auth/auth.action'
// import { parseJwt } from '@/actions/jwt.service'
// import type { AuthOptions } from 'next-auth'
// import CredentialsProvider from 'next-auth/providers/credentials'

// export type SessionType = {
// 	expires: string
// 	user: {
// 		accessTokenExpires: number
// 		accessToken: string
// 		email: string
// 		status: number
// 	}
// }

// async function refreshAccessToken(refreshToken: any) {
// 	try {
// 		// console.warn('trying to post to refresh token')

// 		const refreshedTokens = await refresh(refreshToken.refreshToken)

// 		if (!refreshedTokens || !refreshedTokens.result) {
// 			// console.warn('No refreshed tokens')
// 			throw refreshedTokens
// 		}

// 		// console.warn('Refreshed tokens successfully')
// 		return {
// 			...refreshToken,
// 			accessToken: refreshedTokens.result.accessToken,
// 			accessTokenExpires: parseJwt(refreshedTokens.result.accessToken)?.exp,
// 			refreshToken: refreshedTokens.result.refreshToken,
// 		}
// 	} catch (error) {
// 		// console.warn('Error refreshing token', error)
// 		return {
// 			...refreshToken,
// 			error: 'RefreshAccessTokenError',
// 		}
// 	}
// }

// export const authOptions: AuthOptions = {
// 	providers: [
// 		CredentialsProvider({
// 			id: 'login',
// 			name: 'Login',
// 			type: 'credentials',
// 			credentials: {
// 				email: { label: 'email', type: 'email', required: true },
// 				password: { label: 'password', type: 'password', required: true },
// 			},
// 			async authorize(credentials) {
// 				try {
// 					if (!credentials?.email || !credentials?.password)
// 						throw new Error('no credentials to log in as')

// 					const userTokens = await login(
// 						credentials.email,
// 						credentials?.password
// 					)

// 					const user = {
// 						email: credentials.email,
// 						accessToken: userTokens.result.accessToken,
// 						accessTokenExpires: parseJwt(userTokens.result.accessToken)?.exp,
// 						refreshToken: userTokens.result.refreshToken,
// 						status: userTokens.result.status,
// 					}

// 					const allowedStatus = [1]

// 					// Only allow admins and sales
// 					if (!allowedStatus.includes(user?.status)) {
// 						throw new Error('Not allowed')
// 					}

// 					// const allowedRoles = [
// 					//   "4",
// 					// ];

// 					// // Only allow admins and sales
// 					// if (!allowedRoles.includes(user.role)) {
// 					//   throw createError({
// 					//     statusCode: 403,
// 					//     statusMessage: "Not allowed",
// 					//   });
// 					// }

// 					return user as any
// 				} catch (ignored) {
// 					return null
// 				}
// 			},
// 		}),
// 	],
// 	secret: process.env.NEXTAUTH_SECRET,
// 	pages: {
// 		signIn: '/',
// 	},
// 	session: {
// 		strategy: 'jwt',
// 	},
// 	callbacks: {
// 		async jwt({ token, account, user }) {
// 			if (account && user) {
// 				// console.warn("JWT callback", { token, user, account });
// 				return {
// 					...token,
// 					...user,
// 				}
// 			}
// 			if (
// 				token.accessTokenExpires &&
// 				Date.now() > Number(token.accessTokenExpires)
// 			) {
// 				// console.warn('Token is expired. Getting a new')
// 				return refreshAccessToken(token)
// 			}

// 			return token
// 		},

// 		async session({ session, token }) {
// 			// console.warn("Calling async session", session, token);
// 			session.user = {
// 				...session.user,
// 				...token,
// 			}

// 			return session
// 		},
// 	},
// }
