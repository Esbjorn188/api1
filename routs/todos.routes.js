const express = require("express")
const router = express.Router()
// model
const Todo = require("../models/todo.model")

// Håndter POST/PUT data som Multipart Formdata
const formData = require("express-form-data")
router.use(formData.parse())

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
router.post("/", async(req, res) => {

    console.log("Post - opret ny todos")

    try {

        let todo = new Todo(req.body)
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