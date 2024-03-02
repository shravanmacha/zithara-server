import pkg from "pg";
const { Client } = pkg;

const client = new Client({
  user: "postgres",
  password: "Shravan@2002",
  host: "localhost",
  port: 5432,
  database: "zithara_db",
});

client.connect();

export { client };
