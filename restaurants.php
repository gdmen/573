<?php include_once('includes/generators.php'); ?>
<? generate_header(); ?>
<? generate_container("Restaurants"); ?>

    <!-- Placed at the end of the document so the pages load faster -->
    <script src="assets/js/jquery.js"></script>
    <script src="assets/js/bootstrap.js"></script>
    <script src="assets/js/category.js"></script>
    <script src="http://oauth.googlecode.com/svn/code/javascript/oauth.js"></script>
    <script src="http://oauth.googlecode.com/svn/code/javascript/sha1.js"></script>
    <script src="http://maps.googleapis.com/maps/api/js?sensor=false"></script>
    <script src="assets/js/restaurants.js"></script>
    <script type="text/javascript">
    $(document).ready(function() {
      displayRestaurants(20, 1);
    });
    </script>

  </body>
</html>
