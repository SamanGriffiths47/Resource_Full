const { Router } = require('express')
const postControllers = require('../controllers/postControllers')
const commentControllers = require('../controllers/commentControllers')
const router = Router()

// Post Routes
router.post('/c_post', postControllers.createPost)
router.get('/posts', postControllers.allPosts)
// router.get('/:skill', postControllers.postBySkill)
// router.get('/:language', postControllers)

// Comment Routes
router.post('/c_comment', commentControllers.createComment)
// router.get('/comments', commentControllers.allComments)

module.exports = router

// patch or put for update
