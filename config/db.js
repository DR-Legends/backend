const mongoose = require("mongoose");
const connectToDb = async () => {
  mongoose
    .connect(process.env.MONGO_URL)
    .then((conn) => {
      console.log(`Connected to DB: ${conn.connection.host}`);
    })
    .catch((error) => {
      console.log(error.message);
      process.exit(1);
    });
};
module.exports = connectToDb;
