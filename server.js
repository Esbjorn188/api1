const express = require("express")
const app = express()
require("dotenv").config()
const mongoose = require("mongoose")

// PORT
//-----------------------------------
const PORT = process.env.PORT || 5000

// ---- DB mongo connect
//-----------------------------------
// mongoose.connect("mongodb://localhost:27017/dataservice_db")
//         .then( () => {
//             console.log(" MongoDB: Forbundet 👍")
//         })
//         .catch(( error ) => {
//             console.log(" MongoDB: FEJL:", error )
//         })

//     const db = mongoose.connection 
//     db.on("error", (error) => {console.log("🔴MongoDB runtime fejl : ", error)})
//     db.once("open", () => {console.log("🟢MongoDB connection åben")})



// GET: Servers endpoint - base-URL
// http://localhost:5000/
//-----------------------------------
app.get("/", async ( req, res ) => {

    console.log("GET: serverens root endpoint her!")

    res.status(200).json({ message: "Velkommen til serveren base-URL 😊" })

} )

// ROUTES - route-mounting eller router-mounting
//----------------------------------------------
app.use( "/todos", require( "./routs/todos.routes" ) ) // http://localhost:5000/todos
app.use( "/zzz", require( "./routs/zzz.routes" ) ) // http://localhost:5000/zzz

// ---- 404 page not found 
//------------------------
app.use((req, res)=>{
    return res.status(404).json( {massage: "Siden findes ikke - øv"})
})


// GET: Servers endpoint - base-URL
//-----------------------------------
app.listen(PORT, () => {
    console.log("---> Serveren er startet 👍 og lytter til port : " + PORT)
} )