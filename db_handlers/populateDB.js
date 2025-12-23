require("dotenv").config();
const urlKey = process.env.DATABASE_URL;
const { Client } = require("pg");

const stockMessages = require("./messageDB");

const SQL_ADD = `
INSERT INTO message_db (username, message, date) 
VALUES
  ($1, $2, $3)
`;

async function addMessagesToDB() {
  const client = new Client({
    connectionString: urlKey,
  });
  console.log("connecting to db");
  await client.connect();

  console.log("Adding messages to DB.");
  try {
    for (let entry of stockMessages) {
      const values = [entry.user, entry.message, entry.date];
      console.log(entry.user);
      await client.query(SQL_ADD, values);
      console.log("Added message to DB.");
    }
  } catch (err) {
    console.log("Error: ", err);
  } finally {
    console.log("Added all messages to DB!");
    await client.end();
  }
}

addMessagesToDB();
