import QueryString from "query-string";

function queryString({ string }) {
  const params = QueryString.parse(string);
  return params;
}
export default queryString;
