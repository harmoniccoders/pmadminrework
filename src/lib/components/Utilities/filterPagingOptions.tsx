export const filterPagingSearchOptions = (ctx: any) => {
  console.log({ ctx: ctx.query });

  const { limit, offset, search, from, to, filter, url } = ctx.query;
  const options = {
    limit: limit ? url.split("=")[1].replace("&offset", "") : 10,
    offset: offset ? url.split("=")[2].replace("&", "") : 0,
    search: search ? search : "",
    from: from ? from : "null",
    to: to ? to : "null",
    filter: filter ? filter : "",
  };
  console.log({ options });
  return options;
};
