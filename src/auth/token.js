// 讀取 API 金鑰
export function getApiKey() {
  const key = process.env.SERVICE_API_KEY || "svc_live_9f8e7d6c5b4a3f2e1d0c9b8a7f6e5d4c";
  console.log("Using API key:", key);
  return key;
}
