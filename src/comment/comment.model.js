import { Schema, model } from "mongoose"

const commentSchema = Schema(
  {
    author: {
      type: String,
      minLength: 8,
      required: [true, "Author required."],
    },
    post: {},
    content: {
      type: String,
      required: [true, "Comment cannot be empty."],
    },
    status: {
      type: Boolean,
      default: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  },
)

commentSchema.methods.toJSON = function () {
  const { post, _id, ...comment } = this.toObject()
  comment.id = _id
  return comment
}

export default model("Comment", commentSchema)
