<?php include_once('includes/header.php'); ?>
<? generate_header("CIS573 SCORE Project"); ?>
    <div id="fb-root"></div>

    <div class="container">
      <div class="fb-login-button" data-show-faces="false" data-width="200" data-max-rows="1">Login w/ Facebook</div>
      <a href="" id="fb-logout" onclick="logout()">Log out</a>
      <ul class="thumbnails">
        <li class="span4">
          <a href="photos.php" class="thumbnail">
            <img src="http://placehold.it/200x200" alt="">
          </a>
        </li>
        <li class="span4">
          <a href="news.php" class="thumbnail">
            <img src="http://placehold.it/200x200" alt="">
          </a>
        </li>
        <li class="span4">
          <a href="sports.php" class="thumbnail">
            <img src="http://placehold.it/200x200" alt="">
          </a>
        </li>
        <li class="span4">
          <a href="shopping.php" class="thumbnail">
            <img src="http://placehold.it/200x200" alt="">
          </a>
        </li>
        <li class="span4">
          <a href="restaurants.php" class="thumbnail">
            <img src="http://placehold.it/200x200" alt="">
          </a>
        </li>
        <li class="span4">
          <a href="events.php" class="thumbnail">
            <img src="http://placehold.it/200x200" alt="">
          </a>
        </li>
      </ul>

    </div> <!-- /container -->

    <!-- Placed at the end of the document so the pages load faster -->
    <script src="assets/js/jquery.js"></script>
    <script src="assets/js/bootstrap.js"></script>
    <script src="assets/js/fb_login.js"></script>

  </body>
</html>
