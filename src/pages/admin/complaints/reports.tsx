import { Box, Flex } from "@chakra-ui/react";
import SecondaryTab from "lib/components/Utilities/SecondaryTab";
import { returnUserData } from "lib/components/Utilities/UserData";
import Sessions from "lib/components/Utils/CleaningTab/Sessions";
import ComplaintsLists from "lib/components/Utils/Complaints/ComplaintsTable";
import { DataAccess } from "lib/Utils/Api";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import ReportLists from "lib/components/Utils/Reports/ReportLists";

export default function complaint({ data, types, reports }: any) {
  const [currentTab, setCurrentTab] = useState("reports");
  const router = useRouter();
  const navigateTabs = (tabname: string) => {
    router.push(`/admin/complaints/${tabname}`);
  };
  console.log({ reports });
  return (
    <Box w="100%" p="0rem" minH="90vh">
      <Flex borderBottom="1px solid rgba(36,68,115,0.1)" mt=".5rem">
        <Box onClick={() => navigateTabs("complaints")}>
          <SecondaryTab
            tabname="complaints"
            num={data?.size}
            icon="fa-unlink"
            currentTab={currentTab}
          />
        </Box>
        <Box onClick={() => navigateTabs("categories")}>
          <SecondaryTab
            tabname="categories"
            num={types?.length}
            icon="fa-layer-group"
            currentTab={currentTab}
          />
        </Box>
        <Box onClick={() => navigateTabs("reports")}>
          <SecondaryTab
            tabname="reports"
            num={reports?.size}
            icon="fa-comment"
            currentTab={currentTab}
          />
        </Box>
      </Flex>
      <ReportLists data={reports} />
    </Box>
  );
}

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
    const data = (
      await _dataAccess.get(`/api/Complaints/property/list/all?${url}`)
    ).data;
    const types = (await _dataAccess.get("/api/Complaints/categories/list"))
      .data;
    const reports = (await _dataAccess.get(`/api/Report/list?${url}`)).data;
    console.log({ reports });
    return {
      props: {
        data,
        types,
        reports,
      },
    };
  } catch (error) {
    return {
      props: {
        data: [],
        types: [],
        report: [],
      },
    };
  }
};
