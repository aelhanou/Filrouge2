const { Schema, model } = require("mongoose")


const courseSchema = new Schema(
    {
        name: { type: String },
        duration: { type: String },
        episodes: [{ type: Schema.Types.ObjectId, ref: "Episode" }],
        techId: { type: Schema.Types.ObjectId, ref: "Tech" },
        addedDate: { type: String },
        realeseDate: { type: String },
        updateDate: { type: String },
        language: { type: String },
        lessonNumber: { type: String },
        description: { type: String },
        image: { type: String },
        tracking: [{
            type: Schema.Types.ObjectId
            , ref: "User"
        }],
        like: [{
            type: Schema.Types.ObjectId
            , ref: "User"
        }],
        disLike: [{
            type: Schema.Types.ObjectId
            , ref: "User"
        }]

    },
    { timestamps: true }
)

const courseModel = model("Course", courseSchema);

module.exports = {
    courseModel
}
