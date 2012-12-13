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
      console.log('http://api.amp.active.com/search?l='+city+','+state+',US&num='+limit+'&v=json&api_key=c8gsay4sa97vmrzhdjxxpbw5');

      var index = 0;
      $.ajax({
        url : 'http://api.amp.active.com/search?l='+city+','+state+',US&num='+limit+'&v=json&api_key=c8gsay4sa97vmrzhdjxxpbw5',
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
  console.log(items);
  for(var i=0; i<items.length; i++){
    $('#content').append('<div class="center"><h3>'+(items[i].feed_title != undefined ? '<a href="'+items[i].story_url+'">'+items[i].feed_title+'</a>' : '')+'</h3><p>'+items[i].summary+'</p></div>');
  }
}


