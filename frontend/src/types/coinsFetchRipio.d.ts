export type coinsInfo = {
  symbol: string;
  name: string;
  image: string;
  decimals: number;
};

export type coinsFetchRipio = {
  ticker: string;
  name: string;
  symbol: string;
  decimals: number;
  type: string;
  is_favorite: boolean;
  color: null;
  categories: [];
  actions: [];
  url_images: { image_png: string; image_svg: string };
};
