const mongoose = require("mongoose");

const JobsSchema = new mongoose.Schema(
  {
    company: {
      type: String,
      required: [true, "Please provide a company name"],
      maxLenght: 50,
    },
    position: {
      type: String,
      required: [true, "Please provide a position"],
      maxLenght: 100,
    },
    status: {
      type: String,
      enum: ["pending", "interview", "declined"],
      default: "pending",
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: [true, "Please provide a user id"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Job", JobsSchema);
