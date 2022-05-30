import axios from "../../api/axios";
import config from "../../api/config";
import { walletValues } from "../../types/walletValues";

export const getWallet = async (): Promise<walletValues[] | []> => {
  try {
    const response = await axios.get(config.REACT_APP_URL_GET_WALLET, {
      headers: { "Content-Type": "application/json" },
    });
    const { data } = response;

    if (data.ok !== "ok") return [];

    return data.message;
  } catch (err) {
    console.log(err);
    return [];
  }
};
