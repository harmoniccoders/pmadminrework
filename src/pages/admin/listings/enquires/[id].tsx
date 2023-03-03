import { returnUserData } from "lib/components/Utilities/UserData";
import EnquirySingle from "lib/components/Utils/InvestmentsTab/EnquirySingle";
import { DataAccess } from "lib/Utils/Api";
import { GetServerSideProps } from "next";
import React from "react";

interface enquiryProps {
  data: any;
  id: any;
  property: any;
  application: any;
  user: any;
  inspection: any;
}

function SingleEnquiry({
  data,
  id,
  property,
  application,
  user,
  inspection,
}: enquiryProps) {
  console.log({ data });

  return (
    <EnquirySingle
      data={data}
      property={property}
      application={application}
      user={user}
      inspection={inspection}
    />
  );
}

export default SingleEnquiry;

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
  let { id } = ctx.query;
  try {
    const data = (await _dataAccess.get(`/api/Admin/enquiries/get/${id}`)).data;
    const property = (
      await _dataAccess.get(`/api/Property/get/${data.propertyId}`)
    ).data;
    const application = (
      await _dataAccess.get(`/api/Application/list/${data.propertyId}`)
    ).data;
    const user = (await _dataAccess.get(`/api/admin/user/${data.userId}`)).data;
    const inspection = (
      await _dataAccess.get(
        `/api/Property/inspectiondates/list/${data.propertyId}`
      )
    ).data;

    console.log({ data });

    return {
      props: {
        data,
        property,
        application,
        user,
        inspection,
        id,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {
        data: [],
      },
    };
  }
};
