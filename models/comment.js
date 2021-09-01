const { Schema } = require('mongoose')

const CommentSchema = new Schema(
  {
    user: { type: String, required: true },
    userDisplay: { type: String, required: true },
    comment: { type: String, required: true },
    commentDisplay: { type: String, required: true },
    parentPost: {
      type: Schema.Types.ObjectId,
      ref: 'Post',
      required: true
    }
  },
  { timestamps: true }
)

module.exports = CommentSchema
