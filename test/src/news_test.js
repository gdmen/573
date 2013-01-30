module("News",{
  setup: function(){
    $('#content').empty();
  },teardown: function(){
    $('#content').empty();
  }
});

NewsJson1 =
[
  {
    "story_url": "http://pubapi.outside.in/r?url=http://blogs.mcall.com/capitol_ideas/2013/01/thursday-morning-coffee-the-five-things-you-need-to-know-this-morning-2.html&publication_id=0&placement=list&region_name=Philadelphia_PA",
    "title": "Thursday Morning Coffee: The five things you need to know this morning.",
    "summary": "Good Thursday Morning, Fellow Seekers. Thanks to some technical gremlins, we're running seriously late this morning and have to hit the road for The Mothership. So we'll dispense with the usual formalities and just dive right into the countdown of..."
  }
]

NewsJson2 =
[
  {
    "story_url": "http://pubapi.outside.in/r?url=http://www.examiner.com/article/kelly-joins-eagles-under-questionable-circumstances&publication_id=0&placement=list&region_name=Philadelphia_PA",
    "title": "Kelly joins Eagles under questionable circumstances",
    "summary": "The Philadelphia Eagles looked like a safe, understandable destination for Chip Kelly over a week ago. If he joined the Eagles then, it wouldn’t have raised that many eyebrows and would have been a big boost to his..."
   
  },
  {
    "story_url": "http://pubapi.outside.in/r?url=http://feedproxy.google.com/~r/TechnicallyPhilly/~3/FW3E6-Tswdw/comcast-to-acquire-150m-stake-in-product-manufacturer-arris-comcast-roundup&publication_id=0&placement=list&region_name=Philadelphia_PA",
    "title": "Comcast to acquire $150M stake in product manufacturer Arris [Comcast Roundup]",
    "summary": "  Every Thursday morning at 8:30 a.m. EST, find all the stories you need to know about your friendly telecommunications giant in the Comcast Roundup. Get an email subscription for our weekly Comcast roundup or other news updates. Comcast to Acquire $150 Million Stake in Manufacturer Arris [BusinessW"
    
  },
  {
    "story_url": "http://pubapi.outside.in/r?url=http://www.examiner.com/article/kelly-s-latest-change-of-heart-favors-eagles&publication_id=0&placement=list&region_name=Philadelphia_PA",
    "title": "Kelly's latest change of heart favors Eagles",
    "summary": "The Philadelphia Eagles were on the wrong side of Chip Kelly’s now legendary indecisions on Jan. 6, when he reportedly decided to stay with the Oregon Ducks. Just as Kelly turned away from the Tampa Bay Buccaneers when..."
  },
  {
    "story_url": "http://pubapi.outside.in/r?url=http://www.trentonian.com/article/20130117/NEWS01/130119667/trentonian-police-blotter&publication_id=0&placement=list&region_name=Philadelphia_PA",
    "title": "Trentonian Police Blotter",
    "summary": "The following information was provided by police, unless otherwise noted. BENSALEM Pa.Theft: On Tuesday, 3:10 p.m. at the Cornwell Heights Park and Ride, an off duty Philadelphia police officer spotted Kevin Tiller, 34, of Philadelphia, allegedly attempting to remove a catalytic converter from a par"
  },
  {
    "story_url": "http://pubapi.outside.in/r?url=http://blog.billlawrenceonline.com/2013/01/16/link-of-the-day----the-philadelphia-story.aspx?ref%3Drss&publication_id=0&placement=list&region_name=Philadelphia_PA",
    "title": "Link Of The Day -- The Philadelphia Story",
    "summary": "Copyright BillLawrenceOnline.Com"
  }
]

/* formatNews */
test( "formatNews zero items", function() {
  equal(formatNews([]), '');
});

/* formatNews */
test( "formatNews one item", function() {
  equal(formatNews(NewsJson1), '<div class="center"><h3><a href="http://pubapi.outside.in/r?url=http://blogs.mcall.com/capitol_ideas/2013/01/thursday-morning-coffee-the-five-things-you-need-to-know-this-morning-2.html&publication_id=0&placement=list&region_name=Philadelphia_PA">Thursday Morning Coffee: The five things you need to know this morning.</a></h3><p>Good Thursday Morning, Fellow Seekers. Thanks to some technical gremlins, we\'re running seriously late this morning and have to hit the road for The Mothership. So we\'ll dispense with the usual formalities and just dive right into the countdown of...</p></div>');
});

/* formatNews */
test( "formatNews multiple items", function() {
  equal(formatNews(NewsJson2), '<div class="center"><h3><a href="http://pubapi.outside.in/r?url=http://www.examiner.com/article/kelly-joins-eagles-under-questionable-circumstances&publication_id=0&placement=list&region_name=Philadelphia_PA">Kelly joins Eagles under questionable circumstances</a></h3><p>The Philadelphia Eagles looked like a safe, understandable destination for Chip Kelly over a week ago. If he joined the Eagles then, it wouldn’t have raised that many eyebrows and would have been a big boost to his...</p></div><div class="center"><h3><a href="http://pubapi.outside.in/r?url=http://feedproxy.google.com/~r/TechnicallyPhilly/~3/FW3E6-Tswdw/comcast-to-acquire-150m-stake-in-product-manufacturer-arris-comcast-roundup&publication_id=0&placement=list&region_name=Philadelphia_PA">Comcast to acquire $150M stake in product manufacturer Arris [Comcast Roundup]</a></h3><p>  Every Thursday morning at 8:30 a.m. EST, find all the stories you need to know about your friendly telecommunications giant in the Comcast Roundup. Get an email subscription for our weekly Comcast roundup or other news updates. Comcast to Acquire $150 Million Stake in Manufacturer Arris [BusinessW</p></div><div class="center"><h3><a href="http://pubapi.outside.in/r?url=http://www.examiner.com/article/kelly-s-latest-change-of-heart-favors-eagles&publication_id=0&placement=list&region_name=Philadelphia_PA">Kelly\'s latest change of heart favors Eagles</a></h3><p>The Philadelphia Eagles were on the wrong side of Chip Kelly’s now legendary indecisions on Jan. 6, when he reportedly decided to stay with the Oregon Ducks. Just as Kelly turned away from the Tampa Bay Buccaneers when...</p></div><div class="center"><h3><a href="http://pubapi.outside.in/r?url=http://www.trentonian.com/article/20130117/NEWS01/130119667/trentonian-police-blotter&publication_id=0&placement=list&region_name=Philadelphia_PA">Trentonian Police Blotter</a></h3><p>The following information was provided by police, unless otherwise noted. BENSALEM Pa.Theft: On Tuesday, 3:10 p.m. at the Cornwell Heights Park and Ride, an off duty Philadelphia police officer spotted Kevin Tiller, 34, of Philadelphia, allegedly attempting to remove a catalytic converter from a par</p></div><div class="center"><h3><a href="http://pubapi.outside.in/r?url=http://blog.billlawrenceonline.com/2013/01/16/link-of-the-day----the-philadelphia-story.aspx?ref%3Drss&publication_id=0&placement=list&region_name=Philadelphia_PA">Link Of The Day -- The Philadelphia Story</a></h3><p>Copyright BillLawrenceOnline.Com</p></div>');
});

/* displayNews */
asyncTest("displayNews negative items", function() {
  expect(1);
  displayNews(-1,1);
  
  setTimeout(function() {
    ok($('#content').is(':empty'), '#content is empty');
    start();
  }, 2000);
});

/* displayNews */
asyncTest("displayNews zero items", function() {
  expect(1);
  displayNews(0,1);
  
  setTimeout(function() {
    ok($('#content').is(':empty'), '#content is empty');
    start();
  }, 2000);
});

/* displayNews */
asyncTest("displayNews one item", function() {
  expect(4);
  displayNews(1,1);
  
  setTimeout(function() {
    $('#content').children().each(function(){
      ok($(this).is('div'), 'div is present');
      ok($(this).children().first().is('h3'), 'div > h3 is present');
      ok($(this).children().first().children().first().is('a'), 'div > h3 > a is present');
      ok($(this).children().last().is('p'), 'div > p is present');
    });
    start();
  }, 4000);
});

/* displayNews */
asyncTest("displayNews multiple items", function() {
  expect(20);
  displayNews(5,1);
  
  setTimeout(function() {
    $('#content').children().each(function(){
      ok($(this).is('div'), 'div is present');
      ok($(this).children().first().is('h3'), 'div > h3 is present');
      ok($(this).children().first().children().first().is('a'), 'div > h3 > a is present');
      ok($(this).children().last().is('p'), 'div > p is present');
    });
    start();
  }, 4000);
});
