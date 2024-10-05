var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
    //res.render('index', { title: 'Express' });
    res.render("index", { title: "익스프레스" });
    //title에 "익스프레스" 변수입력, title 출력
});

module.exports = router;
