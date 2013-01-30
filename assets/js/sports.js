/* Takes a number of items to get and a number per paginated page
   Results in the items inserted into the current page
*/
function displaySports(limit, num_per_page) {
  if(limit <= 0 || num_per_page <= 0){
    return;
  }
  var index = 0;
  $.ajax({
    url : 'http://api.espn.com/v1/sports/news/headlines/?insider=yes&_accept=application%2Fjson&apikey=sc3c4ecexs9w2n3n3vd4cvqm',
    dataType: "jsonp",
    success : function(data) {
      var items = [];
      // do stuff with response.
      console.log(data);
      var all = data.headlines;
      for (var j = 0; ((index < limit) && (j < all.length)); j++) {
        items[index] = all[j];
        index = index + 1;
      }
      renderSports(items);
      generate_pagination(num_per_page);
    }
  });
}

/* Takes an array of json objects:
    Array = {<item object>}
   and inserts the given items into the current page's #content div.
*/
function renderSports(items){
  $('#content').empty();
  $('#content').append(formatSports(items));
}
/* Takes an array of json objects:
    Array = {<item object>}
   and returns an html formatted string.
*/
function formatSports(items){
  retString = '';
  for(var i=0; i<items.length; i++){
    if(items[i].type != 'Recap' && items[i].title != undefined){
      retString += '<div><h3>'+(items[i].title != undefined ? '<a href="'+items[i].links.web.href+'">'+items[i].title+'</a>' : '')+'</h3><p>'+items[i].description+'</p></div>';
    }
  }
  return retString;
}

