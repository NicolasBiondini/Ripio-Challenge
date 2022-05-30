import { writeDBTransaction } from "../helpers/writeDB.js";
import { getDB } from "../helpers/getDB.js";

export const getTransactions = async (req, res) => {
  let limit = 5;
  if (req.params.limit) {
    limit = Number(req.params.limit);
  }

  const data = await getDB();

  if (data === null)
    return res.status(500).json({ ok: "error", message: "Server DB Error." });

  let finalData = data.transactions.slice(0, limit);

  return res.status(200).json({ ok: "ok", message: finalData });
};

export const writeTransaction = async (req, res) => {
  if (
    !req.body.date &&
    !req.body.operation &&
    !req.body.method &&
    !req.body.state &&
    !req.body.comision &&
    !req.body.amount &&
    !req.body.symbol
  )
    return res.status(400).json({ ok: "error", message: "Bad Request." });

  const { date, operation, method, state, comision, amount, symbol } = req.body;

  const data = await writeDBTransaction(
    date,
    operation,
    method,
    state,
    comision,
    amount,
    symbol
  );

  if (data === null)
    return res.status(500).json({ ok: "error", message: "DB error." });

  return res.status(200).json({ ok: "ok", message: data });
};
