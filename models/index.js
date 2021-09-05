const mongoose = require('mongoose')
const PostSchema = require('./post')
const CommentSchema = require('./comment')

const Comment = mongoose.model('Comment', CommentSchema)
const Post = mongoose.model('Post', PostSchema)

module.exports = {
  Post,
  Comment
}
