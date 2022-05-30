import { simpleCoin } from "../../types/simpleCoin";
import { getCoins } from "./getCoins";
import { getPrices } from "./getPrices";

export const getAllCoins = async (): Promise<simpleCoin[]> => {
  const allCoins: simpleCoin[] = [];

  try {
    const [coins, prices] = await Promise.all([getCoins(), getPrices()]);

    let sortedCoins = coins.sort((a, b) => a.symbol.localeCompare(b.symbol));

    // Regex to check for "***_ARS"
    const regex = new RegExp("([A-Z]_ARS)", "g");

    prices
      .sort((a, b) => a.ticker.localeCompare(b.ticker))
      .filter((onlyPesos) => onlyPesos.ticker.match(regex))
      .forEach((coin) => {
        let symbol = coin.ticker.split("_").shift() || "";

        let decimals = sortedCoins.filter(
          (coinSymbol) => coinSymbol.symbol === symbol
        );

        allCoins.push({
          symbol: symbol,
          amount: 0,
          sellPrice: Number(coin.sell_rate),
          buyPrice: Number(coin.buy_rate),
          decimals: decimals[0].decimals,
          image: decimals[0].image,
          name: decimals[0].name,
        });
      });

    return allCoins;
  } catch (err) {
    console.log(err);
    return allCoins;
  }
};
