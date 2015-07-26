define(["home", "post"], function(home, post) {

// Testing home view model. Just testing getPosts function here
describe("home", function() {
  var homeModel;

  beforeEach(function() {
    homeModel = new  home.viewModel();
  });

  it("home page should have 7 posts, first one is new post", function() {
    expect(homeModel.posts().length).toEqual(7);
    expect(homeModel.posts()[0].isNew).toBe(true);
  });
});

// Testing home view model
describe("post", function() {
  var postModel;

  beforeEach(function() {
    postModel = new  post.viewModel();
  });

  it("home page should have 7 posts, first one is new post", function() {
    expect(homeModel.posts().length).toEqual(7);
    expect(homeModel.posts()[0].isNew).toBe(true);
  });
});
  
});


