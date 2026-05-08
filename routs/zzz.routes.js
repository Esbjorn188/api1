const express = require("express")
const router = express.Router()
// model
const Zzz = require("../models/zzz.model")

// Håndter POST/PUT data som Multipart Formdata
const formData = require("express-form-data")
router.use(formData.parse())

//---- Hent alle/Get zzz ----------------------------------------------
//-------------------------------------------------------------------
router.get("/", async(req, res) => {

    console.log("GET - hent alle zzz")

    try {

        let zzz = await Zzz.find()

        res.status( 200 ).json( { zzz: zzz } )   

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

        let zzz = await Zzz.findById(req.params.id)

        res.status( 200 ).json( { zzz: zzz } )   

    } catch (error) {

        console.log( error.message )
        res.status( 400 ).json( { message: "Der er opstået en fejl - undskyld 👻"} ) 
    }

} )


//---- Opret/Post zzz ----------------------------------------------
//---------------------------------------------------------------------
router.post("/", async(req, res) => {

    console.log("Post - opret ny zzz")

    try {

        let zzz = new Zzz(req.body)
        await zzz.save()

        res.status( 201 ).json( { 
            message: "Ny zzz er oprettet", 
            zzz: zzz } )   

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

        let zzz = await Zzz.findByIdAndUpdate( req.params.id, req.body, { new: true, runValidators: true } )

        //hvis ID ikke findes - returner besked 
        if ( zzz == null ) {

            return res.status( 404 ).json( { message: "zzz kunne ikke findes/ rettes", updated: null } )

        }

        res.status( 200 ).json( { message: "Zzz er rettet:", updated: zzz} )   

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

        let zzz = await Zzz.findByIdAndDelete( req.params.id)

        //hvis ID ikke findes - returner besked 
        if ( zzz == null ) {

            return res.status( 404 ).json( { message: "Zzz kunne ikke findes/ slettes", deleted: null } )

        } 

        res.status( 200 ).json( { message: "Zzz er sletted:", deleted: zzz} ) 

    } catch (error) {

        console.log( error.message )
        res.status( 400 ).json( { message: "Der er opstået en fejl - undskyld 👻"} ) 
    }
} )


module.exports = router;