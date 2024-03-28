require("dotenv").config();

const PORT = process.env.PORT;
const DB_URL = process.env.DB_URL;

// const TOKEN_SECRET_KEY = process.env.TOKEN_SECRET_KEY;

// module.exports = { PORT, DB_URL, TOKEN_SECRET_KEY };
module.exports = { PORT, DB_URL };