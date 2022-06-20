const { Schema, model } = require("mongoose")


const techSchema = new Schema(
    {
        name: { type: String },
        courseId: [{
            type: Schema.Types.ObjectId
            , ref: "Course"
        }],
        

    },
    { timestamps: true }
)

const techModel = model("Tech", techSchema);

module.exports = {
    techModel
}
