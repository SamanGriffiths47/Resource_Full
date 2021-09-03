const { Comment, Post } = require('../models')

const createComment = async (req, res) => {
  try {
    const comment = await new Comment(req.body)
    console.log('YES')
    const parentId = comment.parentPost
    const filter = { _id: parentId }
    const parentPost = await Post.findOne(filter)
    const oldComments = parentPost.comments
    const update = { comments: [...oldComments, comment._id] }
    await comment.save()
    Post.findByIdAndUpdate(filter, update, (err, data) => {
      if (err) {
        console.log(err)
      } else {
        console.log("pimpin ain't easy")
      }
    })

    return res.status(200).json({ comment })
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
const commentsByUser = async (req, res) => {
  try {
    const { name } = req.params
    const comments = await Comment.find({ user: name })
    return res.status(200).json({ comments })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}
const commentsByWords = async (req, res) => {
  try {
    const { words } = req.params
    const comments = await Comment.find()
    const results = []
    comments.map((com) => {
      const query = com.comment
      query.search(words) >= 0 && results.push(com)
    })
    return res.status(200).json({ results })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}
const commentById = async (req, res) => {
  try {
    const { _id } = req.params
    const comment = await Comment.findById(_id)
    return res.status(200).json({ comment })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}
const deleteCommentById = async (req, res) => {
  try {
    const { _id } = req.params
    const comment = await Comment.findById(_id)
    const parentId = comment.parentPost
    const filter = { _id: parentId }
    const parentPost = await Post.findOne(filter)
    const oldComments = parentPost.comments
    const i = oldComments.indexOf(_id)
    oldComments.splice(i, 1)
    const update = { comments: oldComments }
    await Post.findByIdAndUpdate(filter, update, (err, data) => {
      if (err) {
        console.log(err)
      } else {
        console.log('it worked')
      }
    })
    await Comment.deleteOne({ _id: _id })
    return res.status(200).json({ comment })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}
const commentByParentId = async (req, res) => {
  try {
    const { parent_id } = req.params
    const comments = await Comment.find({ parentPost: parent_id })
    return res.status(200).json(comments)
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

module.exports = {
  createComment,
  allComments,
  commentsByUser,
  commentsByWords,
  commentById,
  deleteCommentById,
  commentByParentId
}
