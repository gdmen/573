/* source: http://stackoverflow.com/questions/10664123/jquery-bootstrap-pagination */

/* Given:
       <div id='content'>{child elements}</div>
       <div class="page_navigation"></div> 
   and <input type='hidden' id='current_page' />
       <input type='hidden' id='show_per_page' />
   and 'show_per_page',
   Generates:
    A paginated view of the <N> child elements of '#content' with 'show_per_page'
    elements per page.
*/
function generate_pagination(show_per_page) {
  var number_of_items = $('#content').children().size();
  //calculate the number of pages we are going to have
  var number_of_pages = Math.ceil(number_of_items/show_per_page);
  
  //set the value of our hidden input fields
  $('#current_page').val(0);
  $('#show_per_page').val(show_per_page);
  
  /* 
  what are we going to have in the navigation?
      - link to previous page
      - links to specific pages
      - link to next page
  */
  var navigation_html = '<li class="previous_link"><a href="javascript:previous_page();">Prev</a></li>';
  var current_link = 0;
  while(number_of_pages > current_link){
    navigation_html += '<li class="page_link" longdesc="' + current_link +'"><a href="javascript:go_to_page(' + current_link +')">'+ (current_link + 1) +'</a></li>';
    current_link++;
  }
  navigation_html += '<li class="next_link"><a href="javascript:next_page();">Next</a></li>';
  
  $('.page_navigation').html('<ul>' + navigation_html + '</ul>');
  
  //add active class to the first page link
  $('.page_navigation .page_link:first').addClass('active');
  
  //hide all the elements inside content div
  $('#content').children().css('display', 'none');
  
  //and show the first n (show_per_page) elements
  $('#content').children().slice(0, show_per_page).css('display', 'block');
    
}
 
function previous_page() {
  new_page = parseInt($('#current_page').val()) - 1;
  //if there is an item before the current active link run the function
  if($('.active').prev('.page_link').length==true){
    go_to_page(new_page);
  }
}

function next_page() {
  new_page = parseInt($('#current_page').val()) + 1;
  //if there is an item after the current active link run the function
  if($('.active').next('.page_link').length==true){
    go_to_page(new_page);
  }
}

function go_to_page(page_num) {
  //get the number of items shown per page
  var show_per_page = parseInt($('#show_per_page').val());
  
  //get the element number where to start the slice from
  start_from = page_num * show_per_page;
  
  //get the element number where to end the slice
  end_on = start_from + show_per_page;
  
  //hide all children elements of content div, get specific items and show them
  $('#content').children().css('display', 'none').slice(start_from, end_on).css('display', 'block');
  
  /*get the page link that has longdesc attribute of the current page and add active class to it
  and remove that class from previously active page link*/
  $('.page_link[longdesc=' + page_num +']').addClass('active').siblings('.active').removeClass('active');
  
  //update the current page input field
  $('#current_page').val(page_num);
}

/* source: http://stackoverflow.com/questions/1403888/get-url-parameter-with-jquery */
function getURLParameter(name) {
  return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20'))||'.';
}
