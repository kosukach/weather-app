const express = require("express");
const mongoose = require("mongoose");
const days = require("./routes/days");
const cors = require("cors")
const app = express();
app.use(express.static("../weather-app"))
app.use(express.json())
app.use(cors());
app.use("/days", days)
mongoose.connect("mongodb://localhost/weather", {useNewUrlParser: true})
    .then(() => console.log(`Connected to mongo...`))
    .catch((ex)=> console.log(ex))


const port = 3000;
app.listen(port, ()=>console.log(`listening on port ${port}`));

