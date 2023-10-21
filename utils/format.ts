import { MaskService } from "react-native-masked-text";

export const formatMoney = (value: number | string): string => {
  const valueNumber = typeof value === "string" ? parseFloat(value) : value;

  const money = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
  })
    .format(valueNumber)
    .replace(String.fromCharCode(160), "")
    .replace("-", "");

  return money.replace("R$", "");
};

export const replaceMoney = (price: string): number => {
  return Number(price.replace(/(R\$|\.)/g, "").replace(",", "."));
};

export const formatMaskMoney = (price: string): string => {
  const [integer, decimal] = price.split(",");

  const replacedInteger = replaceMoney(integer);
  const finalPrice = [replacedInteger, decimal].join(",");

  return MaskService.toMask("money", finalPrice, {
    separator: ",",
    delimiter: ".",
    precision: 2,
    unit: "R$",
  });
};
