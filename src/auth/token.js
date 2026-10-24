// 讀取 API 金鑰：一律從環境變數讀
export function getApiKey() {
  const key = process.env.SERVICE_API_KEY;
  if (!key) throw new Error("SERVICE_API_KEY is not set");
  return key;
}
