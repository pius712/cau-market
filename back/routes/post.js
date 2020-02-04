const express = require('express');
const router = express.Router();
const multer = require('multer');

const upload = multer({
	storage: multer.diskStorage({
		destination(req, file, done) {
			done(null, '/uploads/');
		},
		filename(req, file, done) {
			done(null, file.fieldname + '-' + Date.now());
		},
	}),
	limits: { fileSize: 20 * 1024 * 1024 },
});

router.post('/images', upload.array('images', 5), (req, res) => {
	res.json(res.file.map(v => v.filename));
});
module.exports = router;
