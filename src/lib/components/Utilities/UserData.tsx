import { GetServerSidePropsContext } from "next";

export const returnUserData = (ctx: GetServerSidePropsContext) => {
	const { admin, userIn } = ctx.req.cookies;
	return {
		data: {
			user: admin,
			redirect: !userIn,
		},
	};
};
