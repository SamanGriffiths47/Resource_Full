const { Comment } = require('../models')

const createComment = async (req, res) => {
  try {
    const comment = await new Comment(req.body)
    // const parentPost = post.parentPost
    // const oldComments =
    // const filter = { _id: parentPost }
    await comment.save()

    return res.status(201).json({
      comment
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}
const allComments = async (req, res) => {
  try {
    const comments = await Comment.find()
    return res.status(200).json({ comments })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

module.exports = { createComment, allComments }
