const { Schema, model } = require("mongoose")


const episodeSchema = new Schema(
    {
        name: { type: String },
        video: { type: String },
        // courses: [{
        //     type: Schema.Types.ObjectId
        //     , ref: "Course"
        // }],


    },
    { timestamps: true }
)

const episodeModel = model("Episode", episodeSchema);

module.exports = {
    episodeModel
}
