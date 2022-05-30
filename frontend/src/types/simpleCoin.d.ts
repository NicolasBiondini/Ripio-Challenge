export type simpleCoin = {
  symbol: string;
  amount: number;
  decimals: number;
  maxAmount?: number;
  sellPrice?: number;
  buyPrice?: number;
  image?: string;
  name?: string;
  conversion?: string;
};
