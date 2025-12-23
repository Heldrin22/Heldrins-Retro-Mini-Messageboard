const queries = require("./queries");

async function dumpDb() {
  console.log(await queries.getAllMessages());
}

dumpDb();
