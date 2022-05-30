import axios from "../../api/axios";
import config from "../../api/config";
import { convertPrices } from "../../types/convertPrices";

export const getPrices = async (): Promise<convertPrices[] | []> => {
  try {
    const response = await axios.get(config.REACT_APP_URL_PRICES, {
      headers: { "Content-Type": "application/json" },
    });
    const { data } = response;

    return data.message;
  } catch (err) {
    console.log(err);
    return [];
  }
};
