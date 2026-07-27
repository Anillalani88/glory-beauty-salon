export const currencyFormatter = new Intl.NumberFormat("en-CA", {
  style: "currency",
  currency: "CAD"
});

export function formatCurrency(value: number) {
  return currencyFormatter.format(value);
}
