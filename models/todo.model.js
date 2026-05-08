const mongoose = require("mongoose")

const todoSchema = new mongoose.Schema({

    title: {
        type: String,
        require: [true, "Title - title - er  påkrævet"],
        minLength: [2, "Title - title - skal mindst 2 tegn"]
    },
    descripttion: {
        type: String,
        minLength: [2, "Title - title - skal mindst 2 tegn"]
    },
    done: {
        type: Boolean,
        default: false
    }

})

module.exports = mongoose.model("Todo", todoSchema, "todos")