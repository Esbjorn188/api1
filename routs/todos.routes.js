const express = require("express")
const router = express.Router()

// model
const Todo = require("../models/todo.model")

// Håndter POST/PUT data som Multipart Formdata
// const formData = require("express-form-data")
// router.use(formData.parse())

const multer = require( "multer" )
const upload = multer ( {

    storage: multer.diskStorage( {
        destination: function ( req, file, cb ) { 
            cb( null, "public/img")
         },

        filename: function ( req, file, cb ) { 
            // cb( null, file.originalname )
            cb( null, Date.now() + "_" + file.originalname )
         }
    } ),

    fileFilter: function ( req, file, cb ) { 

        if (file.mimetype.startsWith("image/") ) {
            
            cb( null, true )
            
        } else {
            cb( new Error( "Kun billedfiler er tilladt - jpg, gif osv." ), false )
        }

    }

} )

//---- Hent alle/Get todoes ----------------------------------------------
//-------------------------------------------------------------------
router.get("/", async(req, res) => {

    console.log("GET - hent alle todos")

    try {

        let todos = await Todo.find()

        res.status( 200 ).json( { todos: todos } )   

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

        let todo = await Todo.findById(req.params.id)

        res.status( 200 ).json( { todo: todo } )   

    } catch (error) {

        console.log( error.message )
        res.status( 400 ).json( { message: "Der er opstået en fejl - undskyld 👻"} ) 
    }

} )


//---- Opret/Post todoes ----------------------------------------------
//---------------------------------------------------------------------
router.post("/", upload.single("img"), async(req, res) => {

    console.log("Post - opret ny todos")

    try {

        let todo = new Todo(req.body)

        todo.img = req.file ? req.file.filename : null // imagenavn

        await todo.save()

        res.status( 201 ).json( { 
            message: "Ny todo er oprettet", 
            todo: todo } )   

    } catch (error) {

        console.log( error.message )
        res.status( 400 ).json( { message: "Der er opstået en fejl - undskyld 👻"} ) 
    }
} )


//---- Ret/Put todoes ----------------------------------------------
//-------------------------------------------------------------------
router.put("/:id", upload.single("img"), async(req, res) => {

    console.log("Put - ret todo")

    try {

        // Hvis der er sendt en fil/img med - så gem filnavnet i requestet inden update
        if (req.file ) {
            req.body.img = req.file.filename
        }

        let todo = await Todo.findByIdAndUpdate( req.params.id, req.body, { new: true, runValidators: true } )

        //hvis ID ikke findes - returner besked 
        if ( todo == null ) {

            return res.status( 404 ).json( { message: "Todo kunne ikke findes/ rettes", updated: null } )

        }

        res.status( 200 ).json( { message: "Todo er rettet:", updated: todo} )   

    } catch (error) {

        console.log( error.message )
        res.status( 400 ).json( { message: "Der er opstået en fejl - undskyld 👻"} ) 
    }
} )


//---- Ret/PATCH /todo - ret done true/false ----------------------------------------------
//-------------------------------------------------------------------
router.patch("/:id", upload.single("img"), async(req, res) => {

    console.log("PATCH - ret todo")

    try {

        let todo = await Todo.findByIdAndUpdate( req.params.id, req.body, { new: true, runValidators: true } )

        //hvis ID ikke findes - returner besked 
        if ( todo == null ) {

            return res.status( 404 ).json( { message: "Todo kunne ikke findes/ rettes", updated: null } )

        }

        res.status( 200 ).json( { message: "Todo er rettet:", updated: todo} )   

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

        let todo = await Todo.findByIdAndDelete( req.params.id)

        //hvis ID ikke findes - returner besked 
        if ( todo == null ) {

            return res.status( 404 ).json( { message: "Todo kunne ikke findes/ slettes", deleted: null } )

        } 

        res.status( 200 ).json( { message: "Todo er sletted:", deleted: todo} ) 

    } catch (error) {

        console.log( error.message )
        res.status( 400 ).json( { message: "Der er opstået en fejl - undskyld 👻"} ) 
    }
} )


module.exports = router;