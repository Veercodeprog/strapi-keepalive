const STRAPI_URL = "https://bold-reward-a5d659b526.strapiapp.com/api/articles";
const STRAPI_TOKEN =
  "826791505ac8852f47ecf59be2f375a3dd86c62f2a6dec6e24d7769f0459e58cdc1daa376bfd9bcb8aa32991a64d58335fd7dcb93060f81cffea3ff256eee706a095058a86f4fa4191470c5aaf6bf9482b8edf6b596ef092e327128871f73aace96a6b3217901db9b797e6cbf6a41ffce2422d6e5ea216d72b51b86c56582286"; // Add your token
const INTERVAL = 5 * 60 * 1000; // 10 minutes

async function keepAlive() {
  try {
    const response = await fetch(STRAPI_URL, {
      headers: {
        Authorization: `Bearer ${STRAPI_TOKEN}`,
        Accept: "application/json",
      },
    });
    const timestamp = new Date().toISOString();

    if (response.ok) {
      console.log(
        `✅ [${timestamp}] Ping successful - Status: ${response.status}`,
      );
    } else {
      console.log(`⚠️ [${timestamp}] Ping returned: ${response.status}`);
    }
  } catch (error) {
    console.error(
      `❌ [${new Date().toISOString()}] Ping failed:`,
      error.message,
    );
  }
}

// Run immediately and then every interval
keepAlive();
setInterval(keepAlive, INTERVAL);

console.log(
  `🚀 Keep-alive service started. Pinging every ${INTERVAL / 60000} minutes...`,
);
