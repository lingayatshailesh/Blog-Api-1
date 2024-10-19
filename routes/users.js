var express = require('express');
var router = express.Router();
let UC = require("../controller/user")


/* GET users listing. */
router.post('/signup',UC.userRegister );

router.post('/login',UC.userLogin );

router.get('/alldata',UC.sequre, UC.userFindAllData );

router.get('/:id',UC.sequre, UC.userFindId );

router.patch('/:id',UC.sequre, UC.userIdUpdate );

router.delete('/:id',UC.sequre, UC.userIdDelete );

module.exports = router;