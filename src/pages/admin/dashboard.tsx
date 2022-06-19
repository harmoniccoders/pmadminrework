import Dashboard from "lib/components/Utils/Dashboard";
import { GetServerSideProps } from "next";
import {
	AdminService,
	MetricsView,
	MetricsViewStandardResponse,
	UserService,
	UserViewPagedCollectionStandardResponse,
} from "Services";

interface DashboardProps {
	data: MetricsView;
}
function dashboard({ data }: DashboardProps) {
	return <Dashboard data={data} />;
}

export default dashboard;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	try {
		const data = (await AdminService.metrics()) as MetricsViewStandardResponse;
		console.log(data);
		return {
			props: {
				data: data.data,
			},
		};
	} catch (error) {
		return {
			props: {},
		};
	}
};
