const mongoose = require('mongoose')
const PostSchema = require('./Post')
const CommentSchema = require('./Comment')

const Comment = mongoose.model('Comment', CommentSchema)
const Post = mongoose.model('Post', PostSchema)

module.exports = {
  Post,
  Comment
}
