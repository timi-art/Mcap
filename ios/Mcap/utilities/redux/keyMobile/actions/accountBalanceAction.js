import { createHeader, axiosNoAuth } from "../../../api";
import {
  accountBalancePending,
  accountBalanceSuccess,
  accountBalanceFailure,
  accountBalanceReset,
} from "../slice/accountBalanceSlice";
import { getItem } from "../../../helperFunctions/asyncStorage";

const getAccountBalanceAction = (payload) => async (dispatch) => {
  let token = await getItem("token");

  const { timestamp, apiKey } = createHeader();
  const headers = {
    timestamp: timestamp,
    API_KEY: apiKey,
    authtoken: token,
  };
  dispatch(accountBalancePending());
  try {
    const res = await axiosNoAuth.post(`/Enquiry/CustomerBalance`, payload, {
      headers: headers,
    });
  
    if (res.status === 200) {
      dispatch(accountBalanceSuccess(res.data));
    } else {
      dispatch(accountBalanceFailure("Something went wrong"));
    }
  } catch (err) {
    console.log(err, "balance error");
    dispatch(accountBalanceFailure(err.message || "Something went wrong"));
  }
};

const getAccountDetailsAction = (payload) => async (dispatch) => {
  let token = await getItem("token");

  const { timestamp, apiKey } = createHeader();
  const headers = {
    timestamp: timestamp,
    API_KEY: apiKey,
    authtoken: token,
  };
  dispatch(accountBalancePending());
  try {
    const res = await axiosNoAuth.get(
      `/Enquiry/GetAccountDetails?accountNumber=${payload}`,
      {
        headers: headers,
      }
    );

    if (res.status === 200) {
      dispatch(accountBalanceSuccess(res.data));
    } else {
      dispatch(accountBalanceFailure("Something went wrong"));
    }
  } catch (err) {
    dispatch(accountBalanceFailure(err.message || "Something went wrong"));
  }
};

export { getAccountBalanceAction, getAccountDetailsAction };
