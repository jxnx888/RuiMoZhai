<template>
  <div id="navPC">
    <!--Nav starts here -->
    <!--https://bootsnipp.com/snippets/featured/toggle-navbar-->
    <nav class="navbar-default  navbar-fixed-top" role="navigation">
      <!-- Brand and toggle get grouped for better mobile display -->
      <div class="container">
        <div class=" navbar-header">
          <button type="button" class="navbar-toggle " data-toggle="collapse" data-target=".navbar-collapse">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a href="Default.aspx" class="navbar-brand">
            <img class="Logo" src="http://www.ning-xin.com/Images/Logo.gif" width="50" height="40"/></a>

        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="navbar-collapse-1">
          <ul class="nav navbar-right">
            <li><a href=""><span class="iconfont">&#xe601;</span>&nbsp;Home</a></li>
            <li><a href=""><span class="iconfont">&#xe608;</span>&nbsp;Skills</a></li>
            <li><a href=""><span class="iconfont">&#xe62e;</span>&nbsp;Projects</a></li>
            <li><a href=""><span class="iconfont">&#xe611;</span>&nbsp;Blog</a></li>
            <li><a href=""><span class="iconfont">&#xe76d;</span>&nbsp;Contact</a></li>
          </ul>
        </div><!-- /.navbar-collapse -->

      </div><!-- /.Container -->
    </nav><!-- /.navbar -->
  </div>
</template>

<script>
  export default {
    name: "homeNavigationBar",
    data() {
      return {};
    }
  }
</script>

<style scoped>
  .navbar-default {
    height: 40px;
  }

  .nav {
    margin-top: 2px;
  }

  .nav > li {
    width: 8rem;
  }

  .nav > li > a {
    font-size:2rem;
    color: #777;
    padding: 10px 5px;
  }

  .nav > li:hover {
    background-color: #e7e7e7 !important;
    border-bottom: 2px solid #c3d5e9;
  }

  .navbar-toggle {
    padding: 5px 10px;
  }

  .navBar {
    position: fixed;
    top: 0;
    width: 100%;
    margin: 0 auto
  }

  .logo {
    float: left;
    height: auto;
    max-width: 25%;
    width: 280px;
  }

  .navBar-ul {
    display: -ms-flexbox;
    display: -webkit-box;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
    text-decoration: none;
    line-height: 3.5rem;
    font-size: 1.2rem;
  }

  .navBar ul {
    float: right;
  }

  .navBar ul li {
    float: left;
    position: relative;
    display: block;
    width: 6.5rem;
  }

  .navBar li a {
    color: #777;
    text-decoration: none;
  }

  .navBar li:hover {
    line-height: 3.5rem;
    height: 3.5rem;
    border-bottom: 1px solid #c3d5e9;

  }

  @media only screen and (max-width: 414px) {
    .navbar-toggle {
      display: none !important;
    }

  }
</style>
