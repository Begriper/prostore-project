const base = process.env.PAYPAL_API_URL ?? "https://api-m.sandbox.paypal.com";

type Json = Record<string, unknown>;

type CaptureResponse = {
  id: string;
  status: string;
  payer?: { email_address?: string };
  purchase_units?: Array<{
    payments?: {
      captures?: Array<{ amount?: { value?: string } }>;
    };
  }>;
};

async function handleResponse<T = Json>(response: Response): Promise<T> {
  if (response.ok) return response.json() as Promise<T>;
  const text = await response.text();
  throw new Error(text);
}

async function generateAccessToken(): Promise<string> {
  const { PAYPAL_CLIENT_ID, PAYPAL_APP_SECRET } = process.env;
  if (!PAYPAL_CLIENT_ID || !PAYPAL_APP_SECRET) {
    throw new Error("Missing PAYPAL_CLIENT_ID or PAYPAL_APP_SECRET");
  }
  const credentials = Buffer.from(
    `${PAYPAL_CLIENT_ID}:${PAYPAL_APP_SECRET}`
  ).toString("base64");

  const { access_token } = await handleResponse<{ access_token: string }>(
    await fetch(`${base}/v1/oauth2/token`, {
      method: "POST",
      headers: {
        Authorization: `Basic ${credentials}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: "grant_type=client_credentials",
    })
  );

  return access_token;
}

export const paypal = {
  async createOrder(price: number) {
    const token = await generateAccessToken();
    return handleResponse(
      await fetch(`${base}/v2/checkout/orders`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          intent: "CAPTURE",
          purchase_units: [
            {
              amount: { currency_code: "USD", value: price.toFixed(2) },
            },
          ],
        }),
      })
    );
  },

  async capturePayment(orderId: string) {
    const token = await generateAccessToken();
    return handleResponse<CaptureResponse>(
      await fetch(`${base}/v2/checkout/orders/${orderId}/capture`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
    );
  },
};

export { generateAccessToken };
