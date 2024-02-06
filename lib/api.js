export const fetchBaseURL = async () => {
  // 在此可以進行獲取主網址的邏輯，例如從環境變數中讀取
  let baseURL = {};
  const customUrlV1 = "http://wp-test-mac.local/wp-json/wp/v1";
  const customUrlV2 = "http://wp-test-mac.local/wp-json/wp/v2";
  baseURL.customUrlV1 = customUrlV1;
  baseURL.customUrlV2 = customUrlV2;

  return { baseURL };
};
