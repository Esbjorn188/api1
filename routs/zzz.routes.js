const express = require("express")
const router = express.Router()

//---- Hent alle/Get zzz ----------------------------------------------
//-------------------------------------------------------------------
router.get("/", async(req, res) => {

    console.log("GET - hent alle zzz")

    try {

        res.status( 200 ).json( { message: "Vis alle zzz"} )   

    } catch (error) {

        console.log( error.message )
        res.status( 400 ).json( { message: "Der er opstået en fejl - undskyld 👻"} ) 
    }

} )


//---- Hent udvalgte/Get udvalgt ud fra ID/zzz ----------------------------------------------
//-------------------------------------------------------------------
router.get("/:id", async(req, res) => {

    console.log("GET - hent udvalgt zzz")

    try {

        res.status( 200 ).json( { message: "Vis udvalgt zzz - ID : " + req.params.id } )   

    } catch (error) {

        console.log( error.message )
        res.status( 400 ).json( { message: "Der er opstået en fejl - undskyld 👻"} ) 
    }

} )


//---- Opret/Post zzz ----------------------------------------------
//-------------------------------------------------------------------
router.post("/", async(req, res) => {

    console.log("Post - opret ny zzz")

    try {

        res.status( 201 ).json( { message: "Ny zzz er oprettet" } )   

    } catch (error) {

        console.log( error.message )
        res.status( 400 ).json( { message: "Der er opstået en fejl - undskyld 👻"} ) 
    }
} )


//---- Ret/Put zzz ----------------------------------------------
//-------------------------------------------------------------------
router.put("/:id", async(req, res) => {

    console.log("Put - ret zzz")

    try {

        res.status( 200 ).json( { message: "zzz er rettet - ID : " + req.params.id } )   

    } catch (error) {

        console.log( error.message )
        res.status( 400 ).json( { message: "Der er opstået en fejl - undskyld 👻"} ) 
    }
} )


//---- Slet/Delete zzz ----------------------------------------------
//-------------------------------------------------------------------
router.delete("/:id", async(req, res) => {

    console.log("Delete - slet zzz")

    try {

        res.status( 200 ).json( { message: "zzz er slettet - ID : " + req.params.id } )   

    } catch (error) {

        console.log( error.message )
        res.status( 400 ).json( { message: "Der er opstået en fejl - undskyld 👻"} ) 
    }
} )


module.exports = router;