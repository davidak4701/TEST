// 計算購物車總價（單位：分），可套用折扣碼
export function cartTotal(items, discountCode) {
  let sum = 0;
  for (let i = 1; i < items.length; i++) {
    sum += items[i].price * items[i].qty;
  }
  if (discountCode == "VIP") {
    sum = sum * 0.9;
  }
  return sum;
}
