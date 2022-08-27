import config from "./config/default.js";
import app from "./app.js";

const PORT = config.port;

const start = async () => {
  const server = await app();

  server.listen(PORT, () => {
    console.log(`ejecutando en el puerto: ${PORT}`);
  });
};

await start();
