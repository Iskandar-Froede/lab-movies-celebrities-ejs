const router = require("express").Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get('/create', (req, send, next) => {
  res.render('celebrities/new-celebrities')
})

module.exports = router;
