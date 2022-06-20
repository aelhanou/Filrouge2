const { Schema, model } = require("mongoose")


const channelSchema = new Schema(
    {
        name: { type: String },
        author: { type: String },
        image: { type: String },

        courses: [{
            type: Schema.Types.ObjectId
            , ref: "Course"
        }],


    },
    { timestamps: true }
)

const channelModel = model("Channel", channelSchema);

module.exports = {
    channelModel
}
