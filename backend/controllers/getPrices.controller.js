import { config } from "../config/config.js";
import { getData } from "../helpers/getData.js";

export const getPrices = async (req, res) => {
  const url = config.GET_PRICES_URL;

  const data = await getData(url);

  if (data === null)
    return res.status(500).json({ ok: "error", message: "Server Error." });

  return res.status(200).json({ ok: "ok", message: data });
};
