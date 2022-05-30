import axios from "../../api/axios";
import config from "../../api/config";
import { coinsFetchRipio, coinsInfo } from "../../types/coinsFetchRipio";

export const getCoins = async (): Promise<coinsInfo[] | []> => {
  try {
    const response = await axios.get(config.REACT_APP_URL_COINS, {
      headers: { "Content-Type": "application/json" },
    });
    const { data } = response;

    if (data.ok !== "ok") return [];

    return data.message.map((coin: coinsFetchRipio) => {
      let obj: coinsInfo = {
        symbol: coin.symbol,
        name: coin.name,
        image: coin.url_images.image_svg,
        decimals: coin.decimals,
      };
      return obj;
    });
  } catch (err) {
    console.log(err);
    return [];
  }
};
