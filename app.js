const express = require("express");
const accountRoutes = require("./apis/accounts/routes");
const connectDB = require("./database");

const app = express();
const port = "8000";

app.use(express.json());
app.use("/accounts", accountRoutes);

try {
  connectDB();
} catch (error) {
  console.log(error.message);
}

app.listen(port, () => {
  console.log(`Bank server is Online! at http://localhost:${port}`);
});
