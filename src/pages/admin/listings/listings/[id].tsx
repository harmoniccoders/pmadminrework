import SingleListings from "lib/components/Utilities/SingleListings";
import { returnUserData } from "lib/components/Utilities/UserData";
import { DataAccess } from "lib/Utils/Api";
import { GetServerSideProps } from "next";

function SingleListing({ data }: any) {
	return <SingleListings data={data} />;
}

export default SingleListing;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	const {
		data: { user, redirect },
	} = returnUserData(ctx);
	if (redirect)
		return {
			redirect: {
				permanent: false,
				destination: "/admin",
			},
			props: {},
		};
	const bearer = `Bearer ${ctx.req.cookies.token}`;
	const _dataAccess = new DataAccess(bearer);
	const { id } = ctx.query;

	try {
		const data = (await _dataAccess.get(`/api/Property/get/${id}`)).data;

		return {
			props: {
				data,
			},
		};
	} catch (error) {
		return {
			props: {
				data: [],
			},
		};
	}
};
