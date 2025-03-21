import mongoose from "mongoose";
const Schema = mongoose.Schema;

const typeTagSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
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

const TypeTag = mongoose.model("TypeTag", typeTagSchema);
export default TypeTag;
