const express = require("express");
const app = express();
const port = 3000;

app.use(express.static('./dist'));

app.get("/getting-started", (req, res) => {
    res.send("hello from the server")
})

app.listen(port, () => {
    console.log(`server is listening on port ${port}`)
})