<?php include_once('includes/header.php'); ?>
<? generate_header("CIS573 SCORE Project"); ?>
    <div id="fb-root"></div>

    <div class="container">
      <div class="fb-login-button" data-show-faces="false" data-width="200" data-max-rows="1">Login w/ Facebook</div>
      <a href="" id="fb-logout" onclick="logout()">Log out</a>
      <ul id="menu" class="thumbnails">
        
      </ul>

    </div> <!-- /container -->

    <!-- Placed at the end of the document so the pages load faster -->
    <script src="assets/js/jquery.js"></script>
    <script src="assets/js/bootstrap.js"></script>
    <script src="assets/js/fb_login.js"></script>

  </body>
</html>
