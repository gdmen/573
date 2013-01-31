/* Takes a number of items to get
   Results in the items inserted into the current page
*/
function displayNews(limit, num_per_page) {
  if(limit <= 0 || num_per_page <= 0){
    return;
  }
  if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(p){codeLatLngNews(limit, num_per_page, p);});
  }
}

/* Takes an array of json objects:
    Array = {<item object>}
   and inserts the given items into the current page's #content div.
*/
function renderNews(items){
  $('#content').empty();
  $('#content').append(formatNews(items));
}
/* Takes an array of json objects:
    Array = {<item object>}
   and returns an html formatted string.
*/
function formatNews(items){
  retString = '';
  for(var i=0; i<items.length; i++){
    retString += '<div class="center"><h3>'+(items[i].title != undefined ? '<a href="'+items[i].story_url+'">'+items[i].title+'</a>' : '<a></a>')+'</h3><p>'+items[i].summary+'</p></div>';
  }
  return retString;
}


/*
  Helper functions for displayNews
*/

function codeLatLngNews(limit, num_per_page, position) {
  query = getURLParameter('tags');
  query = query.replace(/ /g,",");
  
  var lat = position.coords.latitude;
  var long = position.coords.longitude;
  
  geocoder = new google.maps.Geocoder();
  var latlng = new google.maps.LatLng(lat, long);
  geocoder.geocode({'latLng': latlng}, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      state = '';
      city = '';
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
      patchAPICall(limit, num_per_page, state,city);
    } else {
      alert("Geocoder failed due to: " + status);
    }
  });
}

function patchAPICall(limit, num_per_page, state, city){
  var md5 = MD5('jsmeesryvu52zym97jvew6cb' + 'UKj3Fz8Bpw' + Math.round(new Date().getTime() / 1000));
  $.ajax({
    url : 'includes/proxy.php?url=' + encodeURIComponent('http://news-api.patch.com/v1.1/states/'+state+'/cities/'+city+'/stories?limit=100&dev_key=jsmeesryvu52zym97jvew6cb&sig='+md5),
    'method': 'GET',
    'cache': true,
    success : function(data) {
      var index = 0;
      var items = [];
      var seen_titles = new Array();
      try{
        data = $.parseJSON(data);
        // do stuff with response.
        var all = data.stories;
        for (var j = 0; ((index < limit) && (j < all.length)); j++) {
          if($.inArray(all[j].title,seen_titles) == -1){
            seen_titles.push(all[j].title);
            items[index] = all[j];
            index = index + 1;
          }
        }
        renderNews(items.slice(0,limit));
        generate_pagination(num_per_page);
      }catch(e){
        setTimeout('patchAPICall('+limit+', '+num_per_page+', "'+state+'", "'+city+'")', 500);
      }
    }
  });
}


