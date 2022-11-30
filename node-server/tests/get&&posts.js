/* Begin Middleware */
function middleware(){};

var stack = middleware(function(req, res, next) {
    users.get_all(function(err, users) {
        if (err) next(err);
        req.users = users;
        next();  
    });
}, function(req, res, next) {
    posts.get_all(function(err, posts) {
        if (err) next(err);
        req.posts = posts;
        next();
    })
}, function(req, res, next) {
    req.posts.forEach(function(post) {
        post.user = req.users[post.userId];
    });

    res.render("blog/posts", {
        "posts": req.posts
    });
});

app.get("/posts", function(req, res) {
   stack.handle(req, res); 
});

app.get("/posts", [
    function(req, res, next) {
        users.get_all(function(err, users) {
            if (err) next(err);
            req.users = users;
            next();  
        });
    }, function(req, res, next) {
        posts.get_all(function(err, posts) {
            if (err) next(err);
            req.posts = posts;
            next();
        })
    }, function(req, res, next) {
        req.posts.forEach(function(post) {
            post.user = req.users[post.userId];
        });

        res.render("blog/posts", {
            "posts": req.posts
        });
    }
], function(req, res) {
   stack.handle(req, res); 
});
/* End middleware */