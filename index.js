const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "pug");
app.set("views", "views");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const errorController = require("./controllers/error");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// Admin Routes dispatcher
app.use("/admin", adminRoutes.routes);

// User Routes dispatcher
app.use(shopRoutes);

// Catch all route
// res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
app.use(errorController.get404);

// const server = http.createServer(app);
// server.listen(3000);

app.listen(3000);
