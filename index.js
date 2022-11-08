const express = require("express")
const cors = require("cors")
const {userController} = require("./routes/user.routes")

const {connection} = require("./config/db")

require("dotenv").config()
const app = express();
const PORT =process.env.PORT|| 6003

app.use(express.json())

app.get("/", (req, res) => {
    res.send("Home page")
})
app.use(cors())
app.use("/", userController)


app.listen(PORT, async () => {
    try{
        await connection;
        console.log("Connected to db")
    }
    catch(err){
        console.log("Error connnecting to DB")
        console.log(err)
    }
    console.log(`listening on PORT ${PORT}`)
})