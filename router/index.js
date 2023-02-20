const router = require('express').Router()
const newsRouter = require('./news')
const testRouter = require('./test')
// router.use('/auth')
// router.use('/users', auth, userRouter)
router.use('/news', newsRouter)
router.use('/test', testRouter)

module.exports = router