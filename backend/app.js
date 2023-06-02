var express = require("express");
var path = require("path");
const cors = require("cors");
var app = express();

var bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


// var userRouter = require("./routes/user");
var accountRouter = require("./routes/account");
var userRouter = require("./routes/user")

// const port = process.env.PORT
// const port = 3000;

app.use(
  cors({
    origin: "*",
  })
);
// app.use("/shopee_api/users", userRouter);
app.use("/shopee_api/account", accountRouter);
app.use("/shopee_api/user", userRouter);

app.use(function (req, res, next) {
  next(createError(404));
});

app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  // res.render('error');
  res.send("page not found");
});

app.listen(3100, () => {
  console.log(`Example app listening on port 3100`);
});
module.exports = app;
