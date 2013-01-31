module("Restaurants",{
  setup: function(){
    $('#content').empty();
    $('.page_navigation').empty();
  },teardown: function(){
    $('#content').empty();
    $('.page_navigation').empty();
  }
});

RestaurantsJson1 =
[
  { 
    "display_phone" : "+1-215-564-1419",
    "image_url" : "http://s3-media3.ak.yelpcdn.com/bphoto/Dql4mKf0uG7vsdffMfbgrA/ms.jpg",
    "location" : { "address" : [ "1508 Sansom St" ],
        "display_address" : [ "1508 Sansom St",
            "Rittenhouse Square",
            "Philadelphia, PA 19102"
          ],
      },
    "name" : "Su Xing House",
    "rating_img_url_large" : "http://s3-media2.ak.yelpcdn.com/assets/2/www/img/ccf2b76faa2c/ico/stars/v1/stars_large_4.png",
    "snippet_text" : "Sesame tofu I had here recently was awesome!  I also tried one of their 'milkshakes'...they taste more like blended ice milk, but I think they are vegan?...",
    "url" : "http://www.yelp.com/biz/su-xing-house-philadelphia"
  }
]

RestaurantsJson2 =
[
  {
    "display_phone" : "+1-215-546-9300",
    "image_url" : "http://s3-media3.ak.yelpcdn.com/bphoto/_2UgNHzB15EcGf0mhyQqug/ms.jpg",
    "location" : {
        "display_address" : [ "110 S 13th St",
            "Market East",
            "Philadelphia, PA 19107"
          ]
      },
    "name" : "Barbuzzo",
    "rating_img_url_large" : "http://s3-media4.ak.yelpcdn.com/assets/2/www/img/9f83790ff7f6/ico/stars/v1/stars_large_4_half.png",
    "snippet_text" : "My friend and I decided to go to Barbuzzo last restaurant week. I hadn't heard much about it before hand, but have a love for Marcie Turney and Val Safran's...",
    "url" : "http://www.yelp.com/biz/barbuzzo-philadelphia"
  },
  {
    "display_phone" : "+1-215-928-8880",
    "image_url" : "http://s3-media1.ak.yelpcdn.com/bphoto/PA9W6avrQQ99BIxvk9SFgw/ms.jpg",
    "location" : {
        "display_address" : [ "1228 Chestnut St",
            "Market East",
            "Philadelphia, PA 19107"
          ]
      },
    "name" : "Spice 28",
    "rating_img_url_large" : "http://s3-media2.ak.yelpcdn.com/assets/2/www/img/ccf2b76faa2c/ico/stars/v1/stars_large_4.png",
    "snippet_text" : "One of my favoriate place to go when i was around philadelphia area . Full bar with cute bartenders resonable price for high quality food. Love the...",
    "url" : "http://www.yelp.com/biz/spice-28-philadelphia"
  },
  {
    "display_phone" : "+1-215-569-9525",
    "image_url" : "http://s3-media3.ak.yelpcdn.com/bphoto/4A6elzi0PBj0Kr0B_XuBwg/ms.jpg",
    "location" : {
        "display_address" : [ "1516 Sansom St",
            "2nd Floor",
            "Rittenhouse Square",
            "Philadelphia, PA 19102"
          ]
      },
    "name" : "Nodding Head Brewery & Restaurant",
    "rating_img_url_large" : "http://s3-media3.ak.yelpcdn.com/assets/2/www/img/bd9b7a815d1b/ico/stars/v1/stars_large_3_half.png",
    "snippet_text" : "I love beer, so it makes sense for me to be a fan of Nodding Head.  It's a great place to go any time of year.  Beers are solid, as is the food; the french...",
    "url" : "http://www.yelp.com/biz/nodding-head-brewery-and-restaurant-philadelphia"
  },
  {
    "image_url" : "http://s3-media1.ak.yelpcdn.com/bphoto/PhgZuGAloMQGEYlm7ALCqg/ms.jpg",
    "location" : {
        "display_address" : [ "S 16th St & John F Kennedy Blvd",
            "Penn Center",
            "Philadelphia, PA 19195"
          ]
      },
    "name" : "King of Falafel",
    "rating_img_url_large" : "http://s3-media2.ak.yelpcdn.com/assets/2/www/img/ccf2b76faa2c/ico/stars/v1/stars_large_4.png",
    "snippet_text" : "Tasty, fresh and cheap! Easily the best meatless lunch option in the city on a budget. I got a falafel sandwich with tabouli and a small lentil soup for...",
    "url" : "http://www.yelp.com/biz/king-of-falafel-philadelphia"
  },
  { 
    "display_phone" : "+1-215-546-7100",
    "image_url" : "http://s3-media1.ak.yelpcdn.com/bphoto/UqALsFmh3VKfa6sD1VM6dA/ms.jpg",
    "location" : { 
        "display_address" : [ "106 S 13th St",
            "Market East",
            "Philadelphia, PA 19107"
          ]
      },
    "name" : "Lolita",
    "rating_img_url_large" : "http://s3-media2.ak.yelpcdn.com/assets/2/www/img/ccf2b76faa2c/ico/stars/v1/stars_large_4.png",
    "snippet_text" : "As I've mentioned on other reviews, I only writer reviews when I feel compelled and after a few margaritas here I am COMPELLED. (After a nice little buzz.)...",
    "url" : "http://www.yelp.com/biz/lolita-philadelphia"
  }
]

/* formatRestaurants */
test( "formatRestaurants zero items", function() {
  equal(formatRestaurants([]), '');
});

/* formatRestaurants */
test( "formatRestaurants one item", function() {
  equal(formatRestaurants(RestaurantsJson1), '<div><div class="row"><div class="span5"><h3>Su Xing House</h3></div><div class="span3"><h3>+1-215-564-1419</h3></div></div><div class="row"><div class=span5><img src="http://s3-media2.ak.yelpcdn.com/assets/2/www/img/ccf2b76faa2c/ico/stars/v1/stars_large_4.png"/></div><div class="span3">1508 Sansom St, Rittenhouse Square, Philadelphia, PA 19102</div></div><div class="row"><div class="span5">Sesame tofu I had here recently was awesome!  I also tried one of their \'milkshakes\'...they taste more like blended ice milk, but I think they are vegan?...<a\ href="http://www.yelp.com/biz/su-xing-house-philadelphia">read more reviews</a></div><div class=span3><img width=100% src="http://s3-media3.ak.yelpcdn.com/bphoto/Dql4mKf0uG7vsdffMfbgrA/ms.jpg"/></div></div></div>');
});

/* formatRestaurants */
test( "formatRestaurants multiple items", function() {
  equal(formatRestaurants(RestaurantsJson2), '<div><div class="row"><div class="span5"><h3>Barbuzzo</h3></div><div class="span3"><h3>+1-215-546-9300</h3></div></div><div class="row"><div class=span5><img src="http://s3-media4.ak.yelpcdn.com/assets/2/www/img/9f83790ff7f6/ico/stars/v1/stars_large_4_half.png"/></div><div class="span3">110 S 13th St, Market East, Philadelphia, PA 19107</div></div><div class="row"><div class="span5">My friend and I decided to go to Barbuzzo last restaurant week. I hadn\'t heard much about it before hand, but have a love for Marcie Turney and Val Safran\'s...<a href="http://www.yelp.com/biz/barbuzzo-philadelphia">read more reviews</a></div><div class=span3><img width=100% src="http://s3-media3.ak.yelpcdn.com/bphoto/_2UgNHzB15EcGf0mhyQqug/ms.jpg"/></div></div></div><div><div class="row"><div class="span5"><h3>Spice 28</h3></div><div class="span3"><h3>+1-215-928-8880</h3></div></div><div class="row"><div class=span5><img src="http://s3-media2.ak.yelpcdn.com/assets/2/www/img/ccf2b76faa2c/ico/stars/v1/stars_large_4.png"/></div><div class="span3">1228 Chestnut St, Market East, Philadelphia, PA 19107</div></div><div class="row"><div class="span5">One of my favoriate place to go when i was around philadelphia area . Full bar with cute bartenders resonable price for high quality food. Love the...<a href="http://www.yelp.com/biz/spice-28-philadelphia">read more reviews</a></div><div class=span3><img width=100% src="http://s3-media1.ak.yelpcdn.com/bphoto/PA9W6avrQQ99BIxvk9SFgw/ms.jpg"/></div></div></div><div><div class="row"><div class="span5"><h3>Nodding Head Brewery & Restaurant</h3></div><div class="span3"><h3>+1-215-569-9525</h3></div></div><div class="row"><div class=span5><img src="http://s3-media3.ak.yelpcdn.com/assets/2/www/img/bd9b7a815d1b/ico/stars/v1/stars_large_3_half.png"/></div><div class="span3">1516 Sansom St, 2nd Floor, Rittenhouse Square</div></div><div class="row"><div class="span5">I love beer, so it makes sense for me to be a fan of Nodding Head.  It\'s a great place to go any time of year.  Beers are solid, as is the food; the french...<a href="http://www.yelp.com/biz/nodding-head-brewery-and-restaurant-philadelphia">read more reviews</a></div><div class=span3><img width=100% src="http://s3-media3.ak.yelpcdn.com/bphoto/4A6elzi0PBj0Kr0B_XuBwg/ms.jpg"/></div></div></div><div><div class="row"><div class="span5"><h3>King of Falafel</h3></div><div class="span3"><h3></h3></div></div><div class="row"><div class=span5><img src="http://s3-media2.ak.yelpcdn.com/assets/2/www/img/ccf2b76faa2c/ico/stars/v1/stars_large_4.png"/></div><div class="span3">S 16th St & John F Kennedy Blvd, Penn Center, Philadelphia, PA 19195</div></div><div class="row"><div class="span5">Tasty, fresh and cheap! Easily the best meatless lunch option in the city on a budget. I got a falafel sandwich with tabouli and a small lentil soup for...<a href="http://www.yelp.com/biz/king-of-falafel-philadelphia">read more reviews</a></div><div class=span3><img width=100% src="http://s3-media1.ak.yelpcdn.com/bphoto/PhgZuGAloMQGEYlm7ALCqg/ms.jpg"/></div></div></div><div><div class="row"><div class="span5"><h3>Lolita</h3></div><div class="span3"><h3>+1-215-546-7100</h3></div></div><div class="row"><div class=span5><img src="http://s3-media2.ak.yelpcdn.com/assets/2/www/img/ccf2b76faa2c/ico/stars/v1/stars_large_4.png"/></div><div class="span3">106 S 13th St, Market East, Philadelphia, PA 19107</div></div><div class="row"><div class="span5">As I\'ve mentioned on other reviews, I only writer reviews when I feel compelled and after a few margaritas here I am COMPELLED. (After a nice little buzz.)...<a href="http://www.yelp.com/biz/lolita-philadelphia">read more reviews</a></div><div class=span3><img width=100% src="http://s3-media1.ak.yelpcdn.com/bphoto/UqALsFmh3VKfa6sD1VM6dA/ms.jpg"/></div></div></div>');
});

/* displayRestaurants */
asyncTest("displayRestaurants negative items", function() {
  expect(1);
  displayRestaurants(-1,1);
  
  setTimeout(function() {
    ok($('#content').is(':empty'), '#content is empty');
    start();
  }, 1000);
});

/* displayRestaurants */
asyncTest("displayRestaurants zero items", function() {
  expect(1);
  displayRestaurants(0,1);
  
  setTimeout(function() {
    ok($('#content').is(':empty'), '#content is empty');
    start();
  }, 1000);
});

/* displayRestaurants */
asyncTest("displayRestaurants one item", function() {
  expect(24);
  displayRestaurants(1,1);
  
  setTimeout(function() {
    if($('#content').is(":empty")){
      ok(false, 'API call timed out. RETRY TEST.');
    }
    $('#content').children().each(function(){
      ok($(this).is('div'), 'div is present');
      
      ok($(this).children().first().is('div'), 'div > div is present');
      ok($(this).children().first().children().first().is('div'), 'div > div > div is present');
      ok($(this).children().first().children().first().children().first().is('h3'), 'div > div > div > h3 is present');
      ok($(this).children().first().children().last().is('div'), 'div > div > div is present');
      ok($(this).children().first().children().last().children().first().is('h3'), 'div > div > div > h3 is present');

      ok($(this).children(':nth-child(2)').is('div'), 'div > div is present');
      ok($(this).children(':nth-child(2)').children().first().is('div'), 'div > div > div is present');
      ok($(this).children(':nth-child(2)').children().first().children().first().is('img'), 'div > div > div > img is present');
      ok($(this).children(':nth-child(2)').children().last().is('div'), 'div > div > div is present');
      
      ok($(this).children().last().is('div'), 'div > div is present');
      ok($(this).children().last().children().first().is('div'), 'div > div > div is present');
      ok($(this).children().last().children().first().children().last().is('a'), 'div > div > div > a is present');
      ok($(this).children().last().children().last().is('div'), 'div > div > div is present');
      ok($(this).children().last().children().last().children().first().is('img'), 'div > div > div > img is present');
    });
    verifyPagination(1,1);
    start();
  }, 2000);
});

/* displayRestaurants */
asyncTest("displayRestaurants multiple items", function() {
  expect(92);
  displayRestaurants(5,1);
  
  setTimeout(function() {
    if($('#content').is(":empty")){
      ok(false, 'API call timed out. RETRY TEST.');
    }
    $('#content').children().each(function(){
      ok($(this).is('div'), 'div is present');
      
      ok($(this).children().first().is('div'), 'div > div is present');
      ok($(this).children().first().children().first().is('div'), 'div > div > div is present');
      ok($(this).children().first().children().first().children().first().is('h3'), 'div > div > div > h3 is present');
      ok($(this).children().first().children().last().is('div'), 'div > div > div is present');
      ok($(this).children().first().children().last().children().first().is('h3'), 'div > div > div > h3 is present');

      ok($(this).children(':nth-child(2)').is('div'), 'div > div is present');
      ok($(this).children(':nth-child(2)').children().first().is('div'), 'div > div > div is present');
      ok($(this).children(':nth-child(2)').children().first().children().first().is('img'), 'div > div > div > img is present');
      ok($(this).children(':nth-child(2)').children().last().is('div'), 'div > div > div is present');
      
      ok($(this).children().last().is('div'), 'div > div is present');
      ok($(this).children().last().children().first().is('div'), 'div > div > div is present');
      ok($(this).children().last().children().first().children().last().is('a'), 'div > div > div > a is present');
      ok($(this).children().last().children().last().is('div'), 'div > div > div is present');
      ok($(this).children().last().children().last().children().first().is('img'), 'div > div > div > img is present');
    });
    verifyPagination(5,1);
    start();
  }, 2000);
});

/* displayRestaurants */
asyncTest("displayRestaurants multiple pages", function() {
  expect(88);
  displayRestaurants(5,2);
  
  setTimeout(function() {
    if($('#content').is(":empty")){
      ok(false, 'API call timed out. RETRY TEST.');
    }
    $('#content').children().each(function(){
      ok($(this).is('div'), 'div is present');
      
      ok($(this).children().first().is('div'), 'div > div is present');
      ok($(this).children().first().children().first().is('div'), 'div > div > div is present');
      ok($(this).children().first().children().first().children().first().is('h3'), 'div > div > div > h3 is present');
      ok($(this).children().first().children().last().is('div'), 'div > div > div is present');
      ok($(this).children().first().children().last().children().first().is('h3'), 'div > div > div > h3 is present');

      ok($(this).children(':nth-child(2)').is('div'), 'div > div is present');
      ok($(this).children(':nth-child(2)').children().first().is('div'), 'div > div > div is present');
      ok($(this).children(':nth-child(2)').children().first().children().first().is('img'), 'div > div > div > img is present');
      ok($(this).children(':nth-child(2)').children().last().is('div'), 'div > div > div is present');
      
      ok($(this).children().last().is('div'), 'div > div is present');
      ok($(this).children().last().children().first().is('div'), 'div > div > div is present');
      ok($(this).children().last().children().first().children().last().is('a'), 'div > div > div > a is present');
      ok($(this).children().last().children().last().is('div'), 'div > div > div is present');
      ok($(this).children().last().children().last().children().first().is('img'), 'div > div > div > img is present');
    });
    verifyPagination(5,2);
    start();
  }, 2000);
});
