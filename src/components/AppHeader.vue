<template>

  <!-- #HEADER -->
  <header id="header">
    <div id="logo-group">

      <!-- PLACE YOUR LOGO HERE -->
      <span id="logo" class="h3"> 优+童装<!--<img src="static/img/logo.png" alt="SmartAdmin">--> </span>
      <!-- END LOGO PLACEHOLDER -->

      <!-- Note: The activity badge color changes when clicked and resets the number to 0
                   Suggestion: You may want to set a flag when this happens to tick off all checked messages / notifications -->

      <!-- AJAX-DROPDOWN : control this dropdown height, look and feel from the LESS variable file -->
      <!-- END AJAX-DROPDOWN -->
    </div>

    <!-- #PROJECTS: projects dropdown -->
    <!-- end projects dropdown -->

    <!-- #TOGGLE LAYOUT BUTTONS -->
    <!-- pulled right: nav area -->
    <div class="pull-right">

      <!-- collapse menu button -->
      <!-- end collapse menu -->

      <!-- #MOBILE -->
      <!-- Top menu profile link : this shows only when top menu is active -->

      <!-- logout button -->
      <div id="logout" class="btn-header transparent pull-right">
        <span> <a href="#" title="退出" ><i class="fa fa-sign-out"></i></a> </span>
      </div>
      <!-- end logout button -->

      <!-- search mobile button (this is hidden till mobile view port) -->
      <!-- end search mobile button -->

      <!-- #SEARCH -->
      <!-- input: search field
      <form action="#ajax/search.html" class="header-search pull-right">
        <input id="search-fld" type="text" name="param" placeholder="Find reports and more">
        <button type="submit">
          <i class="fa fa-search"></i>
        </button>
        <a href="javascript:void(0);" id="cancel-search-js" title="Cancel Search"><i class="fa fa-times"></i></a>
      </form> -->
      <!-- end input: search field -->

      <!-- fullscreen button -->
      <!-- end fullscreen button -->

      <!-- multiple lang dropdown : find all flags in the flags page -->
      <!-- end multiple lang -->

    </div>
    <!-- end pulled right: nav area -->
  </header>
  <!-- END HEADER -->
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>

</style>
