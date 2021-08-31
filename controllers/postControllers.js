const { Post } = require('../models')

const createPost = async (req, res) => {
  try {
    const post = await new Post(req.body)
    await post.save()
    return res.status(201).json({
      post
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}
const postBySkill = async (req, res) => {
  try {
    const skill = req.params.skill
    const post = Post.find({ skill: skill })
    return res.send(post)
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}
const allPosts = async (req, res) => {
  try {
    const posts = await Post.find()
    return res.status(200).json({ posts })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

module.exports = { createPost, postBySkill, allPosts }
