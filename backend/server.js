const express = require("express");
const cors = require("cors");
const connectDB = require("./connection");
const apiRouter = require("./routes/apiRoute");
const userRouter = require("./routes/user");

connectDB();
const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());

const corsOptions = {
  origin: [process.env.FRONTEND_URL ?? "*"],
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
};

app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.status(200).json({
    status: 200,
    health: "OK",
  });
});
app.use("/api", apiRouter);
app.use("/user", userRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
