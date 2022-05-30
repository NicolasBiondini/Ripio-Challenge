export const toPesos = (amount: number, sellPrice?: number): string => {
  if (sellPrice) {
    let total = amount * sellPrice;
    let pesos = total.toFixed(2);
    return pesos;
  }

  let pesos = amount.toFixed(2);

  return pesos;
};

export const toThousands = (number: string) => {
  return number.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const toDecimals = (amount: string, decimals: number = 2) => {
  if (amount === "0.0") return "0.0";
  if (amount === "0") return "0";

  return amount;
};
