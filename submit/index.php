<?php include_once('includes/generators.php'); ?>
<? generate_header(); ?>
    <div id="fb-root"></div>

    <div class="container">
      <div id="loading"><img src="assets/img/ajax-loader.gif"/></div>
      <ul id="menu" class="thumbnails" style="display:none">
        <li>
          <a href="photos.php?tags=" class="menu_button"><img src="assets/img/photos.png" style="min-width: 200px;min-height: 200px;width: 200px;height: 200px;" alt=""></a>
        </li>
        <li>
          <a href="news.php?tags=" class="menu_button"><img src="assets/img/news.png" style="min-width: 200px;min-height: 200px;width: 200px;height: 200px;" alt=""></a>
        </li>
        <li>
          <a href="sports.php?tags=" class="menu_button"><img src="assets/img/sports.png" style="min-width: 200px;min-height: 200px;width: 200px;height: 200px;" alt=""></a>
        </li>
        <li>
          <a href="restaurants.php?tags=" class="menu_button"><img src="assets/img/restaurants.png" style="min-width: 200px;min-height: 200px;width: 200px;height: 200px;" alt=""></a>
        </li>
        <!--
        <li>
          <a href="activities.php?tags=" class="menu_button"><img src="http://placehold.it/200x200" alt=""></a>
        </li>
        -->
      </ul>

    </div> <!-- /container -->

    <!-- Placed at the end of the document so the pages load faster -->
    <script src="assets/js/jquery.js"></script>
    <script src="assets/js/bootstrap.js"></script>
    <script type="text/javascript" src="assets/js/nlp-api-0.1.js"></script>
    <script src="assets/js/fb_login.js"></script>

  </body>
</html>
