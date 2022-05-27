const express = require("express");
const router = express.Router();
const news = require("../services/news");

// Get news

router.get("/", async function (req, res, next) {
  try {
    res.json(await news.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error  `, err.message);
    next(err);
  }
});


module.exports = router;
