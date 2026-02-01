const express = require("express");
const app = express();

app.get("/", (req, res) => {
res.send("Hai There!")
})

app.listen(3000, () => { console.log("Server Telah Di Jalankan!")
})
