import mongoose from "mongoose";

const Schema = mongoose.Schema;

const stateSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    isdeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const State = mongoose.model("State", stateSchema);
export default State;
