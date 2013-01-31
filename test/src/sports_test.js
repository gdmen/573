module("Sports",{
  setup: function(){
    $('#content').empty();
    $('.page_navigation').empty();
  },teardown: function(){
    $('#content').empty();
    $('.page_navigation').empty();
  }
});

SportsJson1 =
[
  {
    "headline": "Report: Miami PED lists revealed",
    "links": {
      "web": {
        "href": "http://espn.go.com/espn/otl/story/_/id/8893139/report-alex-rodriguez-others-miami-clinic-ped-lists?ex_cid=espnapi_public"
      }
    },
    "type": "HeadlineNews",
    "title": "Report -- Alex Rodriguez, others on Miami clinic PED lists",
    "description": "Records from an anti-aging clinic in Miami list the names of baseball players -- including Alex Rodriguez, Melky Cabrera and Gio Gonzalez -- and detail PEDs administered to them and others, according to a report by Miami New Times."
  }
]

SportsJson2 =
[
  {
    "headline": "Report: Miami PED lists revealed",
    "links": {
      "web": {
        "href": "http://espn.go.com/espn/otl/story/_/id/8893139/report-alex-rodriguez-others-miami-clinic-ped-lists?ex_cid=espnapi_public"
      }
    },
    "type": "HeadlineNews",
    "title": "Report -- Alex Rodriguez, others on Miami clinic PED lists",
    "description": "Records from an anti-aging clinic in Miami list the names of baseball players -- including Alex Rodriguez, Melky Cabrera and Gio Gonzalez -- and detail PEDs administered to them and others, according to a report by Miami New Times."
  },
  {
    "headline": "Yankees eye voiding A-Rod's contract",
    "links": {
      "web": {
        "href": "http://espn.go.com/new-york/mlb/story/_/id/8894904/new-york-yankees-attempting-void-alex-rodriguez-contract-according-sources?ex_cid=espnapi_public"
      }
    },
    "type": "HeadlineNews",
    "title": "New York Yankees attempting to void Alex Rodriguez's contract, according to sources",
    "description": "If Major League Baseball disciplines Alex Rodriguez over the latest illegal performance-enhancing drug allegations, the New York Yankees plan on exploring multiple avenues in an attempt to void the star third baseman's contract.",
    }
]

/* formatSports */
test( "formatSports zero items", function() {
  equal(formatSports([]), '', "html is correct");
});

/* formatSports */
test( "formatSports one item", function() {
  equal(formatSports(SportsJson1), '<div><h3><a href="http://espn.go.com/espn/otl/story/_/id/8893139/report-alex-rodriguez-others-miami-clinic-ped-lists?ex_cid=espnapi_public">Report -- Alex Rodriguez, others on Miami clinic PED lists</a></h3><p>Records from an anti-aging clinic in Miami list the names of baseball players -- including Alex Rodriguez, Melky Cabrera and Gio Gonzalez -- and detail PEDs administered to them and others, according to a report by Miami New Times.</p></div>', "html is correct");
});

/* formatSports */
test( "formatSports multiple items", function() {
  equal(formatSports(SportsJson2), '<div><h3><a href="http://espn.go.com/espn/otl/story/_/id/8893139/report-alex-rodriguez-others-miami-clinic-ped-lists?ex_cid=espnapi_public">Report -- Alex Rodriguez, others on Miami clinic PED lists</a></h3><p>Records from an anti-aging clinic in Miami list the names of baseball players -- including Alex Rodriguez, Melky Cabrera and Gio Gonzalez -- and detail PEDs administered to them and others, according to a report by Miami New Times.</p></div><div><h3><a href="http://espn.go.com/new-york/mlb/story/_/id/8894904/new-york-yankees-attempting-void-alex-rodriguez-contract-according-sources?ex_cid=espnapi_public">New York Yankees attempting to void Alex Rodriguez\'s contract, according to sources</a></h3><p>If Major League Baseball disciplines Alex Rodriguez over the latest illegal performance-enhancing drug allegations, the New York Yankees plan on exploring multiple avenues in an attempt to void the star third baseman\'s contract.</p></div>', "html is correct");
});

/* displaySports */
asyncTest("displaySports negative items", function() {
  expect(2);
  displaySports(-1,1);
  
  setTimeout(function() {
    ok($('#content').is(':empty'), '#content is empty');
    ok($('.page_navigation').is(':empty'), '.page_navigation is empty');
    start();
  }, 2000);
});

/* displaySports */
asyncTest("displaySports zero items", function() {
  expect(2);
  displaySports(0,1);
  
  setTimeout(function() {
    ok($('#content').is(':empty'), '#content is empty');
    ok($('.page_navigation').is(':empty'), '.page_navigation is empty');
    start();
  }, 2000);
});

/* displaySports */
asyncTest("displaySports one item", function() {
  expect(13);
  displaySports(1,1);
  
  setTimeout(function() {
    if($('#content').is(":empty")){
      ok(false, 'API call timed out. RETRY TEST.');
    }
    // number of assertions = 4*limit
    $('#content').children().each(function(){
      ok($(this).is('div'), 'div is present');
      ok($(this).children().first().is('h3'), 'div > h3 is present');
      ok($(this).children().first().children().first().is('a'), 'div > h3 > a is present');
      ok($(this).children().last().is('p'), 'div > p is present');
    });
    verifyPagination(1,1);
    start();
  }, 2000);
});

/* displaySports */
asyncTest("displaySports multiple items", function() {
  expect(37);
  displaySports(5,1);
  
  setTimeout(function() {
    if($('#content').is(":empty")){
      ok(false, 'API call timed out. RETRY TEST.');
    }
    // number of assertions = 4*limit
    $('#content').children().each(function(){
      ok($(this).is('div'), 'div is present');
      ok($(this).children().first().is('h3'), 'div > h3 is present');
      ok($(this).children().first().children().first().is('a'), 'div > h3 > a is present');
      ok($(this).children().last().is('p'), 'div > p is present');
    });
    verifyPagination(5,1);
    start();
  }, 2000);
});

/* displaySports */
asyncTest("displaySports multiple pages", function() {
  expect(33);
  displaySports(5,2);
  
  setTimeout(function() {
    if($('#content').is(":empty")){
      ok(false, 'API call timed out. RETRY TEST.');
    }
    // number of assertions = 4*limit
    $('#content').children().each(function(){
      ok($(this).is('div'), 'div is present');
      ok($(this).children().first().is('h3'), 'div > h3 is present');
      ok($(this).children().first().children().first().is('a'), 'div > h3 > a is present');
      ok($(this).children().last().is('p'), 'div > p is present');
    });
    verifyPagination(5,2);
    start();
  }, 2000);
});

/* pagination testing */
// number of assertions = 3 + 2*(limit+2)/num_per_page
function verifyPagination(limit, num_per_page){
  equal($('#content').children().length, limit, limit+' elements rendered');
  ok($('#content').children(':visible').length <= num_per_page, num_per_page+' elements per page');
  ok($('.page_navigation').children().first().is('ul'), 'nav > ul is present');
  $('.page_navigation').children().first().children().each(function(){
      ok($(this).is('li'), 'nav > ul > li is present');
      ok($(this).children().first().is('a'), 'nav > ul > li > a is present');
  });
}
