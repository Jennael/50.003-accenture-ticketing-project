const express = require('express');
const router = express.Router();


router.get('/user', function(req, res) {
    var primary = req.session.primary;
    res.render('welcome', {"primary":primary});
});














module.exports = router;