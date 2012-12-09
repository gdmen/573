<?php include_once('includes/header.php'); ?>
<? generate_header("Sports"); ?>
    <div class="container"><!-- the input fields that will hold the variables we will use -->
      <input type='hidden' id='current_page' />
      <input type='hidden' id='show_per_page' />
      
      <!-- Content div. The child elements will be used for paginating. '-->
      <div id='content'>
      </div>
 
      <!-- An empty div which will be populated using jQuery -->
      <div class="pagination page_navigation"></div>
      
    </div> <!-- /container -->

    <!-- Placed at the end of the document so the pages load faster -->
    <script src="assets/js/jquery.js"></script>
    <script src="assets/js/bootstrap.js"></script>
    <script src="assets/js/category.js"></script>
    <script type="text/javascript" src="http://maps.googleapis.com/maps/api/js?sensor=false"></script>
    <script src="assets/js/sports.js"></script>

  </body>
</html>
