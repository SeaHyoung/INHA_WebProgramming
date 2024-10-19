var express = require("express");
var router = express.Router();

//도서검색 router
router.get("/book", function (req, res, next) {
    //kakao/book 생략
    res.render("index", { title: "도서검색", pageName: "kakao/book.ejs" });
});

//지역검색 router
router.get("/local", function (req, res) {
    res.render("index", { title: "지역검색", pageName: "kakao/local.ejs" });
});

//블로그 검색 router
router.get("/blog", function (req, res) {
    res.render("index", { title: "블로그검색", pageName: "kakao/blog.ejs" });
});

//도서정보 페이지 router
// router.get("/info", function (req, res) {
//     //book/info 는 path name이기 떄문에 경로와 관계 x 마음대로 설정
//     res.render("index", { title: "도서정보", pageName: "kakao/info.ejs" });
// });
router.get("/book/info", function (req, res, next) {
    //오브젝트로 정의
    const info = {
        title: req.query.title,
        thumbnail: req.query.thumbnail,
        isbn: req.query.isbn,
        price: req.query.price,
        authors: req.query.authors,
        publisher: req.query.publisher,
        contents: req.query.contents,
    };
    res.render("index", {
        title: "도서정보",
        pageName: "kakao/info.ejs",
        info: info,
    });
    console.log("title", title);
});

module.exports = router;
