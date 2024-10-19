var express = require('express');
var router = express.Router();
let UC = require("../controller/user")
let BC = require("../controller/blog")
const multer  = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/images')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix + file.originalname)
    }
  })
  
  const upload = multer({ storage: storage })

/* GET users listing. */
router.post('/create',upload.single("profileImage"),UC.sequre ,BC.blogCreate );

router.get('/alldata',UC.sequre, BC.blogFindAllData );

router.get('/:id',UC.sequre, BC.blogFindId );

router.patch('/:id',UC.sequre, BC.blogIdUpdate );

router.delete('/:id',UC.sequre, BC.blogIdDelete );

module.exports = router;
