window.fbAsyncInit = function() {
  // init the FB JS SDK
  FB.init({
    appId      : '128890687175319',
    //appId      : '495212357178271', // App ID from the App Dashboard
    channelUrl : 'channel.html', // Channel File for x-domain communication
    status     : true, // check the login status upon init?
    cookie     : true, // set sessions cookies to allow your server to access the session?
    xfbml      : true  // parse XFBML tags on this page?
  });

  // Check for login + populate and display the menu
  FB.getLoginStatus(function(response) {
    if (response.status === 'connected') {
      // User logged into FB and authorized
      $('.fb-login-button').css("display","none");
      getUserTagsAndDisplay(response.authResponse.accessToken);
    } else if (response.status === 'not_authorized') {
      // User logged into FB but not authorized
      document.getElementById('fb-logout').style.display = 'block';
      $('.fb-login-button').css("display","block");
    } else {
      // User not logged into FB
      document.getElementById('fb-logout').style.display = 'none';
      $('.fb-login-button').css("display","block");
    }
  });
};
function displayMenu(tags){
  var menu_buttons = ["photos","news","sports","restaurants","clothes"];
  for(var i in menu_buttons){
    $('#menu').append('<li class="span4"><a href="'+menu_buttons[i]+'.php?tags='+tags+'" class="menu_button"><img src="http://placehold.it/200x200" alt=""></a></li>');
  }
}

function logout() {
  FB.logout(function(response) {
    console.log('User is now logged out');
  });
}

function getUserTagsAndDisplay(access_token){
  var tags = new Array();
  FB.api('/me/likes?access_token='+access_token, function(response) {
    for (var i = 0; i < response.data.length; i++) {
      tags = tags.concat(response.data[i].category.split(" "));// + response.data[i].name + " ";
    }
    FB.api('/me/movies?access_token='+access_token, function(response) {
      for (var i = 0; i < response.data.length; i++) {
        tags = tags.concat(response.data[i].title.split(" "),response.data[i].description.split(" "));
      }
      FB.api('/me/music?access_token='+access_token, function(response) {
        for (var i = 0; i < response.data.length; i++) {
          //tags += response.data[i].category + " " + response.data[i].name + " ";
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
              console.log("HERE");
              displayMenu(tags.slice(0,1).join(" "));
            });
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
