import { simpleCoin } from "../../types/simpleCoin";
import { getCoins } from "./getCoins";
import { getWallet } from "./getWallet";
import { getPrices } from "./getPrices";
import { coinsInfo } from "../../types/coinsFetchRipio";
import { walletValues } from "../../types/walletValues";
import { combinedCoin } from "../../types/combinedCoin";
import { toPesos } from "../toPesos";

export const getAvailableCoins = async (): Promise<simpleCoin[]> => {
  try {
    const [coins, wallet, prices] = await Promise.all([
      getCoins(),
      getWallet(),
      getPrices(),
    ]);

    // Sort by symbols
    let sortedCoins = coins.sort((a, b) => a.symbol.localeCompare(b.symbol));
    let sortedWallet = wallet.sort((a, b) => a.symbol.localeCompare(b.symbol));

    // Get symbols from the wallet
    let symbolsNames = {
      coins: sortedWallet.map((walletCoin) => walletCoin.symbol),
      toPesos: sortedWallet.map((walletCoin) => walletCoin.symbol + "_ARS"),
    };

    // Separte Pesos Acount for the $ symbol
    let pesosAcount: {
      coin: coinsInfo;
      wallet: walletValues;
      conversion: string;
    } = {
      coin: {
        symbol: "",
        name: "",
        image: "",
        decimals: 2,
      },
      wallet: { symbol: "", amount: 0 },
      conversion: "",
    };

    // Filter by the wallet symbols
    let coinsSymbols = sortedCoins.filter((coin) => {
      if (coin.symbol === "$") {
        pesosAcount.coin = coin;
        return;
      }
      return symbolsNames.coins.includes(coin.symbol);
    });

    // Remove pesos from wallet and add it into the pessosAcount object.
    let pesosWallet = sortedWallet.splice(0, 1);
    pesosAcount.wallet = pesosWallet[0];
    let finalPesos: combinedCoin = {
      symbol: pesosAcount.coin.symbol,
      name: pesosAcount.coin.name,
      image: pesosAcount.coin.image,
      amount: pesosAcount.wallet.amount,
      conversion: toPesos(pesosAcount.wallet.amount),
      decimals: 2,
      sellPrice: 1,
    };

    // Regex to check for "***_ARS"
    const regex = new RegExp("([A-Z]_ARS)", "g");

    let coinsPricesPesos = prices
      .sort((a, b) => a.ticker.localeCompare(b.ticker))
      .filter((onlyPesos) => onlyPesos.ticker.match(regex))
      .filter((coin) => symbolsNames.toPesos.includes(coin.ticker))
      .map((pair) => {
        return {
          symbol: pair.ticker,
          sell_price: Number(pair.sell_rate),
        };
      });

    // Concatenate the two arrays
    let concatArray: combinedCoin[] = coinsSymbols.map((coin, i) => {
      // Finish the data array
      return Object.assign({}, coin, sortedWallet[i], {
        conversion: toPesos(
          Number(sortedWallet[i].amount),
          coinsPricesPesos[i].sell_price
        ),
        sellPrice: coinsPricesPesos[i].sell_price,
      });
    });

    concatArray.push(finalPesos);
    return concatArray;
  } catch (err) {
    console.log(err);
    return [];
  }
};
