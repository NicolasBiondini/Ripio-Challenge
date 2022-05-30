import { getDB } from "../helpers/getDB.js";
import { writeDBWallet } from "../helpers/writeDB.js";

// Read JSON file and get all the coins.
export const getWallet = async (req, res) => {
  const data = await getDB();

  if (data === null)
    return res.status(500).json({ ok: "error", message: "Server DB Error." });

  return res.status(200).json({ ok: "ok", message: data.wallet });
};

// Write wallet Middleware (write JSON file).
export const writeWallet = async (req, res) => {
  if ((!req.body.symbol, !req.body.amount))
    return res.status(400).json({ ok: "error", message: "Bad Request." });

  const { symbol, amount } = req.body;

  await writeDBWallet(symbol, Number(amount));

  console.log(symbol, amount);
  return res
    .status(200)
    .json({ ok: "ok", message: "Transacción realizada correctamente." });
};
