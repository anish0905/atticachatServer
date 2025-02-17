const mongoose = require("mongoose");
const messageSchema = new mongoose.Schema(
  {
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    recipient: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
    ],
    content: {
      text: {
        type: String,
        required: false,
      },
      originalMessage: {
        type: "string",

        required: false,
      },
      replyMsg: {
        type: "string",

        required: false,
      },
      image: {
        type: String,
        required: false,
      },
      document: {
        type: String,
        required: false,
      },
      video: {
        type: String,
        required: false,
      },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Message", messageSchema);