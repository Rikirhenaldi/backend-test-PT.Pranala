const newsRouter = require('express').Router()
const newsController = require('../controllers/news')

newsRouter.post("/", newsController.createNews)
newsRouter.get('/', newsController.getAllNews)
newsRouter.put('/:id', newsController.updateNews)

module.exports = newsRouter