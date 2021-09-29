const mongoose = require("mongoose");
const { Schema } = mongoose;
const postSchema = new Schema({
    userid: {
        type: String
    },
    title:  {
        type: String
    },
    detail: {
        type: String
    },
    password:   {
        type: Number
    }
});

module.exports = mongoose.model(`Post`, postSchema);