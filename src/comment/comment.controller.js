import Comment from "./comment.model.js"

export const newComment = async (req, res) => {
  try {
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Error making comment.",
      error: err.message,
    })
  }
}

export const getComments = async (req, res) => {
  try {
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Error making comment.",
      error: err.message,
    })
  }
}

export const getCommentById = async (req, res) => {
  try {
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Error making comment.",
      error: err.message,
    })
  }
}

export const removeComment = async (req, res) => {
  try {
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Error making comment.",
      error: err.message,
    })
  }
}
