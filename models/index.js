const mongoose = require('mongoose')
const CommentSchema = require('./Comment')
const PostSchema = require('./Post')

const Comment = mongoose.model('Comment', CommentSchema)
const Post = mongoose.model('Post', PostSchema)

module.exports = {
  Post,
  Comment
}
