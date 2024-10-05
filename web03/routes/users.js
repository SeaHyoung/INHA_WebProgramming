var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
    //루트 뒤에 users생략
    res.send("respond with a resource");
});

module.exports = router;
