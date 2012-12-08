window.fbAsyncInit = function() {
  // init the FB JS SDK
  FB.init({
    //appId      : '128890687175319',
    appId      : '495212357178271', // App ID from the App Dashboard
    channelUrl : 'channel.html', // Channel File for x-domain communication
    status     : true, // check the login status upon init?
    cookie     : true, // set sessions cookies to allow your server to access the session?
    xfbml      : true  // parse XFBML tags on this page?
  });

  //Additional init code here
  FB.getLoginStatus(function(response) {
    if (response.status === 'connected') {
      // User logged into FB and authorized
      testAPI(response.authResponse.accessToken);
      $('.fb-login-button').css("display","none");
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
function logout() {
  FB.logout(function(response) {
    console.log('User is now logged out');
  });
}
function testAPI(access_token) {
  FB.api('/me/likes?access_token='+access_token, function(response) {
    console.log(response);
  });
  FB.api('/me/movies?access_token='+access_token, function(response) {
    console.log(response);
  });
  FB.api('/me/music?access_token='+access_token, function(response) {
    console.log(response);
  });
  FB.api('/me/books?access_token='+access_token, function(response) {
    console.log(response);
  });
  FB.api('/me/groups?access_token='+access_token, function(response) {
    console.log(response);
  });
  FB.api('/me/events?access_token='+access_token, function(response) {
    console.log(response);
  });
  FB.api('/me/locations?access_token='+access_token, function(response) {
    console.log(response);
  });
}

(function(d){
   var js, id = 'facebook-jssdk'; if (d.getElementById(id)) {return;}
   js = d.createElement('script'); js.id = id; js.async = true;
   js.src = "//connect.facebook.net/en_US/all.js";
   d.getElementsByTagName('head')[0].appendChild(js);
 }(document));