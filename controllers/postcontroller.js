const connection = require("../data/db");

const index = (req, res) => {
  const sql = "SELECT * FROM posts";

  connection.query(sql, (err, results) => {
    console.log(results);

    if (err) return res.status(500).json({ error: "error executing query" });

    res.json({
      data: results,
      status: 200,
    });
  });
};

const show = (req, res) => {
  const postId = parseInt(req.params.id);

  const sqlPost = `SELECT * FROM posts WHERE id=?`;

  connection.query(sqlPost, [postId], (err, results) => {
    if (err) return res.status(500).json({ error: "error executing query" });
    if (results.length === 0)
      return res.status(404).json({ error: "post not found" });
  });
  const post = result[0];

  res.json({ status: 200, data: post });
};

const store = (req, res) => {
  // const { title, content, image, tags, id } = req.body;
  // let maxId = 0;
  // for (post of posts) {
  //   if (post.id > maxId) maxId = post.id;
  // }
  // const postId = maxId + 1;
  // const newPost = { id: postId, title, content, image, tags };
  // posts.push(newPost);
  // res.json(newPost);
  // res.status(201);
};

const update = (req, res) => {
  // const idPost = parseInt(req.params.id);
  // const { title, content, image, tags } = req.body;
  // const post = posts.find((currentPost) => currentPost.id === idPost);
  // if (!post) {
  //   res.status(404).json({
  //     succes: "OK",
  //     status: "404",
  //     message: "Post Not Found",
  //   });
  //   return;
  //   }
  //   const updatePost = { id: idPost, title, content, image, tags };
  //   const postIndex = posts.indexOf(post);
  //   posts.splice(postIndex, 1, updatePost);
  //   res.json(updatePost);
};

const destroy = (req, res) => {
  // const id = parseInt(req.params.id);
  // const post = posts.find((post) => post.id === id);
  // if (!post) {
  //   res.status(404);
  //   res.json("404 Not Found");
  //   return;
  // }
  // const postIndex = posts.indexOf(post);
  // posts.splice(postIndex, 1);
  // res.sendStatus(204);
  // console.log(posts);
};

module.exports = { index, show, store, update, destroy };
