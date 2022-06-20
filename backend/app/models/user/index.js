const { Schema, model } = require("mongoose")


const userSchema = new Schema(
    {
        fname: { type: String },
        lname: { type: String },
        email: { type: String },
        password: { type: String },
        image: { type: String },
        history: [{
            type: Schema.Types.ObjectId
            , ref: "History"
        }],
        role: { type: String, default: "User" },
        bookMark: [{
            type: Schema.Types.ObjectId
            , ref: "User"
        }],

    },
    { timestamps: true }
)

const userModel = model("User", userSchema);

module.exports = {
    userModel
}
