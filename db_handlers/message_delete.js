const urlKey = process.env.DATABASE_URL;
const { Client } = require("pg");
const args = process.argv;
const queries = require("./queries");

const idToDelete = args[2];

const SQL_DEL_BY_ID = `DELETE FROM message_db WHERE id = $1`;

async function deleteByid(SQL_DEL_BY_ID, idToDelete) {
  console.log(idToDelete);
  await queries.deleteMessageByID(SQL_DEL_BY_ID, idToDelete);
}

deleteByid(SQL_DEL_BY_ID, idToDelete);
