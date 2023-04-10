const mongoose = require("mongoose")

const dietSchema = new mongoose.Schema({
    head:String,
    description:String,
    bmi:String,
    head1:String,
    meal1:String,
    head2:String,
    meal2:String,
    head3:String,
    meal3:String,
    headPre:String,
    preWorkout:String,
    headPost:String,
    postWorkout:String,
    head5:String,
    meal5:String,
    head6:String,
    meal6:String,
})

const dietModel = mongoose.model("dietPlans",dietSchema)

module.exports = dietModel