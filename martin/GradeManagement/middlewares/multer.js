const multer = require('multer');
const path = require('path');

// Set The Storage Engine
const storage = multer.diskStorage({
    destination: './uploads/',
    filename: function(req, file, cb){
        cb(null,file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});
  
// // Init Upload
const upload = multer({
    storage: storage,
    limits:{fileSize: 1000000},
    fileFilter: function(req, file, cb){
        checkFileType(file, cb);
    }
}).single('Grades');
  
// // Check File Type
function checkFileType(file, cb){
    // Allowed ext
    const filetypes = /csv/;
    // Check ext
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    // Check mime
    const mimetype = filetypes.test(file.mimetype);
  
    if(extname){
      return cb(null,true);
    } else {
      cb('Error: csv Only!');
    }
  }


const uploadFile = (req,res,next) => {
    upload(req, res, (err) => {
        if(err){
            res.json({
                msg: err
            });
        } else {
            if(req.file == undefined){
                res.json({
                    msg: 'Error: No File Selected!'
                });
            } else {
                // res.json({
                //     msg: 'File Uploaded!',
                //     file: `uploads/${req.file.filename}`
                // });
                next()
            }
        }
    });
}

module.exports = uploadFile;
    