const { Router } = require('express')
const postControllers = require('../controllers/postControllers')
const commentControllers = require('../controllers/commentControllers')
const router = Router()

// Post Routes
router.post('/c_post', postControllers.createPost)
router.get('/posts', postControllers.allPosts)
router.get('/skill/:skill', postControllers.postsBySkill)
router.get('/language/:language', postControllers.postsByLanguage)
router.get('/p_user/:name', postControllers.postsByUser)
router.get('/p_body/:words', postControllers.postsByWords)
router.get('/p_id/:_id', postControllers.postById)
router.delete('/d_post/:_id', postControllers.deletePostById)

// Comment Routes
router.post('/ccomment', commentControllers.createComment)
router.get('/comments', commentControllers.allComments)
router.get('/c_user/:name', commentControllers.commentsByUser)
router.get('/c_body/:words', commentControllers.commentsByWords)
router.get('/c_id/:_id', commentControllers.commentById)
router.get('/parent_id/:parent_id', commentControllers.commentByParentId)
router.delete('/d_comment/:_id', commentControllers.deleteCommentById)

module.exports = router
