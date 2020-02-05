const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

const upload = multer({
	storage: multer.diskStorage({
		destination(req, file, done) {
			done(null, 'uploads');
		},
		filename(req, file, done) {
			const ext = path.extname(file.originalname);
			const basename = path.basename(file.originalname, ext);
			done(null, basename + Date.now() + ext);
		},
	}),
	limits: { fileSize: 20 * 1024 * 1024 },
});

router.post('/images', upload.array('images', 5), (req, res) => {
	console.log('req.files', req.files);
	res.json(req.files.map(v => v.filename));
});
module.exports = router;
