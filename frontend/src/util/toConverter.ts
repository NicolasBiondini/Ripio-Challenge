import { simpleCoin } from "../types/simpleCoin";

export const toSellPrice = (price1: number, price2: number) => {
  return price1 / price2;
};
