import mongoose from "mongoose";
const Schema = mongoose.Schema;

const campTagSchema = new Schema(
  {
    campaign: {
      type: Schema.Types.ObjectId,
      ref: "Campaign",
      required: true,
    },
    tag: {
      type: Schema.Types.ObjectId,
      ref: "Tag",
      required: true,
    },
    isdeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    id: false,
  }
);

const CampTag = mongoose.model("CampTag", campTagSchema);

export default CampTag;
