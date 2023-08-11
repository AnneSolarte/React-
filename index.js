const connection = require("./database/connection");
const express = require("express");
const cors = require("cors");

connection();

//node server
const app = express();
const port = 3900;

//Config cors
app.use(cors());

//Turn body to object js
app.use(express.json());

//ROUTES
const routers_article = require("./Routes/article")

app.use("/api", routers_article);

//Create routes
app.get("/test", (req, res) => {
    console.log("test endpoint");

    return res.status(200).json({
        user: "Anne",
        age: "19" ,
    }

    )
})

//Create server and listen http requests
app.listen(port, () => {
     console.log("server in port:" + port)
})