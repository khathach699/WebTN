import mongoose from "mongoose";
const Schema = mongoose.Schema;

const img_CampaignSchema = new Schema(
  {
    campaign: {
      type: Schema.Types.ObjectId,
      ref: "Campaign",
      required: true,
    },
    imgUrl: {
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

const ImgCampaign = mongoose.model("ImgCampaign", img_CampaignSchema);
export default ImgCampaign;
