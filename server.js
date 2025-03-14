require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const cors = require('cors')

const app = express();
app.use(express.json());
app.use(cors())

connectDB();

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/resources", require("./routes/resourceRoutes"));

app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));
