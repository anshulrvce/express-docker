const multer = require('multer');


const upload = multer({
    limits:{
        fileSize: 400 * 10024 * 10024
    }
})


module.exports = upload