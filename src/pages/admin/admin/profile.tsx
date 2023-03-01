import { returnUserData } from "lib/components/Utilities/UserData";
import Admin from "lib/components/Utils/SettingsTab/Admin";
import { DataAccess } from "lib/Utils/Api";
import { GetServerSideProps } from "next";
import { AdminService } from "Services";

function admin({admins}: any) {
	return <Admin admins={admins}/>;
}

export default admin;

export const getServerSideProps: GetServerSideProps = async (ctx) => {

	console.log(" in profilee")
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
		console.log(" in profilee")
	//   const admins = (await _dataAccess.get(`/api/Admin/list}`)).data;
	const admins = await AdminService.listAdmins(bearer); 
	  console.log("RETURNED DATA ", admins)
	  return {
		props: {
		  admins: admins.data?.value,
		},
	  };
	} catch (error) {
		
	  return {
		props: {
		  admins: JSON.stringify(error),
		},
	  };
	}
  };