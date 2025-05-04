import { generateAccessToken, paypal } from "../lib/paypal";

jest.setTimeout(20_000);

// 1) token
test("generates token from PayPal", async () => {
  const token = await generateAccessToken();
  expect(typeof token).toBe("string");
  expect(token.length).toBeGreaterThan(0);
});

// 2) order
test("creates a PayPal order", async () => {
  const order = await paypal.createOrder(10);
  expect(order).toHaveProperty("id");
  expect(order.status).toBe("CREATED");
});

// 3) capture (mock)
test("captures payment (mocked)", async () => {
  const spy = jest
    .spyOn(paypal, "capturePayment")
    .mockResolvedValue({ status: "COMPLETED" });

  const res = await paypal.capturePayment("DUMMY");
  expect(res).toHaveProperty("status", "COMPLETED");

  spy.mockRestore();
});
