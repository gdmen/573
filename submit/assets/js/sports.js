$(document).ready(function() {
  displayItems();
});

//Get latitude and longitude;
function successFunction(position) {
    var lat = position.coords.latitude;
    var long = position.coords.longitude;
    console.log(lat + ":" + long);
    codeLatLng(lat,long);
}
function codeLatLng(lat, lng) {
  var limit = 20;
  var num_per_page = 1;

  geocoder = new google.maps.Geocoder();
  var latlng = new google.maps.LatLng(lat, lng);
  geocoder.geocode({'latLng': latlng}, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      for (var i=0; i<results[0].address_components.length; i++) {
        for (var b=0;b<results[0].address_components[i].types.length;b++) {
          if (results[0].address_components[i].types[b] == "administrative_area_level_2") {
              //this is the object you are looking for
              loc = results[0].address_components[i].long_name;
              break;
          }
        }
      }
      var index = 0;
      $.ajax({
        url : 'http://api.espn.com/v1/sports/news/headlines/?region='+ loc +'&insider=yes&_accept=application%2Fjson&apikey=sc3c4ecexs9w2n3n3vd4cvqm',
        dataType: "jsonp",
        success : function(data) {
          var items = [];
          // do stuff with response.
          var all = data.headlines;
          console.log(all);
          for (var j = 0; ((index < limit) && (j < all.length)); j++) {
            items[index] = all[j];
            index = index + 1;
          }
          renderItems(items);
          generate_pagination(num_per_page);
        }
      });
    } else {
      alert("Geocoder failed due to: " + status);
    }
  });
}

/* 
   Results in the items inserted into the current page
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
    if(items[i].type != 'Recap' && items[i].title != undefined){
      $('#content').append('<div><h3>'+(items[i].title != undefined ? '<a href="'+items[i].links.web.href+'">'+items[i].title+'</a>' : '')+'</h3><p>'+items[i].description+'</p></div>');
    }
  }
}

