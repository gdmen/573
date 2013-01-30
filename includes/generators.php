<?php
function generate_header(){
?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>SCORE</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="author" content="">

    <link href="assets/css/bootstrap.css" rel="stylesheet">
    <style>
      body {
        padding-top: 60px; /* 60px to make the container go all the way to the bottom of the topbar */
      }
    </style>
    <link href="assets/css/bootstrap-responsive.css" rel="stylesheet">

    <!-- HTML5 shim, for IE6-8 support of HTML5 elements -->
    <!--[if lt IE 9]>
      <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->

    <!-- Fav and touch icons -->
    <link rel="shortcut icon" href="assets/ico/favicon.ico">
    <link rel="apple-touch-icon-precomposed" sizes="144x144" href="assets/ico/apple-touch-icon-144-precomposed.png">
    <link rel="apple-touch-icon-precomposed" sizes="114x114" href="assets/ico/apple-touch-icon-114-precomposed.png">
    <link rel="apple-touch-icon-precomposed" sizes="72x72" href="assets/ico/apple-touch-icon-72-precomposed.png">
    <link rel="apple-touch-icon-precomposed" href="assets/ico/apple-touch-icon-57-precomposed.png">
  </head>

  <body>
	<div class="navbar navbar-inverse navbar-fixed-top">
    <div class="navbar-inner">
      <div class="container">
        <a class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </a>
        <div class="brand_wrapper">
          <a class="brand" href="index.php">menu</a>
	      </div>
        <ul class="nav nav-tabs">
          <li><div class="fb-login-button" data-show-faces="false" data-width="200" data-max-rows="1" style="display:none">Login with Facebook</div></li>
          <li><a href="" id="fb-logout" onclick="logout()" style="display:none">Log out</a></li>
        </ul>
        </div><!--/.nav-collapse -->
      </div>
    </div>
  </div>
<?php } ?>

<?php
function generate_container($page_title){
?>
    <div class="container"><!-- the input fields that will hold the variables we will use -->
      <input type='hidden' id='current_page' />
      <input type='hidden' id='show_per_page' />
      <div class="row">
        <div class="span1 offset1">
          <h2><?php echo $page_title;?></h2>
        </div>
      </div>
      <div class="row">
        <div class="span10 offset1">
          <!-- An empty div which will be populated using jQuery -->
          <div class="pagination page_navigation"></div>
        </div>
      </div>
      <div class="row">
        <div class="span8 offset2">
          <!-- Content div. The child elements will be used for paginating. '-->
          <div id='content'><div id="loading"><img src="assets/img/ajax-loader.gif"/></div></div>
        </div>
      </div>
      
    </div> <!-- /container -->
<?php } ?>
