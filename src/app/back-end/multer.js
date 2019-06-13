const multer = require('multer')
const MIME_TYPE={
    'image/jpg':'jpg',
    'image/jpeg':'jpg',
    'image/png':'pang',
}

var storage = multer.diskStorage({
    destination: function (req, file, callback) {
      callback(null, 'images');
    },
    filename: function (req, file, callback) {
    const name = file.originalname.split(' ').join('_');
    const extension = MIME_TYPE[file.mimetype];
    callback(null, name + '-' + Date.now() + '.' + extension);
    }
  });

module.exports = multer({storage: storage}).single('image');