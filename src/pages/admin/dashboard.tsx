import { returnUserData } from "lib/components/Utilities/UserData";
import Dashboard from "lib/components/Utils/Dashboard";
import { DataAccess } from "lib/Utils/Api";
import { GetServerSideProps } from "next";
import {
	AdminService,
	MetricsView,
	MetricsViewStandardResponse,
} from "Services";

interface DashboardProps {
	data: MetricsView;
}
function dashboard({ data }: DashboardProps) {
	return <Dashboard data={data} />;
}

export default dashboard;

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
	const bearer = `Bearer ${ctx.req.cookies.adminToken}`;

	const _dataAccess = new DataAccess(bearer);
	try {
		const data = (await _dataAccess.get(`/api/Admin/metrics`)).data;

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
