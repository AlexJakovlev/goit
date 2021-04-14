import { QueryString } from "querystring";

function queryString({ string }) {
  const params = QueryString.parse(string);
  return params;
}
export default queryString;
