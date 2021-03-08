const {Router} = require('express')
const controller = require('../controllers/articles')

const router = Router()

router.get('/stories',controller.getArticle)
router.get('/stories/:id',controller.getArticle)

module.exports = router;