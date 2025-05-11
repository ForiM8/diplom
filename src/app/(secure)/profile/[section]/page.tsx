
import { userGet } from '@/actions/user/user.actions'
import userStore from '@/stores/user/UserStores'
import { withErrorHandler } from '@/utils/withErrorHandler'
import { ProfilePage } from '@/views/profile/ProfilePage'

export default async function Profile() {
	const { data: user, error: errorUser } = await withErrorHandler(() =>
		userGet({
			email: userStore.user?.email
		})
	)
	console.log('user - ', user)
	return (
		<ProfilePage user={user?.result} />
	)
}
