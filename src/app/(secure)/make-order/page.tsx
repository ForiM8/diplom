import { userGet } from "@/actions/user/user.actions";
import { authOptions } from "@/app/config/auth";
import { withErrorHandler } from "@/utils/withErrorHandler";
import { MakeOrderPage } from "@/views/make-order/MakeOrderPage";
import { getServerSession } from "next-auth";


export default async function MakeOrder() {
	const session = await getServerSession(authOptions);

	const { data: user, error: errorUser } = await withErrorHandler(() =>
		userGet({
			email: session?.user?.email
		})
	);
	return (
		<MakeOrderPage userData={user?.result} />
	)
}
