import { GetServerSidePropsContext } from "next";

export const returnUserData = (ctx: GetServerSidePropsContext) => {
	const { admin, adminIn } = ctx.req.cookies;
	return {
		data: {
			user: admin,
			redirect: !adminIn,
		},
	};
};
