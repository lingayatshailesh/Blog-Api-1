let COMMENT = require("../model/comment")

  exports.commentCreate = async function(req, res, next) {
    try {
        let commentCreate = await COMMENT.create(req.body)
        res.status(201).json({
            status : "Success",
            message : "Comment Create Successfull",
            data : commentCreate
        })
      
    } catch (error) {
        res.status(404).json({
            status : "Fail",
            message : error.message
        })
    }
  }

  exports.commentFindAllData = async function(req, res, next) {
    try {
        let commentFindAllData = await COMMENT.find().populate("userId").populate("blogId")
        res.status(200).json({
            status : "Success",
            message : "Blog All Data Found Successfull",
            data : commentFindAllData
        })
      
    } catch (error) {
        res.status(404).json({
            status : "Fail",
            message : error.message
        })
    }
  }

  exports.commentFindId = async function(req, res, next) {
    try {
        let commentFindId = await COMMENT.findById(req.params.id)
        res.status(200).json({
            status : "Success",
            message : "Comment ID Found Successfull",
            data : commentFindId
        })
      
    } catch (error) {
        res.status(404).json({
            status : "Fail",
            message : error.message
        })
    }
  }

  exports.commentIdUpdate = async function(req, res, next) {
    try {
        let commentIdUpdate = await COMMENT.findByIdAndUpdate(req.params.id,req.body,{new : true})
        res.status(200).json({
            status : "Success",
            message : "Comment ID Update Successfull",
            data : commentIdUpdate
        })
      
    } catch (error) {
        res.status(404).json({
            status : "Fail",
            message : error.message
        })
    }
  }

  exports.commentIdDelete = async function(req, res, next) {
    try {
        await COMMENT.findByIdAndDelete(req.params.id)
        res.status(200).json({
            status : "Success",
            message : "Comment ID Delete Successfull"
        })
      
    } catch (error) {
        res.status(404).json({
            status : "Fail",
            message : error.message
        })
    }
  }