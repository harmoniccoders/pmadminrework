import { Box, Flex } from "@chakra-ui/react";
import SecondaryTab from "lib/components/Utilities/SecondaryTab";
import { returnUserData } from "lib/components/Utilities/UserData";
import Requests from "lib/components/Utils/LoansTabs/Requests";
import Reviews from "lib/components/Utils/LoansTabs/Review";
import { DataAccess } from "lib/Utils/Api";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { useState } from "react";

function Review({ request, review, sourcing, approval }: any) {
	const [currentTab, setCurrentTab] = useState("review");
	const router = useRouter();
	const navigateTabs = (tabname: string) => {
		router.push(`/admin/relief/${tabname}`);
	};

	return (
		<Box w="100%" p="0rem" minH="90vh">
			<Flex borderBottom="1px solid rgba(36,68,115,0.1)" mt=".5rem">
				<Box onClick={() => navigateTabs("requests")}>
					<SecondaryTab
						tabname="requests"
						num={request.size}
						icon="fa-arrow-down"
						currentTab={currentTab}
					/>
				</Box>
				<Box onClick={() => navigateTabs("review")}>
					<SecondaryTab
						tabname="review"
						num={review.size}
						icon="fa-fingerprint"
						currentTab={currentTab}
					/>
				</Box>
				<Box onClick={() => navigateTabs("sourcing")}>
					<SecondaryTab
						tabname="sourcing"
						num={sourcing.size}
						icon="fa-file-search"
						currentTab={currentTab}
					/>
				</Box>
				<Box onClick={() => navigateTabs("approval")}>
					<SecondaryTab
						tabname="approval"
						num={approval.size}
						icon="fa-user-check"
						currentTab={currentTab}
					/>
				</Box>
			</Flex>
			<Reviews data={review} />
		</Box>
	);
}

export default Review;

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
	let { url, search } = ctx.query;
	if (url == "" || undefined || null) {
		url = "limit=8&offset=0&";
	}
	url = url ?? "limit=8&offset=0&";

	if (search) {
		url = `${url}search=${search}`;
	}
	try {
		const request = (
			await _dataAccess.get(`/api/Admin/applications/reliefs/pending?${url}`)
		).data;
		const review = (
			await _dataAccess.get(`/api/Admin/applications/reliefs/reviewed?${url}`)
		).data;
		const sourcing = (
			await _dataAccess.get(`/api/Admin/applications/reliefs/accepted?${url}`)
		).data;
		const approval = (
			await _dataAccess.get(`/api/Admin/applications/reliefs/approved?${url}`)
		).data;

		return {
			props: {
				request,
				review,
				sourcing,
				approval,
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
