const mongoose = require mongoose("mongoose");

const db = require("../models");
mongoose.Promise = global.Promise;


mongoose.connect(process.env.MOGODB_URI || "mongodb://localhost/fafsa",
  {
    useMongoClient: true
  }
);
console.log("hi");

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
