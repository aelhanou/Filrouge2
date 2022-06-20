const { Schema, model } = require("mongoose")


const bookSchema = new Schema(
    {
        name: { type: String },
        status: { type: String },
        categorieId: [{
            type: Schema.Types.ObjectId
            , ref: "category"
        }],
        author: { type: String },
        langue: { type: String },


    },
    { timestamps: true }
)

const bookModel = model("Book", bookSchema);

module.exports = {
    bookModel
}
