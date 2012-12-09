$(document).ready(function() {
  displayItems(20,2);
});

/* Takes a number of items to get and a number per paginated page
   Results in the items inserted into the current page
*/
function displayItems(limit, num_per_page) {
  query = getURLParameter('tags');
  query = query.replace(/ /g,",");
  
  var index = 0;
  console.log('http://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=6b5056ae9f40f0dede2bddb0c5a0eba6&tags=' + query +'&safe_search=1&per_page=' + limit*10 + '&format=json&jsoncallback=?');
  $.ajax({
    url : 'http://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=6b5056ae9f40f0dede2bddb0c5a0eba6&tags=' + query +'&safe_search=1&per_page=' + limit*10 + '&format=json&jsoncallback=?',
    dataType: "json",
    success : function(data) {
      var items = [];
      var seen_owners = new Array();
      // do stuff with response.
      var all = data.photos.photo;
      for (var j = 0; ((index < limit) && (j < all.length)); j++) {
        if($.inArray(all[j].owner,seen_owners) == -1){
          seen_owners.push(all[j].owner);
          items[index] = all[j];
          index = index + 1;
        }
      }
      renderItems(items.slice(0,limit));
      generate_pagination(num_per_page);
    }
  });
}

/* Takes an array of json objects:
    Array = {<item object>}
   and inserts the given items into the current page's #content div.
*/
function renderItems(items){
  for(var i=0; i<items.length; i++){
    var iPath = "http://farm"+  items[i].farm +".static.flickr.com/" + items[i].server +"/"+items[i].id+"_"+items[i].secret+"_z.jpg";
    //console.log(iPath);
    $('#content').append('<div><img src='+iPath+'></div>');
  }
}

