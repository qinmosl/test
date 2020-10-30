<template>
  <div>
    <tab-bar>
      <tab-baritem path="/cloth">
        <img slot="item-icon" src="~img/tabbar/cloth.svg" alt="" />
        <img
          slot="item-icon-active"
          src="~img/tabbar/cloth_p.svg"
          alt=""
        />
        <div slot="item-text">排面</div>
      </tab-baritem>
      <tab-baritem path="/book">
        <img slot="item-icon" src="~img/tabbar/book.svg" alt="" />
        <img
          slot="item-icon-active"
          src="~img/tabbar/book_p.svg"
          alt=""
        />
        <div slot="item-text">表白墙</div>
      </tab-baritem>
      <tab-baritem path="/game">
        <img slot="item-icon" src="~img/tabbar/game.png" alt="" />
        <img
          slot="item-icon-active"
          src="~img/tabbar/game_p.svg"
          alt=""
        />
        <div slot="item-text">游戏</div>
      </tab-baritem>
      <tab-baritem path="/man">
        <img slot="item-icon" src="~img/tabbar/man.png" alt="" />
        <img
          slot="item-icon-active"
          src="~img/tabbar/man_p.svg"
          alt=""
        />
        <div slot="item-text">我的</div>
      </tab-baritem>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from "components/tabbar/TabBar";
import TabBaritem from "components/tabbar/TabBaritem.vue";

export default {
  name: "MainTabBar",
  data() {
    return {};
  },
  methods: {},
  components: {
    TabBar,
    TabBaritem, //tab-bar-item
  },
};
</script>

<style scoped>
</style>