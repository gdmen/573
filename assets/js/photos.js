$(document).ready(function() {
  localStorage.setItem('lsLocation', 'New York');
  localStorage.setItem('lsQuery', 'new york,times,square');
});

$(document).ready(function() {
  photos = getPhotos(20, 0);
});
function renderPhotos(photos){
  for(var i=0; i<photos.length; i++){
    var iPath = "http://farm"+  photos[i].farm +".static.flickr.com/" + photos[i].server +"/"+photos[i].id+"_"+photos[i].secret+"_z.jpg";
    //console.log(iPath);
    $('#content').append('<div><img src='+iPath+'></div>');
  }
}
function getPhotos(limit, offset) {
  var location = localStorage.getItem('lsLocation');
  var query = localStorage.getItem('lsQuery');

  if (query == '') {
    query = location;
  }

  query = query.replace(/ /g,"+");

  //$("#ansDiv").append("<p>function called: " + limit + ", " + offset + " - " + query + "</p>");
  var per_page = limit*2;
  var page = Math.floor(offset/per_page)+1;
  var index = 0;
  $.ajax({
    url : 'http://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=6b5056ae9f40f0dede2bddb0c5a0eba6&tags=' + query +'&safe_search=1&per_page=' + per_page +'&page='+page+'&format=json&jsoncallback=?',
    async : false,
    dataType: "json",
    success : function(data) {
      var results = [];
      // do stuff with response.
      var all = data.photos.photo;
      for (var j = 0; ((index < limit) && (j < all.length)); j++) {
        results[index] = all[j];
        index = index + 1;
      }
      renderPhotos(results);
      generate_pagination();
    }
  });
}