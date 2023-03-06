import Admin from "lib/components/Utils/SettingsTab/Admin";
import { DataAccess } from "lib/Utils/Api";
import { GetServerSideProps } from "next";
import { UserView } from "Services";

function admin({
  data,
  adminId,
  allUsers,
  url,
}: {
  data: UserView;
  adminId: number;
  allUsers: any;
  url: string;
}) {
  return <Admin data={data} userId={adminId} allUsers={allUsers} url={url} />;
}

export default admin;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const bearer = `Bearer ${ctx.req.cookies.adminToken}`;
  const _dataAccess = new DataAccess(bearer);
  let { url, search, adminId, offset, page } = ctx.query;
  if (!url) {
    url = "";
  }
  if (url) {
    url = `${url}&offset=${offset}`;
  }
  if (search) {
    url = `${url}&search=${search}`;
  }
  if (page) {
    url = `${url}&page=${page}`;
  }
  console.log({ url, search, adminId, offset });
  const data = (await _dataAccess.get(`/api/Admin/user/${adminId}`)).data;
  // console.log({ data });

  if ((data && data.id != adminId) || adminId == "0") {
    if (url) {
      return {
        redirect: {
          permanent: false,
          destination: `/admin/users?url=${url}`,
        },
      };
    }
  }

  try {
    const allUsers = (await _dataAccess.get(`/api/Admin/list?${url}`)).data;

    return {
      props: {
        data,
        allUsers,
        adminId,
        url,
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
