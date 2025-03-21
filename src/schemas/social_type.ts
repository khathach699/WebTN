import mongoose from "mongoose";
const Schema = mongoose.Schema;

const socialTypeSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    logo: {
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

const SocialType = mongoose.model("SocialType", socialTypeSchema);

export default SocialType;
