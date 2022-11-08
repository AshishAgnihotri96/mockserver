const express = require("express")
const cors = require("cors")
const {userController} = require("./routes/user.routes")
const { UserModel } = require("./models/User.model")
const {connection} = require("./config/db")

require("dotenv").config()
const app = express();
const PORT =process.env.PORT|| 8050

app.use(express.json())

app.get("/", async(req, res) => {
    const notes=await UserModel.find()
    res.send(notes)
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