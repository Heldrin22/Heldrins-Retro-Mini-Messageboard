const { Client } = require("pg");
require("dotenv").config();
const urlKey = process.env.DATABASE_URL;

const SQL = `
SELECT * FROM board_messages;
`;

async function main() {
  console.log("Connecting...");
  const client = new Client({
    connectionString: urlKey,
  });
  await client.connect();
  console.log("Connected.");
  const { rows } = await client.query(SQL);
  console.log(rows);
  await client.end();
  console.log("Messages above");
}

main();
