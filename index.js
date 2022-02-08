const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// Admin Routes dispatcher
app.use("/admin", adminRoutes);

// User Routes dispatcher
app.use(shopRoutes);

// Catch all route
app.use("/", (req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

// const server = http.createServer(app);
// server.listen(3000);

app.listen(3000);
