//fetching data

function getSubreddits() {
  var subreddit = $('#subreddit').val();
  console.log(subreddit);

  var promise = $.ajax({
    url: 'https://www.reddit.com/r/' + subreddit + '.json',
    type: 'get'
  })/*.then(function(response) {
    console.log(response);
  })*/;

  promise.then(function(subreddits) {
    var posts = subreddits.data.children;
    console.log(posts);
    var templateSource = $('#subreddit-list-template').html();
    var template = Handlebars.compile(templateSource);
    var html = template({
      post: posts
    });
    $('#subreddit-list').html(html);
  }, function() {
    console.log('Nothing found');
  });
};
