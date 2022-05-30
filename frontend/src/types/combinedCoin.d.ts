export type combinedCoin = {
  symbol: string;
  name: string;
  image: string;
  amount: number;
  conversion: string;
  decimals: number;
  sellPrice: number;
};

export type changeAmount = {
  symbol: string;
  newAmount: number;
};
