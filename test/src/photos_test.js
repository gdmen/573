module("Photos",{
  setup: function(){
    $('#content').empty();
  },teardown: function(){
    $('#content').empty();
  }
});

photosJson1 =
[
  {"id":"8429445084","secret":"fb94df501a","server":"8071","farm":9}
]

photosJson2 =
[
  {"id":"8429445084","secret":"fb94df501a","server":"8071","farm":9},
  {"id":"8429451670","secret":"1c37170b21","server":"8469","farm":9},
  {"id":"8429425810","secret":"8e0e6c8614","server":"8493","farm":9},
  {"id":"8428352987","secret":"d5d4873e7b","server":"8186","farm":9},
  {"id":"8428342353","secret":"fdb7205777","server":"8188","farm":9}
]

/* formatPhotos */
test( "formatPhotos zero items", function() {
  equal(formatPhotos([]), '');
});

/* formatPhotos */
test( "formatPhotos one item", function() {
  equal(formatPhotos(photosJson1), '<img class="center" src=http://farm9.static.flickr.com/8071/8429445084_fb94df501a_z.jpg>');
});

/* formatPhotos */
test( "formatPhotos multiple items", function() {
  equal(formatPhotos(photosJson2), '<img class="center" src=http://farm9.static.flickr.com/8071/8429445084_fb94df501a_z.jpg><img class="center" src=http://farm9.static.flickr.com/8469/8429451670_1c37170b21_z.jpg><img class="center" src=http://farm9.static.flickr.com/8493/8429425810_8e0e6c8614_z.jpg><img class="center" src=http://farm9.static.flickr.com/8186/8428352987_d5d4873e7b_z.jpg><img class="center" src=http://farm9.static.flickr.com/8188/8428342353_fdb7205777_z.jpg>');
});

/* displayPhotos */
asyncTest("displayPhotos negative items", function() {
  expect(1);
  displayPhotos(-1,1);
  
  setTimeout(function() {
    ok($('#content').is(':empty'), '#content is empty');
    start();
  }, 2000);
});

/* displayPhotos */
asyncTest("displayPhotos zero items", function() {
  expect(1);
  displayPhotos(0,1);
  
  setTimeout(function() {
    ok($('#content').is(':empty'), '#content is empty');
    start();
  }, 2000);
});

/* displayPhotos */
asyncTest("displayPhotos one item", function() {
  expect(1);
  displayPhotos(1,1);
  
  setTimeout(function() {
    $('#content').children().each(function(){
      ok($(this).is('img'), 'img is present');
    });
    start();
  }, 2000);
});

/* displayPhotos */
asyncTest("displayPhotos multiple items", function() {
  expect(5);
  displayPhotos(5,1);
  
  setTimeout(function() {
    $('#content').children().each(function(){
      ok($(this).is('img'), 'img is present');
    });
    start();
  }, 2000);
});

