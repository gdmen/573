<?php include_once('includes/generators.php'); ?>
<? generate_header(); ?>
<? generate_container("News"); ?>

    <!-- Placed at the end of the document so the pages load faster -->
    <script src="assets/js/jquery.js"></script>
    <script src="assets/js/bootstrap.js"></script>
    <script src="assets/js/category.js"></script>
    <script src="http://maps.googleapis.com/maps/api/js?sensor=false"></script>
    <script src="assets/js/webtoolkit.md5.js"></script>
    <script src="assets/js/news.js"></script>
    <script type="text/javascript">
    $(document).ready(function() {
      displayNews(20, 1);
    });
    </script>

  </body>
</html>
