const { Schema } = require('mongoose')

const PostSchema = new Schema(
  {
    user: { type: String, required: true },
    userDisplay: { type: String, required: true },
    description: { type: String, required: true },
    descriptionDisplay: { type: String, required: true },
    language: [{ type: String, required: true }],
    languageDisplay: [{ type: String, required: true }],
    skill: [{ type: String, required: true }],
    skillDisplay: [{ type: String, required: true }],
    link: { type: String, required: true },
    comments: [{ type: Schema.Types.ObjectId, required: false }]
  },
  { timestamps: true }
)

module.exports = PostSchema
