const mongoose = require("mongoose");

const ModelSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 50,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  watchList: [
    {
      movie: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Movie",
      },
      watched: Boolean,
    },
  ],
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

const Model = mongoose.model("User", ModelSchema);

module.exports = Model;
