const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = 4000;
const postRoutes = express.Router();

let Post = require('./models/postModel');

app.use(cors());
app.use(bodyParser.json());

mongoose.Promise = global.Promise;
mongoose.connect(
'mongodb://may:may890@ds231991.mlab.com:31991/myportfolio',
  () => {
    console.log("Connected to MongoDB.");
  },
  { useNewUrlParser: true }
);

const connection = mongoose.connection;

app.use('/posts', postRoutes);

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

postRoutes.route('/').get(function(req, res) {
    Post.find(function(err, posts) {
        if (err) {
            console.log(err);
        } else {
            res.json(posts);
        }
    });
});

postRoutes.route('/:id').get(function(req, res) {
    let id = req.params.id;
    Post.findById(id, function(err, post) {
        res.json(post);
    });
});

postRoutes.route('/update/:id').post(function(req, res) {
    Post.findById(req.params.id, function(err, post) {
        if (!post)
            res.status(404).send("data is not found");
        else
            post.post_title = req.body.post_title;
            post.post_body = req.body.post_body;
            post.post_category = req.body.post_category;

            post.save().then(post => {
                res.json('Post updated!');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});

postRoutes.route('/add').post(function(req, res) {
    let post = new Post(req.body);
    post.save()
        .then(post => {
            res.status(200).json({'Post': 'post added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new post failed');
        });
});

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});