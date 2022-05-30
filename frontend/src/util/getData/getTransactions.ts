import axios from "../../api/axios";
import config from "../../api/config";
import { transaction } from "../../types/transactions";

export const getTransactions = async (
  limit: number
): Promise<transaction[] | []> => {
  try {
    const response = await axios.get(
      `${config.REACT_APP_URL_GET_TRANSACTIONS}/${limit}`,
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    const { data } = response;

    if (data.ok !== "ok") return [];

    return data.message;
  } catch (err) {
    console.log(err);
    return [];
  }
};
