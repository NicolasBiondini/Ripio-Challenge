export default {
  REACT_APP_URL_PRICES: process.env.REACT_APP_URL_PRICES || "getprices",
  REACT_APP_URL_COINS: process.env.REACT_APP_URL_COINS || "getcoins",
  REACT_APP_URL_GET_WALLET: process.env.REACT_APP_URL_GET_WALLET || "getwallet",
  REACT_APP_URL_GET_TRANSACTIONS:
    process.env.REACT_APP_URL_GET_TRANSACTIONS || "gettransactions",
  REACT_APP_URL_WRITE_WALLET:
    process.env.REACT_APP_URL__WRITE_WALLET || "writewallet",
  REACT_APP_URL_WRITE_TRANSACTIONS:
    process.env.REACT_APP_URL__WRITE_TRANSACTIONS || "writetransaction",
};
