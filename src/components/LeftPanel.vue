<template>
  <!-- #NAVIGATION -->
  <!-- Left panel : Navigation area -->
  <!-- Note: This width of the aside area can be adjusted through LESS/SASS variables -->
  <aside id="left-panel">

    <!-- User info -->
    <div class="login-info">
      <span> <!-- User image size is adjusted inside CSS, it should stay as is -->
        <a href="javascript:void(0);" id="show-shortcut" data-action="toggleShortcut">
          <img src="static/img/avatars/sunny.png" alt="me" class="online" />
          <span>
            优+Kids
          </span><!--
          <i class="fa fa-angle-down"></i>-->
        </a>
      </span>
    </div>
    <!-- end user info -->
    <nav>
      <ul>
        <li>
          <router-link :to="{name: 'checkout-counter'}"><i class="fa fa-lg fa-fw fa-cny"></i> <span class="menu-item-parent">收银台</span></router-link>
        </li>
        <li>
          <router-link :to="{name: 'sku-list'}"><i class="fa fa-lg fa-fw fa-archive"></i> <span class="menu-item-parent">商品列表</span></router-link>
        </li>
        <li>
          <router-link :to="{name: 'sku-import'}"><i class="fa fa-lg fa-fw fa-upload"></i> <span class="menu-item-parent">批量导入</span></router-link>
        </li>
      </ul>
    </nav>

    <span class="minifyme" data-action="minifyMenu"> <i class="fa fa-arrow-circle-left hit"></i> </span>

  </aside>
  <!-- END NAVIGATION -->
</template>

<script>
export default {
  name: 'LeftPanel'
}
</script>

<style scoped>

</style>
