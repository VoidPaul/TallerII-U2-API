import Post from "./post.model.js"

export const newPost = async (req, res) => {
  try {
    const data = req.body

    const post = new Post({ ...data, category: category, author: user })

    await post.save()

    return res.status(201).json({
      success: true,
      message: "Post made successfuly.",
    })
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Error making post.",
      error: err.message,
    })
  }
}

export const getPosts = async (req, res) => {
  const { limit = 10, from = 0, name } = req.query
  const isActive = { status: true }

  try {
    let query = { ...isActive }

    if (name) {
      query.name = { $regex: new RegExp(name, "i") }
    }

    const [total, posts] = await Promise.all([
      Post.countDocuments(query),
      Post.find(query)
        .sort(getSortOptions(req))
        .skip(Number(from))
        .limit(Number(limit)),
    ])

    return res.status(200).json({
      success: true,
      total,
      posts,
    })
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Error listing products.",
      error: err.message,
    })
  }
}

export const getPostById = async (req, res) => {
  const { id } = req.params

  try {
    const post = await Post.findById(id)

    if (!post) {
      return res.status(404).json({
        success: false,
        message: "Post not found.",
      })
    }

    req.status(200).json({
      success: true,
      post: {
        ...post.toObject(),
      },
    })
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Error getting post.",
      error: err.message,
    })
  }
}

export const updatePost = async (req, res) => {
  try {
    const { id } = req.params
    const data = req.body

    const post = new Post(data)

    await post.findByIdAndUpdate(id)
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Error updating post.",
      error: err.message,
    })
  }
}

export const removePost = async (req, res) => {
  try {
    const { id } = req.params

    await Product.findByIdAndUpdate(id, { status: false })

    return res.status(200).json({
      success: true,
      message: "User removed successfuly.",
    })
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Error removing post.",
      error: err.message,
    })
  }
}
