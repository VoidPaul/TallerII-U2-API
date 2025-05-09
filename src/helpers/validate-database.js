import Post from "../post/post.model.js"
import Comment from "../comment/comment.model.js"

export const postExists = async (id = "") => {
  const exists = await Post.findOne({ id })

  if (!exists) {
    throw new Error("Product does not exist.")
  }
}

export const commentExists = async (id = "") => {
  const exists = await Comment.findOne({ id })

  if (!exists) {
    throw new Error("Category does not exist")
  }
}
