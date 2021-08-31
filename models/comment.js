const { Schema } = require('mongoose')

const CommentSchema = new Schema(
  {
    authorName: { type: String, required: true },
    comment: { type: String, required: true },
    parentPost: {
      type: Schema.Types.ObjectId,
      ref: 'Post',
      required: true
    }
  },
  { timestamps: true }
)

module.exports = CommentSchema
