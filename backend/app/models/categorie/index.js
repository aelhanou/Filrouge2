const { Schema, model } = require("mongoose")


const categorySchema = new Schema(
    {
        name: { type: String },
        techId: [{
            type: Schema.Types.ObjectId
            , ref: "Tech"
        }]
    },
    { timestamps: true }
)

const categoryModel = model("Category", categorySchema);

module.exports = {
    categoryModel
}
