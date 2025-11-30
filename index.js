const STRAPI_URL = "https://bold-reward-a5d659b526.strapiapp.com/api/articles";
const INTERVAL = 10 * 60 * 1000; // 10 minutes

async function keepAlive() {
  try {
    const response = await fetch(STRAPI_URL);
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
