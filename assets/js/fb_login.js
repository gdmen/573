window.fbAsyncInit = function() {
  // init the FB JS SDK
  FB.init({
    appId      : '128890687175319', 
    //appId      : '495212357178271',  // App ID from the App Dashboard
    channelUrl : 'channel.html',  // Channel File for x-domain communication
    status     : true, // check the login status upon init?
    cookie     : true, // set sessions cookies to allow your server to access the session?
    xfbml      : true  // parse XFBML tags on this page?
  });

  FB.Event.subscribe('auth.login', function(response) {
    window.location.reload();
  });

  // Check for login + populate and display the menu
  FB.getLoginStatus(function(response) {
    if (response.status === 'connected') {
      // User logged into FB and authorized
      getUserTagsAndDisplay(response.authResponse.accessToken);
    } else if (response.status === 'not_authorized') {
      // User logged into FB but not authorized
      $('#loading').hide();
      $('.fb-login-button').show();
    } else {
      // User not logged into FB
      $('#loading').hide();
      $('.fb-login-button').show();
    }
  });
};
function displayMenu(tags){
  $('.menu_button').each(function(){
    $(this).attr('href',  $(this).attr('href') + tags);
  });
}

function logout() {
  FB.logout(function(response) {
    console.log('User is now logged out');
  });
}

function getUserTagsAndDisplay(access_token){
  var tags = new Array();
  // compile a list of words
  FB.api('/me/likes?access_token='+access_token, function(response) {
    for (var i = 0; i < response.data.length; i++) {
      tags = tags.concat(response.data[i].category.split(" "));
    }
    FB.api('/me/movies?access_token='+access_token, function(response) {
      for (var i = 0; i < response.data.length; i++) {
        tags = tags.concat(response.data[i].title.split(" "),response.data[i].description.split(" "));
      }
      FB.api('/me/books?access_token='+access_token, function(response) {
        for (var i = 0; i < response.data.length; i++) {
          tags = tags.concat(response.data[i].title.split(" "),response.data[i].description.split(" "),response.data[i].author.join(" ").split(" "),response.data[i].tag.join(" ").split(" "));
        }
        FB.api('/me/groups?access_token='+access_token, function(response) {
          for (var i = 0; i < response.data.length; i++) {
            tags = tags.concat(response.data[i].name.split(" "));
          }
          FB.api('/me/events?access_token='+access_token, function(response) {
            for (var i = 0; i < response.data.length; i++) {
              tags = tags.concat(response.data[i].location.split(" "),response.data[i].name.split(" "));
            }
            // remove common words
            tags = tags.join(" ").toLowerCase();
            var determiners = new Array(' the', ' a ', ' an ', ' and ', ' another ', ' no ', '\'s ', ' some ', ' any ', ' my ', ' our ', ' their ', ' her ', ' his ', '0',  '1', '2', '3', '4', '5', '6', '7', '8', '9', '1/2', '1/3', '1/4', ' each ', ' every ', ' certain ', ' its ', ' this ', ' that ', ' - ', ' / ');
            for (var dt in determiners) {
              tags = tags.replace(new RegExp(determiners[dt], "g"), ' ');
            }
            // remove excess spaces
            tags = tags.replace(new RegExp('\\s+', "g"), ' ');
            // remove duplicate tags
            tags = tags.split(" ");
            var uniqueTags = [];
            var seenTags = {};
            for(var i=0;i<tags.length;i++) {
              if (!seenTags[tags[i]]) {
                seenTags[tags[i]]=true;
                uniqueTags.push(tags[i]);
              }
            }
            // randomly select 10 tags
            tags = uniqueTags.sort(function() { return 0.5 - Math.random();}).splice(0,10).join(' ');
            console.log(tags);
            displayMenu(tags);
            $('#loading').hide();
            $('#menu').show();
            $('#fb-logout').show();
          });
        });
      });
    });
  });
}

(function(d){
   var js, id = 'facebook-jssdk'; if (d.getElementById(id)) {return;}
   js = d.createElement('script'); js.id = id; js.async = true;
   js.src = "//connect.facebook.net/en_US/all.js";
   d.getElementsByTagName('head')[0].appendChild(js);
 }(document));
