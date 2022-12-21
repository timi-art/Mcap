import { axiosNoAuth , createHeader} from "../../../api";
import { getItem } from "../../../asyncStorage";

const createInvestementAction = async (payload) => {
  let token = await getItem("token");
 
  const {timestamp, apiKey} = createHeader()
 

  const headers = {
    timestamp: timestamp,
    API_KEY: apiKey,
    authtoken: token,

  };
  return axiosNoAuth.get(`/Operations/GetMobileAPPFaq`,{
    headers: headers,
  }).catch((err) => err)
};

export { createInvestementAction };
