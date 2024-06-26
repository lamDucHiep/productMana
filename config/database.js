const mongoose = require("mongoose");

module.exports.connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connect database succesfully");
  } catch (erro) {
    console.log("Connection failed");
  }
};
