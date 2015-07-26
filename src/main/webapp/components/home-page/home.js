/* Home page. List of post cards are displayed. Simple UI with responsive. Searh, sorting and pagination are not implemented */
define(["jquery", "knockout", "text!./home.html", "dataprovider"], function($, ko, homeTemplate, dataprovider) {
    var postUrl = "/app/#post/",
        color = "color",
        editClass = "glyphicon-pencil",
        trashClass = "glyphicon-trash";

// model for single post on home page.
    function Post(data) {
        var dt = new Date(data.timestamp);
        this.title = ko.observable(data.title);
        this.id = data.id;
        this.text = ko.observable(data.text);
        this.time = (dt.getMonth() + 1) + "/" + dt.getDate() + "/" + dt.getFullYear();
        this.link = postUrl + this.id;

        // We choose random color as post card backgroud. We can use image if post has header image.
        this.css = color + (Math.floor(Math.random() * 3) + 1);
        this.isNew = data.isNew;
        this.isReadMode = ko.observable(false);
    }

// Post List model on home page.
    function PostListViewModel() {
        var self = this;
        self.posts = ko.observableArray([]);
        self.searchText = ko.observable();

        /* Post click handler: 1) if clicked on first post(empty new post card), go to new post page.
                            2) If clicked on edit button, go to edit post page.
                            3) If clicked on trash button, remove the post. Confirm popup is not implented.
                            4) Toggle readMode. In readMode user can read the full context of the post
        */
        self.clickPost = function(post, event) {
            var className = event.target.className;
            if (post.isNew) {
                window.location.href = postUrl;
            } else if (className.indexOf(editClass) > -1) {
                window.location.href = post.link;
            } else if (className.indexOf(trashClass) > -1) {
                self.removePost(post);
            } else if (post.isReadMode()) {
                post.isReadMode(false);
            } else {
                post.isReadMode(true);
            }
        };

        self.removePost = function(post) {
            dataprovider.deletePost(
                post,
                function(post) {
                    self.posts.remove(post);
                });

        };

        dataprovider.getPosts(
            function(posts) {
                var mappedPosts = $.map(posts, function(item) {
                    return new Post(item)
                });
                mappedPosts.unshift(new Post({
                    title: "New Post",
                    isNew: true
                }))
                self.posts(mappedPosts);
            });

    }

    return {
        viewModel: PostListViewModel,
        template: homeTemplate
    };
});