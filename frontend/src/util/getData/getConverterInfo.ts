import { getPrices } from "./getPrices";
export const getConverterInfo = async () => {
  const prices = await getPrices();

  // Regex to check for "***_ARS"
  const regex = new RegExp("([A-Z]_ARS)", "g");

  const ARS_prices = prices
    .sort((a, b) => a.ticker.localeCompare(b.ticker))
    .filter((onlyPesos) => onlyPesos.ticker.match(regex));

  console.log(ARS_prices);
};
