import { axiosNoAuth, createHeader } from "../../../api";
import { getItem } from "../../../helperFunctions/asyncStorage";

const beneficiaryListAction = async(payload) => {
    let token = await getItem("token");
  
    const {timestamp, apiKey} = createHeader()

  const headers = {
    timestamp: timestamp,
    API_KEY: apiKey,
    authtoken: token,

  };

  return axiosNoAuth.get(`/Beneficiary/get?username=${payload}`, {
      headers: headers,
    })
    .catch((err) => err);
};

const beneficiaryAddAction = async(payload) => {
  let token = await getItem("token");

  const {timestamp, apiKey} = createHeader()

const headers = {
  timestamp: timestamp,
  API_KEY: apiKey,
  authtoken: token,

};

return axiosNoAuth.post(`/Beneficiary/add`,
payload,
{
    headers: headers,
  })
  .catch((err) => err);
};

const beneficiaryDeleteAction = async(payload) => {
  let token = await getItem("token");

  const {timestamp, apiKey} = createHeader()

const headers = {
  timestamp: timestamp,
  API_KEY: apiKey,
  authtoken: token,

};

return axiosNoAuth.post(`/Beneficiary/delete?id=${payload}`,
"",
{
    headers: headers,
  })
  .catch((err) => err);
};

const beneficiaryEditAction = async(editId, payload) => {
  let token = await getItem("token");

  const {timestamp, apiKey} = createHeader()

const headers = {
  timestamp: timestamp,
  API_KEY: apiKey,
  authtoken: token,

};

return axiosNoAuth.post(`/Beneficiary/edit?id=${editId}`,
payload,
{
    headers: headers,
  })
  .catch((err) => err);
};


//bills beneficiary
const billsBeneficiaryListAction = async(payload) => {
  let token = await getItem("token");

  const {timestamp, apiKey} = createHeader()

const headers = {
  timestamp: timestamp,
  API_KEY: apiKey,
  authtoken: token,

};

return axiosNoAuth.get(`/BillsBeneficiary/get?username=${payload}`, {
    headers: headers,
  })
  .catch((err) => err);
};

const billsBeneficiaryAddAction = async(payload) => {
  let token = await getItem("token");

  const {timestamp, apiKey} = createHeader()

const headers = {
  timestamp: timestamp,
  API_KEY: apiKey,
  authtoken: token,

};

return axiosNoAuth.post(`/BillsBeneficiary/add`,
payload,
{
    headers: headers,
  })
  .catch((err) => err);
};

const billsBeneficiaryDeleteAction = async(payload) => {
  let token = await getItem("token");

  const {timestamp, apiKey} = createHeader()

const headers = {
  timestamp: timestamp,
  API_KEY: apiKey,
  authtoken: token,

};

return axiosNoAuth.post(`/BillsBeneficiary/delete?id=${payload}`,
{
    headers: headers,
  })
  .catch((err) => err);
};

const billsBeneficiaryEditAction = async(payload) => {
  let token = await getItem("token");

  const {timestamp, apiKey} = createHeader()

const headers = {
  timestamp: timestamp,
  API_KEY: apiKey,
  authtoken: token,

};

return axiosNoAuth.post(`/Beneficiary/edit?id=${payload}`,
"",
{
    headers: headers,
  })
  .catch((err) => err);
};
export {beneficiaryListAction, beneficiaryAddAction , beneficiaryDeleteAction, beneficiaryEditAction,
  billsBeneficiaryListAction, billsBeneficiaryAddAction, billsBeneficiaryDeleteAction, billsBeneficiaryEditAction};
