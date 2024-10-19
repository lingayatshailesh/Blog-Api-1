var express = require('express');
var router = express.Router();
let UC = require("../controller/user")
let CC = require("../controller/comment")

/* GET users listing. */
router.post('/create',UC.sequre ,CC.commentCreate );

router.get('/alldata',UC.sequre, CC.commentFindAllData );

router.get('/:id',UC.sequre, CC.commentFindId );

router.patch('/:id',UC.sequre, CC.commentIdUpdate );

router.delete('/:id',UC.sequre, CC.commentIdDelete );

module.exports = router;
