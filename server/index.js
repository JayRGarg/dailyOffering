const express = require("express");
const app = express();
const cors = require('cors');
const PORT = 8080;

app.use(express.json());
app.use(cors());

// Routers
const messageRouter = require('./routes/Messages');
app.use("/messages", messageRouter);

//app.get('/')

app.listen(
    PORT,
    () => console.log('Live on 8080')
)