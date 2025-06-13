const express = require("express");
const router = express.Router();
let { posts } = require("../data/db");
const postsController = require("../controllers/postcontroller");

router.get("/", postsController.index);

router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find((currentPost) => currentPost.id === id);
  if (!post) {
    return res.status(404).json({
      succes: "OK",
      status: "404",
      message: "Post Not Found",
    });
  }
  res.json({ status: 200, data: post });
});
router.post("/", postsController.store);
router.put("/:id", postsController.update);
router.delete("/:id", postsController.destroy);

module.exports = router;
