import { Router } from "express";
import {
  getCoins,
  getPrices,
  getWallet,
  writeWallet,
  getTransactions,
  writeTransaction,
} from "../controllers/index.js";

const router = Router();

router.get("/getcoins", getCoins);
router.get("/getprices", getPrices);
router.get("/getwallet", getWallet);
router.get("/gettransactions/:limit", getTransactions);
router.put("/writewallet", writeWallet);
router.put("/writetransaction", writeTransaction);

export default router;
