const { Post } = require('../models')

const createPost = async (req, res) => {
  try {
    console.log('YEERRRR')
    const post = await new Post(req.body)
    await post.save()
    return res.status(201).json({
      post
    })
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
const postsBySkill = async (req, res) => {
  try {
    const { skill } = req.params
    const posts = await Post.find({ skill: skill })
    return res.status(200).json({ posts })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const postsByLanguage = async (req, res) => {
  try {
    const { language } = req.params
    const posts = await Post.find({ language: language })
    return res.status(200).json({ posts })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}
const postsByUser = async (req, res) => {
  try {
    const { name } = req.params
    const posts = await Post.find({ user: name })
    return res.status(200).json({ posts })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}
const postById = async (req, res) => {
  try {
    const { _id } = req.params
    const post = await Post.find({ _id: _id })
    return res.status(200).json({ post })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}
const postsByWords = async (req, res) => {
  try {
    const { words } = req.params
    const posts = await Post.find()
    const results = []
    posts.map((post) => {
      const query = post.description
      query.search(words) >= 0 && results.push(post)
    })
    return res.status(200).json({ results })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}
const deletePostById = async (req, res) => {
  try {
    const { _id } = req.params
    const post = await Post.deleteOne({ _id: _id })
    return res.status(200).json({ post })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}
module.exports = {
  createPost,
  postsBySkill,
  postsByLanguage,
  allPosts,
  postsByUser,
  postById,
  postsByWords,
  deletePostById
}
