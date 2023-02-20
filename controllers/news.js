const NewsModel = require('../models/News')
const { response } = require('../helpers/standardResponse')

exports.createNews = async (req, res) => {
    const newsPost = new NewsModel({
        title: req.body.title,
        subTitle: req.body.subTitle,
        writer: req.body.writer,
        description: req.body.description,
    })
    try {
        const news = await newsPost.save()
        return response(res, 200, true, "new News has been created succesfully", news)
    } catch (error) {
        return response(res, 401, false, error)
    }
}

exports.getAllNews = async (req, res) => {
    try {
        const getNews = await NewsModel.find()
        response(res, 200, true, "get all news succesfully", getNews)
    } catch (error) {
        console.log(error);
        response(res, 401, false, error)
    }
}

exports.updateNews = async (req, res) => {
    try {
        const date = new Date()
        const updatedNews = await NewsModel.updateOne({_id: req.params.id },
            {
                title: req.body.title,
                subTitle: req.body.subTitle,
                writer: req.body.writer,
                description: req.body.description,
                updatedAt: date
            })
            if(updatedNews.modifiedCount === 0){
                response(res, 401, false, "News failed to update", updatedNews)
            }else{
                response(res, 200, true, "News has been successfully updated", updatedNews)

            }
    } catch (error) {
        console.log(error);
        response(res, 401, false, error)
    }
}

exports.validateInput = (req, res) => {
    const inputUser = parseInt(req.body.input)
    if(inputUser){
        return response(res, 200, true, "ini number")
    }else{
        return response(res, 200, true, "ini string",)
    }
}

exports.generateGanjil = (req, res) => {
    const inputUser = parseInt(req.body.input)
    let segitiga = []
    if(inputUser){
        const splitInput = req.body.input.split('') 
        for (let index = 0; index < splitInput.length; index++) {
          let row = splitInput[index] + ''
          for (let j = 0; j <= index; j++) {
            row += '0';
          }
          const triangle = segitiga.push(row)
          console.log(segitiga, "<<<<");
        }
        return response(res, 200, true, "Generated Berhasil", segitiga)
    }else{
        console.log("error");
        return response(res, 500, false, "input harus Number",)
    }
}