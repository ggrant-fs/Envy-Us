const {Router} = require('express')
const controllers = require('../controllers/articles')

const router = Router()

router.get('/articles', controllers.getArticles)
router.get('/articles/:id', controllers.getArticle)

module.exports = router;