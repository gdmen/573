$(document).ready(function() {
  displayItems();
});

//Get latitude and longitude;
function successFunction(position) {
    var lat = position.coords.latitude;
    var long = position.coords.longitude;
    codeLatLng(lat,long);
}
function codeLatLng(lat, lng) {

  var auth = {
    //
    // Update with your auth tokens.
    //
    consumerKey: "needfDiVXhXKwgeVQkFHJA",
    consumerSecret: "1zuDjdTHd1ZNptukE_IRw887XPg",
    accessToken: "jf8M4iuQRIsndd2yJvhWRifh21Djtv_u",
    // This example is a proof of concept, for how to use the Yelp v2 API with javascript.
    // You wouldn't actually want to expose your access token secret like this in a real application.
    // --> Well. . . this is not good.
    accessTokenSecret: "bShFQ1RBXvQuu-xoLDiCYbgAbMI",
    serviceProvider: {
      signatureMethod: "HMAC-SHA1"
    }
  };

  var accessor = {
    consumerSecret: auth.consumerSecret,
    tokenSecret: auth.accessTokenSecret
  };


  query = getURLParameter('tags');
  query = query.replace(/ /g,",");


  var limit = 20;
  var num_per_page = 1;

  var index = 0;
    parameters = [];
    parameters.push(['term', 'food']);
    parameters.push(['ll', lat+','+lng]);
    parameters.push(['callback', 'cb']);
    parameters.push(['oauth_consumer_key', auth.consumerKey]);
    parameters.push(['oauth_consumer_secret', auth.consumerSecret]);
    parameters.push(['oauth_token', auth.accessToken]);
    parameters.push(['oauth_signature_method', auth.serviceProvider.signatureMethod]);
    var message = {
      'action': 'http://api.yelp.com/v2/search',
      'method': 'GET',
      'parameters': parameters
    };

    OAuth.setTimestampAndNonce(message);
    OAuth.SignatureMethod.sign(message, accessor);

    var parameterMap = OAuth.getParameterMap(message.parameters);
    parameterMap.oauth_signature = OAuth.percentEncode(parameterMap.oauth_signature)

    $.ajax({
      'url': message.action,
      'data': parameterMap,
      'cache': true,
      'dataType': 'jsonp',
      'jsonpCallback': 'cb',
      'success': function(data, textStats, XMLHttpRequest) {
        var items = [];
        // do stuff with response.
        var all = data.businesses;
        for (var j = 0; ((index < limit) && (j < all.length)); j++) {
          items[index] = all[j];
          index = index + 1;
        }
        renderItems(items);
        generate_pagination(num_per_page);
      }
    });
}

/* Results in the items inserted into the current page
*/
function displayItems() {
  if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(successFunction);
  }
  
}

/* Takes an array of json objects:
    Array = {<item object>}
   and inserts the given items into the current page's #content div.
*/
function renderItems(items){
  for(var i=0; i<items.length; i++){
    console.log(items[i]);
    $('#content').append('<div><div class="row"><div class="span5"><h3>'+items[i].name+'</h3></div><div class="span3"><h3>'+(items[i].display_phone != undefined ? items[i].display_phone : '')+'</h3></div></div>'+
    '<div class="row"><div class=span5><img src="'+items[i].rating_img_url_large+'"/></div><div class="span3">'+items[i].location.display_address[0]+', '+items[i].location.display_address[1]+', '+items[i].location.display_address[2]+'</div></div>'+
    '<div class="row"><div class="span5">'+items[i].snippet_text+'<a href="'+items[i].url+'">read more reviews</a></div><div class=span3>'+(items[i].image_url != undefined ? '<img width=100% src="'+items[i].image_url+'"/>' : '')+'</div></div></div>');
  }
}

