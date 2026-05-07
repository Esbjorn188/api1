const express = require("express")
const router = express.Router()

//---- Hent alle/Get todoes ----------------------------------------------
//-------------------------------------------------------------------
router.get("/", async(req, res) => {

    console.log("GET - hent alle todos")

    try {

        res.status( 200 ).json( { message: "Vis alle todoes"} )   

    } catch (error) {

        console.log( error.message )
        res.status( 400 ).json( { message: "Der er opstået en fejl - undskyld 👻"} ) 
    }

} )


//---- Hent udvalgte/Get udvalgt ud fra ID/todos ----------------------------------------------
//-------------------------------------------------------------------
router.get("/:id", async(req, res) => {

    console.log("GET - hent udvalgt todos")

    try {

        res.status( 200 ).json( { message: "Vis udvalgt todoes - ID : " + req.params.id } )   

    } catch (error) {

        console.log( error.message )
        res.status( 400 ).json( { message: "Der er opstået en fejl - undskyld 👻"} ) 
    }

} )


//---- Opret/Post todoes ----------------------------------------------
//-------------------------------------------------------------------
router.post("/", async(req, res) => {

    console.log("Post - opret ny todos")

    try {

        res.status( 201 ).json( { message: "Ny todo er oprettet" } )   

    } catch (error) {

        console.log( error.message )
        res.status( 400 ).json( { message: "Der er opstået en fejl - undskyld 👻"} ) 
    }
} )


//---- Ret/Put todoes ----------------------------------------------
//-------------------------------------------------------------------
router.put("/:id", async(req, res) => {

    console.log("Put - ret todo")

    try {

        res.status( 200 ).json( { message: "Todo er rettet - ID : " + req.params.id } )   

    } catch (error) {

        console.log( error.message )
        res.status( 400 ).json( { message: "Der er opstået en fejl - undskyld 👻"} ) 
    }
} )


//---- Slet/Delete todoes ----------------------------------------------
//-------------------------------------------------------------------
router.delete("/:id", async(req, res) => {

    console.log("Delete - slet todo")

    try {

        res.status( 200 ).json( { message: "Todo er slettet - ID : " + req.params.id } )   

    } catch (error) {

        console.log( error.message )
        res.status( 400 ).json( { message: "Der er opstået en fejl - undskyld 👻"} ) 
    }
} )


module.exports = router;