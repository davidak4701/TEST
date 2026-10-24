// 計算購物車總價（單位：分）
export function cartTotal(items) {
  return items.reduce((sum, item) => sum + item.price * item.qty, 0);
}
