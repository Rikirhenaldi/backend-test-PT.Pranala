const testRouter = require('express').Router()
const testController = require('../controllers/news')

testRouter.post("/test-input", testController.validateInput)
testRouter.post("/generate-ganjil", testController.generateGanjil,)

module.exports = testRouter