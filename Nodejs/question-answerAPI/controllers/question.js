const Question = require('../models/Question');
const CustomError = require('../middlewares/errors/customErrorHandler')
const asyncErrorWrapper = require("express-async-handler")


const askNewQuestion = asyncErrorWrapper(async (req, res, next) => {
  const information = req.body;

  const question = await Question.create({
    ...information,
    user: req.user.id
  })
  res.status(200).json({
    success: true,
    data: question
  })
});



module.exports = {
  askNewQuestion
}