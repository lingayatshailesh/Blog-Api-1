let BLOG = require("../model/blog")

  exports.blogCreate = async function(req, res, next) {
    try {
        req.body.profileImage = req.file.filename
        let blogCreate = await BLOG.create(req.body)
        res.status(201).json({
            status : "Success",
            message : "Blog Create Successfull",
            data : blogCreate
        })
      
    } catch (error) {
        res.status(404).json({
            status : "Fail",
            message : error.message
        })
    }
  }

  exports.blogFindAllData = async function(req, res, next) {
    try {
        let blogFindAllData = await BLOG.find().populate("userId")
        res.status(200).json({
            status : "Success",
            message : "Blog All Data Found Successfull",
            data : blogFindAllData
        })
      
    } catch (error) {
        res.status(404).json({
            status : "Fail",
            message : error.message
        })
    }
  }

  exports.blogFindId = async function(req, res, next) {
    try {
        let blogFindId = await BLOG.findById(req.params.id)
        res.status(200).json({
            status : "Success",
            message : "Blog ID Found Successfull",
            data : blogFindId
        })
      
    } catch (error) {
        res.status(404).json({
            status : "Fail",
            message : error.message
        })
    }
  }

  exports.blogIdUpdate = async function(req, res, next) {
    try {
        let blogIdUpdate = await BLOG.findByIdAndUpdate(req.params.id,req.body,{new : true})
        res.status(200).json({
            status : "Success",
            message : "Blog ID Update Successfull",
            data : blogIdUpdate
        })
      
    } catch (error) {
        res.status(404).json({
            status : "Fail",
            message : error.message
        })
    }
  }

  exports.blogIdDelete = async function(req, res, next) {
    try {
        await BLOG.findByIdAndDelete(req.params.id)
        res.status(200).json({
            status : "Success",
            message : "Blog ID Delete Successfull"
        })
      
    } catch (error) {
        res.status(404).json({
            status : "Fail",
            message : error.message
        })
    }
  }