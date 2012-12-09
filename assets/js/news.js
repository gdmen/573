$(document).ready(function() {
  displayItems(20,2);
});

/* Takes a number of items to get and a number per paginated page
   Results in the items inserted into the current page
*/
function displayItems(limit, num_per_page) {
  query = getURLParameter('tags');
  //query = query.replace(/ /g,",");
  
  var index = 0;
  console.log('http://api.nytimes.com/svc/search/v1/article?format=json&query='+query+'&rank=closest&api-key=4f48f2d45d0561321169a2b5fa181b3a:13:67021735');
  $.ajax({
    url : 'http://api.nytimes.com/svc/search/v1/article',
    data : 'format=json&query='+query+'&rank=closest&api-key=4f48f2d45d0561321169a2b5fa181b3a:13:67021735',
    dataType : "jsonp",
    type : 'GET',
    jsonp : false,
    jsonpCallback : "jsonpCallback",
    success : function(data) {
      console.log("HERE");
      var items = [];
      // do stuff with response.
     // var all = data.results;
      console.log(data);
      /*for (var j = 0; ((index < limit) && (j < all.length)); j++) {
        items[index] = all[j];
        index = index + 1;
      }
      renderItems(items);
      generate_pagination(num_per_page);*/
    }
  });
}

function jsonpCallback(data){
  alert("jsonpCallback");
}

/* Takes an array of json objects:
    Array = {<item object>}
   and inserts the given items into the current page's #content div.
*/
function renderItems(items){
  for(var i=0; i<items.length; i++){
    console.log(items[i]);
    var iPath = "http://farm"+  items[i].farm +".static.flickr.com/" + items[i].server +"/"+items[i].id+"_"+items[i].secret+"_z.jpg";
    //console.log(iPath);
    $('#content').append('<div><img src='+iPath+'></div>');
  }
}

