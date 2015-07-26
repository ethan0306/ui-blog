define(["jquery",  "sanitize"], function($) {
	var requestUrl = "/Blog/api/";

	var getPosts = function(successCallback, failureCallback) {
		$.getJSON(requestUrl, function(allData) {
			if (allData && allData.blog && allData.blog.posts) {
				successCallback(allData.blog.posts)
			}
		});
	};

	var deletePost = function(post, successCallback, failureCallback) {
		$.ajax({
			url: requestUrl + post.id,
			type: 'DELETE',
			success: function(result) {
				successCallback(post)
			}
		});
	};

	var getPost = function(id, successCallback, failureCallback) {
		$.getJSON(requestUrl + id, function(postData) {
			if (postData && postData.post) {
				successCallback(postData.post);
			}
		});
	};

	var savePost = function(post, successCallback, failureCallback) {
		var url = requestUrl + (post.isNew ? "" : post.id);
		$.ajax({
			url: url,
			data: {
				title: post.title,

				// sanitize html to prevent XSS. The libray is relatively large and I just use it for convenience
				text: html_sanitize(post.text())
			},
			contentType: "application/x-www-form-urlencoded",
			type: 'POST',
			success: function(post) {
				successCallback(post);
			}
		});
	};

	return {
		getPosts: getPosts,
		deletePost: deletePost,
		getPost: getPost,
		savePost: savePost
	};
});