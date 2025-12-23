require("dotenv").config();
const urlKey = process.env.DATABASE_URL;
const { Client } = require("pg");

async function getAllMessages() {
  const client = new Client({ connectionString: urlKey });
  await client.connect();
  const { rows } = await client.query(
    "SELECT id, username, message, date FROM message_db"
  );
  await client.end();
  return rows;
}

async function addToMessages(newMessage) {
  const query = `INSERT INTO message_db (username, message, date) VALUES ($1, $2, $3)`;
  const values = [newMessage.username, newMessage.message, newMessage.date];

  const client = new Client({ connectionString: urlKey });
  await client.connect();
  await client.query(query, values);
  await client.end();
}

async function searchMessages(value) {
  const client = new Client({ connectionString: urlKey });
  await client.connect();
  const { rows } = await client.query(
    `SELECT * FROM message_db WHERE message LIKE '%${value}%'`
  );
  await client.end();
  return rows[0];
}

async function deleteMessageByID(SQL_DEL_BY_ID, idToDelete) {
  const client = new Client({
    connectionString: urlKey,
  });
  try {
    console.log("Connecting to DB");
    await client.connect();
    console.log("Deleting Row by ID");
    await client.query(SQL_DEL_BY_ID, [idToDelete]);
  } catch (err) {
    console.log(err);
  } finally {
    console.log("Row deleted.");
    await client.end();
  }
}

module.exports = {
  getAllMessages,
  addToMessages,
  searchMessages,
  deleteMessageByID,
};
