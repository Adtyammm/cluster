const multer = require ('multer');

const fileStorage = multer.diskStorage({
    destination: (req, res, cb) => {
        cb(null, './public/images');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '_' + file.originalname);
    }
})


var upload = multer({
    storage: fileStorage
});

module.exports = upload;