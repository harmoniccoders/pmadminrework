import { returnUserData } from "lib/components/Utilities/UserData";
import Dashboard from "lib/components/Utils/Dashboard";
import { DataAccess } from "lib/Utils/Api";
import { GetServerSideProps } from "next";
import { MetricsView } from "Services";

interface DashboardProps {
  data: MetricsView;
  users: any;
  trans: any;
}
function dashboard({ data, users, trans }: DashboardProps) {
  const userData = users?.value?.slice(0, 10);
  const transData = trans?.value.slice(0, 10);
  return <Dashboard data={data} users={userData} trans={transData} />;
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
  let { url } = ctx.query;
  url = "limit=10&offset=0";

  const bearer = `Bearer ${ctx.req.cookies.adminToken}`;
  const _dataAccess = new DataAccess(bearer);
  try {
    const data = (await _dataAccess.get(`/api/Admin/metrics`)).data;
    const users = (await _dataAccess.get(`/api/User/list?${url}`)).data;
    const trans = (await _dataAccess.get(`/api/Admin/transactions/list?${url}`))
      .data;
    console.log({ trans });

    return {
      props: {
        data,
        users,
        trans,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {
        data: [],
        trans: [],
        users: [],
      },
    };
  }
};
