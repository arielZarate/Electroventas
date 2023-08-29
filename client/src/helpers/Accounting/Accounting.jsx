// priceFormatter.js
import accounting from "accounting";

export function formatPriceARS(price) {
  /*  return accounting.formatMoney(price, "$", 2, ".", ",", "%s %v"); */
  return accounting.formatMoney(price, "$", 0, ".", ",", "%s %v");
}

export function formatPriceUSD(price) {
  return accounting.formatMoney(price, "USD", 2, ".", ",", "%s %v");
}

/* 
export function formatPriceARS(price) {
  return accounting.formatMoney(price, "$", 0); // Puedes ajustar las opciones según necesites
}

export function formatPriceUSD(price) {
  return accounting.formatMoney(price, "$", 2); // Puedes ajustar las opciones según necesites
}
 */
