const { Comment, Post } = require('../models')

const createComment = async (req, res) => {
  try {
    const comment = await new Comment(req.body)
    const parentId = comment.parentPost
    const filter = { _id: parentId }
    const parentPost = await Post.findOne(filter)
    const oldComments = parentPost.comments
    const update = { comments: [...oldComments, comment._id] }
    await comment.save()
    Post.findByIdAndUpdate(filter, update, (err, data) => {
      if (err) {
        console.log(`${err}, Failed To Add Comment Id To Post Array`)
      } else {
        console.log('Success')
      }
    })

    return res.status(200).json({ comment })
  } catch (error) {
    return res
      .status(500)
      .json({ error: `${error.message}, Failed To Create Comment` })
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
    return res
      .status(500)
      .json({ error: `${error.message}, Failed To Get Comments By Username` })
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
    return res
      .status(500)
      .json({ error: `${error.message}, Failed To Get Comments By Keyword(s)` })
  }
}
const commentById = async (req, res) => {
  try {
    const { _id } = req.params
    const comment = await Comment.findById(_id)
    return res.status(200).json({ comment })
  } catch (error) {
    return res
      .status(500)
      .json({ error: `${error.message}, Failed To Get Comment By Id` })
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
        console.log(`${err}, Failed To Delete Comment Id From Post Array`)
      } else {
        console.log('Succes')
      }
    })
    await Comment.deleteOne({ _id: _id })
    return res.status(200).json({ comment })
  } catch (error) {
    return res
      .status(500)
      .json({ error: `${error.message}, Failed To Delete Comment` })
  }
}
const commentByParentId = async (req, res) => {
  try {
    const { parent_id } = req.params
    const comments = await Comment.find({ parentPost: parent_id })
    return res.status(200).json(comments)
  } catch (error) {
    return res
      .status(500)
      .json({ error: `${error.message}, Failed To Get Comments By Parent Id` })
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
