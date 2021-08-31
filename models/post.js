const { Schema } = require('mongoose')

const PostSchema = new Schema(
  {
    authorName: { type: String, required: true },
    description: { type: String, required: true },
    language: [{ type: String, required: true }],
    skill: [{ type: String, required: true }],
    link: { type: String, required: true },
    comments: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Comment',
        required: false
      }
    ]
  },
  { timestamps: true }
)

module.exports = PostSchema
