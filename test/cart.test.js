import { test } from "node:test";
import assert from "node:assert/strict";
import { cartTotal } from "../src/cart.js";

test("cartTotal adds price times qty", () => {
  assert.equal(cartTotal([{ price: 100, qty: 2 }, { price: 50, qty: 1 }]), 250);
});

test("cartTotal of empty cart is 0", () => {
  assert.equal(cartTotal([]), 0);
});
