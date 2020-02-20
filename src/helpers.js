export function formatPrice(pence) {
  return (pence / 100).toLocaleString("en-US", {
    style: "currency",
    currency: "GBP"
  });
}

export function expenseType(type) {
  return type === "expense" ? 1 : -1;
}

export function totalBalance(overdraftLimit, openingBalance) {
  return overdraftLimit / 100 + openingBalance / 100;
}
