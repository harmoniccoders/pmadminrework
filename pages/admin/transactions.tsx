import AdminTransaction from "lib/components/Utilities/AdminTransaction";
import { filterPagingSearchOptions } from "lib/components/Utilities/filterPagingOptions";
import { returnUserData } from "lib/components/Utilities/UserData";
import { DataAccess } from "lib/Utils/Api";
import { GetServerSideProps } from "next";
import React from "react";
import { AdminService } from "Services";

function transactions({ data }: any) {
  return <AdminTransaction data={data} />;
}

export default transactions;

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
  const pagingOptions = filterPagingSearchOptions(ctx);
  let { url, search, Status, StartDate, EndDate } = ctx.query;
  if (url == "" || undefined || null) {
    url = "limit=10&offset=0&";
  }
  url = url ?? "limit=10&offset=0&";

  if (search) {
    url = `${url}search=${search}&`;
  }
  if (Status) {
    url = `${url}Status=${Status}&`;
  }
  if (StartDate) {
    url = `${url}StartDate=${StartDate}&`;
  }
  if (EndDate) {
    url = `${url}EndDate=${EndDate}&`;
  }
  console.log({ url });
  try {
    const data = (await _dataAccess.get(`/api/Admin/transactions/list?${url}`))
      .data;
    // const data = await AdminService.listTransactions(
    //   pagingOptions.offset,
    //   pagingOptions.limit,
    //   pagingOptions.search,
    //   pagingOptions.from,
    //   pagingOptions.to,
    //   pagingOptions.filter
    // );

    console.log({ data });

    return {
      props: {
        data,
      },
    };
  } catch (error) {
    console.log({ error });
    return {
      props: {
        data: [],
      },
    };
  }
};
