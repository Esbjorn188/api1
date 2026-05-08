const mongoose = require("mongoose")

const zzzSchema = new mongoose.Schema({

    title: {
        type: String,
        require: [true, "Title - title - er  påkrævet"],
        minLength: [2, "Title - title - skal mindst 2 tegn"]
    },
    descripttion: {
        type: String,
        minLength: [2, "Title - title - skal mindst 2 tegn"]
    },
    w_engien: {
        type: String,
        minLength: [2, "Title - title - skal mindst 2 tegn"]
    },
    faction: {
        type: String,
        minLength: [2, "Title - title - skal mindst 2 tegn"]
    }

})

module.exports = mongoose.model("Zzz", zzzSchema, "zzz")