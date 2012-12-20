$(document).ready(function() {
  displayItems(20);
});

//Get latitude and longitude;
function successFunction(position) {
    var lat = position.coords.latitude;
    var long = position.coords.longitude;
    console.log(lat + ":" + long);
    codeLatLng(lat,long);
}
function codeLatLng(lat, lng) {
  query = getURLParameter('tags');
  query = query.replace(/ /g,",");
  var limit = 20;
  var num_per_page = 1;
  


  var state = '';
  var city = '';
  geocoder = new google.maps.Geocoder();
  var latlng = new google.maps.LatLng(lat, lng);
  geocoder.geocode({'latLng': latlng}, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      for (var i=0; i<results[0].address_components.length; i++) {
        for (var b=0;b<results[0].address_components[i].types.length;b++) {
          if (results[0].address_components[i].types[b] == "administrative_area_level_1") {
              //this is the object you are looking for
              if(state == '')
                state = results[0].address_components[i].long_name;
          }
          if (results[0].address_components[i].types[b] == "administrative_area_level_2") {
              //this is the object you are looking for
              if(city == '')
                city = results[0].address_components[i].long_name.toLowerCase();
          }
          if(state != undefined && city != undefined){
            break;
          }
        }
      }
      var md5 = MD5('jsmeesryvu52zym97jvew6cb' + 'UKj3Fz8Bpw' + Math.round(new Date().getTime() / 1000));
      var index = 0;
      $.ajax({
        url : 'http://news-api.patch.com/v1.1/states/'+state+'/cities/'+city+'/stories?limit=100&dev_key=jsmeesryvu52zym97jvew6cb&sig='+md5,
        dataType: "json",
        success : function(data) {
          var items = [];
          var seen_titles = new Array();
          // do stuff with response.
          var all = data.stories;
          for (var j = 0; ((index < limit) && (j < all.length)); j++) {
            if($.inArray(all[j].feed_title,seen_titles) == -1){
              seen_titles.push(all[j].feed_title);
              items[index] = all[j];
              index = index + 1;
            }
          }
          renderItems(items.slice(0,limit));
          generate_pagination(num_per_page);
        }
      });
    } else {
      alert("Geocoder failed due to: " + status);
    }
  });
}

/* Takes a number of items to get
   Results in the items inserted into the current page
*/
function displayItems(limit) {
  if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(successFunction);
  }
}

/* Takes an array of json objects:
    Array = {<item object>}
   and inserts the given items into the current page's #content div.
*/
function renderItems(items){
  console.log(items);
  for(var i=0; i<items.length; i++){
    $('#content').append('<div class="center"><h3>'+(items[i].feed_title != undefined ? '<a href="'+items[i].story_url+'">'+items[i].feed_title+'</a>' : '')+'</h3><p>'+items[i].summary+'</p></div>');
  }
}


