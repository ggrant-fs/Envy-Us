const controller = require('../controllers/subscribe')
const {Router} = require(express)

const router = Router()

router.get('./subscribe',controller.newSubscription);

module.exports = router;