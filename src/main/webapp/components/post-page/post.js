// View model for new post or edit post page
define(["knockout", "text!./post.html", "dataprovider"], function(ko, postTemplate, dataprovider) {

  function PostViewModel(route) {
    this.id = route.id,
    this.title = ko.observable();
    this.text = ko.observable();
    this.time = ko.observable();
    this.isNew = route.id == null;
    var self = this;
    self.publish = function() {
      dataprovider.savePost(
        self,
        function(post) {
          window.location.href = "/app";
        });
    };

   // if it is not new post(have id in url), we get post data.
    if (!self.isNew) {
      dataprovider.getPost(
        self.id,
        function(post) {
          self.title(post.title);
          self.text(post.text);
          self.time = (post.timestamp);
        });
    }

  // Customized binding for editable div. We display it as textarea and save the original html
    ko.bindingHandlers.editableText = {
      init: function(element, valueAccessor) {
        $(element).on('blur', function() {
          var observable = valueAccessor();
          observable($(this).html());
        });
      },
      update: function(element, valueAccessor) {
        var value = ko.utils.unwrapObservable(valueAccessor());
        $(element).html(value);
      }
    };
  }

  return {
    viewModel: PostViewModel,
    template: postTemplate
  };

});