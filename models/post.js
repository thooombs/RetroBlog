import mongoose, { Schema } from "mongoose";

const postSchema = new Schema(
  {
    id: String,
    content: String,
    title: String,
  },
  
);

const Post = mongoose.models.Post || mongoose.model("Post", postSchema);

export default Post;