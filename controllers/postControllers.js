const { Post } = require('../models')

const createPost = async (req, res) => {
  try {
    const post = await new Post(req.body)
    await post.save()
    return res.status(201).json({
      post
    })
  } catch (error) {
    return res
      .status(500)
      .json({ error: `${error.message}, Post Creation Failed` })
  }
}
const allPosts = async (req, res) => {
  try {
    const posts = await Post.find()
    return res.status(201).json({
      posts
    })
  } catch (error) {
    return res
      .status(500)
      .json({ error: `${error.message}, Failed To Get All Posts` })
  }
}
const postsBySkill = async (req, res) => {
  try {
    const { skill } = req.params
    const posts = await Post.find({ skill: skill })
    return res.status(201).json({ posts })
  } catch (error) {
    return res
      .status(500)
      .json({ error: `${error.message}, Failed To Get Posts By Skill(s)` })
  }
}

const postsByLanguage = async (req, res) => {
  try {
    const { language } = req.params
    const posts = await Post.find({ language: language })
    return res.status(201).json({ posts })
  } catch (error) {
    return res
      .status(500)
      .json({ error: `${error.message}, Failed To Get Posts By Language(s)` })
  }
}
const postsByUser = async (req, res) => {
  try {
    const { name } = req.params
    const posts = await Post.find({ user: name })
    return res.status(201).json({ posts })
  } catch (error) {
    return res
      .status(500)
      .json({ error: `${error.message}, Failed To Get Posts By User` })
  }
}
const postById = async (req, res) => {
  try {
    const { _id } = req.params
    const post = await Post.find({ _id: _id })
    return res.status(201).json({ post })
  } catch (error) {
    return res
      .status(500)
      .json({ error: `${error.message}, Failed To Get Post By Id` })
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
    return res.status(201).json({ results })
  } catch (error) {
    return res
      .status(500)
      .json({ error: `${error.message}, Failed To Get Posts By Keyword(s)` })
  }
}
const deletePostById = async (req, res) => {
  try {
    const { _id } = req.params
    const post = await Post.deleteOne({ _id: _id })
    return res.status(201).json({ post })
  } catch (error) {
    return res
      .status(500)
      .json({ error: `${error.message}, Failed To Delete Post` })
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
